import connectDB from "src/config/db";
require("dotenv").config();
import { authorize } from "src/functions/authorization/handler";
import books from "src/models/books";
import { formatJSONResponse } from "src/utills/ApiGateway";

export const addbooks: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        console.log("hello");
        await connectDB();
        try {
            const message = JSON.parse(event.body);
            console.log(message);
            const addbook = new books({
                userid: result.userid,
                author: message.author,
                description: message.description,
                name: message.name,
                price: message.price,
            });
            console.log("hello");
            const bookdata = await addbook.save();
            console.log("Successful");
            return formatJSONResponse(200, { data: bookdata });
        } catch (error) {
            return formatJSONResponse(400, { data: "Invalid Details" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};

export const getbookdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            console.log("Hey");
            await connectDB();
            const userbookdata = await books.find(result.userid);
            // const booksdatas = await books.find();
            return formatJSONResponse(200, { data: userbookdata });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "Invalid Request" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });

    }
};
export const admingetbookdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            console.log("Hey");
            await connectDB();
            const userbookdata = await books.find();
            // const booksdatas = await books.find();
            return formatJSONResponse(200, { data: userbookdata });
        }
        catch (err) {
            return formatJSONResponse(400, { data: "Invalid Request" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });

    }
};

export const updatebookdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            console.log("hello");
            const data = JSON.parse(event.body);
            console.log(data);
            let booksd = await books.findById(data._id);
            console.log(booksd);
            booksd.author = data.auhtor || booksd.author;
            booksd.description = data.description || booksd.description;
            booksd.price = data.price || booksd.price;
            const result = await booksd.save();
            console.log(result);
            return formatJSONResponse(200, { data: "Successful" });


        }
        catch {
            return formatJSONResponse(400, { data: "Invalid Operation" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};

export const adminupdatebookdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            console.log("hello");
            const data = JSON.parse(event.body);
            console.log(data);
            let booksd = await books.findById(data._id);
            console.log(booksd);
            booksd.author = data.auhtor || booksd.author;
            booksd.description = data.description || booksd.description;
            const result = await booksd.save();
            console.log(result);
            return formatJSONResponse(200, { data: "Successful" });


        }
        catch {
            return formatJSONResponse(400, { data: "Invalid Operation" });

        }
    }
    else {
        return formatJSONResponse(440, { data: "Session Expired" });
    }
};


export const deletebooksdata: any = async (event) => {
    const result = await authorize(event);
    if (result.result === true) {
        try {
            await connectDB();
            const data = JSON.parse(event.body);
            await books.findByIdAndDelete(data._id);
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