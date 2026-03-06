-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "attatchment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clickCount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Board_id_key" ON "Board"("id");
