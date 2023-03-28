import mongoose from "mongoose";
const books = new mongoose.Schema({
    author: {
        type: "String"
    },
    description: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true,
    },
    price: {
        type: "String",
        required: true,

    },
});
export interface BookDoc extends mongoose.Document {
    author: String,
    description: String,
    name: String,
    price: String,

}

export default mongoose.model<BookDoc>('books', books);
