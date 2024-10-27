export interface IngredientQuantity {
    ingredientId: string;
    quantity: string;
}

export interface Cocktail {
    id: string;
    name: string;
    category: string;
    instructions: string;
    ingredients: IngredientQuantity[];
}