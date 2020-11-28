import React from "react";
import BaseContainer from "../components/BaseContainer";
import BorderBox from "../components/BorderBox";
import styled from "styled-components";

import yellow from '../assets/images/yellow.png';
import grey from '../assets/images/grey.png';
import brown from '../assets/images/brown.png';
import blue from '../assets/images/blue.png';
import green from '../assets/images/green.png';

const ResultsPage = () => {
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
        <UpperText>Wyrzuć "śmieci" tutaj:</UpperText>
        <Image src={garbageUrl} />
        <BottomText>{garbageType}</BottomText>
      </FlexBorderBox>
    </BaseContainer>
  );
};
const FlexBorderBox = styled(BorderBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img.attrs(() => ({}))`
  width:140px;
  height:210px;
`
const UpperText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: white;
  padding-bottom: 15px;
`;
const BottomText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: white;
  padding-top: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

export default ResultsPage;
