import ClockIcon from "../images/ClockIcon";
import CommentIcon from "../images/CommentsIcon";
import HeartIcon from "../images/HeartIcon";
import ReplyAllIcon from "../images/ReplyAllIcon";
import ShareIcon from "../images/ShareIcon";
import VerifiedIcon from "../images/VerifiedIcon";
import styles from "../styles/Tweets.module.css";

const Tweet = ({ tweets }) => {
  for (let i = 0; i < tweets.length; i++) {
    tweets[i];
  }
  return (
  
    <div className={styles.prime}>
      {tweets.map((tweet) => {
        return <div className={styles.tweetText}>
          <div className={styles.supreme}>
          <span>User Name </span><span><VerifiedIcon height="20px" width="20px" color="1DA1F2"/></span>
          <span className={styles.userid}> @user_name</span>
          <span className={styles.date}><ClockIcon height="20px" width="20px" color="white"/></span>
          <span >{tweet.created_at}</span>
          </div><br/>{
          tweet.text}<br/><br/>
         <div className={styles.fcontainer}>
         <div className={styles.fitem1}><CommentIcon height="20px" width="20px" color="white"/><br/>{tweet.public_metrics.reply_count}</div>
         <div className={styles.fitem2}><ReplyAllIcon height="20px" width="20px" color="white"/><br/>{tweet.public_metrics.retweet_count}</div>
         <div className={styles.fitem3}><HeartIcon height="20px" width="20px" color="white"/><br/>{tweet.public_metrics.like_count}</div>
         <div className={styles.fitem4}><ShareIcon height="20px" width="20px" color="white"/><br/>{tweet.public_metrics.quote_count}</div>
         </div></div>;
      })}
    </div>
    
  );
};

export async function getServerSideProps(context) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer AAAAAAAAAAAAAAAAAAAAAObecQEAAAAApuij5r%2BTEjfDmjBoETcDdSaCQwA%3DmWv96xhXZprQBQxjUH3LOTFmgvIAiHbQYi5M3mL4eHS42GUu6U"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const tweets = await fetch(
    "https://api.twitter.com/2/tweets/search/recent?tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,promoted_metrics,public_metrics,type,url,width&query=(from:POTUS OR from:Pontifex OR from:NASA OR from:klrahul)",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.log("error", error));
  console.log(tweets);
  return {
    props: {
      tweets: tweets,    
    },
  };
}
export default Tweet;
