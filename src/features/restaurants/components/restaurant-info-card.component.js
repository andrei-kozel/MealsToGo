import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/text.component";
import {
  Address,
  Section,
  Rating,
  IconImage,
  IconsSection,
} from "./restaurant-info-card.styles";

// SVG
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    vicinity,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Spacer position="top" size="medium">
          <Text variant="label">{name}</Text>
        </Spacer>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml key={uuidv4()} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <IconsSection>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <IconImage source={{ uri: icon }} />
            </Spacer>
          </IconsSection>
        </Section>
        <Address>{vicinity}</Address>
      </Card.Content>
    </Card>
  );
};
