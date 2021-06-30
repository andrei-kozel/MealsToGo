import React from "react";
// Components
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  SafeArea,
  SearchContainer,
  RetaurantsListContainer,
} from "./restaurants.screen.styles";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RetaurantsListContainer>
        <RestaurantInfoCard />
      </RetaurantsListContainer>
    </SafeArea>
  );
};
