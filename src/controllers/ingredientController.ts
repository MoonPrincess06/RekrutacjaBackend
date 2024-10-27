import { Request, Response } from 'express';
import { Ingredient } from '../models/ingredient';
import multer from 'multer';
import path from 'path';

// Configure multer storage for handling image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error("Only images are allowed!"));
        }
    }
});

let ingredients: Ingredient[] = [];

export const createIngredient = (req: Request, res: Response) => {
    const newIngredient: Ingredient = {
        id: `${Date.now()}`,
        name: req.body.name,
        description: req.body.description,
        isAlcohol: req.body.isAlcohol,
        image: req.file?.path || '' // Save image path
    };
    ingredients.push(newIngredient);
    res.status(201).json(newIngredient);
};

export const getIngredients = (req: Request, res: Response) => {
    res.json(ingredients);
};

export const getIngredientById = (req: Request, res: Response) => {
    const ingredient = ingredients.find(i => i.id === req.params.id);
    if (ingredient) {
        res.json(ingredient);
    } else {
        res.status(404).json({ message: "Ingredient not found" });
    }
};

export const updateIngredient = (req: Request, res: Response) => {
    const ingredient = ingredients.find(i => i.id === req.params.id);
    if (ingredient) {
        ingredient.name = req.body.name || ingredient.name;
        ingredient.description = req.body.description || ingredient.description;
        ingredient.isAlcohol = req.body.isAlcohol ?? ingredient.isAlcohol;
        ingredient.image = req.file?.path || ingredient.image; // Update image path if new file uploaded
        res.json(ingredient);
    } else {
        res.status(404).json({ message: "Ingredient not found" });
    }
};

export const deleteIngredient = (req: Request, res: Response) => {
    ingredients = ingredients.filter(i => i.id !== req.params.id);
    res.status(204).send();
};