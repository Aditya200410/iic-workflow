"use client"
import Link from "next/link"
import {useRouter} from "next/navigation"
import styles from "./signup.module.css";
import React from 'react'
import axios  from "axios";

const Signup = () => {
  const router = useRouter();
  const[button,setbutton] = React.useState(false);
  const [loading, setloading] = React.useState(false);
const  [ user , setuser] = React.useState({
  email:"",
  password:"",

  phonenumber:"",
})

const onsignup =  async() => {
try{
  setloading(true);
  const response = await axios.post("/api/users/signup",user);
  console.log("sucess signin",response.data);
  router.push("/login");
} catch (error){
  console.log("error",error.message);
}

finally{
setloading(false);
}
}

React.useEffect(() => {
if(user.email.length > 0 && user.password.length > 0 && user.phonenumber.length > 0) {
  setbutton(false)
}
else{
  setbutton(true)
}
},[user]);

  return (
    <>
    <div className={styles.container}>
<div className={styles.main}>
  <div className={styles.Signup}>
<p className={styles.s}>{loading ? "processing" : "signup"}</p>


<label htmlFor="email" className={styles.in}>Email</label>
<input id="email" value={user.email} onChange={(e)=> setuser({...user ,email:e.target.value})} type="email" className={styles.inputs} placeholder="user@email.com"/>



<label  htmlFor="phonenumber" className={styles.in}>Phone number</label>
<input id="phonenumber" value={user.phonenumber} onChange={(e)=> setuser({...user ,phonenumber:e.target.value})} type="number" className={styles.inputs} placeholder="Phone Number"/>




<label htmlFor="password" className= {styles.in}>Password</label>
<input id="password" value={user.password} onChange={(e)=> setuser({...user ,password:e.target.value})} type="password" className={styles.inputs}  placeholder="*********"/>



<button onClick={onsignup} className={styles.btn}>{button ? "no signin" : "signin"}</button>
<Link href="/login"><p className={styles.l} >already have an account ? <span>login here</span></p>
</Link>
</div>


</div>




    </div>
    
    </>
  )
}

export default Signup