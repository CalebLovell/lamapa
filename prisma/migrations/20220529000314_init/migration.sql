-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HeadOfState" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "countryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "leaning" INTEGER NOT NULL,
    "tookOffice" DATETIME NOT NULL,
    "leftOffice" DATETIME NOT NULL,
    CONSTRAINT "HeadOfState_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
