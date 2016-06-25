const express = require('express')

const app = express()

app.use(express.static('../polling-app/dist'))
app.use(express.static('../polling-app/node_modules/bootstrap/dist'))

app.listen(3000)

console.log('Express server listening on port 3000')
