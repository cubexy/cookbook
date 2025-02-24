/*
  Warnings:

  - You are about to drop the column `amount` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "amount",
ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL;
