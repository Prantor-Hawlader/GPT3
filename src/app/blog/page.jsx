import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import lgcode from "public/lgCode.jpg"
import {notFound} from "next/navigation"

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })

  if (!res.ok) {
 return notFound();
  }
 
  return res.json()
}




 const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
{data.map((item) => (
  <Link key={item.id} href="/blog/testId" className={styles.item}>
  <div className={styles.imgContainer}>
  <Image src={lgcode} alt=''  className={styles.img} width={400} height={250} />
  </div>
  
  <div className={styles.content}>
  <h1 className={styles.title}> {item.title} </h1>
  <p className={styles.desc}>{item.body}</p>
  </div>
  
  
  </Link>
))}



    </div>
  )
}

export default Blog