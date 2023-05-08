import React, { useState } from "react";
import Menu from "./Menu";
import { WiTime4 } from "react-icons/wi";
import {
  AiFillPhone,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillMail,
} from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";

const Video = () => {
  const css = {
    width: " 100%",
    height: " auto",
    backGroundColor: "black",
  };

  return (
    <div>
      <div className="Overlay">
        <div className="text-overlay">
          <h3>Italian eating and and socail eating </h3>
          <p>
            Otto Italian Kitchen is an authentic pizzeria and bakery inspired by
            childhood memories of Naples, serving the finest artisan Italian
            cuisine for breakfast, lunch and dinner.
          </p>
          <button>Book now</button>

          <button>Menu and app</button>
        </div>
      </div>
      <video style={css} src="3154057140.mp4" controls loops />
      <div className="Menu-css">
        <div className="text-menu">
          <h3>Menu</h3>
          <p>
            We make joyous, fresh and seasonal Italian comfort food with the
            best possible ingredients – just like “my nonna taught me”. If you
            have dietary requirements, please ask one of our staff for more
            information about how our menus can be adapted.
          </p>
          <div className="Buttuons">
            <div className="Button1">
              <button>1</button>
              <button>2</button>
              <button>6</button>
              <button>5</button>
              <button>3</button>
            </div>
            <div className="Button2">
              <button>4</button>
              <button>7</button>
              <button>9</button>
              <button>8</button>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-show">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-80 w-80"
              src="otto2.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-30 w-100"
              src="otto7.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-80 w-80"
              src="otto8.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="voch">
        <h2>Gift vouchers</h2>
        <p>
          Available in any value to suit your gifting needs, our gift vouchers
          are the ideal gift for any occasion. Pop in or call us on 01481 710888
          for further information.
        </p>
        <img src="vouchers.webp" height="500px" width="500px" />
      </div>
      <div className="reservation">
        <h1>Reservations</h1>
        <p>
          Make your reservation at Otto using our ResDiary™ form. If your party
          size is larger than six people, please call us on 01481 710888 to
          discuss your requirements. BOOK NOW
        </p>
        <button>Book now</button>
        <p>
          {" "}
          <span style={{ fontSize: "smaller" }}>
            Reservations of more than six people placed through our ResDiary™
            form will not be processed. Reservations placed through Facebook
            Messenger will not be processed.
          </span>{" "}
        </p>
      </div>
      <div className="time">
        <h1>Opening hours</h1>
        <WiTime4 />
        <p>Monday</p>
        <p>5:30 - late</p>
        <WiTime4 />
        <p>Monday</p>
        <p>5:30 - late</p>
        <WiTime4 />
        <p>Monday</p>
        <p>5:30 - late</p>
        <WiTime4 />
        <p>Monday</p>
        <p>5:30 - late</p>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <AiFillPhone /> 0551442563 <br />
        <AiFillMail /> n@gmail.com
      </div>
      <footer>
        <div className="icons">
          <AiFillFacebook />
          <AiOutlineInstagram />
        </div>
        <div className="copyright">
          <p>Copyright © 2023 China Red Group. All rights reserved.</p>
        </div>
        <div className="copyright">
          <p>Privacy policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Video;
