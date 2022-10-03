import { makeStyles } from "@material-ui/styles"
import { SkillCard } from "./SkillCard"
import styles from "./Styles/SkillsSection.module.css"
import { GrReactjs } from "react-icons/gr"
import { SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiNpm } from "react-icons/si"
import { SiPostman } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { SiPython } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { SiDjango } from "react-icons/si"
import Fade from "react-reveal/Fade"
import GitHubCalendar from "react-github-calendar";
export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p>Skills</p>
        <p>Front-end skills</p>
        <div className={styles.skillsContFront}>
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
          <SkillCard
            skill="Python"
            icon={
              <SiPython className={`${styles.skillIcon} ${styles.pyicon}`} />
            }
          />

          <SkillCard
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </div>
        <p>Back-end skills</p>
        <div className={styles.skillsContBack}>
          <SkillCard
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />

          <SkillCard
            skill="MySQL"
            icon={
              <SiMysql className={`${styles.skillIcon} ${styles.mysqlIcon}`} />
            }
          />

          <SkillCard
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
          <SkillCard
            skill="Django"
            icon={
              <SiDjango
                className={`${styles.skillIcon} ${styles.djangoIcon}`}
              />
            }
          />
        </div>
        <p>Tools</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
        <GitHubCalendar username="AnkitSangwan8282"/>
      </Fade>
    </div>
  );
}
