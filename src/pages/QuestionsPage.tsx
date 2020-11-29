import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import BorderBox from "../components/BorderBox";
import BaseContainer from "../components/BaseContainer";
import styled from "styled-components";

const QuestionsPage = () => {
  const generalQuestions = () => {
    let map: Map<String, Array<any>> = new Map<String, Array<any>>();
    map.set("Czy jest to przedmiot papierowy?", ["PAPER", "GLASS"]);
    map.set("Czy przedmiot jest wykonany ze szkła?", ["GLASS", "BIO"]);
    map.set("Czy jest to odpad bio?", ["BIO", "METAL_PLASTIC"]);
    map.set("Czy jest to tworzywo sztuczne bądź metal?", [
      "METAL_PLASTIC",
      "OTHERS",
    ]);
    return map;
  };

  const paperQuestions = () => {
    let map: Map<any, Array<any>> = new Map<any, Array<any>>();
    map.set("Czy są to chusteczki bądź ręcznik papierowy?", [
      "END_ALL",
      "PAPER",
    ]);
    map.set("Czy materiał jest zatłuszczony?", ["END_ALL", "PAPER"]);
    map.set("Czy przedmiot jest mokry lub brudny?", ["END_ALL", "PAPER"]);
    map.set("Czy są to gazety?", ["END_PAPER", "PAPER"]);
    map.set("Czy są to zeszyty bądź książki?", ["END_PAPER", "PAPER"]);
    return map;
  };

  const glassQuestions = () => {
    let map: Map<any, Array<any>> = new Map<any, Array<any>>();
    map.set("Czy jest to opakowanie po kosmetykach?", ["END_ALL", "GLASS"]);
    map.set("Czy jest to butelka lub słoik?", ["END_ALL", "GLASS"]);
    map.set("Czy jest to żarówka lub lampa?", ["END_OTHERS", "GLASS"]);
    return map;
  };

  const bioQuestions = () => {
    let map: Map<any, Array<any>> = new Map<any, Array<any>>();
    map.set("Czy są to kości?", ["END_ALL", "BIO"]);
    map.set("Czy są to resztki jedzenia?", ["END_BIO", "BIO"]);
    map.set("Czy są to fusy po herbacie?", ["END_BIO", "BIO"]);
    map.set("Czy są to odpaki warzywne lub owocowe?", ["END_BIO", "BIO"]);
    return map;
  };

  const metalOrPlasticQuestions = () => {
    let map: Map<any, Array<any>> = new Map<any, Array<any>>();
    map.set("Czy są to plastikowe worki?", [
      "END_METAL_PLASTIC",
      "METAL_PLASTIC",
    ]);
    map.set("Czy są to puszki?", ["END_METAL_PLASTIC", "METAL_PLASTIC"]);
    map.set("Czy są to plastikowe butelki?", [
      "END_METAL_PLASTIC",
      "METAL_PLASTIC",
    ]);
    map.set("Czy są to opakowania zabrudzone tłuszczem?", [
      "END_OTHERS",
      "METAL_PLASTIC",
    ]);
    return map;
  };

  const questionsByTypes = () => {
    let map: Map<String, Map<String, Array<String>>> = new Map<
      String,
      Map<String, Array<String>>
    >();
    map.set("GENERAL", generalQuestions());
    map.set("PAPER", paperQuestions());
    map.set("GLASS", glassQuestions());
    map.set("BIO", bioQuestions());
    map.set("METAL_PLASTIC", metalOrPlasticQuestions());
    return map;
  };

  const history = useHistory();

  const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
  const [actualQuestionCategory, setActualQuestionCategory] = useState<String>(
    "GENERAL"
  );
  const [actualQuestion, setActualQuestion] = useState<String>(
    "Czy jest to przedmiot papierowy?"
  );

  const goToNextQuestion = (answer: String) => {
    const [index, questionCategory] = checkPreviousAnswer(answer);
    if (questionCategory && new String(questionCategory).includes("END_")) {
      history.push("/result?action=" + questionCategory);
    } else {
      assignNewQuestion(index, questionCategory);
    }
  };

  const checkPreviousAnswer = (answer: String) => {
    const categoryQuestions: Map<
      String,
      Array<String>
    > = questionsByTypes().get(actualQuestionCategory)!!;
    const categoryQuestionsNumber = categoryQuestions.size;
    if (categoryQuestionsNumber === actualQuestionIndex + 1) {
      return [actualQuestionIndex, "END_OTHERS"];
    }
    const answerActions = categoryQuestions.get(actualQuestion)!!;
    const nextQuestionCategory =
      answer === "YES"
        ? (answerActions[0] as String)
        : (answerActions[1] as String);
    let questionIndex = actualQuestionIndex;
    let questionCategory = actualQuestionCategory;
    if (nextQuestionCategory !== actualQuestionCategory) {
      questionIndex = 0;
      questionCategory = nextQuestionCategory;
    } else {
      questionIndex = actualQuestionIndex + 1;
    }
    return [questionIndex, questionCategory];
  };

  const assignNewQuestion = (index: any, questionCategory: any) => {
    const categoryQuestions: Map<
      String,
      Array<String>
    > = questionsByTypes().get(questionCategory)!!;
    const question = Array.from(categoryQuestions.keys())[index];
    setActualQuestionCategory(questionCategory);
    setActualQuestionIndex(index);
    setActualQuestion(question);
  };

  return (
    <BaseContainer>
      <DefinedHeightBorderBox>
        <Question>{actualQuestion}</Question>
        <ButtonBox>
          <Button
            style={{
              background: "white",
              color: "#ff6a00",
              fontWeight: "bold",
            }}
            size="large"
            onClick={() => goToNextQuestion("YES")}
          >
            Tak
          </Button>
          <PaddingDiv />
          <Button
            style={{
              background: "white",
              color: "#ff6a00",
              fontWeight: "bold",
            }}
            size="large"
            onClick={() => goToNextQuestion("NO")}
          >
            Nie
          </Button>
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
  color: white;
  font-size: 17px;
`;

export default QuestionsPage;
