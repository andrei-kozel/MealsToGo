import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
