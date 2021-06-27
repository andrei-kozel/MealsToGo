import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// Components
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// Styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchContainer = styled(View)`
  width: 100%;
  padding: 16px;
`;

const RetaurantsList = styled(View)`
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
      <RetaurantsList>
        <RestaurantInfoCard />
      </RetaurantsList>
    </SafeArea>
  );
};
