const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['java','kotlin','Android']
//              0       1       2
app.get('/personagem',function (req, res) {
    res.send (lista)
})
// Endpoint Read By ID [GET] /personagem/:id
app.get('/personagem/:id', function(req, res) {
    const id = req.params.id

    const item = lista [id - 1]
    res.send(item)
})

app.use(express.json())

app.post('/personagem', function(req, res) {

const body = req.body

console.log (body)

  const novoitem = body.nome 

  lista.push(novoitem)

  res.send('Item adicionado com sucesso:' + novoitem)

})
app.listen(3000)