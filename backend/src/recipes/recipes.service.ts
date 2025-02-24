import { Injectable } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "src/prisma.service";

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
        chefTopNote: createRecipeDto.chefTopNote,
        chefBottomNote: createRecipeDto.chefBottomNote,
        imageUrl: createRecipeDto.imageUrl,
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

  findAll() {
    return this.prisma.recipe.findMany({
      include: {
        tags: true,
        ingredients: true,
        steps: true
      }
    });
  }

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
        imageUrl: updateRecipeDto.imageUrl,
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

  remove(id: string) {
    return this.prisma.recipe.delete({
      where: { id }
    });
  }
}
