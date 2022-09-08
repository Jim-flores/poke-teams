const express = require('express')
const config = require('./config')
const userRouter = require('./users/user.router').router
const authRouter = require('./auth/auth.router').router

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Bienvenidos a mi API de pokemones'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
})