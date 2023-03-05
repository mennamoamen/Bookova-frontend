import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { delBook } from "../../Redux/wishSlice";

// import Image from "../Cart/Imgs/book.jpg";
import styles from "./Wishlist.module.css";

function Wishlist() {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishReducer.wishlist);

  function add(item) {
    dispatch(addToCart({ ...item, qty: 1 }));
    dispatch(delBook(item.isbn13));
    // console.log(item);
  }
  function remove(isbn13) {
    dispatch(delBook(isbn13));
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1 className="mb-5">WishList</h1>
      <div className={` ${styles.tableContainer} justify-content-center d-flex`}>
        <table className="table">
          <thead>
            <tr className={styles.tableTr}>
              <th scope="col">Action</th>
              <th scope="col">Image</th>
              <th className={styles.tableTh} scope="col">
                Product Details
              </th>
              <th scope="col">Price</th>
              <th scope="col">Stock Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((item) => (
              <tr key={item.isbn13} data={item}>
                <td className={styles.tbodyTd1}>
                  <button className={styles.button} type="button" onClick={() => remove(item.isbn13)}>
                    <i className="bi bi-x" />
                  </button>
                </td>
                <td className={styles.tbodyTd2}>
                  <img className={styles.tbodyTdImg} src={item.image} alt="" />
                </td>
                <td className={styles.tbodyTd3}>
                  <div className={`d-flex row  ${styles.cartContent}`}>
                    <h5 className={styles.h5}>{item.title}</h5>
                    <p className={styles.cartContentP}>{item.subtitle}</p>
                  </div>
                </td>
                <td className={styles.tbodyTd4}>
                  <p> {item.price}</p>
                </td>

                <td className={styles.tbodyTd5}>
                  <p>Sold</p>
                </td>
                <td className={styles.tbodyTd6}>
                  <button type="button" className="btn btn-dark" onClick={() => add(item)}>
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
