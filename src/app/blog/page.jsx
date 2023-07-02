import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import lgcode from "public/lgCode.jpg"
import {notFound} from "next/navigation"

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { next: { revalidate: 10 } })

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
  <Link key={item.id} href={`/blog/${item._id}`} className={styles.item}>
  <div className={styles.imgContainer}>
  <Image src={item.img} alt=''  className={styles.img} width={400} height={250} />
  </div>
  
  <div className={styles.content}>
  <h1 className={styles.title}> {item.title} </h1>
  <p className={styles.desc}>{item.desc}</p>
  </div>
  
  
  </Link>
))}



    </div>
  )
}

export default Blog