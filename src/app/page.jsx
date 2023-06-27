import Button from "@/components/Button/Button"
import styles from "./page.module.css"
import Image from "next/image"
import hero from "public/hero.gif"
export default function Home() {
  return (
   <div className={styles.container}>

<div className={styles.item}>
  <h1 className={styles.title}>Better design for your digital products.</h1>
  <p className={styles.desc}>Turning your idea into reality. We bring together the team from the global tech industry.</p>
  <Button url="/portfolio" text="See our works" />

</div> 

    <div className={styles.item}>
<Image className={styles.img} src={hero} width={500} height={500} alt="hero"/>

    </div>
   </div>
  )
}
