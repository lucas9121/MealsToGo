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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error, setError } = useContext(
    AuthenticationContext
  );

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
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => {
                Keyboard.dismiss();
                onLogin(email, password);
              }}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue200} />
          )}
        </AccountContainer>
        <Spacer size="medium">
          <AuthButton
            mode="contained"
            onPress={() => {
              navigation.goBack(), setError(null);
            }}
          >
            Back
          </AuthButton>
        </Spacer>
      </KeyboardView>
    </AccountBackground>
  );
};
