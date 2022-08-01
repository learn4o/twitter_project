import styles from "../styles/Feeds.module.css"
import MetaLayout from "../components/MetaLayout"
export default function feeds() {


    return <div>
        <MetaLayout title={"Homepage"} />

        <div className={styles.home}>

            
                <img className={styles.imgs
                } src="https://www.nps.gov/common/uploads/banner_image/imr/homepage/A521CA99-E490-2901-4C34F03074625EA1.jpg"></img>
            


            <div className={styles.main}>
                <div className={styles.homePage}> profile </div>
                <div className={styles.homePage}> tweets</div>
            </div>


        </div>





    </div>
}  