const API_URL = 'http://localhost:3000/api';

export interface Article {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  author: string;
  content: Array<{
    type: 'text' | 'image' | 'heading';
    content: string;
    url?: string;
    caption?: string;
  }>;
  mainImage: string;
  createdAt: string;
  updatedAt: string;
  relatedArticles?: Array<{
    id: number;
    title: string;
    category: string;
    mainImage: string;
  }>;
}

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${API_URL}/articles`);
  if (!response.ok) throw new Error('Failed to fetch articles');
  return response.json();
}

export async function getArticle(id: number): Promise<Article> {
  const response = await fetch(`${API_URL}/articles/${id}`);
  if (!response.ok) throw new Error('Failed to fetch article');
  return response.json();
}

export async function createArticle(article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<{ id: number }> {
  const response = await fetch(`${API_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  if (!response.ok) throw new Error('Failed to create article');
  return response.json();
}

export async function updateArticle(id: number, article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
  const response = await fetch(`${API_URL}/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  if (!response.ok) throw new Error('Failed to update article');
}

export async function deleteArticle(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/articles/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete article');
}