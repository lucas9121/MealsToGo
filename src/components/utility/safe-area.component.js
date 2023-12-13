import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* background-color: ${(props) => props.theme.colors.bg.dark}; */
  /* Avoids terminal warning */
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}; /* Only for Android devices */
`;
