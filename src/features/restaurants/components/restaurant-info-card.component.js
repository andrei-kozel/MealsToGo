import React from "react";
import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <CardTitle>{name}</CardTitle>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};
