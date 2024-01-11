"use client"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React from 'react'
import { Axios } from "axios";
import styles from "./login.module.css";


const Login = () => {
  const  [ user , setuser] = React.useState({
    email:"",
    password:"",
  
   
  })


  return (
    <>
    <div className={styles.container}>
<div className={styles.main}>
  <form className={styles.Signup}>
<p className={styles.s}>Log In</p>


<label htmlFor="email" className={styles.in}>Email</label>
<input id="email" value={user.email} onChange={(e)=> setuser({...user ,email:e.target.value})} type="email" className={styles.inputs} placeholder="user@email.com"/>

<label htmlFor="password" className= {styles.in}>Password</label>
<input id="password" value={user.password} onChange={(e)=> setuser({...user ,password:e.target.value})} type="password" className={styles.inputs}  placeholder="*********"/>




<button className={styles.btn}>Log In</button>

<Link href="/signup"><p className={styles.l} >create an account ? <span>signup here</span></p>
</Link>
</form>


</div>




    </div>
    
    </>
  )
}

export default Login