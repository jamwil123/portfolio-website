import React from "react";
import jamesFace from "../IMG_6790.jpg";

export default function Intro() {
  return (
    <div>
      <div className="welcomeText">
        <div className="introText">
          <main className="introTextMain">
            <div className="nameAndWelcome">
              <p className='hiJames'>Hi, I'm James. </p>
              <p> I am a Junior Developer!</p>
            </div>
            <p className="introSubText">
              <p>Please take a look around my website, </p>

              <p>you can see my past projects and details to contact me</p>
            </p>
          </main>
        </div>
        <div className="homeImg">
          <img src={jamesFace} alt="james" className="jamesPicture" />
        </div>
      </div>
    </div>
  );
}
