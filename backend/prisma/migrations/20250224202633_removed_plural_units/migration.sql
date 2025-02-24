/*
  Warnings:

  - You are about to drop the column `unitName` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `unit` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_unitName_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "unitName",
ADD COLUMN     "unit" TEXT NOT NULL;

-- DropTable
DROP TABLE "Unit";
