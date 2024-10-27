import express from 'express';
import bodyParser from 'body-parser';
import cocktailRoutes from './routes/cocktailRoutes';
import ingredientRoutes from './routes/ingredientRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Serve static files (uploads folder)
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', cocktailRoutes);
app.use('/api', ingredientRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});