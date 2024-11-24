import express from 'express'
import {
  getTransactions,
  addTransaction
} from '../controllers/transactions.controller.js'

const router = express.Router()

router.get('/get-transactions', getTransactions)
router.post('/add-transaction-entry', addTransaction)

export default router