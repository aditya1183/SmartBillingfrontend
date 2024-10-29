import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import bill1 from "../../Components/img/bill1.png";
import bill2 from "../../Components/img/bill2.png";
import bill3 from "../../Components/img/bill3.png";
import bill4 from "../../Components/img/bill4.png";
const Products = () => {
  const productData = [
    {
      title: "Bill Master",
      description: "Multi-Channel Receipt Printing",
      price: "$199",
      imgSrc: bill1,
    },
    {
      title: "QuickBill",
      description: "Integrated Payment Terminal",
      price: "$299",
      imgSrc: bill2,
    },
    {
      title: "E-Bill Pro",
      description: "High-Speed Processing",
      price: "$399",
      imgSrc: bill3,
    },
    {
      title: "Invoicify",
      description: "High-Resolution Display",
      price: "$499",
      imgSrc: bill4,
    },
  ];

  return (
    <div id="products">
      <div className="container">
        <div className="section-header">
          <p>Affordable</p>
          <h1>Price</h1>
        </div>
        <div className="row align-items-center">
          {productData.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <Link
                to={{
                  pathname: "/prepaymentpage",
                }}
                state={{ product }}
              >
                <div className="product-single">
                  <div className="product-title">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-img">
                    <img src={product.imgSrc} alt="Product" />
                  </div>
                  <div className="product-footer">
                    <h3>{product.price}</h3>
                    <a className="btn" href="#">
                      Buy Now
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
