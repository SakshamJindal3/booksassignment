import connectDB from "src/config/db";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
require("dotenv").config();
import { authorize } from "src/functions/authorization/handler";
import token from "jsonwebtoken";
import adminRegister from "src/models/user";
import { formatJSONResponse } from "src/utills/ApiGateway";

export const adminregister: any = async (event) => {
    console.log("hello");
    await connectDB();
    try {
        const message = JSON.parse(event.body);
        console.log(message);
        const saltRounds = Number(process.env.SALTROUND);
        const password = message.password;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const createadmin = new adminRegister({
            role: message.role,
            fname: message.fname,
            lname: message.lname,
            email: message.email,
            password: hashedPassword,
        });
        console.log("hello");
        const admindata = await createadmin.save();
        console.log("Successful");
        return formatJSONResponse(200, { data: admindata });
    } catch (error) {
        return formatJSONResponse(400, { data: "Invalid Details" });

    }
};

export const adminlogin: any = async (event) => {
    try {
        await connectDB();
        console.log("Hey");
        const message = JSON.parse(event.body);
        console.log(message);
        let loginuser = await adminRegister.findOne({ email: message.email });
        console.log(loginuser);
        const result = await bcrypt.compare(message.password, loginuser.password);
        console.log("hello");
        if (result == true) {
            const tokens = await token.sign({ email: loginuser.email, id: loginuser._id }, process.env.SECRETKEY, { expiresIn: '1h' })

            console.log("Successful");

            return formatJSONResponse(200, { data: tokens });

        } else {
            return formatJSONResponse(400, { data: "Invalid Details" });
        }
    } catch (error) {
        return formatJSONResponse(400, { data: "Not found" });
    }
};
