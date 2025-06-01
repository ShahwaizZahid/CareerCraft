/*
  Warnings:

  - The values [HIGH,LOW] on the enum `DemandLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [POSITIVE,NEUTRAL,NEGATIVE] on the enum `MarketOutLook` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DemandLevel_new" AS ENUM ('High', 'Low', 'Medium');
ALTER TABLE "IndustryInsight" ALTER COLUMN "demandLevel" TYPE "DemandLevel_new" USING ("demandLevel"::text::"DemandLevel_new");
ALTER TYPE "DemandLevel" RENAME TO "DemandLevel_old";
ALTER TYPE "DemandLevel_new" RENAME TO "DemandLevel";
DROP TYPE "DemandLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "MarketOutLook_new" AS ENUM ('Positive', 'Neutral', 'Negative');
ALTER TABLE "IndustryInsight" ALTER COLUMN "marketOutlook" TYPE "MarketOutLook_new" USING ("marketOutlook"::text::"MarketOutLook_new");
ALTER TYPE "MarketOutLook" RENAME TO "MarketOutLook_old";
ALTER TYPE "MarketOutLook_new" RENAME TO "MarketOutLook";
DROP TYPE "MarketOutLook_old";
COMMIT;
