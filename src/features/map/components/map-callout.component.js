import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../../../components/text.component";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactWebViewImage = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const MapCallout = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebViewImage : CompactImage;

  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Container>
  );
};
