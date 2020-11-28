import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
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
        <StyledButton onClick={()  => history.push("/questions")}>Zaczynamy!</StyledButton>
      </BorderBox>
    </HomePageContainer>
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
  font-weight: bold;
`;

const HomePageContainer = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BorderBox = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  background-color: #FF6A00;
  padding: 30px;
  border-radius: 25px;
`;

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default HomePage;