import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MiniFeature.css'; // Include the CSS file for additional styles

// Image imports (adjust paths as necessary)
import transactionsImage from '../../Components/img/transictions.png';
import inventoryImage from '../../Components/img/inventory.png';
import qrImage from '../../Components/img/qr.png';
import userFriendlyImage from '../../Components/img/userfriend.png';

const MiniFeature = () => {
    return (
        <div id="feature-mini">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-item">
                            <img className="imgg" src={transactionsImage} alt="Automated Transactions" />
                            <h3>Automated Transactions</h3>
                            <p>Instant payment</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-item">
                            <img className="imgg" src={inventoryImage} alt="Integration Capabilities" />
                            <h3>Integration Capabilities</h3>
                            <p>Smooth system syncing</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-item">
                            <img className="imgg" src={qrImage} alt="Digital Receipts & Automated QR" />
                            <h3>Digital Receipts & Automated QR</h3>
                            <p>Fast Process</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-item">
                            <img className="imgg" src={userFriendlyImage} alt="User-Friendly Interface" />
                            <h3>User-Friendly Interface</h3>
                            <p>Easy to use</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniFeature;
