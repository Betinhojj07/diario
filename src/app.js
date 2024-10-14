import express from "express";
import cors from "cors";

import {adicionarRotas} from './rota.js'

const app = express()
app.use(cors())
app.use(express.json())

adicionarRotas(app)


app.listen(5050,  ()=> console.log("conexão realizada com sucesso"));