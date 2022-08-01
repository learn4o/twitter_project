import styles from "../styles/Profile.module.css"
import numberFormatter from "../helpers/numberFormatter";
import VerifiedIcon from "../components/VerifiedIcons"; 
import ProfileURLProcessing from "../helpers/ProfileURlProcessing";
export default function profile({data}) {
    return <div>
        <div className={styles.profile}>
            <div className={styles.profileimg}>
<img src={ProfileURLProcessing (data.profile_image_url)}></img>
            </div>
            <div className={styles.details}> 
                <p>{data.name}</p>
                <a>@{data.username}</a>
                <div className={styles.verfication}>
                {VerifiedIcon(data.verified)}
                </div>
                <p> {data.location} </p> <i></i>
                <p>{data.description}</p>
            </div>
            <div className={styles.socialprofile}>
                <div className={styles.tweets}>
                    <p className={styles.HeadingColor}>Tweets</p>
                    <p>{numberFormatter(data.public_metrics.tweet_count)}</p>
                </div>
                <div className={styles.followers}>
                  <p className={styles.HeadingColor}>Followers</p>
                    <p>{numberFormatter(data.public_metrics.followers_count)}</p>
                </div>
                <div className={styles.following}>
                    <p className={styles.HeadingColor}>Following</p>
                    <p>{numberFormatter(data.public_metrics.following_count)}</p>
                </div>
            </div>
        </div>
    </div>
}
export async function getServerSideProps(context) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer AAAAAAAAAAAAAAAAAAAAAMWGewEAAAAA2x6S4LF6Hgth69Bd5BbxxFk%2BBko%3DoIdt0OJapGlQv0Vn63sOtIypxejwRzjWXsGPbvmIJIYqEnBdfz"
    );
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const response = await fetch(
      "https://api.twitter.com/2/users/by/username/imVkohli?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  
    console.log(response);
    return { props: { data: response.data } };
  }