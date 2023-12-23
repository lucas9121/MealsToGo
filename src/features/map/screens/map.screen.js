import MapView from "react-native-maps";
import styled from "styled-components/native";

const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = () => (
  <>
    <Map />
  </>
);
