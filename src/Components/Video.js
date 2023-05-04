import React from "react";
import Menu from "./Menu";
import { WiTime4 } from "react-icons/wi";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

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
      <video style={css} src="3154057140.mp4" autoPlay loop />
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
        <img src="otto2.webp" />
        <img src="otto1.jpg" />
        <img src="otto3.webp" />
        <img src="otto4.jpg" />
        <img src="otto5.jpg" />
        <img src="otto6.webp" />
        <img src="otto7.jpg" />
        <img src="otto8.jpg" />
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
    </div>
  );
};

export default Video;
