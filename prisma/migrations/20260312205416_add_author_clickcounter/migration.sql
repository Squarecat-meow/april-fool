-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "author" TEXT NOT NULL DEFAULT '관리자',
ALTER COLUMN "clickCount" SET DEFAULT 0;
