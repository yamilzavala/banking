import express from 'express'
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import bankRoutes from './routes/bank.routes'

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/banks', bankRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Express API running at http://localhost:${PORT}`)
})
