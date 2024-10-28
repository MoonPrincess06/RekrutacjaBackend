export interface IngredientQuantity {
    ingredient: string;
    quantity: string;
}

export interface Cocktail {
    id: number;
    name: string;
    category: string;
    instructions: string;
    ingredients: IngredientQuantity[];
}