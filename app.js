// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
// require express-handlebars here
const exphbs = require('express-handlebars')

const nav = document.querySelector('.navbar')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { content: '首頁' })
})
app.get('/about', (req, res) => {
  res.render('index', { content: 'About' })
})
app.get('/portfolio', (req, res) => {
  res.render('index', { content: 'Portfolio' })
})
app.get('/contact', (req, res) => {
  res.render('index', { content: 'Contact' })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
