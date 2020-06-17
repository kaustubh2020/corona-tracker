import React from "react";
import styled from "styled-components";
import { Data } from "./Data";

const Questions = () => {
  return (
    <Section>
      <Title><h2>Common Questions</h2></Title>
      {Data.map((item, i) => {
        return (
          <Container key={i}>
            <Question>{item.question}</Question>
            <Answer><span role="img" aria-label="hand">
              👉🏻
        </span>{" "}{item.answer}</Answer>
          </Container>
        );
      })}
    </Section>
  );
};

export default Questions;

const Section = styled.div`
  width: 80%;
  height: auto;
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
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
  margin-top: 20px;
  width: 100%;
}
`;
const Title = styled.h1`
  padding: 1em 1em;
  display: block;
  text-align: center;
  color: #222831;
`;

const Container = styled.div`
  display: flex;
  border-top: 0.5px solid #d2d6dc;
  border-bottom: 0.5px solid #d2d6dc;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  padding: 2em 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-right:1em;
  }
`;
const Question = styled.h2`
  display: flex;
 color: #F13043;
  font-size: 20px;
  width: 50%;
  margin-right: 1em;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 10px;
  }
`;

const Answer = styled.h2`
  font-size: 20px;
  width: 100%;
  line-height: 1.5;
  font-weight: 100;
  @media (max-width: 1000px) {
    font-size: 18px;
    width: 95%;
    padding:0 1em;
  }
`;