import {
  Badge,
  Box,
  Flex,
  Text,
  Image,
  Avatar,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import fiverr from "../assets/fiverrLogo.webp";
import { AuthContext } from "../contexts/AuthContextProvider";

const SingleProduct = () => {
  const toast=useToast()
  const { query } = useParams();
  console.log(query);
  const [dataFetched, setDataFetched] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { isAuth } = useContext(AuthContext);
  const fetchProduct = async () => {
    try {
      let product = await axios.get(
        `https://fiverrbackend-production.up.railway.app/product/allProducts?_id=${query}`,
        { withCredentials: true }
      );
      product = product.data.data;
      console.log(product);
      if (product) {
        setSingleProduct(product[0]);
        setDataFetched(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
    console.log(singleProduct);
  }, []);

  //this is for razorpay
  const checkoutHandler = async ({ name, amount }) => {
    const {
      data: { order },
    } = await axios.post(`https://fiverrbackend-production.up.railway.app/payment/checkout`, {
      name,
      amount,
    });

    var options = {
      key: "rzp_test_9X5bbgeJM3mbWM", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Fiverr",
      description: "Test Transaction",
      image: fiverr,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://fiverrbackend-production.up.railway.app/payment/payment-verification",
      prefill: {
        name: localStorage.getItem("loginPersonName"),
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log(order);
  };

  return (
    <>
      <Navbar />
      <Flex
        width={"95%"}
        flexDirection={{ base: "column", md: "row" }}
        gap={5}
        margin={"85px auto 0px"}
      >
        {/* details box */}
        <Box width={{ base: "100%", md: "70%" }}>
          <Box>
            <Box marginBottom={"10px"} display={"flex"}>
              <Box margin={"auto 0px"}>
                <RiHome4Line fontSize={"14px"} />
              </Box>
              <Text
                margin={{ base: "auto 20px" }}
                fontSize={{ base: "14px" }}
                color={"#404145"}
                fontWeight={"bolder"}
              >
                / {`${singleProduct.category}`} / Results Below
              </Text>
            </Box>
            <Box>
              <Text
                margin={"5px 0px"}
                color={"#404145"}
                fontWeight={{ base: "bold", sm: "bold" }}
                fontSize={{ base: "22px", sm: "28px", md: "28px" }}
                noOfLines={2}
              >
                {`${singleProduct.pTitle}`}
              </Text>
            </Box>
            <Box display="flex" flexWrap={"wrap"} alignItems="center">
              <Avatar w="60px" h="60px" src={singleProduct.oImage} />
              <Box ml={"10px"}>
                <Flex>
                  <Text
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    fontWeight="bold"
                    fontSize={"14px"}
                    m="auto 0px"
                  >
                    {singleProduct.oName}
                  </Text>
                  {singleProduct.topRated ? (
                    <Badge m="auto 0px" ml={"10px"} colorScheme="orange">
                      Top Rated
                    </Badge>
                  ) : null}
                  {singleProduct.proService ? (
                    <Badge
                      variant="solid"
                      m="auto 0px"
                      ml={"10px"}
                      colorScheme="blue"
                    >
                      Pro
                    </Badge>
                  ) : null}
                </Flex>
                <Flex>
                  <StarIcon fontSize={"16px"} m={"auto 5px auto 0px"} />
                  <Text fontSize={"18px"} fontWeight={"500"}>
                    {`${singleProduct.pRating}`}
                  </Text>
                  <Box as="span" ml="2" color="gray.600" fontSize="16px">
                    {`${singleProduct.pReview}`} reviews
                  </Box>
                </Flex>
              </Box>
              <Box mt={{ base: "10px", sm: "0px" }}>
                <Flex ml={"10px"}>
                  <Box m={"auto 0px"}>
                    <MdLocationPin fontSize={"20px"} />
                  </Box>
                  <Text>{singleProduct.oCountry}</Text>
                </Flex>
                <Flex ml={"10px"}>
                  <Box m={"auto 0px"}>
                    <AiFillShop fontSize={"18px"} />
                  </Box>
                  <Text>{singleProduct.oOrder}</Text>
                </Flex>
              </Box>
            </Box>
            <Box>
              <Image
                src={singleProduct.pImage}
                width={{ base: "600px", md: "400px" }}
                m={{ base: "10px 0" }}
                borderRadius={{ base: "10px", md: "10px" }}
              />
            </Box>
          </Box>
          <Box>
            <Text
              noOfLines={1}
              color={"#222325"}
              fontSize={"18px"}
              fontWeight={"bold"}
            >
              {singleProduct.pDesc}
            </Text>
            <Text noOfLines={3} lineHeight={1.3}>
              {singleProduct.pSubDesc}
            </Text>
          </Box>
        </Box>
        {/* payment box */}
        <Box
          border={"1px solid #efe5e7"}
          borderRadius={"10px"}
          m={"auto 0px"}
          h={{ base: "360px", md: "400px" }}
          w={{ base: "100%", md: "30%" }}
        >
          <Box
            borderBottom={"2px solid #222325"}
            fontSize={"30px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Get It!
          </Box>
          <Box p={{ base: "16px 30px", md: "30px 20px" }}>
            <Text
              color={"#404145"}
              fontWeight={"bold"}
              fontSize={{ base: "24px", md: "24px" }}
            >{`₹${singleProduct.pPrice}/-`}</Text>
            <Text
              color={"#404145"}
              fontWeight={"bold"}
              noOfLines={1}
              fontSize={{ base: "", md: "20px" }}
            >
              Save up to 10% with
            </Text>
            <Text
              color={"#026a5d"}
              fontWeight={"bold"}
              noOfLines={1}
              fontSize={{ base: "", md: "20px" }}
            >
              Subscribe to Save
            </Text>
            <Box display={"flex"}>
              <TiTick fontSize={"30px"} />
              <Text fontSize={{ base: "", md: "16px" }}>Live Support</Text>
            </Box>
            <Box display={"flex"}>
              <TiTick fontSize={"30px"} />
              <Text fontSize={{ base: "", md: "16px" }}>Response in 1hr</Text>
            </Box>
            <Box display={"flex"}>
              <TiTick fontSize={"30px"} />
              <Text fontSize={{ base: "", md: "16px" }}>Recorded Video</Text>
            </Box>
            <Box display={"flex"}>
              <TiTick fontSize={"30px"} />
              <Text fontSize={{ base: "", md: "16px" }}>
                Include Source File
              </Text>
            </Box>
            <Box display={"flex"}>
              <TiTick fontSize={"30px"} />
              <Text fontSize={{ base: "", md: "16px" }}>Simple Way</Text>
            </Box>
          </Box>
          {isAuth ? (
            <Button
              w={"100%"}
              colorScheme="green"
              onClick={() =>
                checkoutHandler({
                  name: singleProduct.pTitle,
                  amount: singleProduct.pPrice,
                })
              }
            >
              Payment
            </Button>
          ) : (
            <Button
              w={"100%"}
              colorScheme="green"
              onClick={() =>
                toast({
                  position:"top",
                  description: "Please SignUp/Login to buy this!",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                })
              }
            >
              Payment
            </Button>
          )}
        </Box>
      </Flex>
      {dataFetched ? <Footer /> : null}
    </>
  );
};

export default SingleProduct;
