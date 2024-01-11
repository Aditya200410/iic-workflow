"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

import styles from "./home.module.css"
const Homepage = ({params}) => {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const logout = async () => {
      try {
          await axios.get('/api/users/logout')
         
          router.push('/login')
      } catch (error) {
          console.log(error.message);
          toast.error(error.message)
      }
  }

 

  return (
    <>
    <div className={styles.main}>
      <div className={styles.left}>
      <div className={styles.profile}>
        <div className={styles.img}>
          <img src="https://th.bing.com/th/id/OIP.G7fucXNDeg8Biw64GGD6bgHaH_?w=173&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" className={styles.im}  width={70} height={70} />
        </div>
        <div className={styles.in}>
        <div className={styles.info}>
         <span className={styles.name}> {params.id}</span>
        </div>
        <div className={styles.info}>
          DOMAIN
        </div>
        </div>
      </div>
      <div className={styles.taba}>Home</div>
      <div className={styles.tabs}>Chat</div>
      <div className={styles.tabs}>Group</div>
      <div className={styles.tabs}>Projects</div>
      <div className={styles.tabs}>Meet</div>
      <div className={styles.tabs}>Attendence</div>
      <div className={styles.tabs}>Events</div>
      <button  onClick={logout} className={styles.tabd}>Logout</button>


      </div>
      <div className={styles.right}></div>
    </div>
    
    
    
    </>
  )
}

export default Homepage