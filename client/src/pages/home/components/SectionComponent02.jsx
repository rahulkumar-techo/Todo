import React from "react";
import ProjectCard from "./projectcard/ProjectCard";



function SectionComponent02() {
  return (
    <div>
      <div>
        <h2 className=" leading-8 py-5 text-3xl font-bold px-5 "> Recent Project list </h2>
        <div className=" mx-5 md:mx-0">
        <ProjectCard data={data}/>
        </div>
      </div>
    </div>
  );
}


const data =[
  {},{},{}
]

export default SectionComponent02;
