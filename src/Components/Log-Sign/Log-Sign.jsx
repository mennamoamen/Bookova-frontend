import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../../Config/loginContext";
import styles from "./Log-Sign.module.css";

function LogSign() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: yup.object({
      fname: yup
        .string("must be string")
        .min(3, "min length is 3 chars")
        .max(15, "max chars is 15")
        .required("this field is required"),
      lname: yup
        .string("must be string")
        .min(3, "min length is 3 chars")
        .max(15, "max chars is 15")
        .required("this field is required"),
      email: yup.string("must be string").email("must be valid email").required("this field is required"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "your password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number ",
        )
        .required("this field is required"),
      phone: yup.string().matches(/^01[0125][0-9]{8}$/, "please enter a valid number"),
    }),
    onSubmit: (values) => {
      console.log("menna", values);
    },
  });
  console.log(formik.errors);
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  const { login, setLogin } = useContext(loginContext);
  const nav = useNavigate();

  function save() {
    localStorage.setItem("flag", true);
    nav("/shop");
    setLogin(true);
    console.log(btnState);
    // if btnstate = true =>signup
    // if btnstate =false =>login
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // }
  return (
    <div className={styles.body}>
      <div className={`container ${btnState ? styles.right_panel_active : ""} ${styles.container}`}>
        <div className={`${styles.container__form} ${styles.container__signup}`}>
          <form action="#" className={`form ${styles.form}`} id="form1" onSubmit={formik.handleSubmit}>
            <h2 className={styles.form__title}>Sign Up</h2>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <small className="text-danger fs-6">{formik.errors.fname}</small>
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <small className="text-danger fs-6">{formik.errors.lname}</small>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <small className="text-danger fs-6">{formik.errors.email}</small>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <small className="text-danger fs-6">{formik.errors.password}</small>
            <input
              type="numbers"
              placeholder="Mobile"
              name="phone"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <small className="text-danger fs-6">{formik.errors.phone}</small>
            <button className={`btn ${styles.btn}`} type="submit" onClick={save}>
              Sign Up
            </button>
          </form>
        </div>

        <div className={`${styles.container__form} ${styles.container__signin}`}>
          <form action="#" className={`form ${styles.form}`} id="form2" onSubmit={formik.handleSubmit}>
            <h2 className={styles.form__title}>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={`input ${styles.input}`}
              onChange={formik.handleChange}
            />
            <a href="h" className={styles.link}>
              Forgot your password?
            </a>
            <button className={`btn ${styles.btn}`} type="submit" onClick={save}>
              Sign In
            </button>
          </form>
        </div>

        <div className={styles.container__overlay}>
          <div className={styles.overlay}>
            <div className={`${styles.overlay__panel} ${styles.overlay__left}`}>
              <button className={`btn ${styles.btn}`} id="signIn" type="button" onClick={handleClick}>
                Sign In
              </button>
            </div>
            <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
              <button className={`btn ${styles.btn}`} id="signUp" type="button" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogSign;
