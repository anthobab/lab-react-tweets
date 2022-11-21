import Action from "./Action";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp}></Timestamp>
        </div>

        <Message message={props.tweet.message} />
        <Action></Action>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
