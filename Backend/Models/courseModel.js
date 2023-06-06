import mongoose from "mongoose";

const courseSchema  = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter course name"],
        trim:true,
    },
    category:{
        type:String,
        required:[true,"Please enter category"],
    },
    level:{
        type:String,
        required:[true,"Please enter level"],
    },
    duration:{
        type:Number,
        required:[true,"Please enter duration"],
    },
    rating:{
        type:Number,
        required:[true,"Please enter rating"],
    },
    users:{
        type:Number,
        required:[true,"Please enter users"],
    },
    price:{
        type:Number,
        required:[true,"Please enter price"],
    },
    poster:{
        public_id:{
             type:String,
             required:true
         },
         url:{
            type:String,
            required:true
        },
    },
})

export const Course = mongoose.model('Course', courseSchema);