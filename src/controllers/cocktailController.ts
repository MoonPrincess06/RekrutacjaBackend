import { Request, Response } from 'express';
import { Cocktail } from '../models/cocktail';

let cocktails: Cocktail[] = [];

export const createCocktail = (req: Request, res: Response) => {
    const newCocktail: Cocktail = { id: `${Date.now()}`, ...req.body };
    cocktails.push(newCocktail);
    res.status(201).json(newCocktail);
};

export const getCocktails = (req: Request, res: Response) => {
    res.json(cocktails);
};

export const getCocktailById = (req: Request, res: Response) => {
    const cocktail = cocktails.find(c => c.id === req.params.id);
    if (cocktail) {
        res.json(cocktail);
    } else {
        res.status(404).json({ message: "Cocktail not found" });
    }
};

export const updateCocktail = (req: Request, res: Response) => {
    const cocktail = cocktails.find(c => c.id === req.params.id);
    if (cocktail) {
        Object.assign(cocktail, req.body);
        res.json(cocktail);
    } else {
        res.status(404).json({ message: "Cocktail not found" });
    }
};

export const deleteCocktail = (req: Request, res: Response) => {
    cocktails = cocktails.filter(c => c.id !== req.params.id);
    res.status(204).send();
};