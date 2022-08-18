const getUserByIds = async (userIds) =>{ 

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAMWGewEAAAAA2x6S4LF6Hgth69Bd5BbxxFk%2BBko%3DoIdt0OJapGlQv0Vn63sOtIypxejwRzjWXsGPbvmIJIYqEnBdfz");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  

  

  return await  fetch("https://api.twitter.com/2/users?ids="+userIds.join(",")+"&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified", requestOptions)
    .then(response => response.json())
    .then(result => result.data)
    .catch(error => console.log('error', error)); 


   

}
export default getUserByIds;
