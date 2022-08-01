import MetaLayout from "../components/MetaLayout"
import TwitterIcon from "../components/TwitterIcon"
import styles from "../styles/404.module.css"
import Link from "next/link"
export default   function Errorpage() 
{
   return <div>  
    <MetaLayout title={"ERROR"}/>

    <div className={styles.page}>
    
        <div className={styles.card}> 
        <TwitterIcon/>
        <h1> Error </h1>
        <p>
         Something went wrong, but don&apos;t fret - it&apos;s not your fault. Let&apos;s try again.
        </p> 
        <Link href="feeds">   
         <a className={styles.gohome}> Go home </a> 
         </Link>


        
        </div>
       
       

    </div>




   </div>
}