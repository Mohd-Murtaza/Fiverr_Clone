import React, { useState } from "react";
import Navbar from "../component/Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const SetNewPassword = () => {
    const toast = useToast();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    newPassword:"",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit=async()=>{
    try {
        const response=await axios.post('https://fiverr-backend-pied.vercel.app/user/forget',userDetails,{withCredentials:true});
        console.log(response)
        if(response.data.status=="success"){
            toast({
                position: 'top',
                title: `Password reset successfully`,
                status: "success",
                isClosable: true,
                duration: 3000,
            })
            navigate('/');
        }
    } catch (error) {
        console.log(error)
        if(error.response.data.error=="Password does not meet the criteria."){
            toast({
                position: 'top',
                title: `Your password should have 1 Uppercase Letter, 1 Special Character, 1 Number, and at least 8 Characters`,
                status: "warning",
                isClosable: true,
                duration: 3000,
            })
        }
        if(error.response.data.msg=="User not found"){
            toast({
                position: 'top',
                title: `Please check your email`,
                status: "warning",
                isClosable: true,
                duration: 3000,
            })
        }
    }
  }
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
           Set New Password
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
        <FormLabel mt={"10px"}>Set New Password</FormLabel>
          <Input
            onChange={handleChange}
            type="text"
            name="newPassword"
            id="newPassword"
            value={userDetails.newPassword}
            placeholder="Set New Password"
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme={"green"}
          m={"10px 0px"}
          w={"100%"}
        >
          Set Password
        </Button>
      </Box>
      <Footer />
    </>
  )
}

export default SetNewPassword
