import styled from "styled-components";

const LatestCarousel = () => {
  return (
    <Container>
      <Content>
        <div>
          <span>Add to your feed</span>
        </div>
        <Follow>
          <Avatar />
          <div id="title">
            <span>#Linkedin</span>
            <button>Follow</button>
          </div>
        </Follow>
        <Follow>
          <Avatar />
          <div id="title">
            <span>#Videos</span>
            <button>Follow</button>
          </div>
        </Follow>
        <span>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </span>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  grid-area: latest;
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
  padding: 12px;
  div {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }
  span {
    &:nth-child(4) {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #0a66c2;
      font-weight: 600;
      margin-top: 12px;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
      img {
        margin-left: 6px;
      }
    }
  }
`;

const Follow = styled.div`
  display: flex;
  #title {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 1.5;
    button {
      font-weight: 600;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.6);
      padding: 6px 12px;
      border-radius: 24px;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 48px;
  width: 48px;
`;
export default LatestCarousel;
