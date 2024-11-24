import mongoose from 'mongoose'

const TransactionSchema = mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  desc: { type: String, required: false },
  balance: { type: Number }
}, { timestamps: true })

const Transations = mongoose.model('Transaction', TransactionSchema)

export default Transations