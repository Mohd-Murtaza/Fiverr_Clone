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

const Forget = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
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
        const response=await axios.post('https://fiverr-backend-pied.vercel.app/user/otpRequest',userDetails,{withCredentials:true});
        console.log(response)
        if(response.data.status=="success"){
            toast({
                position: 'top',
                title: `OTP Send on email`,
                status: "success",
                isClosable: true,
                duration: 3000,
              })
            navigate("/otpVerification")
        }
    } catch (error) {
        console.log(error)
        if(error.response.data.msg=="User not found with this email"){
            toast({
                position: 'top',
                title: `User not found with this email`,
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
          Forget Password
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
        <Button
          onClick={handleSubmit}
          colorScheme={"red"}
          m={"10px 0px"}
          w={"100%"}
        >
          Send Mail
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Forget;
