import React from "react";
import BaseContainer from "../components/BaseContainer";
import BorderBox from "../components/BorderBox";
import styled from "styled-components";

const ResultsPage = () => {
  const getImagesPerType = () => {
    let map: Map<String, String> = new Map<String, String>();
    map.set(
      "Metal",
      "https://ehokery.pl/zdjecia/2020/02/19/942/33/Pojemnik_na_odpady_120L_kosz___zoltys.jpg"
    );
    map.set(
      "Tworzywa sztuczne",
      "https://ehokery.pl/zdjecia/2020/02/19/942/33/Pojemnik_na_odpady_120L_kosz___zoltys.jpg"
    );
    map.set(
      "Odpady zmieszane",
      "https://ehokery.pl/zdjecia/2020/02/19/951/51/Pojemnik_na_odpady_120L_kosz___czarnys.jpg"
    );
    map.set(
      "Odpady organiczne",
      "https://ehokery.pl/zdjecia/2020/02/19/953/44/Pojemnik_na_odpady_120L_kosz___brazowys.jpg"
    );
    map.set(
      "Papier",
      "https://ehokery.pl/zdjecia/2020/02/19/946/02/Pojemnik_na_odpady_120L_kosz___niebieskis.jpg"
    );
    map.set(
      "Szkło",
      "https://ehokery.pl/zdjecia/2020/02/19/944/14/Pojemnik_na_odpady_120L_kosz__zielonys.jpg"
    );
    return map;
  };

  const randomIndex = Math.floor(Math.random() * (getImagesPerType().size - 1));
  const garbageType = Array.from(getImagesPerType().keys())[randomIndex];
  const garbageUrl = getImagesPerType().get(garbageType);

  return (
    <BaseContainer>
      <BorderBox>
        <UpperText>Wyrzuć "śmieci" tutaj:</UpperText>
        <img src={garbageUrl as string} />
        <BottomText>{garbageType}</BottomText>
      </BorderBox>
    </BaseContainer>
  );
};
const UpperText =  styled.div.attrs(() => ({}))`
  text-align: center;
  color: white;
  padding-bottom: 15px;
`;
const BottomText = styled.div.attrs(() => ({}))`
  text-align: center;
  color: white;
  padding-top: 15px;
  text-transform : uppercase;
  font-weight: bold;
  font-size: 20px;
`;

export default ResultsPage;
