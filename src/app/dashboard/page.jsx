"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from "swr"
import Image from 'next/image'


const Dashboard = () => {
  

  
  const route = useRouter();
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate,error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try{
      await fetch("/api/posts", {
        method: "POST",
        body : JSON.stringify({
          title,desc,img,content,username: session.data.user.name
        })
      })
      mutate();
      e.target.reset();
    

    }
    catch(err){
      console.log(err)
    }};

    const handleDelete = async (id) => {
      try{
       await fetch(`/api/posts/${id}`,{
        method : "DELETE"
       });
       mutate();
      }
      catch(err){
        console.log(err)
      }

    }


  if(session.status === "loading")
     {return <p>...Loading</p>} 

if(session.status === "unauthenticated"){
 route?.push("/dashboard/login")
}


if(session.status === "authenticated"){
  return (
    <div className={styles.container}>

<div className={styles.posts}>
  {isLoading ?  "loading" : data.map((post)=>(<div className={styles.post} key={post._id}>
  <div className={styles.imgContainer}>
    <Image src={post.img} alt='' width={200} height={100} className={styles.img} />
  </div>
  <h2 className={styles.postTitle}>{post.title}</h2>
  <span className={styles.delete} onClick={()=> handleDelete(post._id)}>X</span>
  </div>) )}
  
</div>

<form className={styles.new} onSubmit={handleSubmit}>
  <h1>Add new post</h1>
  <input type="text" placeholder='Title' className={styles.input} />
  <input type="text" placeholder='Description' className={styles.input} />
  <input type="text" placeholder='Image' className={styles.input} />
  <textarea placeholder='Content' cols="30" rows="10" className={styles.textArea}></textarea>
  <button className={styles.button}>Send</button>
</form>

    </div>
  )
}

}


export default Dashboard