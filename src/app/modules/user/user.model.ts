import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from '../../config';

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

//pre save middleware/ hook will work on create() save()
userSchema.pre('save', async function (next) {
    // console.log(this, 'pre hook : we will save te data')
    //hashing to password into db;
    // const user = this; //->current doc
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));
    next();
});


//post save middleware/ hook
userSchema.post('save', function (doc, next) {

    doc.password = ''

    // console.log(this, 'post hook : we saved out data')

    next();
});

export const User = model<TUser>('User', userSchema);