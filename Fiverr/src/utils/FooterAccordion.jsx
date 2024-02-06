import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import React from "react";

const FooterAccordion = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={"18px"}
            fontWeight={"bold"}
            color={"#404145"}
          >
            Categories
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
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
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={"18px"}
            fontWeight={"bold"}
            color={"#404145"}
          >
            About
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
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
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={"18px"}
            fontWeight={"bold"}
            color={"#404145"}
          >
            Support and Education
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
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
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={"18px"}
            fontWeight={"bold"}
            color={"#404145"}
          >
            Community
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
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
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={"18px"}
            fontWeight={"bold"}
            color={"#404145"}
          >
            Business Solutions
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <List>
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FooterAccordion;
