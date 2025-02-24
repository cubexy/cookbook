/*
  Warnings:

  - You are about to drop the column `unitid` on the `Ingredient` table. All the data in the column will be lost.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tag` table. All the data in the column will be lost.
  - The primary key for the `Unit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `unitName` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_unitid_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_B_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "unitid",
ADD COLUMN     "unitName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Unit_pkey" PRIMARY KEY ("name");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_unitName_fkey" FOREIGN KEY ("unitName") REFERENCES "Unit"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE;
