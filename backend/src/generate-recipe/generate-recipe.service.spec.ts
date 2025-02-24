import { Test, TestingModule } from '@nestjs/testing';
import { GenerateRecipeService } from './generate-recipe.service';

describe('GenerateRecipeService', () => {
  let service: GenerateRecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateRecipeService],
    }).compile();

    service = module.get<GenerateRecipeService>(GenerateRecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
