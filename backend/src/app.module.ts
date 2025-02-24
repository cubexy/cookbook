import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RecipesModule } from "./recipes/recipes.module";
import { GenerateRecipeModule } from "./generate-recipe/generate-recipe.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [RecipesModule, GenerateRecipeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
