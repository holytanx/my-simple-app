// Libraries
const express = require('express')

// Routers
const citizenIdRouter = require('./routes/check-citizen-id')
const calTriangleAreaRouter = require('./routes/cal-triangle-area')
const heroRouter = require('./routes/hero')
const postsRouter = require('./routes/posts')

const app = express()
// Set body parser
app.use(express.json())
// Set SSR engine
app.set('view engine', 'ejs');
// Set router
app.use('/api/check-citizen-id', citizenIdRouter)
app.use('/api/cal-triangle-area', calTriangleAreaRouter)
app.use('/hero', heroRouter)
app.use('/posts', postsRouter)


app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('*', async (req, res) => {
  res.render('pages/404')
})

app.listen(5555, () => {
  console.log('Listening on port 5555')
})


