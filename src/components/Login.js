import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <Signin>Sign in</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Section = styled.section`
  display: flex;
  position: relative;
  margin: auto;
  max-width: 1128px;
  align-content: flex-start;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  z-index: 1;
  @media (max-width: 768px) {
    margin: auto;
    margin-top: 24px;
  }
`;

const Google = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
  }
  @media (max-width: 768px) {
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    color: #2977c9;
    line-height: 70px;
    padding-bottom: 0;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 24px;
      text-align: center;
      line-height: 24px;
    }
  }

  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    top: 100px;
    right: -158px;
    @media (max-width: 768px) {
      margin-top: 24px;
      top: 230px;
      position: initial;
      width: initial;
      height: initial;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Signin = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  border: 2px #0a66c2 solid;
  color: #0a66c2;
  padding: 10px 24px;
  border-radius: 24px;
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

export default Login;
