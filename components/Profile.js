import styles from "../styles/Profile.module.css"
import numberFormatter from "../helpers/numberFormatter";
import VerifiedIcon from "./Icons/VerifiedIcons";
import ProfileURLProcessing from "../helpers/ProfileURlProcessing";
import LocationIcon from "./Icons/LocationIcon";
import EarthIcon from "./Icons/EarthIcon";
const Profile = ({ profile }) => {
  console.log(profile);
  return <div>
    <div className={styles.profile}>
    <div className={styles.verfication}>
          {VerifiedIcon(profile.verified)}
        </div>
      <div className={styles.profileimg}>
        <img src={ProfileURLProcessing(profile.profile_image_url)}></img>
      </div>
      <div className={styles.details}>
        <p>{profile.name}</p>
        <a>@{profile.username}</a>
        <div className={styles.locationid}>
          <div><LocationIcon /></div>
          <div>
            <p className={styles.location}>{profile.location} </p>
          </div>
          <div className={styles.earth}><EarthIcon /></div>
        </div>
        <p>{profile.description}</p>
      </div>
      <div className={styles.socialprofile}>
        <div className={styles.tweets}>
          <div className={styles.HeadingColor}>Tweets</div>
          <div>{numberFormatter(profile.public_metrics.tweet_count)}</div>
        </div>
        <div className={styles.followers}>
          <div className={styles.HeadingColor}>Followers</div>
          <div>{numberFormatter(profile.public_metrics.followers_count)}</div>
        </div>
        <div className={styles.following}>
          <div className={styles.HeadingColor}>Following</div>
          <div>{numberFormatter(profile.public_metrics.following_count)}</div>
        </div>
      </div>
    </div>
  </div>
}
export default Profile;