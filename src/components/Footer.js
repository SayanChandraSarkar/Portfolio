import React from "react";
import { Icon } from "@iconify/react";

import "../scss/Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="line"></div>

            <div className="footerInfo">
              <div className="footerImg">
                <img src="footerLogo.png" alt="logo" />
              </div>
              <div className="rights">&copy; 2024. All rights reserved</div>
              <div className="madeLove">
                Made with{" "}
                <Icon icon="emojione-v1:red-heart" className="heart" /> by{" "}
                <p>Sayan Sarkar</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
