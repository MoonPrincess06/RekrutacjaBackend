// src/routes/ingredientRoutes.ts
import express from 'express';
import {
    createIngredient,
    getIngredients,
    getIngredientById,
    updateIngredient,
    deleteIngredient,
    upload
} from '../controllers/ingredientController';

const router = express.Router();

router.post('/ingredients', upload.single('image'), createIngredient);
router.get('/ingredients', getIngredients);
router.get('/ingredients/:id', getIngredientById);
router.put('/ingredients/:id', upload.single('image'), updateIngredient);
router.delete('/ingredients/:id', deleteIngredient);

export default router;