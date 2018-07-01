import express from 'express'
import path from 'path'

const app = express(),
    port = process.env.PORT || 3000,
    publicPath = path.resolve(__dirname, '..', '..', 'public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.send(`Hello from Express`)
})

app.listen(port, () => {
    console.log(`MERN Boilerplate listening on port ${port} and looking in folder ${publicPath}`)
})
