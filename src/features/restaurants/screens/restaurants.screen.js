import React from "react";
import { FlatList } from "react-native";
// Components
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea, SearchContainer } from "./restaurants.screen.styles";
import { Spacer } from "../../../components/spacer.component";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
