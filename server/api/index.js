import { Router } from 'express'
import libraryRouter from './library'

const router = Router()

router.use(libraryRouter)

export default router
