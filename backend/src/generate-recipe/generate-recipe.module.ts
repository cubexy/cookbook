import { Module } from '@nestjs/common';
import { GenerateRecipeService } from './generate-recipe.service';
import { GenerateRecipeController } from './generate-recipe.controller';

@Module({
  controllers: [GenerateRecipeController],
  providers: [GenerateRecipeService],
})
export class GenerateRecipeModule {}
