import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantMenu = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [lunchExpanded, setLunchExpanded] = useState(true);
  const [dinnerExpanded, setDinnerExpanded] = useState(true);

  const handlePressBreakfast = () => setBreakfastExpanded(!breakfastExpanded);
  const handlePressLunch = () => setLunchExpanded(!lunchExpanded);
  const handlePressDinner = () => setDinnerExpanded(!dinnerExpanded);

  const MemoizedListItem = React.memo(({ title }) => (
    <List.Item title={title} />
  ));
  return (
    <ScrollView>
      <List.Section title="Accordions">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={handlePressBreakfast}
        >
          <MemoizedListItem title="Eggs Bennedict" />
          <MemoizedListItem title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handlePressLunch}
        >
          <MemoizedListItem title="Burger w/ Fries" />
          <MemoizedListItem title="Steak Sandwich" />
          <MemoizedListItem title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={handlePressDinner}
        >
          <MemoizedListItem title="Penne alla Vodka" />
          <MemoizedListItem title="Lasagna" />
          <MemoizedListItem title="Salmon" />
          <MemoizedListItem title="Veal Cutlet" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <MemoizedListItem title="Coffee" />
          <MemoizedListItem title="Teat" />
          <MemoizedListItem title="Modello" />
          <MemoizedListItem title="Coke" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
