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
const OTPverification = () => {
    const toast = useToast();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    otp:"",
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
        const response=await axios.post('https://fiverrbackend-production.up.railway.app/user/otpVerify',userDetails,{withCredentials:true});
        console.log(response)
        if(response.data.status=="success"){
            toast({
                position: 'top',
                title: `OTP Verified`,
                status: "success",
                isClosable: true,
                duration: 3000,
            })
            navigate('/setNewPassword')
        }
    } catch (error) {
        console.log(error)
        if(error.data.status=="fail"){
            toast({
                position: 'top',
                title: `Please enter the credentials`,
                status: "warning",
                isClosable: true,
                duration: 3000,
            })
        }
        if(error.response.data.msg=="Invalid otp please enter correct otp"){
            toast({
                position: 'top',
                title: `Invalid otp please enter correct otp`,
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
           OTP Verification
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
        <FormLabel mt={"10px"}>Your OTP</FormLabel>
          <Input
            onChange={handleChange}
            type="text"
            name="otp"
            id="otp"
            value={userDetails.otp}
            placeholder="Your OTP..."
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme={"green"}
          m={"10px 0px"}
          w={"100%"}
        >
          Continue
        </Button>
      </Box>
      <Footer />
    </>
  )
}

export default OTPverification
