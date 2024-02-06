import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import g_1 from '../assets/g_1.webp';
import g_2 from '../assets/g_2.webp';
import g_3 from '../assets/g_3.webp';
import g_4 from '../assets/g_4.webp';
import g_5 from '../assets/g_5.jpg';
import g_6 from '../assets/g_6.webp';
import g_7 from '../assets/g_7.webp';
import g_8 from '../assets/g_8.jpeg';
import g_9 from '../assets/g_9.webp';
import g_10 from '../assets/g_10.webp';
import g_11 from '../assets/g_11.webp';
import g_12 from '../assets/g_12.webp';
import g_13 from '../assets/g_13.webp';
import g_14 from '../assets/g_14.webp';
import g_15 from '../assets/g_15.webp';
import g_16 from '../assets/g_16.webp';

const HomePageMadeFiverr = () => {
  return (
    <Box width={"90%"} margin={"50px auto"}>
      <Text fontSize={{ base: "35px", md: "48px" }} margin={{ base: "30px 0px", md: "50px 0px" }}>
        Made on Fiverr
      </Text>
      <Grid 
      h={"auto"}
      templateRows={"auto"}
      templateColumns={{ base: "repeat(2, auto)", md: "repeat(3, auto)",lg:"repeat(4, auto)" }}
      gap={{base:"2",md:"5"}}
      >
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_1}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_2}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_3}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_4}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_5}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_6}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_7}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_8}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_9}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_10}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_11}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_12}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_13}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_14}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_15}
            />
        </GridItem>
        <GridItem>
            <Image
            borderRadius={"16px"}
            src={g_16}
            />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePageMadeFiverr;

