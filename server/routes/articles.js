import { Router } from 'express';
import { getDB } from '../db.js';
import { z } from 'zod';

const router = Router();
const db = getDB();

// Validation schema for article content
const ContentSchema = z.array(z.object({
  type: z.enum(['text', 'image', 'heading']),
  content: z.string(),
  url: z.string().optional(),
  caption: z.string().optional(),
}));

const ArticleSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  category: z.string().min(1),
  author: z.string().min(1),
  content: ContentSchema,
  mainImage: z.string().url(),
  relatedArticleIds: z.array(z.number()).optional(),
});

// Get all articles
router.get('/', (req, res) => {
  const articles = db.prepare(`
    SELECT id, title, subtitle, category, author, main_image, created_at, updated_at
    FROM articles
    ORDER BY created_at DESC
  `).all();

  res.json(articles);
});

// Get single article
router.get('/:id', (req, res) => {
  const article = db.prepare(`
    SELECT *
    FROM articles
    WHERE id = ?
  `).get(req.params.id);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  // Get related articles
  const relatedArticles = db.prepare(`
    SELECT a.id, a.title, a.category, a.main_image
    FROM articles a
    JOIN related_articles ra ON a.id = ra.related_article_id
    WHERE ra.article_id = ?
  `).all(article.id);

  article.content = JSON.parse(article.content);
  article.relatedArticles = relatedArticles;

  res.json(article);
});

// Create article
router.post('/', (req, res) => {
  try {
    const articleData = ArticleSchema.parse(req.body);

    const result = db.prepare(`
      INSERT INTO articles (title, subtitle, category, author, content, main_image)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      articleData.title,
      articleData.subtitle || null,
      articleData.category,
      articleData.author,
      JSON.stringify(articleData.content),
      articleData.mainImage
    );

    // Add related articles if provided
    if (articleData.relatedArticleIds?.length) {
      const insertRelated = db.prepare(`
        INSERT INTO related_articles (article_id, related_article_id)
        VALUES (?, ?)
      `);

      articleData.relatedArticleIds.forEach(relatedId => {
        insertRelated.run(result.lastInsertRowid, relatedId);
      });
    }

    res.status(201).json({ id: result.lastInsertRowid });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update article
router.put('/:id', (req, res) => {
  try {
    const articleData = ArticleSchema.parse(req.body);

    const result = db.prepare(`
      UPDATE articles
      SET title = ?, subtitle = ?, category = ?, author = ?, content = ?, main_image = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      articleData.title,
      articleData.subtitle || null,
      articleData.category,
      articleData.author,
      JSON.stringify(articleData.content),
      articleData.mainImage,
      req.params.id
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Update related articles
    if (articleData.relatedArticleIds) {
      // Remove existing relations
      db.prepare('DELETE FROM related_articles WHERE article_id = ?').run(req.params.id);

      // Add new relations
      const insertRelated = db.prepare(`
        INSERT INTO related_articles (article_id, related_article_id)
        VALUES (?, ?)
      `);

      articleData.relatedArticleIds.forEach(relatedId => {
        insertRelated.run(req.params.id, relatedId);
      });
    }

    res.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete article
router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM articles WHERE id = ?').run(req.params.id);

  if (result.changes === 0) {
    return res.status(404).json({ error: 'Article not found' });
  }

  // Clean up related articles
  db.prepare('DELETE FROM related_articles WHERE article_id = ? OR related_article_id = ?')
    .run(req.params.id, req.params.id);

  res.json({ success: true });
});

export { router as articleRouter };