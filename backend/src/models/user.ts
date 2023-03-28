import mongoose from "mongoose";
const User = new mongoose.Schema({
    userid :{
        type: "String"
    },
    role: {
        type: "String"
    },
    fname: {
        type: "String",
        required: true
    },
    lname: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true,
        unique : true,

    },
    password : {
        type : "String",
        required : true,
        }
});
export interface UserDoc extends mongoose.Document {
    userid : String,
    role: String,
    fname: String,
    lname: String,
    email: String,
    password : String

}

export default mongoose.model<UserDoc>('User', User);
