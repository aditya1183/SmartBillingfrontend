// PrepaymentPage.js
import React from "react";
import { useLocation, useNavigate, redirect } from "react-router-dom";
import { toast } from "react-toastify";
export async function PrepaymentPageloader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    toast.error("Please Login .");
    return redirect("/");
  }

  return null;
}
const PrepaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const handleProceedToPayment = () => {
    navigate("/paymentpage", { state: { product } });
  };

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
        }}
      >
        No product selected
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Prepayment for {product.title}
      </h1>
      <div className="flex flex-col md:flex-row">
        <img
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          src={product.imgSrc}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6">
          <p className="text-gray-700 mb-2">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="text-lg font-semibold mb-2">
            <strong>Price:</strong> {product.price}
          </p>
          <button
            onClick={handleProceedToPayment}
            className="btn btn-primary mt-4"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrepaymentPage;
