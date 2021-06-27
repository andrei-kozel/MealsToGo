import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// Components
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// Styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  width: 100%;
  padding: 16px;
`;

const RetaurantsListContainer = styled(View)`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

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
