import styled from "styled-components";

const BorderBox = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  background-color: #ff6a00;
  padding: 30px;
  border-radius: 25px;
  width: 75%;
`;

export default BorderBox;