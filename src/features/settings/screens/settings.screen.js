import { Text, Button } from "react-native";
import { useContext } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export default function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
}
