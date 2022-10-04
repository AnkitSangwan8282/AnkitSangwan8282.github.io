import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiPython } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Cultfit clone",
    img: "/Cultfit.PNG",
    link: "https://enchanting-paprenjak-8b83d5.netlify.app/",
    git: "https://github.com/ROY-AMAN/Cult-Fit-clone",
    about:
      "“An e-commerce website of fitness apparel and accessories.Also run fitness franchies all over the country.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Shopbop clone",
    img: "/shopbop.PNG",
    link: "https://shopbop.netlify.app/",
    git: "https://github.com/iShilajit/shopbopclone",
    about:
      "An e-commerce website of clothing shoes and all type of beauty related accessories. Create using HTML,CSS,JavaScript and react",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
    ],
  },

  {
    name: "Bewkoof.com clone",
    img: "/bewkoof.PNG",
    link: "https://abhinavbisht94.github.io/bewakoof-clone-u2",
    git: "https://github.com/abhinavBisht94/bewakoof-clone-u2",
    about:
      " It is an e-commerce website having varieties of items which are of high quality. We have tried to clone the pixel perfect website with the help of HTML. Implemented using HTML, CSS and javascript.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Vpad text editor",
    img: "/vpad.PNG",
    link: "",
    git: "https://github.com/AnkitSangwan8282/Vpad",
    about:
      "A simple text editor where you can open edit and create text files. You can also seach word in your file and replace them according to your choice",
    stacks: [<SiPython className={styles.stackIcon} />],
  },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
