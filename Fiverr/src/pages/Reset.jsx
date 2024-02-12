import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
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
      const {
        data: { msg },
      } = await axios.post(`https://fiverrbackend-production.up.railway.app/user/reset`, userDetails, {
        withCredentials: true,
      });
      console.log(msg);
      if (msg === "Your password changed successfully") {
        toast({
          position: "top",
          title: "Your password changed successfully",
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        navigate("/")
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "Your old password is incorrect") {
        toast({
          position: "top",
          title: "Your old password is incorrect",
          status: "warning",
          isClosable: true,
          duration: 3000,
        });
      }
      if(error.response.data.msg==="User not found"){
        toast({
            position: "top",
            title: "Opps! user not found!",
            status: "warning",
            isClosable: true,
            duration: 3000,
          });
      }
      if(error.response.data.error==="Password does not meet the criteria."){
        toast({
            position: "top",
            title: "Your password should have 1 Uppercase Letter, 1 Special Character, 1 Number, and at least 8 Characters",
            status: "warning",
            isClosable: true,
            duration: 3000,
          });
      }
    }
  };
  return (
    <>
      <Navbar />
      <Box
        w={{ base: "90%", sm: "70%", md: "40%" }}
        borderRadius={"10px"}
        m={"100px auto 0px"}
        p={"20px"}
        border={"1px solid #e4e5e7"}
      >
        <Text
          color={"#222325"}
          fontWeight={"bolder"}
          fontSize={"22px"}
          textAlign={"center"}
        >
          Reset Password
        </Text>
        <FormControl isRequired>
          <FormLabel mt={"10px"}>Your Email</FormLabel>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={userDetails.email}
            placeholder="Your Email..."
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={"10px"}>Old Password</FormLabel>
          <Input
            onChange={handleChange}
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={userDetails.oldPassword}
            placeholder="Old Password"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt={"10px"}>New Password</FormLabel>
          <Input
            onChange={handleChange}
            type="password"
            name="newPassword"
            id="newPassword"
            value={userDetails.newPassword}
            placeholder="New Password"
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme={"blue"}
          m={"10px 0px"}
          w={"100%"}
        >
          Continue
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Reset;
