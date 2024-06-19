import express from 'express';
import process from 'process';
import userRoutes from './routes/userRoutes';
const app = express();
app.use('/api', userRoutes);
app.listen(process.env.PORT || 3000);
