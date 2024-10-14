import { Router } from "express";
import { criarUsuario, alterarUsuario, deletarUser } from "../repository/userRepository";

const endpoints = Router()

endpoints.post("./criarUser", async (req, resp) =>{
    try {
        const user = req.body;
        const id =  await criarUsuario(user)

        return resp.send({
            novoId: id
        })

    } catch (error) {
        return resp.status(400).send({
            error:error.message
        })
    }
})

export default endpoints