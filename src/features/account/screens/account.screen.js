import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";
import { AuthButton } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AccountContainer>
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large" />
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
    </AccountContainer>
  </AccountBackground>
);
