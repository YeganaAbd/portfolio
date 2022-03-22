import NavMenu from "../components/NavMenu";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectsData/index.js";
import { useState } from "react";

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
          return (
            <Carousel.Item key={index}>
              <h2>{pr.projectName}</h2>
              <Carousel.Caption>
                <p>{pr.description}</p>
                <p>{pr.techStack}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
