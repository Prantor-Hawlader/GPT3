"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const Dashboard = () => {
//   const [data,setData] = useState([])
// const [err,setErr] = useState(false)
// const [isLoading,setLoading] = useState(false)
//   useEffect(() => {
//     async function getData() {
//       setLoading(true)
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
    
//       if (!res.ok) {
//      setErr(true)
//       }
     
//       const data = await res.json()
//       setData(data)
//       setLoading(false)
//     }
//   getData()
//   },[])
const session = useSession();
const route = useRouter();
  console.log(session)

  if(session.status === "loading"){return <p>...Loading</p>} 

if(session.status === "unauthenticated"){
 route?.push("/dashboard/login")
}
if(session.status === "authenticated"){
  return (
    <div className={styles.container}>Dashboard</div>
  )
}


}

export default Dashboard