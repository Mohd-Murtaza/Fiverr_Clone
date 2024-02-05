import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  Box,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  background,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import Register from "./Register";
import Login from "./Login";
export default function Sigin() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(1px) hue-rotate(90deg)"
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
                  <Heading fontSize={{base:"18px",sm:"28px",md:"22px", lg:"28px"}}>Sign in to Your account</Heading>
                  <Text 
                  marginTop={{base:"10px",sm:"12px",md:"12px", lg:"10px"}}    
                  fontSize={{base:"14px",sm:"22px",md:"18px", lg:"22px"}}
                  >
                    Don't have an account? <Link><Login/></Link>
                  </Text>
                  <ModalCloseButton />
                  <Box height={"300px"}>
                    <Flex>
                      <Button
                        leftIcon={<FcGoogle />}
                        colorScheme="white"
                        color={"black"}
                        width={{ base:"200px",md:"200px"}}
                        margin={"auto"}
                        marginTop={"20px"}
                        variant={"outline"}
                        _hover={{ background: "#f3f3f3f" }}
                      >
                        Continue with Google
                      </Button>
                    </Flex>
                    <Flex>
                      <Button
                        leftIcon={<MdOutlineEmail />}
                        colorScheme="white"
                        color={"black"}
                        margin={"auto"}
                        fontSize={{base:"12px",sm:"16px",md:"16px", lg:"16px"}}
                        marginTop={"20px"}
                        variant={"outline"}
                        _hover={{ background: "#f3f3f3f" }}
                      >
                        <Register/>
                      </Button>
                    </Flex>
                    <Text textAlign={"center"} margin={"20px"}>
                      or
                    </Text>
                    <Box textAlign={"center"}>
                      <Button
                        leftIcon={<FaApple />}
                        colorScheme="white"
                        color={"black"}
                        margin={{md:"5px",lg:"20px"}}
                        variant={"outline"}
                        _hover={{ background: "#f3f3f3f" }}
                        width={{md:"100px"}}
                      >
                        Apple
                      </Button>
                      <Button
                        leftIcon={<TfiFacebook />}
                        colorScheme="white"
                        color={"black"}
                        margin={"20px"}
                        variant={"outline"}
                        _hover={{ background: "#f3f3f3f" }}
                      >
                        Facebook
                      </Button>
                    </Box>
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
