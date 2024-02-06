import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const WaysToGet = () => {
  return (
    <Box
    width={"90%"}
    margin={"50px auto"}
    >
        <Text
         fontSize={{base:"35px",md:"48px"}}
         margin={{base:"30px 0px",md:"50px 0px 0px"}}
        >
            Ways to get started
        </Text>
        <Text
         fontSize={{md:"20px"}}
         margin={{md:"20px 0px"}}
         display={{base:"none",md:"block"}}
        >
        Whether you want to find freelancers, have them come to you, or collaborate with your entire team, get started in just a few clicks.
        </Text>
        <Flex 
        direction={{base:"column",md:"row"}}
        justifyContent={"space-between"}
        >
            <Box
            backgroundColor={"#ffe0d4"}
            border={"1.5px solid #fda86a"}
            borderRadius={"16px"}
            padding={{base:"24px", md:"24px"}}
            display={"flex"}
            margin={{base:"10px 0px"}}
            justifyContent={"space-between"}
            width={{base:"",md:"33%"}}
            >
                <Text
                fontSize={{base:"24px", md:"24px"}}
                >Post a brief & get matched</Text>
                <Box margin={"auto"}>
                    <FaArrowRightLong fontSize={25} />
                </Box>
                
            </Box>
            <Box
            backgroundColor={"#d0f7e6"}
            border={"1.5px solid #1dbf73"}
            borderRadius={"16px"}
            padding={{base:"24px", md:"24px"}}
            display={"flex"}
            margin={{base:"10px 0px"}}
            justifyContent={"space-between"}
            width={{base:"",md:"30%"}}
            >
                <Text
                fontSize={{base:"24px", md:"24px"}}
                >Post a brief & get matched</Text>
                <Box margin={"auto"}>
                    <FaArrowRightLong fontSize={25} />
                </Box>
                
            </Box>
            <Box
            backgroundColor={"#ede3ff"}
            border={"1.5px solid #b1abff"}
            borderRadius={"16px"}
            padding={{base:"24px", md:"24px"}}
            display={"flex"}
            margin={{base:"10px 0px"}}
            justifyContent={"space-between"}
            width={{base:"",md:"30%"}}
            >
                <Text
                fontSize={{base:"24px", md:"24px"}}
                >Post a brief & get matched</Text>
                <Box margin={"auto"}>
                    <FaArrowRightLong fontSize={25} />
                </Box>
                
            </Box>
        </Flex>
    </Box>
  )
}

export default WaysToGet
