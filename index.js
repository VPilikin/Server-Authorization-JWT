const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://qwerty:qwerty123@cluster0.aicdnew.mongodb.net/'
    )
    app.listen(PORT, () => {
      console.log(`server started on PORT = ${PORT}`)
    })
  } catch (e) {
    console.log(`Ошибка ${e}`)
  }
}

start()
