import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { ListBookMarksController } from "./useCases/listBookMarks/ListBookMarksController";
import { CreateBookmarksController } from "./useCases/createBookMark/CreateBookmarksController";
import { UpdateBookmarkController } from "./useCases/updateBookmark/UpdateBookmarkController";
import { DeleteBookmarkController } from "./useCases/deleteBookmark/DeleteBookmarkController";
import { GetBookmarkController } from "./useCases/getBookmark/GetBookmarkController";

import { ensureAutenticate } from "./middlewares/ensureAuthenticate";

const router =  Router()

const createUserUseController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const listBookmarksController = new ListBookMarksController();
const getBookmarkController = new GetBookmarkController();
const createBookmarksController = new CreateBookmarksController();
const updateBookmarkController = new UpdateBookmarkController();
const deleteBookmarkController = new DeleteBookmarkController();

router.post("/users", createUserUseController.handle)
router.post("/authenticate", authenticateUserController.handle)

router.get("/bookmark", ensureAutenticate, listBookmarksController.handle)
router.get("/bookmark/:id", ensureAutenticate, getBookmarkController.handle)
router.post("/bookmark", ensureAutenticate, createBookmarksController.handle)
router.patch("/bookmark/:id", ensureAutenticate, updateBookmarkController.handle)
router.delete("/bookmark/:id", ensureAutenticate, deleteBookmarkController.handle)


export { router } 