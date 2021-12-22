import React from "react";
import jamesFace from '../IMG_6790.jpg'

export default function Home() {
  return (
    <div className="homeMain">
      <div className="welcomeText">
        <div className="introText">
          <main className="introTextMain" >
          <div className="nameAndWelcome" >
            <p>Hi, I'm James. </p>
            <p> Welcome to my portfolio page!</p>
            </div>
            <p className="introSubText">
                Please take a look around my website, you can see my past
                projects and content details to contact me
            </p>
          </main>
          
        </div>
        <div className="homeImg">
        <img
            src={jamesFace}
            alt="james"
            className='jamesPicture'
          />
          </div>
      </div>
      <div className="projectsText">THIS IS THE NEXT LOTS OF TEXT</div>
    </div>
  );
}
