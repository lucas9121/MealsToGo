import styled from "styled-components";
import { Card } from "react-native-paper";

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

export const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Open = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
