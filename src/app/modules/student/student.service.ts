import { Student } from './student.interface'
import { StudentModel } from './student.models'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

export const studentServices = {
  createStudentIntoDB,
}
