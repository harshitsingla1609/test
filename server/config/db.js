import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected successfully.')
  } catch (err) {
    console.log('Error connecting to database.')
    process.exit(1)
  }
}