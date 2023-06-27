import React from 'react'
import styles from "./page.module.css"
const Gradient = ({text}) => {
  return (
    <h1 className={styles.title} >{text}</h1>
  )
}

export default Gradient