import { IsNotEmpty, IsString } from "class-validator";

export class GenerateRecipeDto {
  @IsString()
  @IsNotEmpty()
  readonly prompt: string;
}
