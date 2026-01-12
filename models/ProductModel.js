import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:trusted
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.ObjectID,
        ref:'Category',
        required:true
    },
    photo:{
        type:Buffer,
        contentType:String

    },
    shipping:{
        type:Boolean,
    }
})


export default mongoose.model('Products',productSchema)