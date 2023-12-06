import { Text, Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
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
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};
