import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HomeData from "../Components/Data";
import Typical from "react-typical";

function Home() {
  return (
    <div className="container p-6 mx-auto text-gray-100 flex flex-col justify-center items-center home-container">
      <div className="flex justify-center items-center sketchy">
        <div className="text-black text-center headings">
          <h2 className="text-3xl font-bold">
            {HomeData.header.text[0]}
            <br />
            {HomeData.header.text[1]}
          </h2>
          <h1 className="text-2xl">{HomeData.header.text[2]}</h1>
          <Typical
            steps={HomeData.header.typical}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div>
          <div>
            <LazyLoadImage
              src={HomeData.header.img}
              effect="blur"
              className="w-80 header-container"
            />
          </div>
        </div>
      </div>
      <div>
        <button className="uppercase">{HomeData.header.btnText}</button>
      </div>
    </div>
  );
}

export default Home;
