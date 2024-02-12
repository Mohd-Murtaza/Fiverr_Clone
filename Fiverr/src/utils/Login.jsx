import React, { useContext } from "react";
import {
  Button,
  Modal,
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
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
const Login = () => {
  const toast=useToast()
  const { isAuth, setIsAuth, loginPersonName, setLoginPersonName } = useContext(AuthContext);
  const navigate = useNavigate();
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
        "https://fiverrbackend-production.up.railway.app/user/login",
        userDetails,
        { withCredentials: true }
      );
      console.log(userData);
      setUserDetails({
        email: "",
        password: "",
      });
      if (userData.data.msg == "user login successfully.") {
        toast({
          position: 'top',
          title: `${userData.data.userName} your're login successfully`,
          status: "success",
          isClosable: true,
          duration: 3000,
        })
        setIsAuth(true);
        setLoginPersonName(userData.data.userName);
        localStorage.setItem("isAuth",true)
        localStorage.setItem("loginPersonName",userData.data.userName)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.msg == "user not found please signup first") {
        toast({
          position: 'top',
          title: `User not found please recheck you email.`,
          status: "warning",
          isClosable: true,
          duration: 3000,
        })
      }
      if (error.response.data.msg == "Invalid password") {
        toast({
          position: 'top',
          title: `Invalid password`,
          status: "error",
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
     <li
        type={"none"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
          window.history.pushState(null, "", "/login");
        }}
      >
        Log in
      </li>
        <Modal
          size={{ base: "xs", ms: "sm", md: "sm", lg: "sm", xl: "xl" }}
          isCentered
          isOpen={isOpen}
          onClose={onClose}
        >
          {overlay}
          <ModalContent borderRadius={"15px"} width={"80%"} maxWidth={"unset"}>
            <ModalHeader
              textAlign={"center"}
              fontSize={{ base: "18px", sm: "22px" }}
              fontWeight={"bold"}
              marginTop={{ base: "10px" }}
            >
              Login with Email ID
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
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
              <FormControl isRequired>
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
            <Flex justifyContent={"space-around"}>
              <Link to="/reset">
                 <Text cursor={"pointer"} textDecoration={"underline"} color={"black"} fontWeight={"bold"}>Reset Password</Text>
              </Link>
              <Link to="/forget-password">
                  <Text cursor={"pointer"} textDecoration={"underline"} color={"black"} fontWeight={"bold"}>Forget Password</Text>
              </Link>
            </Flex>
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
