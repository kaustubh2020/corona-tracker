import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Manifesto = () => {
  return (
    <Section>
      <div>
        <Heading><h2>The Self-Quarantine Guide</h2></Heading>
        <SubHeading>
          With no well-studied treatment and no viable vaccine available for at
          least another year, the only effective way to keep the coronavirus
          pandemic at bay is to give the virus fewer chances of spreading. The
          following list of actions, ordered from easiest to implement to most
          effective in the fight against the pandemic, should serve as a set of
          loose guidelines for people who wish to join the movement and take
          action that can actually make a difference.
        </SubHeading>

        <Container>
          <Title>
            Practice social distancing, no hugs and kisses, no handshakes, no
            high fives. If you must, use safer alternatives.
          </Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/WdiaOAX35Pnzi/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>
            Do not attend concerts, stage plays, sporting events, or any other
            mass entertainment events. <br />
            Refrain from visiting museums, exhibitions, movie theaters, night
            clubs, and other entertainment venues. <br />
            Stay away from social gatherings and events, like club meetings,
            religious services, and private parties.
          </Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/UWbTKqJTkd7uErSq99/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>
            Wash your hands often and practice good cough and sneeze etiquette.
        </Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/kemdi7TniqYca14jI8/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>
            If you can work from home, work from home. Urge your employer to allow
            remote work if needed.Reduce travel to a minimum. Don't travel long
            distances if not absolutely necessary. Do not use public
            transportation if not absolutely necessary.
        </Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/3oKIPoAP1wLvewc7QI/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>
            Replace as many social interactions as possible with remote
            alternatives like phone calls or video chat.
        </Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/lS7kOhwRbZwLDynCA7/giphy.gif" />
          </LazyLoad>
        </Container>

        <Container>
          <Title>Do not leave your home unless absolutely necessary.</Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/Qu1fT51CG14ksIkASL/giphy.gif" />
          </LazyLoad>
        </Container>
        <Container>
          <Title>Do not panic, but be alert</Title>
          <LazyLoad height="100%">
            <Img src="https://media.giphy.com/media/McVcE1YJrsze1qtgnP/giphy.gif" />
          </LazyLoad>
        </Container>
      </div>
    </Section>
  );
};

export default Manifesto;

const Section = styled.div`
background-image: url(https://incompetech.com/graphpaper/notelined/College%20Lined%20Black.png);
background-size: contain;

width: 80%;
margin-top: 100px;
border-radius: 15px;
-webkit-box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1), -5px -5px 10px #fff;
-moz-box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1), -5px -5px 10px #fff;
box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1), -5px -5px 10px #fff;
&:hover{
    -webkit-box-shadow: 15px 15px 20px rgb(0, 0, 0, 0.1), -15px -15px 20px #fff;
  -moz-box-shadow: 15px 15px 20px rgb(0, 0, 0, 0.1), -15px -15px 20px #fff;
  box-shadow: 15px 15px 20px rgb(0, 0, 0, 0.1), -15px -15px 20px #fff;
}
@media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
  }
`;

const Heading = styled.h1`
  max-width: 10000px;
  margin: 1em 1em;
  color: #222831;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
  height: auto;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
  }
`;
const SubHeading = styled.p`
  max-width: 10000px;
  line-height: 1.8;
  font-size: 1.2em;
  margin: 1em 1em;
`;
const Img = styled.img`
  width: auto;
  margin: 1em;
  @media (max-width: 768px) {
    margin: 1em;
    width: 100%;
  }
`;

const Title = styled.h2`
  max-width: 500px;
  width: auto;
  margin: 1em;
  font-weight: 500;
  line-height: 1.5;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 2em 1em 1em 1em;
    margin-bottom: 0;
  }
  span {
    font-weight: 700;
  }
`;
