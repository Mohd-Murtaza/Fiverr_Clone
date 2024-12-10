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
  useToast,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
const Register= () => {
  const toast=useToast()
  const { isAuth, setIsAuth, loginPersonName, setLoginPersonName } =
    useContext(AuthContext);
  const navigate = useNavigate()
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
        "https://fiverr-backend-pied.vercel.app/user/signup",
        userDetails,
        { withCredentials: true },
     
      );
      console.log(userData);
      if(userData.data.msg=="user register successfully"){
        // alert(`user register successfully`);
        toast({
          position: 'top',
          title: `Welcome to the Fiverr you're register successfully`,
          status: "success",
          isClosable: true,
          duration: 3000,
        })
        setIsAuth(!isAuth);
        setLoginPersonName(userData.data.newUser.userName);
        navigate("/");
      }
      setUserDetails({
        userName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      if(error.response.data=='user is exist already'){
        // alert(`user is already exist`)
        toast({
          position: 'top',
          title: `Oops! user is already exist!`,
          status: "warning",
          isClosable: true,
          duration: 3000,
        })
      }else if(error.response.data.error=="Password does not meet the criteria."){
        // alert(`Your password should have a Uppercase letter, a Special Character, a Number and length should have atleast 8 Character`)
        toast({
          position: 'top',
          title: `Your password should have 1 Uppercase Letter, 1 Special Character, 1 Number, and at least 8 Characters`,
          status: "warning",
          isClosable: true,
          duration: 3000,
        })
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
      <Button
        leftIcon={<MdOutlineEmail />}
        colorScheme="white"
        color={"black"}
        marginTop={"20px"}
        variant={"outline"}
        _hover={{ background: "#f5f5f5" }}
        borderColor="#e4e5e7"
        borderWidth="1px" 
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
          // window.history.pushState(null, "", "/register");
        }}
      >
        Continue with Email
      </Button>
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
            Signup with Email ID
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>User Name</FormLabel>
              <Input 
              type="text" 
              name="userName" 
              value={userDetails.userName}
              onChange={handleChange}
              placeholder="Type Here" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input 
              type="email" 
              name="email" 
              value={userDetails.email}
              onChange={handleChange}
              placeholder="Type Here" />
            </FormControl>
            <FormControl isRequired>
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
