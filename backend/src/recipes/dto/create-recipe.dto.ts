import { Difficulty } from "@prisma/client";
import { Type } from "class-transformer";
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  ValidateNested
} from "class-validator";

class IngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  unit: string;
}

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsInt()
  @IsPositive()
  readonly durationInMinutes: number;

  @IsString()
  @IsIn(["EASY", "MEDIUM", "HARD"])
  readonly difficulty: Difficulty;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  readonly tags: string[];

  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  readonly ingredients: IngredientDto[];

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  readonly steps: string[];

  @IsUrl()
  readonly imageUrl: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly chefTopNote?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly chefBottomNote?: string;
}
