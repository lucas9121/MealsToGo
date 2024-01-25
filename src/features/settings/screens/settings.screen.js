import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [picUrl, setPicUrl] = useState(null);
  console.log(user.photoURL);
  const takeProfilePic = (pic, user = user) => {
    user.photoURL = pic;
  };
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera", { user })}>
        <AvatarContainer>
          {user.photoURL ? (
            <Avatar.Image size={180} source={user.photoURL} />
          ) : (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.ui.blue}
            />
          )}
          <Spacer position="top" size="large" />
          <Text variant="label">{user.email}</Text>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}
