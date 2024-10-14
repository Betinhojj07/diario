import db from "../conection";

export async function criarUsuario(usuario,  id_user){
 const comando = `INSERT INTO diario(nome, senha)
                                    VALUES(?, ?)` 

    let resposta = await db.query(comando, [id_user, usuario.nome, usuario.senha])
    return resposta[0].insertId
}

export async function deletarUser(id_user){
    const comando = `DELETE * FROM diario
                        WHERE id = ?`

    let resposta = await db.query(comando, [id_user])
    return resposta[0]
}

export async function alterarUsuario(usuario, id_user){
    const comando = `UPDATE diario
                        SET nome = ?,
                            senha = ?,
                            WHERE id = ?`

    let resposta =  await db.query(comando, [id_user, usuario.nome, usuario.senha])
    return resposta[0].affectedRows
}