import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const LoadingComponent = () => (
  <SafeArea>
    <ActivityIndicator
      size={"large"}
      color="tomato"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  </SafeArea>
);
