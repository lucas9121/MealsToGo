import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";
import { AuthButton, AnimationWrapper } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
    </AnimationWrapper>
    <Text variant="mainTitle">Meals To Go</Text>
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
        icon="account-plus-outline"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
    </AccountContainer>
  </AccountBackground>
);
