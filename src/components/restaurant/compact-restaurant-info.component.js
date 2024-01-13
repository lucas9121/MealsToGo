import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.sizes[4]};
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.sizes[4]};
  height: 100px;
`;

const Item = styled.View`
  padding: ${(props) => props.theme.space[2]};
  max-width: ${(props) => props.theme.sizes[4]};
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
