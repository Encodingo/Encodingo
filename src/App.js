//  import "./App.css";
// import { useEffect } from "react";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import "./assets/css/style.css";
// import './assets/js/script.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import { useSelector } from "react-redux";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import ProtectedRoute from "./Components/Route/ProtectedRoute"
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Components/Home/Home";
import Courses from "./Components/Course/Courses";
import About from "./Components/About/About";
import Bootcamp from "./Components/Bootcamp/Bootcamp";
import Blog from "./Components/Blog/Blog";
import BackToTop from "./Components/BackToTop/BackToTop";
// import Dashboard from "./Components/Dashboard/UserDash";
import { useEffect } from "react";
import { ProtectedRoute } from "protected-route-react";
import UserDashboard from "./UserDashboard/UserDashboard";
import Bottombar from "./UserDashboard/Bottombar/Bottombar";
import { loadUser } from "./actions/userAction";
import BookSession from "./UserDashboard/BookSession/BookSession";
// import UserDash from "./Components/Dashboard/UserDash";

// import AuthContainer from "./Components/Auth/AuthContainer";

function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {/* <Header /> */}
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/book_session" element={<BookSession />} /> */}
        <Route path="/bottom" element={<Bottombar />} />

        {/* <Route  path="/loginregister" element={<Home/>} /> */}
        {/* <Route exact path="/login" component={AuthContainer} /> */}

        <Route
          path="/user_dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book_session"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BookSession/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/user_dashboard"
            >
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user_dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/user_dashboard"
            >
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/user_dashboard"
            >
              <Home />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
                 <Dashboard/>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      {/* <Footer /> */}
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </Router>
  );
}

export default App;
