import { Router } from "express";
import { CreateUserController } from "./useCases/user/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/user/authenticateUser/AuthenticateUserController";
import { ListBookMarksController } from "./useCases/bookmarks/listBookMarks/ListBookMarksController";
import { CreateBookmarksController } from "./useCases/bookmarks/createBookMark/CreateBookmarksController";
import { UpdateBookmarkController } from "./useCases/bookmarks/updateBookmark/UpdateBookmarkController";
import { DeleteBookmarkController } from "./useCases/bookmarks/deleteBookmark/DeleteBookmarkController";
import { GetBookmarkController } from "./useCases/bookmarks/getBookmark/GetBookmarkController";
import { BlogCrawlerController } from "./useCases/crawler/BlogCrawlerController";

import { ensureAutenticate } from "./middlewares/ensureAuthenticate";

const router =  Router()

const createUserUseController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const listBookmarksController = new ListBookMarksController();
const getBookmarkController = new GetBookmarkController();
const createBookmarksController = new CreateBookmarksController();
const updateBookmarkController = new UpdateBookmarkController();
const deleteBookmarkController = new DeleteBookmarkController();
const blogCrawlerController = new BlogCrawlerController();

router.post("/users", createUserUseController.handle)
router.post("/authenticate", authenticateUserController.handle)

router.post("/bookmarks", ensureAutenticate, listBookmarksController.handle)
router.get("/bookmark/:id", ensureAutenticate, getBookmarkController.handle)
router.post("/bookmark", ensureAutenticate, createBookmarksController.handle)
router.patch("/bookmark/:id", ensureAutenticate, updateBookmarkController.handle)
router.delete("/bookmark/:id", ensureAutenticate, deleteBookmarkController.handle)

router.post("/import", ensureAutenticate, blogCrawlerController.handle)

export { router } 