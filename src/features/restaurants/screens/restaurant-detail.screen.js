import { useState } from "react";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [lunchExpanded, setLunchExpanded] = useState(true);
  const [dinnerExpanded, setDinnerExpanded] = useState(true);

  const handlePressBreakfast = () => setBreakfastExpanded(!breakfastExpanded);
  const handlePressLunch = () => setLunchExpanded(!lunchExpanded);
  const handlePressDinner = () => setDinnerExpanded(!dinnerExpanded);
  const { restaurant } = route.params; // coming from restaurant screens second argument from navigate.
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Section title="Accordions">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handlePressBreakfast}
        >
          <List.Item title="Eggs Bennedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handlePressLunch}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={handlePressDinner}
        >
          <List.Item title="Penne alla Vodka" />
          <List.Item title="Lasagna" />
          <List.Item title="Salmon" />
          <List.Item title="Veal Cutlet" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Teat" />
          <List.Item title="Modello" />
          <List.Item title="Coke" />
        </List.Accordion>
      </List.Section>
    </SafeArea>
  );
};
