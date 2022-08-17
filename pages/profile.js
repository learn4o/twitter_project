import Profile from "../components/Profile";
export default function profile({user}) {
    return <div>
      <Profile profile={user}/>       
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