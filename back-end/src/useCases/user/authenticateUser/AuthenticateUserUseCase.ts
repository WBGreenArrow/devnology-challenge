import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../../prisma/client";
 

interface IRequest {
    username: string;
    password: string;
}

class AuthenticateUserUseCase {

   async execute({ username, password }: IRequest){
        const userAlreadyExists = await client.user.findFirst({
            where:{
                username
            }
        })

        if(!userAlreadyExists){
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        const token = sign({}, process.env.JWT_SECRET, {
            subject: userAlreadyExists.id,
            expiresIn: "4h"
        })

        return { token }

    }
}

export { AuthenticateUserUseCase }