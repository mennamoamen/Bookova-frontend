import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/cartSlice";
import { addToWishList } from "../../Redux/wishSlice";
import styles from "./book-details.module.css";

function Book() {
  const params = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios.get(`https://api.itbook.store/1.0/books/${params.isbn13}`).then((res) => {
      setBook(res.data);
      console.log(res.data);
    });
  }, [params.isbn13]);

  function add() {
    dispatch(addToCart({ ...book, qty: 1 }));
  }
  function addWish() {
    dispatch(addToWishList(book));
  }

  return (
    <div className="container">
      <div className={`${styles.card}`}>
        <div className="container-fliud">
          <div className="row">
            <div className="col-md-6">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={book.image} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={book.image} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={book.image} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className={`${styles.details} col-md-6`}>
              <h3 className={`${styles.productTitle}`}>{book.title}</h3>
              <p className={`${styles.productdescription}`}>{book.desc}</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-semibold text-secondary">Price</td>
                    <td className="fw-bold">{book.price}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Rating</td>
                    <td>
                      <div className={`${styles.rating}`}>
                        <div className="stars">
                          <span className={`fa fa-star ${styles.checked}`} />
                          <span className={`fa fa-star ${styles.checked}`} />
                          <span className={`fa fa-star ${styles.checked}`} />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span>{book.rating}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Author</td>
                    <td className="fw-bold">{book.authors}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Publisher</td>
                    <td className="fw-bold">{book.publisher}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Owner</td>
                    <td className="fw-bold">Menna Moamen</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Pages</td>
                    <td className="fw-bold">{book.pages}</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-secondary">Language</td>
                    <td className="fw-bold">English</td>
                  </tr>
                </tbody>
              </table>

              <div className="action">
                <button
                  className={`${styles.addtocart} btn btn-warning`}
                  type="button"
                  onClick={() => add(book)}
                >
                  add to cart
                </button>
                <button
                  className={`${styles.like} btn btn-warning btn  mx-1`}
                  type="button"
                  onClick={addWish}
                >
                  <i className="bi bi-heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
