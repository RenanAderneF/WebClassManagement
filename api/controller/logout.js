async function logoutUsuario (req, res) {
    return res  
        .clearCookie("access_token")
        .status(200)
        .json("Usuário saiu com sucesso.")
}

export default logoutUsuario;