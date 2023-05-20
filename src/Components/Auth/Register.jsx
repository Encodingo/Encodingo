import { useState, useEffect } from "react";
import registerImg from "../../assets/register.svg";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { register } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // const myForm = new FormData();
    // myForm.append("name", name);
    // myForm.append("email", email);
    // myForm.append("password", password);
    dispatch(register(name, email, password));
    navigate("/register");
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showIndicator, setShowIndicator] = useState(false);
  // // const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  // const dispatch = useDispatch();

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   // console.log(password);
  // };

  useEffect(() => {
    // check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // Check For Special char

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [password, passLetter, passNumber, passChar, passLength]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const myForm = new FormData();
  //   myForm.append("name", name);
  //   myForm.append("email", email);
  //   myForm.append("password", password);
  //   dispatch(register(myForm));
  // };

  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input
            type="text"
            htmlFor="name"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="--width-100"
            placeholder="Name"
          />
          <input
            htmlFor="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="--width-100"
            placeholder="Email"
          />
          {/* PASSWORD FIELD */}
          <div className="password">
            <input
              htmlFor="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              // value={pass}
              // onChange={handlePasswordChange}
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {/* PASSWORD FIELD */}
          <button
            type="submit"
            onClick={submitHandler}
            disabled={!passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
          >
            Register
          </button>

          <span className="--text-sm --block">
            Have an account?{" "}
            <button className="--text-sm" onClick={onLogin}>
              Login
            </button>
            {/* <Link to={"/"} className="--text-sm" onClick={onLogin}>
              Login
            </Link> */}
            {/* <a href="/" >
              Login
            </a> */}
          </span>
          {/* Pass Strength Indicator */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 Character
                </span>
              </li>
            </ul>
          </div>
          {/* Pass Strength Indicator */}
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="login" />
      </div>
    </div>
  );
};

export default Register;
