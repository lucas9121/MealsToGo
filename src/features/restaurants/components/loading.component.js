import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

export const LoadingComponent = () => (
  <SafeArea>
    <ActivityIndicator
      size={"large"}
      color={colors.ui.blue}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  </SafeArea>
);
