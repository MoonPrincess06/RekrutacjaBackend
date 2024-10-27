import express from 'express';
import {
    createCocktail,
    getCocktails,
    getCocktailById,
    updateCocktail,
    deleteCocktail
} from '../controllers/cocktailController';

const router = express.Router();

router.post('/cocktails', createCocktail);
router.get('/cocktails', getCocktails);
router.get('/cocktails/:id', getCocktailById);
router.put('/cocktails/:id', updateCocktail);
router.delete('/cocktails/:id', deleteCocktail);

export default router;