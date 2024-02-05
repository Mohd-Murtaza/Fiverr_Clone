import React from "react";
import {
  Button,
  Modal,
  Text,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
const Login= () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <li
        type={"none"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Log in
      </li>
      <Modal 
      size={{base:"xs",ms:"sm",md:"sm", lg:"sm", xl:"xl"}}
      isCentered 
      isOpen={isOpen} 
      onClose={onClose}
      >
        {overlay}
        <ModalContent borderRadius={"15px"} width={"80%"} maxWidth={"unset"}>
          <ModalHeader
            textAlign={"center"}
            fontSize={{base:"18px",sm:"22px"}}
            fontWeight={"bold"}
            marginTop={{base:"10px"}}
          >
            Login with Email ID
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Type Here" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Type Here" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              width={"100%"}
              fontWeight={"bold"}
              fontSize={"22px"}
            >
              Log in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
