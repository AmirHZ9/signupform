import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toastify";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAccept: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data, touched]);

  const changehandler = (event) => {
    if (event.target.name === "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focushandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submithandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("successfull", "success");
    } else {
      notify("error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmpassword: true,
        isAccept: false,
      });
    }
  };

  return (
    <div className={style.container}>
      <form className={style.formcontainer}>
        <h1 className={style.header}>Login</h1>
        <div className={style.forminput}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? style.oncomplete
                : style.completeinput
            }
            type="email"
            name="email"
            value={data.email}
            onChange={changehandler}
            onFocus={focushandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={style.forminput}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? style.oncomplete
                : style.completeinput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changehandler}
            onFocus={focushandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={style.button}>
          <Link to="/Signup">Sign Up</Link>
          <button onClick={submithandler}>Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
