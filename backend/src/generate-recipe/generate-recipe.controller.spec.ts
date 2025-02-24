import { Test, TestingModule } from '@nestjs/testing';
import { GenerateRecipeController } from './generate-recipe.controller';
import { GenerateRecipeService } from './generate-recipe.service';

describe('GenerateRecipeController', () => {
  let controller: GenerateRecipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateRecipeController],
      providers: [GenerateRecipeService],
    }).compile();

    controller = module.get<GenerateRecipeController>(GenerateRecipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
