import NavMenu from "../components/NavMenu";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectsData/index.js";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/projects.module.css";

export default function Projects() {
  const [project, setProject] = useState(projects);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <NavMenu />
      <div className={styles.container}>
        <Carousel activeIndex={index} onSelect={handleSelect} height="500px">
          {project.map((pr, index) => {
            return (
              <Carousel.Item key={index}>
                <Image
                  width="200px"
                  height="200px"
                  className="d-block w-50 h-60"
                  src={pr.src}
                  alt={`${index}} slide`}
                />
                <Carousel.Caption>
                  <h2>{pr.projectName}</h2>
                  <p>{pr.description}</p>
                  <p>{pr.techStack}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
