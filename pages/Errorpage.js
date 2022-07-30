import Header from "../components/Header"
import TwitterIcon from "../components/TwitterIcon"
import styles from "../styles/ErrorPage.module.css"
export default   function Errorpage() 
{
   return <div>  
    <Header title={"ERROR"}/>

    <div className={styles.page}>
    
        <div className={styles.card}> 
        <TwitterIcon/>
        <h1> Error </h1>
        <p>
         Something went wrong, but don't fret - it's not your fault. Let's try again.
        </p> 
         <div className={styles.Refreshbox}> Refresh </div>
         <div className={styles.Logoutbox}> Log out</div>


        
        </div>
       

    </div>




   </div>
}