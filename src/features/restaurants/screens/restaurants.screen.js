import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

// Components
import { SearchBar } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  SearchContainer,
  RestaurantList,
  Loading,
  LoadingContainer,
} from "./restaurants.screen.styles";
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

import { theme } from "../../../infrastructure/theme/";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={theme.colors.brand.primary}
          />
        </LoadingContainer>
      ) : (
        <>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
