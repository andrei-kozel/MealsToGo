import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/text.component";

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

const Rating = styled(View)`
  flex-direction: row;
`;

const IconsSection = styled(View)`
  flex-direction: row;
`;

const OpenIcon = styled(SvgXml)``;

const IconImage = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
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
              {isOpenNow && <OpenIcon xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <IconImage source={{ uri: icon }} />
            </Spacer>
          </IconsSection>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </Card>
  );
};
