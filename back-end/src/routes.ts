import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { ListBookMarksController } from "./useCases/listBookMarks/ListBookMarksController";
import { CreateBookmarksController } from "./useCases/createBookMark/CreateBookmarksController";
import { UpdateBookmarkController } from "./useCases/updateBookmark/UpdateBookmarkController";
import { DeleteBookmarkController } from "./useCases/deleteBookmark/DeleteBookmarkController";

import { ensureAutenticate } from "./middlewares/ensureAuthenticate";

const router =  Router()

const createUserUseController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBookmarksController = new CreateBookmarksController();
const listBookmarksController = new ListBookMarksController();
const updateBookmarkController = new UpdateBookmarkController();
const deleteBookmarkController = new DeleteBookmarkController();

router.post("/users", createUserUseController.handle)
router.post("/authenticate", authenticateUserController.handle)

router.post("/bookmark", ensureAutenticate, createBookmarksController.handle)
router.get("/bookmarks", ensureAutenticate, listBookmarksController.handle)
router.patch("/bookmark/:id", ensureAutenticate, updateBookmarkController.handle)
router.delete("/bookmark/:id", ensureAutenticate, deleteBookmarkController.handle)


export { router } 