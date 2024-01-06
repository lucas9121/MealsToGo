import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "./typography/text.component";
import { Spacer } from "./spacer/spacer.component";

import { Favorite } from "../../../components/favorite/favorite.component";
import {
  CardCover,
  CardContent,
  Section,
  Address,
  Rating,
  Open,
  Icon,
} from "./restaurant-info-card.styles";

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
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <Favorite />
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardContent>
        <Text variant="title">{name}</Text>
        <Spacer position="bottom" size="medium"></Spacer>
        <Section>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml
                key={`star-${placeId}-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
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
