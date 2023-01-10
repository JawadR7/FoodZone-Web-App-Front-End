import styled from "styled-components";

export const SMap = styled.div`
  .map {
    background-image: url("/assets/map-sample.png");
    filter: saturate(200%);
    background-image: url("/assets/map-sample.png");
    width: 50%;
    height: 100vh;
    background-size: cover;
    float: left;
  }
  .listDisp {
    max-height: 100vh;
    overflow-y: scroll;
  }
  .listBar {
    background-color: #fe724c;
    color: #ffffff;
    padding: 2%;
  }
  .listArea {
  }
  .container-fluid {
    height: 100%;
  }
  .row {
    margin-top: 10%;
    width: 75%;
  }
`;
