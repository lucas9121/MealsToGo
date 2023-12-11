import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "./typography/text.component";
import { Spacer } from "./spacer/spacer.component";

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} 0;
`;

const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Open = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardContent>
        <Text variant="title">{name}</Text>
        <Spacer position="bottom" size="medium"></Spacer>
        <Section>
          <Rating>
            {ratingArray.map((ele, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </Open>
        </Section>
        <Address>{address}</Address>
      </CardContent>
    </Card>
  );
};
