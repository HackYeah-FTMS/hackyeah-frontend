import styled from "styled-components";

const BaseContainer = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default BaseContainer;