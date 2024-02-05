import React from "react";
import {
    Box,
    Card,
    CardBody,
    Image
} from '@chakra-ui/react'
import bannerImg from '../assets/homeBannerImg.jpg'
const HomePageBanner = () => {
  return (
    <Box
    marginTop={"100px"}
    >
        <Image
        width={"90%"}
        margin={"auto"}
        borderRadius={"16px"}
         src={bannerImg} alt="banner img"/>
    </Box>
  );
};

export default HomePageBanner;
