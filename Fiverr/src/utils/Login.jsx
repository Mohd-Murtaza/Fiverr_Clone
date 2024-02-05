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
import axios from 'axios'
import { useState } from "react";
const Login= () => {
    const [userDetails, setUserDetails] = useState({
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
            "https://fiverrbackend-production.up.railway.app/user/login", userDetails, {withCredentials:true}
          );
          console.log(userData);
          setUserDetails({
            email:"",
            password:""
          })
          if(userData.data.msg=="user login successfully."){
            alert(`user login successfully.`)
            setIsAuth(!isAuth)
            navigate('/admin');
          }
        } catch (error) {
          console.log(error);
          if(error.response.data.msg=="user not found please signup first"){
            alert(`User not found please recheck you email.`)
          }
          if(error.response.data.msg=="Invalid password"){
            alert(`Invalid password`)
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
              <Input 
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={userDetails.email}
              placeholder="Type Here" 
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              value={userDetails.password}
              placeholder="Type Here"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              width={"100%"}
              fontWeight={"bold"}
              fontSize={"22px"}
              onClick={handleSubmit}
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
