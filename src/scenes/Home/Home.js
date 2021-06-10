import ProfileCarousel from "./components/ProfileCarousel";
import FeedCarousel from "./components/FeedCarousel";
import LatestCarousel from "./components/LatestCarousel";
import { Container, Content, Section, Layout } from "./style";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <Link to="">Hiring in a hurry?</Link>
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
