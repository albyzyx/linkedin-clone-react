import {
  Container,
  Nav,
  Join,
  Signin,
  Section,
  Hero,
  Form,
  Google,
} from "./style";

const Landing = () => {
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

export default Landing;
