import React from "react";
import styles from "./Profile.module.css";
import pic from "./imgs/profile.png";

function Profile() {
  return (
    <div className={`my-5 mx-5 ${styles.container}`}>
      <div className="col-12 row">
        <div className={`${styles.aside} col-3 text-center m-5 bg-light  rounded`}>
          <div>
            <img className={` my-3  img-fluid ${styles.proImg} `} src={pic} alt="" />
            <h6>Hager Fathi</h6>
            <p>This is the good place | @gogioz</p>
            <div className="mb-3">
              <i className="bi bi-star-fill text-warning " />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star text-warning" />
            </div>
          </div>
          <div className={`card ${styles.card}`}>
            <div className={styles.cardBody}>
              <h5 className="card-title">My Wallet</h5>
              <p className="card-text">$12.12</p>
            </div>
          </div>
          {/* <hr className={styles.hr} /> */}

          <hr className={styles.hr} />
          <div className={`${styles.info} mx-2`}>
            <p className="my-2">Contact Information</p>
            <p>Email Address:</p>
            <p>hagarfathi@outlook.com</p>
            <p>Phone Number:</p>
            <p>01030044662</p>
            <p>Address:</p>
            <p>7 Ahmed Kamel St. Faisel, Giza, Egypt</p>
          </div>
          <hr className={styles.hr} />
        </div>
        <div className="col-8 text-center bg-light rounded my-5">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse d-flex row align-items-center" id="navbarNav">
                <ul className="nav gap-2" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`rounded ${styles.navLink}`}
                      id="allorders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#allorders"
                      type="button"
                      role="tab"
                      aria-controls="allorders"
                      aria-selected="true"
                    >
                      All Orders
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`rounded ${styles.navLink}`}
                      id="sold-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sold"
                      type="button"
                      role="tab"
                      aria-controls="sold"
                      aria-selected="false"
                    >
                      Sold
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`rounded ${styles.navLink}`}
                      id="bought-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bought"
                      type="button"
                      role="tab"
                      aria-controls="bought"
                      aria-selected="false"
                    >
                      Bought
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`rounded ${styles.navLink}`}
                      id="donated-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#donated"
                      type="button"
                      role="tab"
                      aria-controls="donated"
                      aria-selected="false"
                    >
                      Donated
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade "
                    id="allorders"
                    role="tabpanel"
                    aria-labelledby="allorders-tab"
                  >
                    <div className="container mt-4 bg-light">
                      <table className={` ${styles.table}`}>
                        <thead>
                          <tr className={styles.theadTr}>
                            <th className={styles.theadTh} scope="col">
                              Date
                            </th>
                            <th className={styles.theadTh} scope="col">
                              Store
                            </th>
                            <th className={styles.theadTh} scope="col">
                              Order
                            </th>
                            <th className={styles.theadTh} scope="col">
                              Order Total
                            </th>
                            <th className={styles.theadTh} scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                          <tr className={styles.theadTr}>
                            <td className={styles.theadTh}>3/8/2000</td>
                            <td className={styles.theadTh}>Nasr City</td>
                            <td className={styles.theadTh}>Order Number</td>
                            <td className={styles.theadTh}>$20</td>
                            <td className={styles.theadTh}>Paid</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="sold" role="tabpanel" aria-labelledby="sold-tab">
                    <div className="card my-4 ">
                      <div className="card-body">
                        <h5 className="card-title">Sold Orders</h5>
                        <p className="card-text">you dont have any orders yet</p>
                        <a href="h" className="btn btn-secondary">
                          Go To Shop
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="bought" role="tabpanel" aria-labelledby="bought-tab">
                    <div className="card my-4 ">
                      <div className="card-body">
                        <h5 className="card-title">Bought Orders</h5>
                        <p className="card-text">you dont have any orders yet</p>
                        <a href="h" className="btn btn-secondary">
                          Go To Shop
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="donated" role="tabpanel" aria-labelledby="donated-tab">
                    <div className="card my-4 ">
                      <div className="card-body">
                        <h5 className="card-title">Donated Orders</h5>
                        <p className="card-text">you dont have any sold orders yet</p>
                        <a href="h" className="btn btn-secondary">
                          Go To Shop
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Profile;
