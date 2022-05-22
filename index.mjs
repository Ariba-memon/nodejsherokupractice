import express from 'express';

const app = express()


app.get('/', (req, res) => {
    res.send('I am Express.js server')
})
app.get('/desert', (req, res) => {
    res.send('here is your desert 🏜️')
})
app.get('/sand', (req, res) => {
    res.send('here is your sand ⏳')
})

app.listen(7000, () => {
    console.log(`Hello server is listening at http://localhost:7000`)
})