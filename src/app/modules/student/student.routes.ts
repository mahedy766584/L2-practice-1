import express from 'express';
import { studentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student.zodValidation';

const router = express.Router();

router.get('/', studentController.getAllStudents);
router.get('/:studentId', studentController.getSingleStudent);
router.patch(
    '/:studentId',
    validateRequest(
        studentValidations.updateStudentValidationSchema
    ),
    studentController.updateStudent
);
router.delete('/:studentId', studentController.deleteStudent);

export const StudentRoutes = router;
