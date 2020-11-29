import React from "react";
import BaseContainer from "../components/BaseContainer";
import BorderBox from "../components/BorderBox";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useLocation } from "react-router-dom";

import yellow from "../assets/images/yellow.png";
import grey from "../assets/images/grey.png";
import brown from "../assets/images/brown.png";
import blue from "../assets/images/blue.png";
import green from "../assets/images/green.png";
import { useHistory } from "react-router-dom";

function useQuery() {
  const rx = new RegExp("[?&]action=([^&]+).*$");
  const returnVal = useLocation().search.match(rx);
  return returnVal === null ? "" : returnVal[1];
}
const ResultsPage = () => {
  const history = useHistory();
  let actionType = useQuery();
  console.log(actionType);

  const mappings = () => {
    let map: Map<String, String> = new Map<String, any>();
    map.set("END_METAL_PLASTIC", "Metal");
    map.set("END_METAL_PLASTIC", "Tworzywa sztuczne");
    map.set("END_ALL", "Odpady zmieszane");
    map.set("END_BIO", "Odpady organiczne");
    map.set("END_PAPER", "Papier");
    map.set("END_GLASS", "Szkło");
    return map;
  };

  const getImagesPerType = () => {
    let map: Map<String, any> = new Map<String, any>();
    map.set("Metal", yellow);
    map.set("Tworzywa sztuczne", yellow);
    map.set("Odpady zmieszane", grey);
    map.set("Odpady organiczne", brown);
    map.set("Papier", blue);
    map.set("Szkło", green);
    return map;
  };

  if (!actionType || actionType === "END_OTHERS") {
    return (
      <BaseContainer>
        <FlexBorderBox>
          <GoBackSection onClick={() => history.push("/")}>
            <ArrowBackIosIcon fontSize="large" style={{ color: "#1A81B3" }} />
            <AgainText>Jeszcze raz</AgainText>
          </GoBackSection>
          <ProblemText>
            <div>
              Prawdopodobnie próbujesz wyrzucić rzecz która nie kwalifikuje się
              do bezpośrednije segregacji bądź też algorytm nie znalazł
              dopasowania.
            </div>
            <div>
              Odpady wielkogabarytowe, odpady niebezpieczne, medyczne, sprzęt
              elektroniczny lub materiały budowlane nie mogą być wyrzucane do
              osiedlowych śmietników.
            </div>
            <div>
              Więcej informacji: https://naszesmieci.mos.gov.pl/jak-segregowac
            </div>
          </ProblemText>
        </FlexBorderBox>
      </BaseContainer>
    );
  }

  const garbageType = mappings().get(actionType)!!;
  const garbageUrl = getImagesPerType().get(garbageType);
  return (
    <BaseContainer>
      <FlexBorderBox>
        <GoBackSection onClick={() => history.push("/")}>
          <ArrowBackIosIcon fontSize="large" style={{ color: "#1A81B3" }} />
          <AgainText>Jeszcze raz</AgainText>
        </GoBackSection>
        <UpperText>Wyrzuć "śmieci" tutaj:</UpperText>
        <Image src={garbageUrl} />
        <BottomText>{garbageType}</BottomText>
      </FlexBorderBox>
    </BaseContainer>
  );
};

const AgainText = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #1a81b3;
  padding-top: 5px;
`;

const GoBackSection = styled.div.attrs(() => ({}))`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

const FlexBorderBox = styled(BorderBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

const Image = styled.img.attrs(() => ({}))`
  width: 100px;
  height: 150px;
`;
const ProblemText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: #1a81b3;
`;

const UpperText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: #1a81b3;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;
const BottomText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: #1a81b3;
  padding-top: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

export default ResultsPage;
