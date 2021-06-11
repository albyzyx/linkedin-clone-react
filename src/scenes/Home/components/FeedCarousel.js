import AddPostCarousel from "./AddPostCarousel/AddPostCarousel";
import Post from "./PostCarousel/Post";

const FeedCarousel = (props) => {
  return (
    <div>
      <AddPostCarousel user={props.user} />
      <Post />
    </div>
  );
};

export default FeedCarousel;
