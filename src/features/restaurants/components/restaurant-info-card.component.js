import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Icons = styled(View)`
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

const Closed = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodyBold};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
        <Title>{name}</Title>
        <Icons>
          <Rating>
            {ratingArray.map((ele, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Closed variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Closed>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </Open>
        </Icons>
        <Address>{address}</Address>
      </CardContent>
    </Card>
  );
};
