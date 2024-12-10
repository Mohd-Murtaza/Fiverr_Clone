import React from "react";
import {
  Card,
  CardBody,
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import Register from "./Register";
import Login from "./Login";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const toast=useToast()
  const navigate=useNavigate()
  const {setIsAuth, setLoginPersonName}=useContext(AuthContext)
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(1px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const handleGoogleSignIn = () => {
    console.log("check is clicked")
    window.location.href = "https://fiverr-backend-pied.vercel.app/google";
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");
    if (token) {
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      setIsAuth(true);
      setLoginPersonName(name);
      localStorage.setItem("isAuth",true)
      localStorage.setItem("loginPersonName",name)
      toast({
        position: 'top',
        title: `${name} your're login successfully`,
        status: "success",
        isClosable: true,
        duration: 3000,
      });
      navigate("/");
    }
  }, []);
  return (
    <>
      <li
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Sign in
      </li>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent style={{ width: "80%", maxWidth: "unset" }}>
          <Flex margin={"auto"} width={"100%"}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              width={"100%"}
            >
              <Image
                display={{base:"none", md:"block"}}
                objectFit="cover"
                width={{md:"50%", lg:"100%"}}
                height={"80vh"}
                src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/standard.ddd97e5.png"
                alt="Signin Image"
              />
              <Stack width={"100%"} height={"400px"} margin={"auto"}>
                <CardBody width={"100%"} margin={"auto"}>
                  <Heading fontSize={{base:"18px",sm:"28px",md:"22px", lg:"28px"}}>Sign in to your account</Heading>
                  <Text 
                  marginTop={{base:"10px",sm:"12px",md:"12px", lg:"10px"}}    
                  fontSize={{base:"14px",sm:"18px",md:"18px", lg:"18px"}}
                  >
                    Already have an account? <Login/>
                  </Text>
                  <ModalCloseButton />
                  <Box height={"300px"}>
                    <Flex width={{base:"220px", sm:"280px"}} margin={"auto"} flexDirection={"column"}>
                      <Button
                        leftIcon={<FcGoogle />}
                        colorScheme="white"
                        color={"black"}
                        marginTop={"20px"}
                        variant={"outline"}
                        _hover={{ background: "#f5f5f5" }}
                        borderColor="#e4e5e7"
                        borderWidth="1px" 
                        onClick={handleGoogleSignIn}
                      >
                        Continue with Google
                      </Button>
                      <Register/>
                    </Flex>
                    <Text textAlign={"center"} margin={"20px"}>
                      or
                    </Text>
                    <Flex
                      flexDirection={{base:"column", sm:"row", md:"column", lg:"row"}}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={5}

                    >
                      <Button
                        leftIcon={<FaApple />}
                        colorScheme="white"
                        color={"black"}
                        variant={"outline"}
                        _hover={{ background: "#f5f5f5" }}
                        width={{base:"130px"}}
                        borderColor="#e4e5e7"
                        borderWidth="1px" 
                      >
                        Apple
                      </Button>
                      <Button
                        leftIcon={<TfiFacebook color="#1877f2"/>}
                        colorScheme="white"
                        color={"black"}
                        variant={"outline"}
                        _hover={{ background: "#f5f5f5" }}
                        width={{base:"130px", md: "130px"}}
                        borderColor="#e4e5e7"
                        borderWidth="1px" 
                      >
                        Facebook
                      </Button>
                    </Flex>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
