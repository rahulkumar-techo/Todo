import React from "react";
import { img1 } from "../../../assets/imgs";
import HomeCard from "./HomeCard";
import CrackerBtn from "../../../components/button/CrackerBtn";


function SectionComponent01() {
  const spanStyle = { "--index": 0 };

  //   object data for card

  // home  object  data file
  const homecardData = [
    { label: "Events", value: 10 },
    { label: "Total Todo List", value: 25 },
    { label: "Favorites", value: 5 },
  ];

  //   JSX
  return (
    <div>
      <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white ">
        <div className="bg-[#292fc3] grid md:grid-cols-2 justify-center items-center grid-cols-1 px-5">
          {/* left */}
          <div>
            {/* animations text */}
            <div className="xl:text-5xl text-xl md:text-3xl lg:text-4xl">
              <span className="animated-text ">
                <span style={spanStyle}>Hii</span>
                <span style={{ ...spanStyle, "--index": 1 }}>Welcome</span>
                <span style={{ ...spanStyle, "--index": 2 }}>you</span>
                <span style={{ ...spanStyle, "--index": 3 }}>to</span>
                <span style={{ ...spanStyle, "--index": 4 }}>visit</span>
                <span style={{ ...spanStyle, "--index": 5 }}>my</span>
                <span style={{ ...spanStyle, "--index": 6 }}>website</span>
              </span>
            </div>
            <p className=" py-5 leading-7 break-words">
              Create an organized and efficient workflow with our ToDo webpage.
              Prioritize tasks, set deadlines, and enhance productivity. Enjoy a
              clutter-free interface for a seamless experience in managing your
              daily activities.
            </p>
            {/* ========home cards ====== */}
            <HomeCard homecardData={homecardData} />
            <CrackerBtn text={"click here to know more"} />
          </div>

          {/* right */}
          <div className=" flex justify-center items-center flex-col">
            <img
              src={img1}
              alt=""
              className=" aspect-square object-cover md:w-full md:h-full w-52 filter drop-shadow-2xl"
            />

            <CrackerBtn text={"Add your Todo"} />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#292fc3"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,192C672,160,768,128,864,117.3C960,107,1056,117,1152,154.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SectionComponent01;
