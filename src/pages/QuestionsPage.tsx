import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import BorderBox from "../components/BorderBox";
import BaseContainer from "../components/BaseContainer";
import styled from "styled-components";

const QuestionsPage = () => {
  const questions: Array<String> = [
    "Czy Twoj przedmiot jest z jednolitego tworzywa?",
    "Czy Twoj przedmiot przechowywał produkty żywnościowe płynne?",
    "Czy Twoj przedmiot jest z plastiku?",
  ];
  const [questionNumber, setQuestionNumber] = useState(0);

  const history = useHistory();
  const nextQuestion = () => {
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      history.push("/result");
    }
  };

  return (
    <BaseContainer>
      <BorderBox>
        <div>{questions[questionNumber]}</div>
        <ButtonBox>
          <StyledButton onClick={nextQuestion}>Tak</StyledButton>
          <PaddingDiv />
          <StyledButton onClick={nextQuestion}>Nie</StyledButton>
        </ButtonBox>
      </BorderBox>
    </BaseContainer>
  );
};
const PaddingDiv = styled.div.attrs(() => ({}))`
  padding-right: 30px;
`;
const ButtonBox = styled.div.attrs(() => ({}))`
  display: flex;
  padding-top: 25px;
  justify-content: center;
`;

const StyledButton = withStyles({
  root: {
    background: "red",
    color: "white",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default QuestionsPage;
