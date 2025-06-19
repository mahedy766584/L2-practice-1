import status from "http-status";
import AppError from "../../errors/appError";
import { academicSemesterNameCodeMapper } from "./academicSemester.const";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {

    //semester name --> semester code
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new AppError(status.NOT_FOUND, 'Invalid Semester Code');
    };

    const result = await AcademicSemester.create(payload);
    return result;
};

const getAllAcademicSemester = async () => {
    const result = await AcademicSemester.find();
    return result;
};

const getSingleAcademicSemester = async (semesterId: string) => {
    const result = AcademicSemester.findOne({ semesterId });
    // if(!result){
    //     throw new AppError(status.BAD_REQUEST, 'User not found')
    // };
    return result;
};

const updateSingleAcademicSemester = async (semesterId: string, payload: Partial<TAcademicSemester>) => {

    if (payload.name && payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new AppError(status.NOT_FOUND, 'Invalid Semester Code')
    }

    const result = AcademicSemester.findByIdAndUpdate({ _id: semesterId }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateSingleAcademicSemester,
};