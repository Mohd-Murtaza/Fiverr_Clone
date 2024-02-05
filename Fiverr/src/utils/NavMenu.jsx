import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const NavMenu = () => {
  const [isJoinHovered, setIsJoinHovered] = useState(false);
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        style={{
          color: "#1dbf73",
          background: "none",
          backgroundColor: "none",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #1dbf73",
        }}
      >
        <GiHamburgerMenu className="navbarMenuIcon" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box display="flex" flexDirection="column" width="200px">
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
                m={4}
              >
                Join Fiverr
              </Button>
              <Button
               onMouseEnter={() => setIsJoinHovered(true)}
               onMouseLeave={() => setIsJoinHovered(false)}
               style={{
                 backgroundColor: isJoinHovered ? "white" : "black",
                 color: isJoinHovered ? "black" : "white",
               }}
                m={4}
              >
                Sign in
              </Button>
            </Box>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem m={4}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem m={4}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem m={4}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
