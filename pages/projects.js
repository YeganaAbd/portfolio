import NavMenu from "../components/NavMenu";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectsData/index.js";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [project, setProject] = useState(projects);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <NavMenu />
      <div>Hello</div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {project.map((pr, index) => {
          console.log("src", pr.src);

          return (
            <Carousel.Item key={index}>
              <Image
                width="50px"
                height="50px"
                className="d-block w-100"
                src={pr.src}
                alt="First slide"
              />
              <h2>{pr.projectName}</h2>
              <p>{pr.description}</p>
              <p>{pr.techStack}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
