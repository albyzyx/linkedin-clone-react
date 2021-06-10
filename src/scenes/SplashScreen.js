import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { getUserAuthAPI } from "../store/actions/actions";
import Home from "./Home/Home";
import Landing from "./Landing/Landing";

const SplashScreen = (props) => {
  props.getUserAuth();
  return props.user ? (
    <div>
      <Header />
      <Home />
    </div>
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
