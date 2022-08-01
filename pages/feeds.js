import styles from "../styles/Feeds.module.css"
import MetaLayout from "../components/MetaLayout"
export default function feeds() {


    return <div>
        <MetaLayout title={"Homepage"} />

        <div className={styles.home}>

            
                <img className={styles.imgs
                } src="https://i.pinimg.com/736x/4f/12/ab/4f12ab83c7e68952c1a0d1efa922e36f.jpg"></img>
            


            <div className={styles.main}>
                <div className={styles.homePage}> profile </div>
                <div className={styles.homePage}> tweets</div>
            </div>


        </div>





    </div>
}  