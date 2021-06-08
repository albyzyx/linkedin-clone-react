import ProfileCarousel from "./components/ProfileCarousel";
import FeedCarousel from "./components/FeedCarousel";
import LatestCarousel from "./components/LatestCarousel";
import { Container, Content, Section, Layout } from "./style";

const Home = (props) => {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <a>Hiring in a hurry?</a>
          </h5>
          <p>Find talented pros in record time</p>
        </Section>
        <Layout>
          <ProfileCarousel />
          <FeedCarousel />
          <LatestCarousel />
        </Layout>
      </Content>
    </Container>
  );
};

export default Home;
