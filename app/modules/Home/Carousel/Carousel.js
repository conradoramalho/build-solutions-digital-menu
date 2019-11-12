import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import { HamburguerHome } from "../../../assets/images";

const { width: viewportWidth, height } = Dimensions.get("window");

const DATA = [
  { title: "ABCDEFG" },
  { title: "ABCDEFG" },
  { title: "ABCDEFG" },
  { title: "ABCDEFG" },
  { title: "ABCDEFG" }
];

const ImageWrapper = styled.Image`
  width: 100%;
  height: 100%;
`;

function HomeCarousel() {
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text>Alo mae</Text>
        <ImageWrapper source={HamburguerHome} />
      </View>
    );
  };

  return (
    <Carousel
      data={DATA}
      renderItem={renderItem}
      sliderWidth={1030}
      itemWidth={1030}
    />
  );
}

export default HomeCarousel;
