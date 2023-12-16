import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

const Loading = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingComponent = () => (
  <SafeArea>
    <Loading size={"large"} color={colors.ui.blue} />
  </SafeArea>
);
