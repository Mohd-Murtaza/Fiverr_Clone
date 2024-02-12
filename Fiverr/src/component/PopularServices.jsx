import React from "react";
import website_development from "../assets/website-development.webp";
import logo_design from "../assets/logo-design.webp";
import seo from "../assets/seo.webp";
import architecture_design from "../assets/architecture-design.webp";
import social_media_marketing from "../assets/social-media-marketing.webp";
import voice_over from "../assets/voice-over.webp";
import software_development from "../assets/software-development.webp";
import data_science from "../assets/data-science.webp";
import product_photography from "../assets/product-photography.webp";
import e_commerce from "../assets/e-commerce.webp";
import video_editing from "../assets/video-editing.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PopularServices = () => {
  const data = [
    {
      text: "Website Development",
      img: website_development,
      color: "#00732e",
      query: "Website Development",
    },
    {
      text: "Logo Design",
      img: logo_design,
      color: "#ff7640",
      query: "Logo Design",
    },
    {
      text: "SEO",
      img: seo,
      color: "#003912",
      query: "Search Engine Optimization (SEO)",
    },
    {
      text: "Architecture & Interior Design",
      img: architecture_design,
      color: "#4d1727",
      query: "Architecture & Interior Design",
    },
    {
      text: "Social Media Marketing",
      img: social_media_marketing,
      color: "#687200",
      query: "Social Media Marketing",
    },
    {
      text: "Voice Over",
      img: voice_over,
      color: "#421300",
      query:"Voice Over"
    },
    {
      text: "Software Development",
      img: software_development,
      color: "#254200",
      query:"Software Development"
    },
    {
      text: "Data Science & ML",
      img: data_science,
      color: "#8f2900",
      query:"Data Science & ML"
    },
    {
      text: "Product Photography",
      img: product_photography,
      color: "#687200",
      query:"Product Photography"
    },
    {
      text: "E-Commerce Marketing",
      img: e_commerce,
      color: "#00732e",
      query:"E Commerce Marketing"
    },
    {
      text: "Video Editing",
      img: video_editing,
      color: "#be5272",
      query:"Video Editing"
    },
  ];
  return (
    <Box width={"90%"} margin={"auto"}>
      <Text
        fontSize={{ base: "35px", md: "48px" }}
        margin={{ base: "30px 0px", md: "50px 0px" }}
      >
        Popular Services
      </Text>
      <Box position={"relative"}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            250: {
              slidesPerView: 1.2,
            },
            350: {
              slidesPerView: 1.5,
            },
            400: {
              slidesPerView: 1.8,
            },
            500: {
              slidesPerView: 2.1,
            },
            550: {
              slidesPerView: 2.3,
            },
            600: {
              slidesPerView: 2.6,
            },
            700: {
              slidesPerView: 2.9,
            },
            800: {
              slidesPerView: 3.4,
            },
            900: {
              slidesPerView: 3.8,
            },
            1000: {
              slidesPerView: 4.2,
            },
            1150: {
              slidesPerView: 4.8,
            },
          }}
        >
          {data.map((ele, ind) => (
            <SwiperSlide key={ind}>
              <Link to={`/product/${ele.query.split(" ").join("-")}`}>
                <Box
                  backgroundColor={ele.color}
                  padding={"5px"}
                  width={"200px"}
                  height={"270px"}
                  borderRadius={"16px"}
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    // background={"red"}
                    height={"260px"}
                  >
                    <Text
                      color={"white"}
                      padding={"0px 10px"}
                      margin={"25px 0px 5px"}
                      fontSize={"18px"}
                      fontWeight={"bold"}
                    >
                      {ele.text}
                    </Text>
                    <Image borderRadius={"16px"} src={ele.img} alt="imgs" />
                  </Flex>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          position="absolute"
          top="60%"
          transform="translateY(-50%)"
          left={{ base: "-10px", sm: "-20px", md: "-25px" }}
          width={{ base: "40px", sm: "40px", md: "50px" }}
          height={{ base: "40px", sm: "40px", md: "50px" }}
          color="green"
          fontSize="10px"
          marginRight="0px"
          backgroundColor="rgb(227, 227, 227)"
          borderRadius="50%"
          transition=".5s"
          className="swiper-button-prev"
          _after={{
            fontSize: "1.3rem",
            marginLeft: "-5px",
            color: "#1dbf73",
          }}
        ></Box>
        <Box
          position="absolute"
          top="60%"
          transform="translateY(-50%)"
          right={{ base: "-10px", sm: "-20px", md: "-25px" }}
          width={{ base: "40px", sm: "40px", md: "50px" }}
          height={{ base: "40px", sm: "40px", md: "50px" }}
          color="green"
          fontSize="10px"
          marginRight="0px"
          backgroundColor="rgb(227, 227, 227)"
          borderRadius="50%"
          transition=".5s"
          className="swiper-button-next"
          _after={{
            fontSize: "1.3rem",
            marginRight: "-5px",
            color: "#1dbf73",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PopularServices;
