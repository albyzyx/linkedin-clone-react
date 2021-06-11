import styled from "styled-components";
import { useState } from "react";
const Post = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <Content>
        <PostHeader>
          <UserImage>
            <img src="/images/amazon.jpeg" alt="" />
          </UserImage>
          <UserInfo>
            <span>Amazon</span>
            <span>16M followers</span>
            <span>3h</span>
          </UserInfo>
          <Ellipsis>
            <img src="/images/ellipsis.svg" alt="" />
          </Ellipsis>
        </PostHeader>
        <PostContent showMore={showMore}>
          <p>
            Learn the business secrets of one of the world's most high-tech
            beehives! Thanks to #AWS machine learning, Kim and Tom Erik are
            increasing output and lowering workplace stressors for their bees
            like never before. 🐝 #Developer #IoT #MachineLearning
            https://go.aws/3v7NwsG
          </p>
          <span onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "...see more"}
          </span>
        </PostContent>
        <PostMedia>
          <img src="/images/aws.jpg" alt="" />
        </PostMedia>
        <InteractionSection>
          <Interaction>
            <img src="/images/like.svg" alt="" />
            Like
          </Interaction>
          <Interaction>
            <img src="/images/comment.svg" alt="" />
            Comment
          </Interaction>
          <Interaction>
            <img src="/images/share.svg" alt="" />
            Share
          </Interaction>
          <Interaction>
            <img src="/images/send.svg" alt="" />
            Send
          </Interaction>
        </InteractionSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  grid-area: feed;
  min-width: 100%;
  padding-top: 12px;
`;

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e2e2;
`;

const PostHeader = styled.div`
  padding: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  cursor: pointer;
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
  margin-right: 6px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.3;
    &:nth-child(1) {
      font-size: 14px;
      font-weight: 600;
      color: #000;
      &:hover {
        text-decoration: underline;
        color: #0a66c2;
      }
    }
  }
`;

const Ellipsis = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  top: 6px;
  padding: 6px;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;

const PostContent = styled.div`
  padding: 12px;
  padding-top: 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.94);
  position: relative;
  overflow: hidden;
  /* height: 54px; */
  height: ${(props) => (props && props.showMore ? "100%" : "54px")};
  span {
    position: absolute;
    right: 12px;
    bottom: 2px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    background-color: #fff;
    &:hover {
      text-decoration: underline;
      color: #0a66c2;
      cursor: pointer;
    }
  }
`;

const PostMedia = styled.div`
  img {
    /* height: 100%; */
    width: 100%;
    object-fit: contain;
  }
`;
const InteractionSection = styled.div`
  padding: 4px 12px;
  padding-top: 0;
  display: flex;
`;

const Interaction = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 12px 6px;
  margin-right: 2px;
  background-color: #fff;
  border: 0;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  transition-duration: 150ms;
  border-radius: 6px;
  font-size: 14px;
  img {
    margin-right: 6px;
    filter: invert(40%);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
export default Post;
