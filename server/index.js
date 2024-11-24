import express from 'express'
import dotenv from 'dotenv'

import { connectToDatabase } from './config/db.js'
import transactionRoute from './routes/transaction.route.js'

dotenv.config()
connectToDatabase()

const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.use('/api', transactionRoute)

app.listen(PORT, () => {
  console.log(`Server is Listening on the ${PORT}`);
})