import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './app'
import template from './template'

const app = express()

app.use(express.static('dist/public'))

app.get('/', (req, res) => {
  const body = ReactDOM.renderToString(<App />)
  const html = template(body)
  res.send(html)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
