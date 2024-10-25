-- CreateTable
CREATE TABLE "device" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deviceType" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceFeatures" TEXT NOT NULL,
    "devicePrice" INTEGER NOT NULL,
    "deviceImage" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "plan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planType" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "planFeatures" TEXT NOT NULL,
    "planPrice" INTEGER NOT NULL
);
