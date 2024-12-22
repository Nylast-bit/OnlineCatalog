/*
  Warnings:

  - You are about to alter the column `devicePrice` on the `device` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `planPrice` on the `plan` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_device" (
    "deviceId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceType" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceFeatures" TEXT NOT NULL,
    "devicePrice" REAL NOT NULL,
    "deviceImage" TEXT NOT NULL,
    "description" TEXT,
    "note" TEXT
);
INSERT INTO "new_device" ("description", "deviceFeatures", "deviceId", "deviceImage", "deviceName", "devicePrice", "deviceType", "note") SELECT "description", "deviceFeatures", "deviceId", "deviceImage", "deviceName", "devicePrice", "deviceType", "note" FROM "device";
DROP TABLE "device";
ALTER TABLE "new_device" RENAME TO "device";
CREATE TABLE "new_plan" (
    "planId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planType" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "planFeatures" TEXT NOT NULL,
    "planPrice" REAL NOT NULL,
    "planImage" TEXT NOT NULL,
    "description" TEXT,
    "note" TEXT
);
INSERT INTO "new_plan" ("description", "note", "planFeatures", "planId", "planImage", "planName", "planPrice", "planType") SELECT "description", "note", "planFeatures", "planId", "planImage", "planName", "planPrice", "planType" FROM "plan";
DROP TABLE "plan";
ALTER TABLE "new_plan" RENAME TO "plan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
