import { Test, TestingModule } from "@nestjs/testing";
import { RecipesService } from "./recipes.service";
import { PrismaService } from "../prisma.service";

describe("RecipesService", () => {
  let service: RecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesService, PrismaService]
    }).compile();

    service = module.get<RecipesService>(RecipesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
