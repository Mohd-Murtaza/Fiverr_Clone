import {
  Box,
  Grid,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FooterAccordion from "../utils/FooterAccordion";
import fiverrLogo from "../assets/fiverrLogo.webp";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <Box
      width={"100%"}
      margin={"50px auto 0px"}
      padding={{ base: "24px", md: "64px 32px 24px" }}
      borderTop={"1.5px solid #efe5e7"}
    >
      <Box display={{ base: "none", sm: "block" }}>
        <Grid
          h={"auto"}
          templateRows={"auto"}
          templateColumns={{
            sm: "repeat(3, auto)",
            md: "repeat(4, auto)",
            lg: "repeat(5, auto)",
          }}
          gap={{ base: "2", md: "2", lg: "5" }}
        >
          <List paddingBottom={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"#404145"}
              paddingBottom={"16px"}
            >
              Categories
            </Text>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Graphics & Design</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Digital Marketing</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Writing & Translation</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Video & Animation</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Music & Audio</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Logo Maker</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Programming & Tech</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Data</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Business</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Lifestyle</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Photography</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>End-to-End Projects</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Sitemap</Link>
            </ListItem>
          </List>
          <List paddingBottom={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"#404145"}
              paddingBottom={"16px"}
            >
              About
            </Text>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Careers</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Press & News</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Partnerships</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Privacy Policy</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Terms of Service</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Intellectual Property Claims</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Investor Relations</Link>
            </ListItem>
          </List>
          <List paddingBottom={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"#404145"}
              paddingBottom={"16px"}
            >
              Support and Education
            </Text>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Help & Support</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Trust & Safety</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Selling on Fiverr</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Buying on Fiverr</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Guides</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Workspace</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Learn</Link>
            </ListItem>
          </List>
          <List paddingBottom={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"#404145"}
              paddingBottom={"16px"}
            >
              Community
            </Text>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Customer Success Stories</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Community Hub</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Forum</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Events</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Blog</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Influencers</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Affiliates</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Podcast</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Invite a Friend</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Become a Seller</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Community Standards</Link>
            </ListItem>
          </List>
          <List paddingBottom={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"#404145"}
              paddingBottom={"16px"}
            >
              Business Solutions
            </Text>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>About Business Solutions</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Pro</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Certified</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Become an Agency</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Fiverr Enterprise</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>ClearVoice</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Working Not Working</Link>
            </ListItem>
            <ListItem fontSize={"18px"} color={"#74767e"} paddingBottom={"5px"}>
              <Link>Contact Sales</Link>
            </ListItem>
          </List>
        </Grid>
      </Box>
      <Box display={{ base: "block", sm: "none" }}>
        <FooterAccordion />
      </Box>
      <Flex
        borderTop={"1px solid #e4e5e7"}
        flexDirection={{base:"column",md:"row"}}
        justifyContent={"space-evenly"}
        textAlign={"center"}
      >
        <Box 
        display={"flex"}
        flexDirection={{base:"column",md:"row"}}
        >
          <Box margin={{base:"auto",md:"none"}} width={{base:"80px",md:"none"}}>
            <Image src={fiverrLogo} width={"80px"} />
          </Box>
          <Text
            color={"#b5b6ba"}
            margin={"10px"}
          >
            © Fiverr International Ltd. 2024
          </Text>
        </Box>
        <Box
        display={"flex"}
        justifyContent={"space-around"}
        width={{base:"100%",md:"50%"}}
        >
          <Box margin={"auto"}>
            <FaTiktok fontSize={"28px"} color="#74767e"/>
          </Box>
          <Box margin={"auto"}>
            <FaInstagram fontSize={"28px"} color="#74767e" />
          </Box>
          <Box margin={"auto"}>
            <FaLinkedin fontSize={"28px"} color="#74767e" />
          </Box>
          <Box margin={"auto"}>
            <FaFacebook fontSize={"28px"} color="#74767e" />
          </Box>
          <Box margin={"auto"}>
            <FaPinterest fontSize={"28px"} color="#74767e" />
          </Box>
          <Box margin={"auto"}>
            <FaXTwitter fontSize={"28px"} color="#74767e" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
