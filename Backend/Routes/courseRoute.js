import express from "express";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
} from "../Controllers/courseController.js";
const router = express.Router();

// get all courses
router.route("/courses").get(getAllCourses);

// Create a new Course
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, createCourse);

router
  .route("/course/:id")
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

export default router;
