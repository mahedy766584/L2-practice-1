import express from 'express'
import { studentController } from './student.controller'

const router = express.Router()

router.post('/crated-student', studentController.createStudent)

export const StudentRoutes = router
