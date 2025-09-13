import React, { useRef, useState } from "react";
import ClickSpark from "../Components/SprakClick";

function Landingpage() {
  return (
    <div className="h-[90vh]">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="p-10 flex-colum bg-[#060010] h-[90vh] text-[#fff]">
          <span>
            {" "}
            Hi, I'm Karthick Raja — Full Stack Developer Specializing in React &
            Python.
          </span>
          <br />

          <span>
            I build efficient, scalable, and modern web applications using
            React, Python, and PostgreSQL. Let's turn ideas into reliable
            solutions.
          </span>
          <div>
            <span>👨‍💻 About Me :</span>
            <br /> I'm a full stack developer based in Coimbatore, India, with
            hands-on experience in building responsive web applications using
            React for the frontend and Python (FastAPI/Django/Flask) with
            PostgreSQL for the backend. I'm passionate about clean architecture,
            code quality, and delivering real business value through software.
          </div>
        </div>
      </ClickSpark>
      {/* <div className="bg-black text-white p-4 text-xl">Tailwind is working</div> */}
    </div>
  );
}

export default Landingpage;
