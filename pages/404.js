import MetaLayout from "../components/MetaLayout"
import TwitterIcon from "../components/TwitterIcon"
import styles from "../styles/404.module.css"
import Link from "next/link"
export default   function Errorpage() 
{
   return <div>  
    <MetaLayout title={"Page Not Found"}/>

    <div className={styles.page}>
    
        <div className={styles.card}> 
        <TwitterIcon/>
        <h1> Error </h1>
        <p>
         You Have Found A Page That Does Not Exists
        </p> 
        <Link href="feeds">   
         <a className={styles.gohome}> Go home </a> 
         </Link>


        
        </div>
       
       

    </div>




   </div>
}