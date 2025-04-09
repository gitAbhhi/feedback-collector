import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import { readFile, writeFile } from 'fs/promises';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to JSON file
const filePath = './feedback.json';

app.post('/submit-feedback', async (req, res) => {
  const feedback = req.body;

  try {
    const data = await readFile(filePath, 'utf-8');
    const existingFeedback = data ? JSON.parse(data) : [];

    existingFeedback.push(feedback);
    await writeFile(filePath, JSON.stringify(existingFeedback, null, 2));

    res.status(200).send('Feedback saved successfully');
  } catch (err) {
    res.status(500).send('Error writing feedback');
  }
});

app.get('/feedbacks', async (req, res) => {
    try {
      const data = await readFile(filePath, 'utf-8');
      const feedbacks = JSON.parse(data || '[]');
      console.log("it is running")
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).send('Failed to read feedback');
    }
  });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});