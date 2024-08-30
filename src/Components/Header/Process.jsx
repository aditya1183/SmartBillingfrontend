import React from "react";
import "./Process.css"; // Import the CSS file for additional styles
import counterImage from "../../Components/img/counter.png"; // Adjust the path as per your project structure

const Process = () => {
  // Function to generate the thumbnail for the video
  const labnolThumb = (id) => {
    return (
      <>
        <img src={counterImage} alt="Thumbnail" />
        <div className="play"></div>
      </>
    );
  };

  const labnolIframe = (e) => {
    const embedUrl =
      "https://www.youtube.com/embed/tnEQm00uwfI?si=imJBYJAYmAOZckaY";
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    e.currentTarget.replaceWith(iframe);
  };

  return (
    <div id="process">
      <div className="container">
        <div className="section-header">
          <p>How To</p>
          <h1>SET-UP</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-plug"></i>
              <h2>Install</h2>
              <p>
                Unbox the machine, set it up in your workspace, connect it to a
                power source, and turn it on
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-sliders-h"></i>
              <h2>Configure</h2>
              <p>
                Link the machine to your Wi-Fi network, customize the settings
                such as language and currency, and integrate it with your
                existing software systems
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-check"></i>
              <h2>Transform</h2>
              <p>
                Begin using the machine for efficient billing, track
                performance, and optimize your operations.
              </p>
            </div>
          </div>
        </div>
        <div id="video-section">
          <div className="container">
            <div className="youtube-player" onClick={labnolIframe}>
              {labnolThumb("jssO8-5qmag")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
