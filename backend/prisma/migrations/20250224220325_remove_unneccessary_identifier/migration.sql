/*
  Warnings:

  - The primary key for the `Step` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Step` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Step" DROP CONSTRAINT "Step_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Step_pkey" PRIMARY KEY ("recipeId", "number");
