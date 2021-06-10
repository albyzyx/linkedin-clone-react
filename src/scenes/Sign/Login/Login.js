import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Login = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Link to="/">
            <img src="/images/login-logo.svg" alt="" />
          </Link>
        </Header>
        <Card>
          <Form>
            <HeaderText>
              <h1>Sign in</h1>
              <span>Stay updated in your professional world</span>
            </HeaderText>
            <EmailInput>
              <input type="text" placeholder="Email or Phone number" />
              <span>Email or Phone number</span>
            </EmailInput>
            <PasswordInput>
              <input type="text" placeholder="Password" />
              <span>Password</span>
              <button>Show</button>
            </PasswordInput>

            <ForgotPasswordText>
              <span>Forgot password?</span>
            </ForgotPasswordText>
            <SignInButton>Sign in</SignInButton>
            <Google>
              <img src="/images/google.svg" alt="" />
              Sign in with google
            </Google>
          </Form>
        </Card>
        <JoinNowText>
          <p>New to Linkedin?</p>
          <Link to="/signup">
            <span>Join now</span>
          </Link>
        </JoinNowText>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Container = styled.div`
  padding: 0;
  margin-top: 20vh;
  @media (max-width: 1128px) {
    margin-top: 36px;
  } ;
`;

const Content = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: -300px;
  img {
    width: 135px;
    height: 34px;
    cursor: pointer;
  }
`;

const HeaderText = styled.div`
  h1 {
    font-size: 32px;
    margin-bottom: 12px;
  }
  span {
    font-size: 15px;
  }
  margin-bottom: 24px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.div`
  width: 400px;
  padding: 24px;
  padding-right: 48px;
  margin-top: 24px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 1128px) {
    background-color: unset;
    box-shadow: none;
  }
`;

const Google = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border-radius: 28px;
  font-size: 20px;
  border: 1px solid #004a94;
  color: #004a94;
  transition-duration: 150ms;
  cursor: pointer;
  margin-left: 16px;
  img {
    margin-right: 12px;
  }
  &:hover {
    background-color: #dfefff;
  }
`;

const EmailInput = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 22px 12px 6px 12px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    ::placeholder {
      color: transparent;
    }
  }
  input:focus {
    outline: none !important;
    border: 1px #0a66c2 solid;
    box-shadow: 0px 0px 0px 1px rgba(10, 102, 194, 1);
  }
  input:focus ~ span,
  input:not(:placeholder-shown) ~ span {
    font-size: 12px;
    top: 6px;
    left: 10px;
  }
  span {
    position: absolute;
    top: 16px;
    left: 14px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    transition: 150ms linear;
    pointer-events: none;
  }
`;
const PasswordInput = styled(EmailInput)`
  margin-top: 12px;
  button {
    position: absolute;
    top: 6px;
    right: -16px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    border: none;
    border-radius: 4px;
    padding: 8px;
    :hover {
      background-color: rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }
  }
`;

const ForgotPasswordText = styled.div`
  margin: 24px 0;
  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      color: #0a66c2;
    }
  }
`;
const SignInButton = styled(Google)`
  border: 0;
  background-color: #0a66c2;
  color: #fff;
  margin-bottom: 12px;
  margin-top: 24px;
  &:hover {
    background-color: #004a94;
  }
`;

const JoinNowText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 24px;
  p {
    color: rgba(0, 0, 0, 0.94);
    margin-right: 4px;
  }
  span {
    color: #004a94;
    font-weight: 600;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
