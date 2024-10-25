/*
  Warnings:

  - The primary key for the `device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `device` table. All the data in the column will be lost.
  - The primary key for the `plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `plan` table. All the data in the column will be lost.
  - Added the required column `deviceId` to the `device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planId` to the `plan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_device" (
    "deviceId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceType" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceFeatures" TEXT NOT NULL,
    "devicePrice" INTEGER NOT NULL,
    "deviceImage" TEXT NOT NULL
);
INSERT INTO "new_device" ("deviceFeatures", "deviceImage", "deviceName", "devicePrice", "deviceType") SELECT "deviceFeatures", "deviceImage", "deviceName", "devicePrice", "deviceType" FROM "device";
DROP TABLE "device";
ALTER TABLE "new_device" RENAME TO "device";
CREATE TABLE "new_plan" (
    "planId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planType" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "planFeatures" TEXT NOT NULL,
    "planPrice" INTEGER NOT NULL
);
INSERT INTO "new_plan" ("planFeatures", "planName", "planPrice", "planType") SELECT "planFeatures", "planName", "planPrice", "planType" FROM "plan";
DROP TABLE "plan";
ALTER TABLE "new_plan" RENAME TO "plan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
