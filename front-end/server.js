const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log(`Express server running on port: ${port}`)
app.listen(port)