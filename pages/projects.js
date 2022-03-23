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
        <Carousel
          className={styles.carousel}
          activeIndex={index}
          onSelect={handleSelect}
          height="500px"
        >
          {project.map((pr) => {
            return (
              <Carousel.Item className={styles.carouselItem} key={pr.id}>
                <h2>{pr.projectName}</h2>
                <p>{pr.description}</p>
                <p>{pr.techStack}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
