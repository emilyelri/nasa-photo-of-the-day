import React from "react";
import APODContainer from "./components/APODContainer";
import styled from 'styled-components';
import "./App.css";
import img from './img/bg.jpg';

const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    background-repeat: no-repeat;
    width: 100%;
    height: 98vh;
`;

function App() {

  return (
    <Content>
      <APODContainer />
    </Content>
  );
}

export default App;