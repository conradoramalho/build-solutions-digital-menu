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

const Container = styled.View`
  position: relative;
`;

const ImageWrapper = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4470588235294118);
  position: absolute;
  color: #fff;
  font-size: 30px;
  bottom: 0;
  z-index: 5;

`;

function HomeCarousel() {
  const renderItem = ({ item, index }) => {
    return (
      <Container>
        <
        <Title>Cream Cheese Bacon Rib</Title>
        <ImageWrapper source={HamburguerHome} />
      </Container>
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
