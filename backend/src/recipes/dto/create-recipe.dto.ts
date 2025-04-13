import { Optional } from "@nestjs/common";
import { Difficulty } from "@prisma/client";
import { Type } from "class-transformer";
import {
  ArrayNotEmpty,
  IsBase64,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Length,
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

  @ArrayNotEmpty()
  @IsString({ each: true })
  @Length(1, 16, { each: true })
  readonly tags: string[];

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  readonly ingredients: IngredientDto[];

  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  readonly steps: string[];

  @IsOptional()
  @IsBase64()
  readonly image: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly chefTopNote: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly chefBottomNote: string;
}
