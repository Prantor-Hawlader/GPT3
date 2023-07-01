import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import author from "public/author.jpg"
import robot from "public/robot.jpg"
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 10 } })

  if (!res.ok) {
 return notFound();
 
  }
 
  return res.json()
}

const BlogPost =async ({params}) => {
  const data = await getData(params.id)
  return (
    <div>
       <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
          Create engaging and visually appealing content that educates, entertains, and resonates with the target audience.
To maximize the output from digital marketing and effectively sell products, a strategic approach combined with targeted tactics is crucial. Firstly, its essential to define a clear marketing objective and identify the target audience. Conduct thorough market research to understand customer needs, preferences, and pain points.
          </p>
          <div className={styles.author}>
            <Image
              src={author}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Prantor Hawlader</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={robot}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Implement email marketing campaigns to nurture leads and convert them into customers. Personalization and segmentation are crucial to deliver tailored messages and offers. Collaborate with influencers or industry experts to expand the product reach and credibility. Additionally, leverage data analytics to track and measure the performance of marketing campaigns. Analyze key metrics such as conversion rates, customer acquisition cost, and return on investment (ROI). Continuously refine and optimize marketing strategies based on the insights gathered.Lastly, provide exceptional customer service and encourage customer reviews and testimonials to build trust and credibility. Offer incentives and promotions to incentivize purchases and create a sense of urgency. By adopting a comprehensive and targeted digital marketing approach, businesses can effectively showcase their products, attract the right audience, and drive sales conversions.
        </p>
      </div>
    </div>
  )
}

export default BlogPost