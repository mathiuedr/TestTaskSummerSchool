const express = require('express');

const app = express()
const port = 3000

app.get("/",(req, res)=>{
    res.status(200).send('Hello, World!');
})
app.use(express.static('public'))

app.get("/about", (req, res) => {
    res.status(200).send('Это простое приложение на Express.js')
})

app.get('*', (req, res) => {
    res.status(404).send('Страница не найдена');
});

app.listen(port, () => {
    console.log(`launched server on http://localhost:${port}`)
})
