import React from "react";
import BaseContainer from "../components/BaseContainer";
import BorderBox from "../components/BorderBox";
import styled from "styled-components";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import yellow from '../assets/images/yellow.png';
import grey from '../assets/images/grey.png';
import brown from '../assets/images/brown.png';
import blue from '../assets/images/blue.png';
import green from '../assets/images/green.png';
import {useHistory} from "react-router-dom";

const ResultsPage = () => {
  const history = useHistory();
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

  const randomIndex = Math.floor(Math.random() * (getImagesPerType().size - 1));
  const garbageType = Array.from(getImagesPerType().keys())[randomIndex];
  const garbageUrl = getImagesPerType().get(garbageType);

  return (
    <BaseContainer>
      <FlexBorderBox>
        <GoBackSection onClick={() => history.push("/")}>
          <ArrowBackIosIcon fontSize="large" style={{color: "#1A81B3"}}/>
          <AgainText>
            Jeszcze raz
          </AgainText>
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
  color: #1A81B3;
  padding-top: 5px;
`

const GoBackSection = styled.div.attrs(() => ({}))`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`

const FlexBorderBox = styled(BorderBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

const Image = styled.img.attrs(() => ({}))`
  width: 100px;
  height: 150px;
`
const UpperText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: #1A81B3;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;
const BottomText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: #1A81B3;
  padding-top: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

export default ResultsPage;
