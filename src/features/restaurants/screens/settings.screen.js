import { View, Text, Button } from "react-native";
import { useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export default function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </View>
  );
}
