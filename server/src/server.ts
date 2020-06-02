import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    
    return response.json(['Diego', 'Vinicius', 'Dyogo','Mariana', 'Nikoly'])
})

app.listen(3333)