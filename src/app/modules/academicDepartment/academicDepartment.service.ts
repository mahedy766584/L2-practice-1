import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
};

const getAllAcademicDepartments = async () => {
    const result = await AcademicDepartment.find().populate('academicFaculty');
    return result;
};

const getSingleAcademicDepartment = async (id: string) => {
    const result =await AcademicDepartment.findById(id).populate('academicFaculty');
    return result;
};

const updateSingleAcademicDepartment = async (id: string, payload: Partial<TAcademicDepartment>) =>{
    const result = await AcademicDepartment.findOneAndUpdate(
        {_id: id},
        payload,
        {
            new: true,
            runValidators: true,
        },
    );
    return result;
};

export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartments,
    getSingleAcademicDepartment,
    updateSingleAcademicDepartment,
};