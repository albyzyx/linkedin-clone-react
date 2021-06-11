import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { getUserAuthAPI } from "../store/actions/actions";
import Home from "./Home/Home";
import IntroPage from "./IntroPage";
import Landing from "./Landing/Landing";

const SplashScreen = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return props.user ? (
    <>
      {props.user.displayName && props.user.bio && props.user.designation ? (
        <>
          <Header photoURL={props.user.photoURL} />
          <Home />
        </>
      ) : (
        <IntroPage />
      )}
    </>
  ) : (
    <Landing />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuthAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
