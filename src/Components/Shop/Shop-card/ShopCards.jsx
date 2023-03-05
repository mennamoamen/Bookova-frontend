import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./card1-style.module.css";

function ShopCards({ data }) {
  ShopCards.propTypes = {
    data: PropTypes.string.isRequired,
    // .string.isRequired,
  };
  // console.log(data);
  const nav = useNavigate();

  function goTo() {
    nav(`/details/${data.isbn13}`);
    // console.log(data);
  }
  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.imgBox}`}>
        <img src={data.image} alt="" />
      </div>
      <div className={`text-wrap ${styles.content}`}>
        <h5>{data.title}</h5>
        <button className="btn btn-warning" type="button" onClick={() => goTo(data)}>
          {/* <i className="bi bi-cart-plus-fill text-light fs-3" /> */}
          go to book
        </button>
        {/* <h5>
            <button className="btn btn-warning" type="button" onClick={add}>
              <i className="bi bi-cart-plus-fill text-light fs-3"/>
            </button>
            <button className="btn btn-warning mx-2" type="button">
              <i className="bi bi-chat-square-heart-fill text-light fs-3"/>
            </button>
          </h5> */}
      </div>
    </div>
    // </Link>
  );
}

export default ShopCards;
