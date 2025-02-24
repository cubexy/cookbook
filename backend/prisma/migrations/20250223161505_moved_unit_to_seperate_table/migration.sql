/*
  Warnings:

  - You are about to drop the column `unit` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `unitid` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "unit",
ADD COLUMN     "unitid" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Unit";

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plural" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_unitid_fkey" FOREIGN KEY ("unitid") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
