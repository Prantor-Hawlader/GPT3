import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import team from 'public/teamWork.jpg'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image  src={team} className={styles.img} alt=''/>
    <div className={styles.imgText}>
      <h1 className={styles.imgTitle}>Web app builder</h1>
      <h2 className={styles.imgDesc}>Expert web developer will do the job for you </h2>
    </div>
    </div>
    


    <div className={styles.textContainer}>
    <div className={styles.item}>
      <h1 className={styles.title}>Who Are We?</h1>
      <p className={styles.desc}>ABC Web Solutions is a leading web development agency dedicated to crafting innovative and visually captivating websites for clients across diverse industries. With a deep understanding of the latest web technologies and design trends, our team of skilled developers, designers, and project managers collaborate seamlessly to deliver exceptional online experiences. Recently, we had the privilege of working with our esteemed client, XYZ Enterprises, to build their new website from scratch. From the initial consultation to the final launch, our agency meticulously tailored every aspect of the website to align with XYZ Enterprise brand identity and business goals. </p>
 </div>
 <div className={styles.item}>

  <h1 className={styles.title}>What We Do?</h1>
  <p className={styles.desc}>By incorporating a responsive design, intuitive navigation, and engaging content, we ensured an immersive and user-friendly browsing experience. The result was a stunning, feature-rich website that effectively showcased XYZ Enterprises products and services while driving increased user engagement and conversions. ABC Web Solutions takes immense pride in delivering exceptional web solutions that empower businesses to succeed in the digital realm.</p>
  <Button url="/contact" text="Contact" />
 </div>
    </div>

    </div>
  )
}

export default About