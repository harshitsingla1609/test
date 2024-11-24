import Transations from '../models/transactions.model.js'

export const getTransactions = async (req, res) => {
  try {
    const data = await Transations.find().sort({ createdAt: -1 })
    res.status(200).json(data)
  } catch (error) {
    console.log(error, 'errorerrorerror 1111')
    res.status(500).json({ error: 'Error while fethcing transactions.' })
  }
}

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, desc = '' } = req.body
    const data = await Transations.find().sort({ createdAt: -1 })
    let currentBalance = data[0]?.balance || 0

    if (type === 'debit') {
      if (currentBalance <= 0) {
        return res.status(400).json({ error: 'Insufficient funds' })
      } else if (parseInt(amount) > currentBalance) {
        return res.status(400).json({ error: 'Debited amount cannot be more than the current balance' })
      } else {
        currentBalance -= parseInt(amount)
      }
    } else {
      currentBalance += parseInt(amount)
    }

    const transactions = new Transations({
      type,
      amount,
      desc,
      balance: currentBalance
    })
    await transactions.save()
    res.status(200).json(transactions)


  } catch (error) {
    console.log(error, 'errorerrorerror')
    res.status(500).json({ error: 'Error while fethcing transactions.' })
  }
}