import React from "react";
import { Container } from "react-bootstrap";
import { BooRow, BooCol, BooButton, EyeIcon, Wrapper } from "./style";

import bakalavr from "../../assets/images/bakalavr.jpg";
import magistr from "../../assets/images/magistr.jpg";
import transfer from "../../assets/images/transfer.jpg";
import texnikum from "../../assets/images/texnikum.jpg";

import { BackGround } from './style'
import { Link } from "react-router-dom";

const Main = () => {

    const settings = {
        canvas: {
          canvasFillSpace: true,
          width: 200,
          height: 200,
          useBouncyWalls: false
        },
        particle: {
          particleCount: 250,
          color: '#888',
          minSize: 3,
          maxSize: 5
        },
        velocity: {
          directionAngle: 0,
          directionAngleVariance: 360,
          minSpeed: 1,
          maxSpeed: 1
        },
        opacity: {
          minOpacity: 0,
          maxOpacity: 0.7,
          opacityTransitionTime: 5000
        }
      }

  return (
    <Container>
    <BackGround settings={settings} />
      <BooRow>
        <BooCol bgimg={bakalavr}>
          <Wrapper className="wrapper" >
            <Wrapper.Title>Bakalavr-2021</Wrapper.Title>
            <Wrapper.SubTitle>Ma'lumotlar soni: 948211</Wrapper.SubTitle>
          </Wrapper>
          <Link to={'/bakalavr'} > <BooButton><EyeIcon/> Batafsil</BooButton></Link>
        </BooCol>
        <BooCol bgimg={magistr}>
          <Wrapper className="wrapper"  >
            <Wrapper.Title>Magistratura-2021</Wrapper.Title>
            <Wrapper.SubTitle>Ma'lumotlar soni: 74184</Wrapper.SubTitle>
          </Wrapper>
          <Link to={'/magistr'} > <BooButton><EyeIcon/> Batafsil</BooButton></Link>
        </BooCol>
      </BooRow>
      <BooRow>
        <BooCol bgimg={transfer}>
          <Wrapper className="wrapper"  >
            <Wrapper.Title>O'qishni ko'chirish-2021</Wrapper.Title>
            <Wrapper.SubTitle>Ma'lumotlar soni: 87486</Wrapper.SubTitle>
          </Wrapper>
          <Link to={'/transfer'} > <BooButton><EyeIcon/> Batafsil</BooButton></Link>
        </BooCol>
        <BooCol bgimg={texnikum}>
          <Wrapper className="wrapper"  >
            <Wrapper.Title>Texnikum-2021</Wrapper.Title>
            <Wrapper.SubTitle>Ma'lumotlar soni: 143771</Wrapper.SubTitle>
          </Wrapper>
          <Link to={'/texnikum'} > <BooButton><EyeIcon/> Batafsil</BooButton></Link>
        </BooCol>
      </BooRow>
    </Container>
  );
};

export default Main;
