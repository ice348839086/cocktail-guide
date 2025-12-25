export interface Ingredient {
  name: string;
  amount: string;
  note: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface Cocktail {
  id: string;
  name: string;
  nameZh: string;
  tagline: string;
  image: string;
  color: string;
  strength: string;
  taste: string;
  origin: string;
  history: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string;
}

export interface CocktailsData {
  cocktails: Cocktail[];
}
