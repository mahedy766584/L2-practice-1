import express from "express";
import { UserControllers } from "./user.controller";
import { studentValidations } from "../student/student.zodValidation";
import validateRequest from "../../middlewares/validateRequest";
import { facultyValidations } from "../Faculty/faculty.validation";
import { createAdminValidationSchema } from "../Admin/admin.validation";

const router = express.Router();

router.post(
    '/create-student',
    validateRequest(studentValidations.createStudentValidationSchema),
    UserControllers.createStudent
);
router.post(
    '/create-faculty',
    validateRequest(
        facultyValidations.createFacultyValidationSchema
    ),
    UserControllers.createFaculty
);

router.post(
    '/create-admin',
    validateRequest(createAdminValidationSchema),
    UserControllers.createAdmin,
);


export const UserRoutes = router;