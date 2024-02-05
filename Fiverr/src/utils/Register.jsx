import React from "react";
import axios from 'axios';
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
const Register= () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const userData = await axios.post(
        "https://fiverrbackend-production.up.railway.app/user/signup",
        userDetails,
        { withCredentials: true },
     
      );
      console.log(userData);
      if(userData.data.msg=="user register successfully"){
        alert(`user register successfully`)
      }
      setUserDetails({
        userName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      if(error.response.data=='user is exist already'){
        alert(`user is exist already`)
      }else if(error.response.data.error=="Password does not meet the criteria."){
        alert(`Your password should have a Uppercase letter, a Special Character, a Number and length should have atleast 8 Character`)
      }
    }
  };
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
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
        Continue with email
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
            Continue with Email ID
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input 
              type="text" 
              name="userName" 
              value={userDetails.userName}
              onChange={handleChange}
              placeholder="Type Here" />
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input 
              type="email" 
              name="email" 
              value={userDetails.email}
              onChange={handleChange}
              placeholder="Type Here" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
              type="password"
               name="password" 
               value={userDetails.password}
               onChange={handleChange}
               placeholder="Type Here" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              variant="outline"
              width={"100%"}
              fontWeight={"bold"}
              fontSize={"22px"}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Register;
