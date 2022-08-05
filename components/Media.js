const Media = ({ url, type }) => {
  if (type == "image") {
    return (
      <div>
        <img src={url}></img>
      </div>
    );
  } else if (type == "video") {
    return (
      <div>
        <video src={url}></video>
      </div>
    );
  } else if (type == "gif") {
    return (
      <div>
        <img src={url}></img>
      </div>
    );
  } else {
    return 0;
  }
};

export default Media;
