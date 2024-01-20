import { useState, useContext } from "react";
import { TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";
import { AuthButton } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="mainTitle">Meals To Go</Text>
      <AccountContainer>
        <TextInput
          label="Email"
          value={email}
          autoCapitalize="none"
          inputMode="email"
          onChangeText={(t) => setEmail(t)}
          style={{ width: 300 }}
        />
        <Spacer size="medium" />
        {error && (
          <Spacer size="medium">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(t) => setPassword(t)}
        />
        <Spacer size="medium" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <Spacer size="medium">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
