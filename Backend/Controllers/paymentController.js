import Razorpay from "razorpay";
import crypto from "crypto";
import { User } from "../Models/userModel.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
console.log('hello');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

import { Payment } from "../Models/paymentModel.js";
import { Subscriber } from "../Models/subscriptionModel.js";


// console.log(process.env.RAZORPAY_API_KEY);

export const checkout = async (req, res, next) => {
  try {
    const options = {
      amount: Number(req.body.price * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
    //  console.log(order);
  } catch (ex) {
    next(ex);
  }
};

export const paymentverification = async (req, res, next) => {
  try {
    const isSubscriber=req.query.isSubscriber;
    if(isSubscriber){
      const userEmail=req.query.userEmail;
      const userName=req.query.userName;
      const userPhone=req.query.userPhone;
      const paidAmount=req.query.paidAmount;
      const userSession=req.query.userSession

      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isauthentic = expectedSignature === razorpay_signature;

    if (isauthentic) {
      const newSubscriber = new Subscriber({
        userName,
        userEmail,
        userPhone,
        paidAmount,
        userSession,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
      });
      await newSubscriber.save();
      res.redirect(`${process.env.FRONTEND_URL}/user_dashboard`);
    } else {
      res.status(400).json({
        success: false,
      });
    }


    }
    else{
    const userName = req.query.userName;
    const id = req.query.id;
    const userEmail = req.query.userEmail;
    const userPhone = req.query.mobileNumber;
    const paidAmount=req.query.paidAmount;
    // console.log(id,userEmail,userName,userPhone);

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isauthentic = expectedSignature === razorpay_signature;

    // console.log(isauthentic);

    if (isauthentic) {
      const userpayment = new Payment({
        userName,
        userEmail,
        userPhone,
        paidAmount,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
      });
      await userpayment.save();
      await User.findOneAndUpdate(
        { email: userEmail },
        { $push: { myCourses: id } },
        { returnOriginal: false }
      )
        .then((value) => {
          console.log(value.myCourses);
        })
        .catch((error) => {
          console.log(error);
        });
      res.redirect(`${process.env.FRONTEND_URL}/user_dashboard`);
    } else {
      res.status(400).json({
        success: false,
      });
    }

    
  }
  } catch (ex) {
    next(ex);
  
  }
};

// console.log(process.env.RAZORPAY_API_KEY);

export const getkey = (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY, status: true });
};
