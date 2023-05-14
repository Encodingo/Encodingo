import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./assets/css/style.css";
// import './assets/js/script.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Courses from "./Components/Course/Courses";
import About from "./Components/About/About";
import Bootcamp from "./Components/Bootcamp/Bootcamp";
 import Blog from "./Components/Blog/Blog";
import BackToTop from "./Components/BackToTop/BackToTop";
function App() {
  return (
    <Router>
      <Header />
      <BackToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
