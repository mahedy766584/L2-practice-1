/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose"

export type TUserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string;
  user: Types.ObjectId
  password: string;
  name: TUserName
  gender: 'Male' | 'Female'
  dateOfBirth: Date;
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  email: string
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImage: string;
  isDeleted: boolean,
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
};

//for creating static;
export interface StudentModel extends Model<TStudent>{
  isUserExists(id: string): Promise<TStudent | null>
}


//for creating instance
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };
// export type StudentsModel = Model<
//   TStudent, Record<string, never>, StudentMethods
// >
