import styled from "styled-components";

const AddPostCarousel = (props) => {
  return (
    <Container>
      <AddPost>
        <AddPostSection>
          <UserImage>
            <img
              src={
                props.user.photoURL ? props.user.photoURL : "/images/user.svg"
              }
              alt=""
            />
          </UserImage>
          <NewPostText>Start a post</NewPostText>
        </AddPostSection>
        <IconSection>
          <Icon>
            <img className="photo" src="/images/add-photo.svg" alt="" />
            Photo
          </Icon>
          <Icon>
            <img className="video" src="/images/add-video.svg" alt="" />
            Video
          </Icon>
          <Icon>
            <img className="event" src="/images/add-event.svg" alt="" />
            Event
          </Icon>
          <Icon>
            <img className="article" src="/images/add-article.svg" alt="" />
            Write article
          </Icon>
        </IconSection>
      </AddPost>
    </Container>
  );
};

const Container = styled.div`
  grid-area: feed;
  min-width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #cfcece;
`;

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e2e2;
  /* box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); */
`;

const AddPost = styled(Content)``;

const AddPostSection = styled.div`
  margin: 12px;
  margin-bottom: 0;
  display: flex;
`;

const UserImage = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;

const NewPostText = styled.button`
  width: 100%;
  border-radius: 24px;
  border: 1px solid #d4d4d4;
  background-color: #fff;
  text-align: left;
  padding-left: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 6px 12px;
`;

const Icon = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 10px 6px;
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  img {
    margin-right: 6px;
  }
  .photo {
    filter: invert(74%) sepia(12%) saturate(5852%) hue-rotate(181deg)
      brightness(100%) contrast(96%);
  }
  .video {
    filter: invert(70%) sepia(29%) saturate(699%) hue-rotate(56deg)
      brightness(95%) contrast(85%);
  }
  .event {
    filter: invert(62%) sepia(74%) saturate(433%) hue-rotate(355deg)
      brightness(99%) contrast(84%);
  }
  .article {
    filter: invert(68%) sepia(59%) saturate(2076%) hue-rotate(316deg)
      brightness(120%) contrast(92%);
  }
`;

export default AddPostCarousel;
