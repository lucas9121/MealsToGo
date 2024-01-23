import { useState, useContext } from "react";
import { Keyboard, Platform } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";
import {
  AuthButton,
  AuthInput,
  ErrorContainer,
  KeyboardView,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <KeyboardView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text variant="mainTitle">Meals To Go</Text>
        <AccountContainer>
          <AuthInput
            label="Email"
            value={email}
            autoCapitalize="none"
            inputMode="email"
            onChangeText={(t) => setEmail(t)}
          />
          <Spacer size="medium" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(t) => setPassword(t)}
          />
          <Spacer size="medium" />
          <AuthInput
            label="Repeat  Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(t) => setRepeatedPassword(t)}
          />
          <Spacer size="medium" />
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          {!isLoading ? (
            <AuthButton
              icon="account-plus-outline"
              mode="contained"
              onPress={() => {
                Keyboard.dismiss();
                onRegister(email, password, repeatedPassword);
              }}
            >
              Sign up
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue200} />
          )}
        </AccountContainer>
        <Spacer size="medium">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </KeyboardView>
    </AccountBackground>
  );
};
