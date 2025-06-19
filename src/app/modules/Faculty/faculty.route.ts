import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { facultyValidations } from "./faculty.validation";
import { FacultyController } from "./faculty.controller";

const router = express.Router();

router.get('/', FacultyController.getAllFacultiesFromDB);
router.get(
    '/:facultyId',
    FacultyController.getSingleFacultyFromDB,
);
router.patch(
    '/:facultyId',
    validateRequest(
        facultyValidations.updateFacultyValidationSchema
    ),
    FacultyController.getSingleFacultyUpdatedFromDB
);

router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRoutes = router;