import { Request, Response } from 'express'
import prisma from '../utils/db'
import bcrypt from 'bcryptjs'

export const register = async (req: Request, res: Response) => {
//   const { email, password, name } = req.body
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const user = await prisma.user.create({
//       data: { email, name, password: hashedPassword }
//     })
//     res.status(201).json(user)
//   } catch (error) {
//     res.status(400).json({ error: 'Registration failed' })
//   }
}

export const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body
//   try {
//     const user = await prisma.user.findUnique({ where: { email } })
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: 'Invalid credentials' })
//     }
//     res.status(200).json(user)
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' })
//   }
}
