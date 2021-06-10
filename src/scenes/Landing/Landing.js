import {
  Container,
  Nav,
  Join,
  Signin,
  Section,
  Hero,
  Form,
  Google,
  ForgotPasswordText,
  SignInButton,
} from "./style";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { signInWithGoogleAPI } from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => {
    dispatch(signInWithGoogleAPI());
  },
});

const Landing = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const signIn = (email, password) => {
    if (password.length < 6) {
      setPasswordError(true);
    }
    setEmailError(true);
  };
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="" />
        </Link>
        <div>
          <Link to="signup">
            <Join>Join now</Join>
          </Link>

          <Link to="login">
            <Signin>Sign in</Signin>
          </Link>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <EmailInput error={emailError}>
            <input
              type="email"
              value={email}
              placeholder="Email or Phone number"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span>{emailError ? "Enter a valid email" : "Email"}</span>
          </EmailInput>
          <PasswordInput error={passwordError}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span>Password</span>
            <button onClick={() => setShowPassword(!showPassword)}>Show</button>
          </PasswordInput>
          <ForgotPasswordText>
            <span>Forgot password?</span>
          </ForgotPasswordText>
          <SignInButton onClick={() => signIn(email, password)}>
            Sign in
          </SignInButton>
          <Google onClick={() => props.signInWithGoogle()}>
            <img src="/images/google.svg" alt="" />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const EmailInput = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 22px 12px 6px 12px;
    border-radius: 4px;
    border: 1px solid
      ${(props) => (props && props.error ? "red" : "rgba(0, 0, 0, 0.6)")};
    ::placeholder {
      color: transparent;
    }
  }
  input:focus {
    outline: none !important;
    border: 1px ${(props) => (props && props.error ? "red" : "#0a66c2")} solid;
    box-shadow: 0px 0px 0px 1px
      ${(props) => (props && props.error ? "red" : "#0a66c2")};
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
    color: ${(props) => (props && props.error ? "red" : "rgba(0, 0, 0, 0.6)")};
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
