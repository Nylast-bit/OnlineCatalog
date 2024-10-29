/*
  Warnings:

  - You are about to alter the column `devicePrice` on the `device` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `planPrice` on the `plan` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - Added the required column `planImage` to the `plan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_device" (
    "deviceId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceType" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceFeatures" TEXT NOT NULL,
    "devicePrice" DECIMAL NOT NULL,
    "deviceImage" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_device" ("deviceFeatures", "deviceId", "deviceImage", "deviceName", "devicePrice", "deviceType") SELECT "deviceFeatures", "deviceId", "deviceImage", "deviceName", "devicePrice", "deviceType" FROM "device";
DROP TABLE "device";
ALTER TABLE "new_device" RENAME TO "device";
CREATE TABLE "new_plan" (
    "planId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planType" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "planFeatures" TEXT NOT NULL,
    "planPrice" DECIMAL NOT NULL,
    "planImage" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_plan" ("planFeatures", "planId", "planName", "planPrice", "planType") SELECT "planFeatures", "planId", "planName", "planPrice", "planType" FROM "plan";
DROP TABLE "plan";
ALTER TABLE "new_plan" RENAME TO "plan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
