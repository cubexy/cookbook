import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new recipe.
   * @param createRecipeDto Pre-validated input data for creating a new recipe
   * @returns Created recipe
   */
  async create(createRecipeDto: CreateRecipeDto) {
    return await this.prisma.recipe.create({
      include: {
        tags: true,
        ingredients: true,
        steps: true
      },
      data: {
        title: createRecipeDto.title,
        durationInMinutes: createRecipeDto.durationInMinutes,
        difficulty: createRecipeDto.difficulty,
        chefTopNote: createRecipeDto.chefTopNote ?? null,
        chefBottomNote: createRecipeDto.chefBottomNote ?? null,
        imageUrl: "localhost:3000/recipe_placeholder.jpg",
        tags: {
          connectOrCreate: createRecipeDto.tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag }
          }))
        },
        ingredients: {
          create: createRecipeDto.ingredients.map((ingredient) => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit
          }))
        },
        steps: {
          create: createRecipeDto.steps.map((step, index) => ({
            text: step,
            number: index
          }))
        }
      }
    });
  }

  /**
   * Finds all recipes.
   * @returns All recipes
   */
  findAll() {
    return this.prisma.recipe.findMany({
      include: {
        tags: true,
        ingredients: true,
        steps: true
      }
    });
  }

  /**
   * Finds a recipe by its ID.
   * @param id ID of the recipe to find
   * @returns Recipe with the given ID
   */
  findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: {
        tags: true,
        ingredients: true,
        steps: true
      }
    });
  }

  /**
   * Updates a recipe by its ID.
   * @param id ID of the recipe to update
   * @param updateRecipeDto Pre-validated input data for updating the recipe
   * @returns Updated recipe
   */
  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      include: {
        tags: true,
        ingredients: true,
        steps: true
      },
      data: {
        title: updateRecipeDto.title,
        durationInMinutes: updateRecipeDto.durationInMinutes,
        difficulty: updateRecipeDto.difficulty,
        chefTopNote: updateRecipeDto.chefTopNote,
        chefBottomNote: updateRecipeDto.chefBottomNote,
        imageUrl: "localhost:3000/recipe_placeholder.jpg",
        tags: {
          connectOrCreate: updateRecipeDto.tags?.map((tag) => ({
            where: { name: tag },
            create: { name: tag }
          }))
        },
        ingredients: updateRecipeDto.ingredients && {
          deleteMany: {},
          create: updateRecipeDto.ingredients.map((ingredient) => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit
          }))
        },
        steps: updateRecipeDto.steps && {
          deleteMany: {},
          create: updateRecipeDto.steps?.map((step, index) => ({
            text: step,
            number: index
          }))
        }
      }
    });
  }

  /**
   * Removes a recipe by its ID.
   * @param id ID of the recipe to remove
   * @returns Removed recipe
   */
  remove(id: string) {
    return this.prisma.recipe.delete({
      where: { id }
    });
  }
}
