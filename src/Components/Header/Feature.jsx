import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css'; // Include the CSS file for additional styles
import productImage from '../../Components/img/electric2.png'; // Adjust the path as per your project structure

const FeatureSection = () => {
    return (
        <div id="feature">
            <div className="container">
                <div className="section-header">
                    <p>Unique</p>
                    <h1 style={{
                        fontSize:"xxx-large"
                    }}>Features</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="product-feature">
                            <div className="product-content">
                                <h2>Easy Setup and Installation</h2>
                                <p>Quick setup with plug-and-play functionality</p>
                            </div>
                            <div className="product-icon">
                                <i className="fa fa-plug"></i>
                            </div>
                        </div>
                        <div className="product-feature">
                            <div className="product-content">
                                <h2>User-Friendly Operation</h2>
                                <p>Intuitive interface for easy operation</p>
                            </div>
                            <div className="product-icon">
                                <i className="fa fa-tachometer-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-img">
                            <img src={productImage} alt="Product" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-feature">
                            <div className="product-icon">
                                <i className="fa fa-bolt"></i>
                            </div>
                            <div className="product-content">
                                <h2>Faster Transaction Processing</h2>
                                <p>Instant processing and reduced wait times</p>
                            </div>
                        </div>
                        <div className="product-feature">
                            <div className="product-icon">
                                <i className="fa fa-chart-line"></i>
                            </div>
                            <div className="product-content">
                                <h2>Advanced Reporting and Analytics</h2>
                                <p>Real-time access to detailed reports and analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
