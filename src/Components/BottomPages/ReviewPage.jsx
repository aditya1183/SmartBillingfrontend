import React from "react";
import "./Reviewpage.css"; // Import the CSS file

import tiwari from "../../Components/img/tiwari.jpg";
import madhu from "../../Components/img/madhu.jpg";
import ashok from "../../Components/img/ashok.jpg";
import rishab from "../../Components/img/rishab.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Dr Raj Gaurang Tiwari",
      title: "I-Gamma Dean",
      review:
        "The smart digital billing system and its website are game-changers for our college. The intuitive design and seamless integration have made financial management incredibly efficient and easy. A fantastic tool for our administrative needs!",
      imgSrc: tiwari,
    },
    {
      name: "Dr Madhu Chitkara",
      title: "Vice Chancellor",
      review:
        "This billing system is top-notch! It’s streamlined our financial operations perfectly, and the website is both sleek and user-friendly. The combination has significantly improved our efficiency and accuracy.",
      imgSrc: madhu,
    },
    {
      name: "Dr Ashok K Chitkara",
      title: "Chancellor",
      review:
        "The smart digital billing system, paired with its excellent website, has transformed our billing processes. The ease of use and comprehensive features have made managing finances a breeze. We’re extremely satisfied.",
      imgSrc: ashok,
    },
    {
      name: "Rishab Kumar",
      title: "CSE-Branch Trainer",
      review:
        "I’m impressed by the smart digital billing system and its website. The user-friendly design and powerful features make invoicing and payments straightforward. It’s an invaluable tool for any trainer!",
      imgSrc: rishab,
    },
  ];

  return (
    <div id="testimonial">
      <div className="container">
        <div className="section-header">
          <p>Customer</p>
          <h1>Review</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider-nav">
              {testimonials.map((testimonial, index) => (
                <div className="slider-nav" key={index}>
                  <img src={testimonial.imgSrc} alt="Testimonial" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div className="slider-item" key={index}>
                  <h1>{testimonial.name}</h1>
                  <h2>{testimonial.title}</h2>
                  <p>{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
