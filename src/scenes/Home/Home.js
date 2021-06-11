import ProfileCarousel from "./components/ProfileCarousel";
import FeedCarousel from "./components/FeedCarousel";
import LatestCarousel from "./components/LatestCarousel";
import { Container, Content, Section, Layout } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
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
          <ProfileCarousel user={props.user} />
          <FeedCarousel user={props.user} />
          <LatestCarousel user={props.user} />
        </Layout>
      </Content>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
