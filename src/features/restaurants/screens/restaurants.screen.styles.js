import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

export const RetaurantsListContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
