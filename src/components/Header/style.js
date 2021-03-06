import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1128px;
  margin: auto;
  padding: 0px 72px;
  min-height: 100%;
  /* min-height: 52px; */
  @media (max-width: 768px) {
    padding: 0 22px;
  }
`;

export const Logo = styled.span`
  margin: 0;
  font-size: 0;
`;

export const Search = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin: 0 12px;
  max-width: 300px;
  min-width: 170px;
  input {
    border: 0;
    width: 100%;
    background-color: #eef3f8;
    padding: 0 8px 0 40px;
    border-radius: 4px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
  img {
    height: 18px;
    width: 18px;
  }
`;

export const NavContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

export const Nav = styled.nav`
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  /* max-height: 52px; */
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: flex;
  width: 100%;
  padding-top: 6px;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    /* min-height: 52px; */
    text-decoration: none;
    min-width: 80px;
    line-height: 1.5;
    span {
      /* padding-top: 4px; */
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover,
  &:active {
    cursor: pointer;
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }

  &.active {
    border-bottom: 2px solid #000000;
    a {
      span {
        color: #000;
      }
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 0;
      min-height: 0px;
      span {
        padding: 0;
      }
    }
  }
`;

export const User = styled(NavItem)`
  a {
    img {
      width: 24px;
      border-radius: 50%;
    }

    span {
      display: flex;
      align-items: center;
      img {
        padding-left: 2px;
        width: 12px;
      }
    }
  }
`;

export const Work = styled(User)`
  padding-left: 12px;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
