const express = require("express")
const rotaLivro = require("./rotas/livro")

const app = express()

app.use('/livros', rotaLivro)

const port = 7000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
