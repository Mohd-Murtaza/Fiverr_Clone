import HomeBusiness from "../assets/HomePageBusinessSolution.webp";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const HomePageBusinessSolution = () => {
  return (
    <Box
      width={"90%"}
      margin={"50px auto"}
      backgroundColor={"#0d084d"}
      borderRadius={"16px"}
      overflow={"hidden"}
      color={"white"}
      padding={"80px 40px"}
    >
      <Flex flexDirection={{sm:"column",lg:"row"}} justifyContent={"space-around"}>
        <Box 
        width={{base:"100%",lg:"40%"}}
        textAlign={{base:"center",lg:"start"}}
        >
          <Box 
          display={"flex"} 
          flexDirection={"row"}
          width={{base:"100%",sm:"100%",md:"80%",lg:"100%"}}
          margin={{base:"auto",lg:"0px"}}
          >
            <Text fontSize={{base:"24px",sm:"48",lg:"28px"}} fontWeight={"bold"} margin={{base:"auto",lg:"0px"}}>
              fiverr.
            </Text>
            <Text
              fontSize={{ base: "14px",sm:"28px",md:"38px", lg: "22px" }}
              margin={{base:"auto",lg:"7px 0px 0px 20px"}}
            >
              Business Solution
            </Text>
          </Box>
          <Text
            margin={{ base: "16px 0px", lg: "16px 0px" }}
            fontSize={{ base: "16px",sm:"28px", lg: "32px" }}
            fontWeight={{ base: "bolder", lg: "bold" }}
          >
            Advanced solutions and professional talent for businesses
          </Text>
          <Box
            display={"flex"}
            flexDirection={{base:"column",lg:"column"}}
            rowGap={10}
            paddingRight={{base:"",lg:"10px"}}
            // background={"red"}
            width={{base:"100%",lg:"100%"}}
            margin={"auto"}
          >
            <Box display={"flex"} flexDirection={{base:"column",lg:"row"}}>
              <Box margin={{base:"auto",lg:"auto 10px auto auto"}}>
                <RiVerifiedBadgeFill
                  fontSize={"32px"}
                  color="rgb(177, 171, 255)"
                />
              </Box>
              <Box 
              fontSize={{base:"16px",sm:"20px",lg:"16px"}}
              >
                <Text fontWeight={"bolder"}>Fiverr Pro</Text>
                <Text>
                  Access top freelancers and professional business tools for any
                  project
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={{base:"column",lg:"row"}}>
              <Box margin={{base:"auto",lg:"auto 10px auto auto"}}>
                <RiVerifiedBadgeFill
                  fontSize={"32px"}
                  color="rgb(177, 171, 255)"
                />
              </Box>
              <Box 
              fontSize={{base:"16px",sm:"20px",lg:"16px"}}
              >
                <Text fontWeight={"bolder"}>Fiverr Certified</Text>
                <Text>
                Build your own branded marketplace of certified experts
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={{base:"column",lg:"row"}}>
              <Box margin={{base:"auto",lg:"auto 10px auto auto"}}>
                <RiVerifiedBadgeFill
                  fontSize={"32px"}
                  color="rgb(177, 171, 255)"
                />
              </Box>
              <Box 
              fontSize={{base:"16px",sm:"20px",lg:"16px"}}
              >
                <Text fontWeight={"bolder"}>Fiverr Enterprise</Text>
                <Text>
                Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={{base:"none",md:"block"}} width={"60%"} margin={{md:"20px auto auto",lg:"auto"}}>
          <Image src={HomeBusiness} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePageBusinessSolution;
