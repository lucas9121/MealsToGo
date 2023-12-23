import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantMenu } from "../components/restaurant-menu";
import { Spacer } from "../components/spacer/spacer.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params; // coming from restaurant screens second argument from navigate.
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </SafeArea>
  );
};
