import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-6 ">
      <div className="flex justify-between ring-1 ring-gray-200 shadow-md p-4 rounded-md">
        <p>Copy Right Choel Sovandara© {currentYear}</p>
        <div >
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
