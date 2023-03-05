import { useFormik } from "formik";
import * as yup from "yup";

import React from "react";
import styles from "./add-book.module.css";
import Img from "./Imgs/bookImg.jpg";

function AddBook() {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      pages: "",
      price: "",
      images: [],
      category: "",
      condition: "",
      avalibaility: "",
    },
    validationSchema: yup.object({
      title: yup.string("must be string").required("this field is required"),
      author: yup
        .string("must be string")
        .min(2, "minmum characters is one letter")
        .required("this field is required"),
      pages: yup.number("must be number").required("this field is required"),
      price: yup.number("must be number").required("this field is required"),
      // images: yup
      //   .array("mus be array of strings")
      //   .of(yup.string("must be string"))
      //   .required("this field is required"),
      // category: yup.string("must be string").required("this field is required"),
      // condition: yup.string("must be string").required("this field is required"),
      // avalibaility: yup.string("must be string").required("this field is required"),
    }),
    onSubmit: async (values) => {
      // try {
      //   const formData = new FormData();
      //   values.images.forEach((image) => {
      //     formData.append("images", image);
      //   });
      //   const response = await fetch("/api/upload-images", {
      //     method: "POST",
      //     body: formData,
      //   });
      //   const data = await response.json();
      //   console.log(data);
      // } catch (error) {
      //   console.error(error);
      // } finally {
      //   setSubmitting(false);
      // }
      // const valueses = formik.values;
      console.log("hi", values);
      console.log(formik.errors);
    },
  });

  return (
    <div className={`justifiy-content-center col-12 d-flex column container ${styles.container}`}>
      <div className="col-6 ">
        <h1 className="mt-5 ">Add Your Book</h1>
        {/* {({ setFieldValue }) => ( */}
        <form className="mt-5" encType="multipart/form-data" onSubmit={formik.handleSubmit}>
          <label htmlFor="exampleInputText1" className="form-label d-flex   row ">
            <p className=" mb-0">Title</p>
            <input
              type="text"
              name="title"
              className={`form-control ${styles.form_control}`}
              id="exampleInputText1"
              aria-describedby="textHelp"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="exampleInputText2" className="form-label d-flex  row ">
            <p className="mt-2 mb-0">ِAuthor</p>
            <input
              type="Text"
              name="author"
              className={`form-control ${styles.form_control}`}
              id="exampleInputText2"
              aria-describedby="textHelp"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="exampleInputNum1" className="form-label d-flex  row ">
            <p className="mt-2 mb-0">Pages</p>
            <input
              name="pages"
              type="text"
              className={`form-control ${styles.form_control}`}
              id="exampleInputNum1"
              aria-describedby="numHelp"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="exampleInputNum2" className="form-label row d-flex  ">
            <p className=" mb-0 mt-2">Price</p>
            <input
              name="price"
              type="text"
              className={`form-control ${styles.form_control}`}
              id="exampleInputNum2"
              aria-describedby="numHelp"
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="formFileMultiple" className="form-label">
            <p className=" mb-0 mt-2">Images</p>

            <input
              className={`form-control  ${styles.imgForm}`}
              name="images"
              type="file"
              id="formFileMultiple"
              multiple
              // onChange={(event) => {
              //   const { files } = event.currentTarget;
              //   const urls = [];
              //   for (let i = 0; i < files.length; i += 1) {
              //     const url = URL.createObjectURL(files[i]);
              //     urls.push(url);
              //   }
              //   setFieldValue("images", files);
              //   setFieldValue("imageUrls", urls);
              // }}
            />
          </label>

          <div>
            <p>Condition</p>
            <label htmlFor="new" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="new"
                name="condition"
                value="New"
                onChange={formik.handleChange}
              />
              <span>New</span>
            </label>
            <label htmlFor="used" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="used"
                name="condition"
                value="Used"
                onChange={formik.handleChange}
              />
              <span>Used</span>
            </label>
          </div>
          <div>
            <p>Avaliablity</p>
            <label htmlFor="sale" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="sale"
                name="avalibaility"
                value="Sale"
                onChange={formik.handleChange}
              />
              <span>For sale</span>
            </label>
            <label htmlFor="borrowing" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="borrowing"
                name="avalibaility"
                value="Borrowing"
                onChange={formik.handleChange}
              />
              <span>For borrowing</span>
            </label>
            <label htmlFor="donation" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="donation"
                name="avalibaility"
                value="Donation"
                onChange={formik.handleChange}
              />
              <span>For donation</span>
            </label>
          </div>
          <div>
            <p>Category</p>
            <label htmlFor="general" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="general"
                name="category"
                value="General"
                onChange={formik.handleChange}
              />
              <span>General</span>
            </label>
            <label htmlFor="educational" style={{ width: "20%" }}>
              <input
                className="mx-2"
                type="radio"
                id="educational"
                name="category"
                value="Educational"
                onChange={formik.handleChange}
              />
              <span>Educational</span>
            </label>
          </div>
          {/* <div>{values.imageUrls && values.imageUrls.map((url) => <img src={url} alt="Uploaded" />)}</div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* <div>
            <p>Choose Category</p>
            <div className="d-flex ">
              <label htmlFor="vehicle1" style={{ width: "20%" }}>
                <input
                  className="mx-2"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  onChange={formik.handleChange}
                />
                <span>General</span>
              </label>
              <label htmlFor="vehicle1">
                <input className="mx-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <span>Educational</span>
              </label>
            </div>
            <div className="dropdown my-3 ">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="h">
                    short stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    adventure stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    novel
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    horror
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    comics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    classics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    literary fiction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    poetry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    plays
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    Thrillers
                  </a>
                </li>
              </ul>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="h">
                    Prep3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    High School Junior
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    High School Sophomore
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="h">
                    High School senior
                  </a>
                </li>
                </ul>
                </div>
              </div>  */}
        </form>
        {/* // )}  */}
      </div>

      <img src={Img} alt="" className="col-5" style={{ height: "" }} />
    </div>
    // </div>
  );
}

export default AddBook;
