import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { ensureAutenticate } from "./middlewares/ensureAuthenticate";

const router =  Router()

const createUserUseController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserUseController.handle)
router.post("/authenticate", authenticateUserController.handle)
router.get("/bookmarks", ensureAutenticate, (req, res) =>{
    return res.json([
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"},
        {id:1, label: "BookMars",url:"http://teste.com.br"}
    ])
})


export { router } 