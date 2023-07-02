import React from 'react'
import styles from "./page.module.css"
import support from "public/call-center.gif"
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Gradient from '@/components/Gradient/Gradient'

export const metadata = {
  title: "Prantorly Contact Info",
  description: "This is contact page",
};
const Contact = () => {

  return (
    <div className={styles.container}>

<div className={styles.title}><Gradient text="Let&apos;s keep in touch" /></div>
<div className={styles.content}>

<div className={styles.imgContainer}>
  <Image src={support} alt='' className={styles.img}  />
</div>
<form className={styles.form}>
  <input type="text"placeholder='name' className={styles.input} />
  <input type="text"placeholder='email' className={styles.input} />
  <textarea className={styles.textArea} placeholder='message' cols="30" rows="10"></textarea>
  <Button url="#" text="Send"/>
</form>
</div>



    </div>
  )
}

export default Contact