import React, { useContext } from "react";

// Components
import { SearchBar } from "../../../components/SearchBar";
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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

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
            renderItem={(item) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item.item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
