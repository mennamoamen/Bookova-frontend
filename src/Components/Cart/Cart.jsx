import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity, removeBook } from "../../Redux/cartSlice";
import styles from "./Cart.module.css";
// import Image from "./Imgs/book.jpg";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();

  function remove(isbn13) {
    dispatch(removeBook(isbn13));
  }
  function plus(index) {
    dispatch(incQuantity(index));
  }
  function minus(index) {
    dispatch(decQuantity(index));
    console.log();
  }

  return (
    <div className={`container ${styles.container} `}>
      <h1 className="mb-5">Shopping Cart</h1>

      <div className={`justify-content-center d-flex ${styles.tableContainer}`}>
        <table className="table">
          <thead>
            <tr className={styles.theadTr}>
              <th className={styles.th} scope="col">
                Product Details
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.isbn13} data={item}>
                <td className={styles.tbodyTd1}>
                  <div className="d-flex align-items-center align-content-center">
                    <div className={styles.cartDivImg}>
                      <img className={` img-fluid ${styles.cartImg} `} src={item.image} alt="" />
                    </div>

                    <div className={`d-flex row  ${styles.cartContent}`}>
                      <h5 className={styles.h5}>{item.title}</h5>
                      <p className={styles.cartContentP}>{item.subtitle}</p>
                    </div>
                  </div>
                </td>
                <td className={styles.tbodyTd2}>
                  <p> {item.price}</p>
                </td>
                <td className={styles.tbodyTd3}>
                  <div className="d-flex column border justify-content-center rounded-5">
                    <button className={styles.button} type="button" onClick={() => minus(index)}>
                      -
                    </button>
                    <p className={styles.qnt}>{item.qty}</p>
                    <button className={styles.button} type="button" onClick={() => plus(index)}>
                      +
                    </button>
                  </div>
                </td>

                <td className={styles.tbodyTd4}>
                  <p>{item.price}</p>
                </td>
                <td className={styles.tbodyTd5}>
                  <button className={styles.button} type="button" onClick={() => remove(item.isbn13)}>
                    <i className="bi bi-x" />
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

export default Cart;
