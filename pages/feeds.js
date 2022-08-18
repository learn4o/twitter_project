import styles from "../styles/Feeds.module.css"
import MetaLayout from "../components/MetaLayout"
import Profile from "../components/Profile"
export default function feeds({user}) {
    return <div>
        <MetaLayout title={"Homepage"} />

        <div className={styles.home}>
                <img className={styles.imgs
                } src="https://i.pinimg.com/736x/4f/12/ab/4f12ab83c7e68952c1a0d1efa922e36f.jpg"></img>
            <div className={styles.main}>
                <div> <Profile profile={user} /> 
                </div>
                <div className={styles.homePage}> tweets</div> 
                
            </div> 
        </div>
    </div>
} 
export async function getServerSideProps(context) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer "+ process.env.BEARERTOKEN
    );
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const response = await fetch(
      "https://api.twitter.com/2/users/by/username/isro?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  
    console.log(response);
    return { props: { user: response.data } };
  } 
