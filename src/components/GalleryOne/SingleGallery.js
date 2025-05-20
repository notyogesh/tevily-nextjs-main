import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image = "" }) => {
  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={image.src} alt="" />
        <div className="gallery-one__iocn">
          <a href="https://www.instagram.com/make_your_vacations?igsh=MWVsc3U0dG51bW1oeQ%3D%3D&utm_source=qr">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SingleGallery;
