import express from 'express';
import BilModel from '../models/BilModel.js'; // Importera BilModel

const router = express.Router();

// GET 
router.get('/', async (req, res) => {
  try {
    const bilarna = await BilModel.find();
    res.json(bilarna);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  const newBil = new BilModel(req.body);
  try {
    const savedBil = await newBil.save();
    res.status(201).json(savedBil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;  // Exportera routen
