import styled from "styled-components";

export const Container = styled.div`
  padding-top: 54px;
  overflow-x: hidden;
`;
export const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
export const Section = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;
  h5 {
    a {
      color: #0a66c2;
      font-size: 14px;
      margin-right: 4px;
    }
  }
  p {
    color: #434649;
    font-size: 14px;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "profile feed latest";
  grid-template-columns: 3fr 7fr 4fr;
  column-gap: 24px;
  row-gap: 24px;
  margin: 24px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
