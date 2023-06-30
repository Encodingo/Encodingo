import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPhone:{
        type:Number,
        required:true,
    },
    paidAmount:{
        type:Number,
        required:true,
    },
    userSession:{
        type:Number,
        required:true,
    },
    razorpayOrderId:{
        type:String,
        required:true,
    },
    razorpayPaymentId:{
        type:String,
        required:true,
    },
    razorpaySignature:{
        type:String,
        required:true,
    }

});
export const Subscriber=mongoose.model('Subscriber',subscriptionSchema);