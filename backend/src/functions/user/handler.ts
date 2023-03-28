import connectDB from "src/config/db";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
require("dotenv").config();
import { authorize } from "src/functions/authorization/handler";
import token from "jsonwebtoken";
import User from "src/models/user";
import { formatJSONResponse } from "src/utills/ApiGateway";

export const register: any = async (event) => {
    console.log("hello");
    await connectDB();
    try {
        const message = JSON.parse(event.body);
        console.log(message);
        const saltRounds = Number(process.env.SALTROUND);
        const password = message.password;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const createuser = new User({
            role: message.role,
            fname: message.fname,
            lname: message.lname,
            email: message.email,
            password: hashedPassword,
        });
        console.log("hello");
        const userdata = await createuser.save();
        console.log("Successful");
        return formatJSONResponse(200, { data: userdata });
    } catch (error) {
        return formatJSONResponse(400, { data: "Invalid Details" });

    }
};

export const login: any = async (event) => {
    try {
        await connectDB();
        console.log("Hey");
        const message = JSON.parse(event.body);
        console.log(message);
        let loginuser = await User.findOne({ email: message.email });
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

export const getuserdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            console.log("Hey");
            await connectDB();
            const e = await User.find();
            return formatJSONResponse(200, { data: e });

        } catch (err) {
            return formatJSONResponse(400, { data: "Invalid request" });
        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};

export const deleteuser: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const data = JSON.parse(event.body);
            await User.findByIdAndDelete(data._id);
            return formatJSONResponse(200, { data: "delete successful" });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "invalid details" });
        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};

