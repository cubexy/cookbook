/*
  Warnings:

  - The values [PINCHES,HANDFUL] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('GRAM', 'MILLILITER', 'PIECE', 'TEASPOON', 'TABLESPOON', 'CUP', 'PINCH');
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "Unit_old";
COMMIT;
