import NavMenu from "../components/NavMenu";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectsData/index.js";
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState(projects);
  return (
    <>
      <NavMenu />
      <div>Hello</div>
      {project.map((pr, index) => {
        return (
          <Carousel key={index}>
            <h2>{pr.projectName}</h2>
            <p>{pr.description}</p>
            <p>{pr.techStack}</p>
          </Carousel>
        );
      })}
    </>
  );
}
