// src/components/PaymentPage.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export async function paymentpageloader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    toast.error("Please Login .");
    return redirect("/");
  }

  return null;
}
const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:8082/api/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:8082/api/v1/payment/checkout", {
        amount: product.amount,
      });

      const options = {
        key: key, // Replace with your Razorpay key
        amount: order.amount, // Convert to paise
        currency: "INR",
        name: product.title,
        description: product.description,
        image: product.imgSrc,
        order_id: order.id,
        callback_url:
          "http://localhost:8082/api/v1/payment/paymentverification",

        prefill: {
          name: "Aditya",
          email: "youremail@example.com",
          contact: "999999934432424234999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in payment: ", error);
    }
  };

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "95vh",
          fontSize: "3rem",
          padding: "1rem 2rem",
          borderRadius: "10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "rgb(226 232 240)",
        }}
      >
        No product selected for payment
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Proceed with Payment</h1>
      <img
        style={{
          height: "20%",
          width: "30%",
        }}
        src={product.imgSrc}
        alt=""
      />
      <p className="text-lg mb-4">
        You are about to pay for: <strong>{product.title}</strong>
      </p>
      <p className="text-lg mb-4">
        Amount: <strong>{product.price}</strong>
      </p>
      <button
        onClick={handlePayment}
        className="btn btn-primary text-white px-6 py-2 mt-4"
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentPage;
