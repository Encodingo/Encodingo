import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Course } from "../Models/courseModel.js";

// get all courses anyone
export const getAllCourses = catchAsyncError(async (req, res, next) => {
//   const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const courses = await Course.find({
    // title: {
    //   $regex: keyword,
    //   $options: "i",
    // },
    category: {
      $regex: category,
      $options: "i",
    },
  });
  res.status(200).json({
    success: true,
    courses,
  });
});

// create a new Course only admin
export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, category , level, duration, rating, users, price } = req.body;

  if (!title || !category  || !level || !duration || !rating || !users || !price) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  // for poster upload we use multer
  //   const file = req.file;

  //   const fileUri = getDataUri(file);

  //   const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Course.create({
    title,
    category,
    level,
    duration,
    rating,
    users,
    price,
    poster: {
      public_id: "tempid",
      url: "tempurl",
    },
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully, Now you can add lectures.",
  });
});


// delete the course
export const deleteCourse = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
  
    const course = await Course.findById(id);
  
    if (!course) return next(new ErrorHandler("Course not found", 404));
  
    // first distroy poster of course
    // await cloudinary.v2.uploader.destroy(course.poster.public_id);
  
    // loop entire lectures array to distroy one by one lec
    // for (let i = 0; i < course.lectures.length; i++) {
    //   const singleLecture = course.lectures[i];
    //   await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
    //     resource_type: "video",
    //   });
    // }
  
    // finally remove course
    await course.remove();
  
    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });
  });
