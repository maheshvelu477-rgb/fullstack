
import mongoose from "mongoose"
import { type } from "os";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    price:{
        type:String,
        required : true
    },
    image:{
        type:String,
        required : true
}
})

const gallerySchema = new mongoose.Schema({
    image:{
        type:String,
        required : true
    }
})




const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }
});
 
const bookingSchema = new mongoose.Schema({

     name : {type: String, required: true},
     email : {type: String, required: true},
     service:{type:String, required:true},
     date: {type:String, required:true},
     time: {type:String, required:true},
     notes: {type:String, required:true}

})

export const User = mongoose.model("users", userSchema);
export const Product = mongoose.model("products", productSchema);
export const Gallery = mongoose.model("gallery", gallerySchema);
export const Booking = mongoose.model("booking", bookingSchema);