import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';  
import usersRouter from './routes/users.js';  
import bilarRouter from './routes/bilar.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('Missing MONGO_URI environment variable.');
}

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI)
  .then(() => console.log('Ansluten till MongoDB'))
  .catch((err) => console.error('Kunde inte ansluta till MongoDB:', err));

app.use('/', indexRouter);  
app.use('/users', usersRouter); 
app.use('/bilar', bilarRouter);  

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});
