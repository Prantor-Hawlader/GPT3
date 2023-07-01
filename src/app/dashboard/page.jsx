"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"



const Dashboard = () => {
  const [data,setData] = useState([])
const [err,setErr] = useState(false)
const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
    
      if (!res.ok) {
     setErr(true)
      }
     
      const data = await res.json()
      setData(data)
      setLoading(false)
    }
  getData()
  },[])
  console.log(data)
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard