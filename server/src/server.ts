import express, { request, response } from 'express'

const app = express()

app.use(express.json())

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Requisições ->
// GET: Buscar uma ou mais informações do backend
// POST: Criar uma nova informação no backend
// PUT: Atualizar uma informação existente do backend
// DELETE: Remover uma informação do backend

// Tipo de parâmetros ->
// Request Param: parâmentros que vem na própria toa que identificam um recurso
// Query Param: parãmetros que vem na própria rota geralmente opcionais para filtros & paginações
// Request Body: parâmetros para criação/atualização de informações 

const users = ['Diego', 'Vinicius', 'Dyogo','Mariana', 'Nikoly']

app.get('/users', (request, response) => {
    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    return response.json(filteredUsers)
})
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    const user = users[id]

    return response.json(user)
})
app.post('/users', (request, response) => {
   const data = request.body

    const user = {
        "name": data.name,
        "email": data.email,
        "telefone": data.telefone
    }

    return response.json(user)
})

app.listen(3333)