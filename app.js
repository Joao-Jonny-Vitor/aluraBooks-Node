const express = require('express')
const rotaLivro = require('./routes/livro')

const app = express()
app.use(express.json())

const port = 8000

app.use('/livros', rotaLivro)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})