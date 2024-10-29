import React, { useState } from "react";
import "./Faqs.css"; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is a digital smart billing machine?",
      answer:
        "A digital smart billing machine is an advanced point-of-sale (POS) system that automates the billing process, integrates with other business systems, generates digital receipts, and often includes features like automated QR code generation for enhanced functionality.",
    },
    {
      question:
        "Can I customize the QR codes generated by the billing machine?",
      answer:
        "Yes, many digital smart billing machines allow customization of QR codes. You can typically configure the information included in the QR code, such as transaction details, URLs for digital receipts, or links for customer feedback.",
    },
    {
      question: "How do I handle software updates and maintenance?",
      answer:
        "This includes information on updating the billing machine’s software, applying patches, and performing routine maintenance to ensure continued optimal performance.",
    },
    {
      question:
        "What support is available if I encounter issues with the billing machine?",
      answer:
        "We provide customer support services, including technical assistance, troubleshooting guides, and maintenance support. You can usually contact support via phone, email, or through the provider's online help resources.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="faqs">
      <div className="container">
        <div className="section-header">
          <p>Quick</p>
          <h1>FAQs</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="faqs-text">
              <h2>Frequently Asked Questions</h2>
              <p>
                If you have any questions, we're here to help. Whether you need
                guidance on setting up our digital billing machines, connecting
                them to your network, or integrating them with existing systems,
                we provide detailed instructions and support. Our team is also
                ready to assist with customizing settings, generating digital
                receipts, and troubleshooting issues to ensure optimal
                performance.
              </p>
              <p>
                Our goal is to deploy as many digital billing systems as
                possible, driving the transition to a more digital world. We are
                dedicated to enhancing efficiency and streamlining operations
                through advanced technology. By providing state-of-the-art
                solutions, we aim to foster seamless, paperless transactions and
                improve the overall user experience.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div id="accordion">
              {faqs.map((faq, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <a
                      className="card-link"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                      style={{ cursor: "pointer" }}
                    >
                      {faq.question}
                    </a>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;