import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export default function MapScreen() {
  return (
    <SafeArea
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Map!</Text>
    </SafeArea>
  );
}
