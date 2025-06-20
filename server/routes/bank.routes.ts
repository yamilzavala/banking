import { Router } from 'express'
import {
  createBank,
  getUserBanks
} from '../controllers/bank.controller'

const router = Router()

router.post('/', createBank)
router.get('/:userId', getUserBanks)

export default router
