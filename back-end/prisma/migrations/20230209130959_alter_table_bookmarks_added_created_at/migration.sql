/*
  Warnings:

  - You are about to drop the column `id_user` on the `Bookmarks` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookmarks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bookmarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bookmarks" ("id", "label", "url") SELECT "id", "label", "url" FROM "Bookmarks";
DROP TABLE "Bookmarks";
ALTER TABLE "new_Bookmarks" RENAME TO "Bookmarks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
