import React, { useEffect } from "react";
import JImage from "../src/img/J.png";
import XImage from "../src/img/X.png";
import GImage from "../src/img/G.png";

function Loader() {
  useEffect(() => {
    const resetAnimation = () => {
      const chars = document.querySelectorAll(".char");
      chars.forEach((char, index) => {
        char.style.opacity = "0"; // Reset opacity
        char.style.animation = "none"; // Reset animation
        setTimeout(() => {
          char.style.opacity = "1"; // Set opacity to trigger animation
          char.style.animation = "slideIn 0.4s ease forwards"; // Apply animation
        }, index * 500); // Add delay based on index
      });
    };

    // Call the resetAnimation function initially
    resetAnimation();

    // Reset the animation continuously
    const interval = setInterval(resetAnimation, 1600); // Adjust the delay as needed

    // Clean up function
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7); /* semi-transparent white overlay */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          #loader {
            font-size: 40px;
          }

          .char {
            display: inline-block;
            opacity: 0; /* Initially hide each character */
            animation: slideIn 0.1s ease forwards; /* Apply animation */
          }

         

          @keyframes slideIn {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          #content {
            display: none;
            text-align: center;
            margin-top: 50px;
          }
        `}
      </style>
      <div id="loader-wrapper">
        <div id="loader">
          <img className="char" src={JImage} alt="JImage" />
          <img className="char" src={XImage} alt="XImage" />
          <img className="char" src={GImage} alt="GImage" />
        </div>
      </div>
      {/* Your website content */}
      <div id="content">
        <h1>Welcome to Your Website</h1>
        <p>This is your content</p>
      </div>
    </>
  );
}

export default Loader;
