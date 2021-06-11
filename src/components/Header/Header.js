/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Logo,
  Search,
  SearchIcon,
  NavContainer,
  Nav,
  NavList,
  NavItem,
  User,
  Work,
} from "./style";
import { signOutAPI } from "../../store/actions/actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="/images/home-logo.svg" alt="" />
        </Logo>
        <Search>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>

          <input type="text" placeholder="Search" />
        </Search>
        <NavContainer>
          <Nav>
            <NavList>
              <NavItem className="active">
                <Link to="">
                  <img src="/images/nav-home.svg" alt="" />
                  <span>Home</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="">
                  <img src="/images/nav-network.svg" alt="" />
                  <span>My Network</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="">
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="">
                  <img src="/images/nav-messaging.svg" alt="" />
                  <span>Messaging</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="">
                  <img src="/images/nav-notifications.svg" alt="" />
                  <span>Notifications</span>
                </Link>
              </NavItem>
              <User onClick={() => props.signOut()}>
                <a>
                  <img
                    src={props.photoURL ? props.photoURL : "/images/user.svg"}
                    alt=""
                  />
                  <span>
                    Me
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
              </User>
            </NavList>
          </Nav>
          <Work>
            <Link to="">
              <img src="/images/nav-work.svg" alt="" />
              <span>
                Work
                <img src="/images/down-icon.svg" alt="" />
              </span>
            </Link>
          </Work>
        </NavContainer>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(signOutAPI());
  },
});

export default connect(null, mapDispatchToProps)(Header);
