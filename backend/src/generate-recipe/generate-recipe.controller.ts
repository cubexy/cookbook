import { Controller } from '@nestjs/common';
import { GenerateRecipeService } from './generate-recipe.service';

@Controller('generate-recipe')
export class GenerateRecipeController {
  constructor(private readonly generateRecipeService: GenerateRecipeService) {}
}
