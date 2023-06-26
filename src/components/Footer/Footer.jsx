"use client"
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}><div>All rights reserved to Prantorly</div>
    
    <div className={styles.social}>
<Image src="/1.png" width={15} height={15} />
<Image src="/2.png" width={15} height={15} />
<Image src="/3.png" width={15} height={15} />
<Image src="/4.png" width={15} height={15} />

    </div>
    
    
    </div>
  )
}

export default Footer