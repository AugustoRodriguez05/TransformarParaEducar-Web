import express from 'express';
import dbPromise from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const db = await dbPromise;
  const events = await db.all('SELECT * FROM eventos ORDER BY id ASC');
  res.json(events);
});

router.post('/', async (req, res) => {
  const db = await dbPromise;
  const { titulo, descripcion, dia, mes, hora, lugar, tag } = req.body;
  try {
    const result = await db.run(
      'INSERT INTO eventos (titulo, descripcion, dia, mes, hora, lugar, tag) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [titulo, descripcion, dia, mes, hora, lugar, tag || 'General']
    );
    const newEvent = await db.get('SELECT * FROM eventos WHERE id = ?', result.lastID);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: 'Error al guardar el evento' });
  }
});

router.delete('/:id', async (req, res) => {
  const db = await dbPromise;
  const id = parseInt(req.params.id);
  await db.run('DELETE FROM eventos WHERE id = ?', id);
  res.json({ message: 'Event deleted' });
});

export default router;
