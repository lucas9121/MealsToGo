import { ImageBackground } from "react-native";
import styled from "styled-components";

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountBackground = () => (
  <StyledImageBackground
    source={require("../../../../assets/home_bg.jpg")}
    resizeMode="cover"
  />
);
