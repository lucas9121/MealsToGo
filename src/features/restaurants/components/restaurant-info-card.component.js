import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";

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

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardContent>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </CardContent>
    </Card>
  );
};
