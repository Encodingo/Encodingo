import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});

const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Importing & Using Routes
import user from "./Routes/userRoute.js";
import course from "./Routes/courseRoute.js";
app.use("/api/v1", user);
app.use("/api/v1", course);

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);

export default app;

// import express from "express";
// import { config } from "dotenv";
// import ErrorMiddleware from "./middlewares/Error.js";
// import cookieParser from "cookie-parser";
//  import cors from "cors";

// config({
//   path: "./config/config.env",
// });
// const app = express();

// // Using Middlewares
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// // Importing & Using Routes
// import user from "./Routes/userRoute.js";

// app.use("/api/v1", user);

// export default app;

// app.get("/", (req, res) =>
//   res.send(
//     `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
//   )
// );

// app.use(ErrorMiddleware);
