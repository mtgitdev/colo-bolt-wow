import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'editorial.db'));

export function initDB() {
  // Create articles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT,
      category TEXT NOT NULL,
      author TEXT NOT NULL,
      content JSON NOT NULL,
      main_image TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS related_articles (
      article_id INTEGER,
      related_article_id INTEGER,
      FOREIGN KEY (article_id) REFERENCES articles(id),
      FOREIGN KEY (related_article_id) REFERENCES articles(id),
      PRIMARY KEY (article_id, related_article_id)
    );
  `);
}

export function getDB() {
  return db;
}