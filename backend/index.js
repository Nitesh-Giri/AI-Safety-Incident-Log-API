import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import incidentRoutes from './routes/incidentRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/incidents', incidentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
