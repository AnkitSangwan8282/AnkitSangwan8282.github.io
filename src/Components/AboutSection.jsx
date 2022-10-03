import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/profilepicture.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Ankit</span>{" "}
            </h2>
            <p>
              A passionate aspiring Full Stack Developer skilled in MERN stack,
              molded and shaped by Masai School's numerous training. Actively
              ready to join the great living team of a good start-up to adapt me
              in any situation and the environment with ease and perform the
              best.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
