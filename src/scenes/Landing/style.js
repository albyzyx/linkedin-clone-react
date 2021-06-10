import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
`;

export const Section = styled.section`
  display: flex;
  position: relative;
  margin: auto;
  max-width: 1128px;
  align-content: flex-start;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    padding-top: 0px;
    align-items: center;
    justify-content: center;
  }
`;

export const Hero = styled.div`
  /* width: 100%; */
  h1 {
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    color: #2977c9;
    line-height: 70px;
    padding-bottom: 0;
    @media (max-width: 768px) {
      font-size: 46px;
      line-height: 58px;
      width: 400px;
    }
  }

  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    top: 100px;
    right: -158px;
    @media (max-width: 768px) {
      margin-top: 24px;
      /* top: 420px; */
      /* left: 12px; */
      /* position: initial; */
      top: 500px;
      left: 50%;
      margin-left: -170px;
      width: 360px;
      height: 360px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  position: relative;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
  a {
    text-decoration: none;
  }
`;

export const Join = styled.button`
  font-size: 16px;
  padding: 10px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  background-color: transparent;
  margin-right: 12px;
  transition-duration: 150ms;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const Signin = styled.button`
  font-size: 16px;
  font-weight: 600;
  border: 2px #0a66c2 solid;
  background-color: transparent;
  color: #0a66c2;
  padding: 10px 24px;
  border-radius: 24px;
  transition-duration: 150ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;
export const Form = styled.div`
  margin-top: 12px;
  width: 400px;
  z-index: 1;
  @media (max-width: 768px) {
    /* margin-left: 24px; */
    margin-top: 24px;
  }
`;

export const Google = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  border: 1px solid #004a94;
  color: #004a94;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  transition-duration: 150ms;
  cursor: pointer;
  margin-left: 16px;
  img {
    margin-right: 12px;
  }
  &:hover {
    background-color: #dfefff;
  }
  @media (max-width: 768px) {
  }
`;

// export const EmailInput = styled.div`
//   position: relative;
//   input {
//     width: 100%;
//     padding: 22px 12px 6px 12px;
//     border-radius: 4px;
//     border: 1px solid rgba(0, 0, 0, 0.6);
//     ::placeholder {
//       color: transparent;
//     }
//   }
//   input:focus {
//     outline: none !important;
//     border: 1px #0a66c2 solid;
//     box-shadow: 0px 0px 0px 1px rgba(10, 102, 194, 1);
//   }
//   input:focus ~ span,
//   input:not(:placeholder-shown) ~ span {
//     font-size: 12px;
//     top: 6px;
//     left: 10px;
//   }
//   span {
//     position: absolute;
//     top: 16px;
//     left: 14px;
//     color: rgba(0, 0, 0, 0.6);
//     font-size: 14px;
//     transition: 150ms linear;
//     pointer-events: none;
//   }
// `;
// export const PasswordInput = styled(EmailInput)`
//   margin-top: 12px;
//   button {
//     position: absolute;
//     top: 6px;
//     right: -16px;
//     font-size: 16px;
//     font-weight: 600;
//     color: rgba(0, 0, 0, 0.6);
//     background-color: transparent;
//     border: none;
//     border-radius: 4px;
//     padding: 8px;
//     :hover {
//       background-color: rgba(0, 0, 0, 0.06);
//       cursor: pointer;
//     }
//   }
// `;
export const ForgotPasswordText = styled.div`
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
export const SignInButton = styled(Google)`
  border: 0;
  background-color: #0a66c2;
  color: #fff;
  margin-bottom: 12px;
  &:hover {
    background-color: #004a94;
  }
`;
