import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import BorderBox from "../components/BorderBox";
import BaseContainer from "../components/BaseContainer";

const HomePage = () => {
  const history = useHistory();
  return (
    <BaseContainer>
      <BorderBox>
        <WelcomeText>
          <Text>
            Próbowałeś już wszystkiego i nie masz pomysłu jak przywrócić życie
            swoim zużytym rzeczom?
          </Text>
          <Text>
            Jeżeli musisz je wyrzucić lecz nie wiesz gdzie, pomożemy Ci.
          </Text>
          <Text>
            Odpowiedz na kilka pytań, a powiemy Ci co powinieneś zrobić! :)
          </Text>
        </WelcomeText>
        <Button
          style={{
            background: "white",
            color: "#ff6a00",
            fontWeight: "bold"
          }}
          onClick={() => history.push("/questions")}
        >
          Zaczynamy!
        </Button>
      </BorderBox>
    </BaseContainer>
  );
};

const Text = styled.div.attrs(() => ({}))`
  padding-bottom: 10px;
  padding-top: 10px;
`;

const WelcomeText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: white;
  padding-bottom: 75px;
`;

export default HomePage;
