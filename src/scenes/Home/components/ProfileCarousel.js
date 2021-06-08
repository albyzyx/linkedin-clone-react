import styled from "styled-components";

const ProfileCarousel = () => {
  return (
    <Container>
      <Content>
        <Profile>
          <ProfileBackground>
            <UserImage>
              <img src="/images/albyDP.jpg" alt="" />
            </UserImage>
          </ProfileBackground>
          <UserInfo>
            <UserName>Albin Arun</UserName>
            <UserBio>
              Full Stack Developer | CS Engineer | Ai/Ml Afficionado
            </UserBio>
          </UserInfo>
        </Profile>
        <Connection>
          <div>
            <span>Connections</span>
            <p>40</p>
            {/* <img src="/images/widget-icon.svg" alt="" /> */}
          </div>
          <div>
            <span>Grow your network</span>
          </div>
          <div>
            <span>Who viewed your profile</span>
            <p>40</p>
          </div>
        </Connection>
        <MyItems>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </MyItems>
      </Content>
      <CommunityCard>
        <div>
          <span>Groups</span>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
          <span>Followed Hastags</span>
        </div>
        <DiscoverMore>
          <span>Discover more</span>
        </DiscoverMore>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: profile;
  min-width: 100%;
  @media (max-width: 768px) {
    position: absolute;
    visibility: hidden;
  }
`;

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e2e2;
`;

const Profile = styled.div`
  background-color: #ffffff;

  border-bottom: 1px solid #e0e0e0;
`;

const ProfileBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  position: relative;
  /* margin: -12px -12px 0; */
`;

const UserImage = styled.div`
  position: absolute;
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
  left: 50%;
  bottom: -36px;
  margin-left: -36px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const UserInfo = styled.div`
  padding: 18px;
  padding-top: 54px;
  &:hover {
    h1 {
      text-decoration: underline;
    }
    cursor: pointer;
  }
`;

const UserName = styled.h1`
  text-align: center;
  /* line-height: 1.5; */
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const UserBio = styled.div`
  font-size: 12px;
  color: #757575;
  text-align: center;
  justify-content: center;
  margin-top: 8px;
`;

const Connection = styled.div`
  padding: 12px 0px;

  line-height: 1.2;
  border-bottom: 1px solid #e0e0e0;
  div {
    padding: 0px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(1) {
      margin-top: 8px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        cursor: pointer;
      }
    }
    &:nth-child(2) {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
    &:nth-child(3) {
      margin-top: 8px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        cursor: pointer;
      }
    }
    span {
      color: #757575;
      font-size: 12px;
      font-weight: 600;
    }
    p {
      color: #0a66c2;
      font-size: 14px;
      font-weight: 600;
    }
    img {
      filter: invert(50%);
    }
  }
`;

const MyItems = styled.div`
  padding: 14px 12px;
  font-size: 14px;
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  span {
    color: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    img {
      margin-right: 6px;
      filter: invert(50%);
    }
  }
`;

const CommunityCard = styled(Content)`
  margin-top: 12px;
  div {
    &:first-child {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e0e0e0;
      padding: 0 12px;
      span {
        color: #0a66c2;
        font-size: 13px;
        font-weight: 600;
        padding-top: 12px;
        &:nth-child(2) {
          display: flex;
          justify-content: space-between;
          img {
            filter: invert(50%);
            &:hover {
              filter: none;
              cursor: pointer;
              background-color: rgba(0, 0, 0, 0.08);
              border-radius: 50%;
            }
          }
        }
        &:nth-child(3) {
          padding-bottom: 6px;
        }
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;

const DiscoverMore = styled.div`
  padding: 14px;
  text-align: center;
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default ProfileCarousel;
