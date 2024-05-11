const express = require('express')
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
}

)
app.listen(3000)