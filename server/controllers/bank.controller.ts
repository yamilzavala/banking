import { Request, Response } from 'express'
import prisma from '../utils/db'

export const createBank = async (req: Request, res: Response) => {
//   const { userId, name, accountNo, balance } = req.body
//   try {
//     const bank = await prisma.bank.create({
//       data: {
//         name,
//         accountNo,
//         balance,
//         user: { connect: { id: userId } }
//       }
//     })
//     res.status(201).json(bank)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create bank' })
//   }
}

export const getUserBanks = async (req: Request, res: Response) => {
//   const { userId } = req.params
//   try {
//     const banks = await prisma.bank.findMany({
//       where: { userId }
//     })
//     res.status(200).json(banks)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to get banks' })
//   }
}
