// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
// require express-handlebars here
const exphbs = require('express-handlebars')

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM(`<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <meta http-equiv='X-UA-Compatible' content='IE=edge' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title>Simple Blog</title>
  <link rel='stylesheet' href='/stylesheets/bootstrap.css' />
</head>
<body>
  <header class='d-flex justify-content-between'>
    <div class='homepage-container'>
      <a href='/' class='btn btn-secondary homepage'>回到首頁</a>
    </div>

    <div class='nav-container d-flex'>
      <a href='/about' class='btn btn-secondary navbar about'>About</a>
      <a
        href='/portfolio'
        class='btn btn-secondary navbar portfolio'
      >Portfolio</a>
      <a href='/contact' class='btn btn-secondary navbar contact'>Contact</a>
    </div>
  </header>
</body>
</html>`)
const document = dom.window.document

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

nav.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('hi')
  const activeLink = document.querySelector('.active')
  if (activeLink) {
    activeLink.classList.remove('active')
  }
  if (event.target.matches('.nav')) {
    event.target.classList.add('active')
  }
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
