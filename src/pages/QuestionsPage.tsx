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
      <DefinedHeightBorderBox>
        <Question>{questions[questionNumber]}</Question>
        <ButtonBox>
          <StyledButton size="large" onClick={nextQuestion}>Tak</StyledButton>
          <PaddingDiv />
          <StyledButton size="large" onClick={nextQuestion}>Nie</StyledButton>
        </ButtonBox>
      </DefinedHeightBorderBox>
    </BaseContainer>
  );
};

const DefinedHeightBorderBox = styled(BorderBox)`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaddingDiv = styled.div.attrs(() => ({}))`
  padding-right: 30px;
`;

const ButtonBox = styled.div.attrs(() => ({}))`
  display: flex;
  justify-content: center;
`;

const Question = styled.div.attrs(() => ({}))`
  text-align: center;
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
