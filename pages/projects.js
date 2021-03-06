import NavMenu from "../components/NavMenu";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectsData/index.js";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/projects.module.css";
import NextLink from "next/link";
import Button from "react-bootstrap/Button";

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
          variant="dark"
          className={styles.carousel}
          controls={true}
          activeIndex={index}
          onSelect={handleSelect}
          height="500px"
          nextIcon={
            <span
              className="carousel-control-next-icon"
              style={{ backgroundColor: "black" }}
            />
          }
          prevIcon={
            <span
              className="carousel-control-prev-icon"
              style={{ backgroundColor: "black" }}
            />
          }
        >
          {project.map((pr) => {
            return (
              <Carousel.Item className={styles.carouselItem} key={pr.id}>
                <div className={styles.info}>
                  <h1 className={styles.projectName}>{pr.projectName}</h1>
                  <div className={styles.links}>
                    {pr.link && (
                      <NextLink href={pr.link} passHref>
                        <Button
                          style={{ backgroundColor: "#F76E11", border: "none" }}
                        >
                          Live Site
                        </Button>
                      </NextLink>
                    )}
                    {pr.src && (
                      <NextLink href={pr.src} passHref>
                        <Button variant="dark">Source Code</Button>
                      </NextLink>
                    )}
                  </div>
                  <h4 className={styles.subTitle}>Teck stack</h4>
                  <p className={styles.techStack}>{pr.techStack}</p>
                  <h4 className={styles.subTitle}> Project Description </h4>
                </div>
                <p className={styles.desc}>{pr.description}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
