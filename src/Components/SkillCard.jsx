import { Paper } from "@material-ui/core"
import styles from "./Styles/SkillCard.module.css"

import { useState } from "react"
export function SkillCard({ skill, icon }) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    // <Pulse spy={count}>
    <Paper elevation={3} className={styles.card}>
      {icon}

      <p>{skill}</p>
    </Paper>
    // </Pulse>
  )
}
