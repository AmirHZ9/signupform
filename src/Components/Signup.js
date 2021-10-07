import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toastify";
import style from "./signup.module.css";
function Signup() {
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
        <h1 className={style.header}>Sign Up</h1>
        <div className={style.forminput}>
          <label>Name</label>
          <input
            className={(errors.name && touched.name ) ? style.oncomplete : style.completeinput }
            type="text"
            name="name"
            value={data.name}
            onChange={changehandler}
            onFocus={focushandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={style.forminput}>
          <label>Email</label>
          <input
          className={(errors.email && touched.email ) ? style.oncomplete : style.completeinput }
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
          className={(errors.password && touched.password ) ? style.oncomplete : style.completeinput }
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
        <div className={style.forminput}>
          <label>Confirmpassword</label>
          <input
          className={(errors.confirmpassword && touched.confirmpassword ) ? style.oncomplete : style.completeinput }
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={changehandler}
            onFocus={focushandler}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <span>{errors.confirmpassword}</span>
          )}
        </div>
        <div className={style.forminput}>
          <div className={style.formcheckbox}>
            <label>I accept privacy and policy</label>
            <input
            className={(errors.isAccept && touched.isAccept ) ? style.oncomplete : style.completeinput }
              type="checkbox"
              name="isAccept"
              value={data.isAccept}
              onChange={changehandler}
              onFocus={focushandler}
            />

          </div>
            {errors.isAccept && touched.isAccept && (
              <span>{errors.isAccept}</span>
            )}
        </div>

        <div className={style.button}>
          <a href="#">Login</a>
          <button onClick={submithandler}>Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
