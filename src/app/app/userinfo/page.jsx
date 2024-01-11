import React from 'react'
import styles from "./userinfo.module.css";
const Userinfo = () => {
  return (
    <>
    <div className={styles.container}>
<div className={styles.main}>
  <form className={styles.Signup}>
<p className={styles.s}>User Info</p>
<label className={styles.in}>Name</label>
<input type="text" className={styles.inputs} placeholder="your name"/>
<label className={styles.in}>place</label>
<input type="text" className={styles.inputs} placeholder="place"/>
<label className= {styles.in}>Branch</label>
<input type="text" className={styles.inputs}  placeholder="branch"/>
<label className={styles.in}>Domain</label>
<input type="text" className={styles.inputs} placeholder="domain"/>
<label className={styles.in}>skills</label>
<input type="text" className={styles.inputs} placeholder="skills"/>
<label className={styles.in}>About Yourelf</label>
<input type="text" className={styles.inputs} placeholder="About Yourelf"/>
<button className={styles.btn}>Continue</button>
</form>


</div>




    </div>
    
    </>
  )
}

export default Userinfo