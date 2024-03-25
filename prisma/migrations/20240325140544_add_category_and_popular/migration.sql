-- AlterTable
ALTER TABLE "List" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Game',
ADD COLUMN     "isPopular" BOOLEAN NOT NULL DEFAULT false;
