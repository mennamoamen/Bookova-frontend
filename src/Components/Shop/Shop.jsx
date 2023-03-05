import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopCards from "./Shop-card/ShopCards";
import styles from "./shop.module.css";
import Star from "./star.png";

function Shop() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("https://api.itbook.store/1.0/new").then((res) => {
      setBooks(res.data.books);
      console.log(res.data.books);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bookFilter"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-funnel" /> Filter
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="bookFilter"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="bookFilter">
                Filter
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <label htmlFor="checkbox-2" className="checkbox__label">
                <input type="checkbox" id="checkbox-2" className="checkbox__input" />
              </label>

              <div className="card-body">
                <h3>Categories</h3>
                <div>
                  <div>
                    <label htmlFor="edu">
                      Educational
                      <input id="edu" type="checkbox" name="categories" value="edu" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="entertainment">
                      Entertainment
                      <input id="entertainment" type="checkbox" name="categories" value="enter" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="starting">
                      History
                      <input id="starting" type="checkbox" name="categories" value="history" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="novel">
                      Novels
                      <input id="novel" type="checkbox" name="categories" value="novel" />
                    </label>
                  </div>
                </div>
                <h3>Prices</h3>
                <div>
                  <div>
                    <input type="text" name="prices" />
                  </div>
                </div>
                <h3>Availability</h3>
                <div>
                  <div>
                    <label htmlFor="avaliable">
                      Availabel
                      <input id="avaliable" type="checkbox" name="availability" value="yes" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="unavaliable">
                      Unavaliable <input id="unavaliable" type="checkbox" name="availability" value="no" />
                    </label>
                  </div>
                </div>
                <h3>Type</h3>
                <div>
                  <div>
                    <label htmlFor="sale">
                      Sale
                      <input id="sale" type="checkbox" name="type" value="sale" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="rent">
                      Rent <input id="rent" type="checkbox" name="type" value="rent" />
                    </label>
                  </div>
                </div>
                <h3>Rating</h3>
                <div>
                  <div>
                    <label htmlFor="rate1">
                      <input id="rate1" type="checkbox" name="rate" value="one" />
                      <span className="fa fa-star checked" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="rate2">
                      <input id="rate2" type="checkbox" name="rate" value="two" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="rate3">
                      <input type="checkbox" name="rate" value="three" id="rate3" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="rate4">
                      <input type="checkbox" name="four" value="bos" id="rate4" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="rate5">
                      <input type="checkbox" name="five" value="bos" id="rate5" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-8 col-sm-6 text-center px-2">
          <div className={`${styles.chip}`}>
            <img src={Star} alt="star" />
            Rating
          </div>
          <div className={`${styles.chip}`}>
            <img src={Star} alt="star" />
            Rating
          </div>
          <div className={`${styles.chip}`}>
            <img src={Star} alt="star" />
            Rating
          </div>
          <div className={`${styles.chip}`}>
            <img src={Star} alt="star" />
            Rating
          </div>
        </div>
      </div>
      <div className="row">
        {books.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-5" key={item.isbn13}>
            <ShopCards data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
