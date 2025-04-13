// Type definitions for Recipe data
export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD"
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  durationInMinutes: number;
  difficulty: Difficulty;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  image?: string;
  chefTopNote?: string;
  chefBottomNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRecipeRequest {
  title: string;
  durationInMinutes: number;
  difficulty: Difficulty;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  image?: string;
  chefTopNote?: string;
  chefBottomNote?: string;
}

export interface UpdateRecipeRequest {
  title?: string;
  durationInMinutes?: number;
  difficulty?: Difficulty;
  tags?: string[];
  ingredients?: Ingredient[];
  steps?: string[];
  image?: string;
  chefTopNote?: string;
  chefBottomNote?: string;
}

export interface GenerateRecipeRequest {
  prompt: string;
}
