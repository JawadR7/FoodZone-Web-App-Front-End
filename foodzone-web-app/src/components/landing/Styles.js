import styled from "styled-components";

export const Main = styled.div`
  background-image: url("/assets/food-cover.jpg");
  filter: saturate(200%);
  background-image: linear-gradient(rgba(1, 1, 1, 0.52), rgba(8, 8, 8, 0.73)),
    url("/assets/food-cover.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  .container-fluid {
    height: 100%;
  }
  .row {
    margin-top: 10%;
    width: 75%;
    .headline {
      text-align: center;
      color: #ffffff;
      height: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .search-bar {
      border: 1px solid #fe724c;
      background: #ffffff;
      font-size: 2em;
      font-weight: 600;
    }
    .search-btn {
      border: 1px solid #fe724c;
      background: #272d2f;
      font-size: 2em;
      color: #ffffff;
      font-weight: 600;
    }
  }
`;
