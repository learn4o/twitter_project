import MetaLayout from "../components/MetaLayout"
import TwitterIcon from "../components/TwitterIcon"
import styles from "../styles/404.module.css"
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
        <a href="/feeds">
         <div className={styles.Logoutbox} >  Go home</div> </a>


        
        </div>
       
       

    </div>




   </div>
}