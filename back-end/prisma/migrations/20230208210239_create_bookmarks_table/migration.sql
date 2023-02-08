-- CreateTable
CREATE TABLE "Bookmarks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "Bookmarks_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
