import express from 'express'

const app = express(),
    port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`Hello from Express`)
})

app.listen(port, () => {
    console.log(`MERN Boilerplate listening on port ${port}`)
})
