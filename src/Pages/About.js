import React from "react";
import AboutData from "../Components/Data";

function About() {
  return (
    <div className="container p-6 mx-auto flex flex-col">
      <h1 className="headings text-4xl">Software Developer</h1>
      <div className="space-y-4">
        {/* <div className="">DP</div> */}
        <div>
          <div className="grid">
            <div>
              <span className="font-bold">Name: </span>
              {AboutData.bio.fullname}
            </div>
            <div>
              <span className="font-bold">e-mail: </span>
              {AboutData.bio.email}
            </div>
            <div>
              <span className="font-bold">Degree: </span>
              {AboutData.bio.degree}
            </div>
            <div>
              <span className="font-bold">Freelance: </span>
              {AboutData.bio.opening}
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="headings text-3xl">About Me</h2>
          <p>{AboutData.bio.summary}</p>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="headings text-3xl">Skills</h2>
        <p>Here are some of my skills:</p>
        <div className="grid grid-flow-row auto-rows-max md:grid-cols-2 grid-cols-1 gap-4 place-content-center place-items-center">
          {AboutData.stack.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-end items-center py-1 px-1"
              >
                <div className="pr-4">{item.lang}</div>
                <div className="h-2 w-80 relative overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gray-400 absolute z-0"
                    style={{ width: "100%" }}
                  ></div>
                  <div
                    className="h-full bg-gray-900 absolute z-1 rounded-br rounded-tr"
                    style={{ width: item.level + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
