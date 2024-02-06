import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ai from '../assets/ai.svg';
import business from '../assets/business.svg';
import consulting from '../assets/consulting.svg';
import digitalMarketing from '../assets/digital-marketing.svg';
import graphicsDesign from '../assets/graphics-design.svg';
import musicAudio from '../assets/music-audio.svg';
import programmingTech from '../assets/programming-tech.svg';
import videoAnimation from '../assets/video-animation.svg';
import writingTranslation from '../assets/writing-translation.svg';

// Import Swiper styles
import 'swiper/css/bundle';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const HomePageFeaturesCards = () => {
  const data = [
    {
      img:graphicsDesign,
      text: "Graphics & Design",
    },
    {
      img:ai,
      text: "AI Services",
    },
    {
      img:digitalMarketing,
      text: "Digital Marketing",
    },
    {
      img:writingTranslation,
      text: "Writing & Translation",
    },
    {
      img:videoAnimation,
      text: "Video & Animation",
    },
    {
      img:musicAudio,
      text: "Music & Audio",
    },
    {
      img:programmingTech,
      text: "Programming & Tech",
    },
    {
      img:business,
      text: "Business",
    },
    {
      img:consulting,
      text: "Consulting",
    },
  ];
  return (
    <Box
    padding={"20px 0px"}
    width={"90%"}
    margin={"auto"}
    position={"relative"}
    >
        <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        breakpoints={{
          250: {
            slidesPerView:1.6
          },
          350: {
            slidesPerView: 2.1,
            spaceBetween:25
          },
          400: {
            slidesPerView: 2.3,
          },
          500: {
            slidesPerView: 2.8,
          },
          600: {
            slidesPerView: 3.2,
          },
          700: {
            slidesPerView: 3.8,
          },
          800: {
            slidesPerView: 4.5,
          },
          900: {
            slidesPerView: 5.2,
          },
          1050: {
            slidesPerView: 6.2,
          },
          1250: {
            slidesPerView: 7.2,
          },
        }}
      >
        {data.map((ele, ind) => 
          <SwiperSlide key={ind}>
            <Box 
            backgroundColor={"white"}
            padding={"20px"}
            width={"150px"}
            height={"150px"}
            border={"1px solid black"}
            borderRadius={"16px"}
            _hover={{
                cursor:"pointer",
                backgroundColor:"#9ff9cf39"
            }}
            > 
              <Image src={ele.img} alt="imgs" />
              <Text
              marginTop={"20px"}
              fontSize={"16px"}
              fontWeight={"bolder"}
              >{ele.text}</Text>
            </Box>
          </SwiperSlide>
        )} 
      </Swiper>
      <Box 
        position="absolute" 
        top="60%" 
        transform="translateY(-50%)" 
        left={{base:"-10px",sm:"-20px"}} 
        width={{base:"30px", sm:"40px"}}
        height={{base:"30px", sm:"40px"}}
        color="green"
        fontSize="10px"
        marginRight="0px"
        backgroundColor= "rgb(227, 227, 227)"
        borderRadius="50%"
        transition=".5s"
        className="swiper-button-prev"
        _after={{
            fontSize:"1.3rem",
            marginLeft:"-5px",
            color:"#1dbf73"
        }}
        >
        </Box>
        <Box 
        position="absolute" 
        top="60%" 
        transform="translateY(-50%)" 
        right={{base:"-10px",sm:"-20px"}} 
        width={{base:"30px", sm:"40px"}}
        height={{base:"30px", sm:"40px"}}
        color="green"
        fontSize="10px"
        marginRight="0px"
        backgroundColor= "rgb(227, 227, 227)"
        borderRadius="50%"
        transition=".5s"
        className="swiper-button-next"
        _after={{
            fontSize:"1.3rem",
            marginRight:"-5px",
            color:"#1dbf73"
        }}
        >
        </Box>
    </Box> 
  );
};

export default HomePageFeaturesCards;
