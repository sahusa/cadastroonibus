const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/gerador', (req, res) => {
    const { bairro, equipe, modelo, placa } = req.query
    res.render('gerador', {
        bairro,
        equipe,
        modelo,
        placa
    })
})

app.listen(port, err => {
    if(err){
        console.log('Arruma aí vinicius')
    }else{
        console.log('Tudo certo na ICM')
    }
})

