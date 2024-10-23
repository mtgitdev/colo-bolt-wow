import express from 'express';
import cors from 'cors';
import { initDB } from './db.js';
import { articleRouter } from './routes/articles.js';

const app = express();
const PORT = 3000;

// Initialize database
initDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articleRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});