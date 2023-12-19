import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "./search.component";
import { colors } from "../../../infrastructure/theme/colors";

const Loading = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingComponent = () => (
  <SafeArea>
    {/* Search is needed here to prevent infinite loop */}
    {/* Otherwise, it will re-render this componenet everytime a search is made */}
    <Search />
    <Loading size={"large"} color={colors.ui.blue} />
  </SafeArea>
);
