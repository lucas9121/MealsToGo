import { useState, useContext } from "react";
import { TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";
import { AuthButton } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isAuthenticated } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
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
    </AccountBackground>
  );
};
