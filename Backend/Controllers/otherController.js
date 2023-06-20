import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendSubscribeEmail } from "../utils/sendSubscribeEmail.js";
import { Newsletter } from "../Models/newsletterModel.js";

export const contact = catchAsyncError(async (req, res, next) => {
  const {email} = req.body;

  if ( !email ) {
    return next(new ErrorHandler("Please Enter Valid Email.", 400));
  }

  let e = await Newsletter.findOne({email})

  if(e){
    return next(new ErrorHandler("Already Subscribed with this email address.", 400));
  }

  await Newsletter.create({
    email:email
  })

  const to = process.env.MY_MAIL;
  const subject = "Subscription from Encodingo";
  const text = `Some one with email : ${email}. Subscribed the Newsletter of Encodingo`;

  await sendSubscribeEmail(to, subject, text);



  res.status(200).json({
    success: true,
    message: "Congratulations! You have successfully subscribed to our newsletter.",
  });
});