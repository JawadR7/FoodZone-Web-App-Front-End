import styled from "styled-components";

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #272d2f;
  .logo {
    font-family: Tahoma;
    font-style: italic;
    font-weight: bold;
    line-height: 55px;
    font-size: xx-large;
    a {
      text-decoration: none;
      color: #ffffff;
    }

    img {
      height: 55px;
    }
  }
  .auth-btns {
    width: 100%;
    .btn {
      float: right;
      color: #fff;
      font-weight: 600;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .sign-in {
      line-height: 45px;
    }
    .sign-up {
      height: 30px;
      width: 80px;
      background: #fe724c;
      border: 1px solid #07709d;
      border-radius: 5px;
      padding: 3px;
      margin-top: 15px;
    }
  }
`;
