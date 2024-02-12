import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { RiHome4Line } from "react-icons/ri";
import {
  Box,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Stack,
  Switch,
  Text,
  Badge,
  Avatar,
  filter,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
const Products = () => {
  const [dataFetched, setDataFetched] = useState(false);
  var { query } = useParams();
  query = query.split("-").join(" ");
  const [products, setProducts] = useState([]);
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  //for filter and sort.....
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceSort, setPriceSort] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [proServices, setProServices] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const fetchProducts = async () => {
    try {
      const products = await axios.get(
        `http://localhost:8080/product/allProducts?category=${query}`,
        { withCredentials: true }
      );
      console.log("line no. 43", products);
      if (products.data.data) {
        setProducts(products.data.data);
        setCards(products.data.data[0].slider);
        setCategory(products.data.data[0].category);
        setCategoryDesc(products.data.data[0].categoryDesc);
        setFilteredProducts(products.data.data);
        setDataFetched(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);
  //filters and sorting-------
  useEffect(() => {
    let filtered = [...products];
    if (sortBy === "Recommended") {
      filtered = filtered.filter((ele) => ele.sortBy === "Recommended");
    } else if (sortBy === "Best selling") {
      filtered = filtered.filter((ele) => ele.sortBy === "Best selling");
    } else if (sortBy === "Newest arrivals") {
      filtered = filtered.filter((ele) => ele.sortBy === "Newest arrivals");
    }
    setFilteredProducts(filtered);
  }, [sortBy]);

  useEffect(() => {
    let filtered = [...products];
    if (priceSort === "asc") {
      filtered.sort((a, b) => a.pPrice - b.pPrice);
    } else if (priceSort === "desc") {
      filtered.sort((a, b) => b.pPrice - a.pPrice);
    }
    console.log(filtered);
    setFilteredProducts(filtered);
  }, [priceSort]);

  useEffect(() => {
    let filtered = [...products];
    if (ratingFilter === 5) {
      filtered = filtered.filter((ele) => ele.pRating === ratingFilter);
    }
    if (ratingFilter === 4) {
      filtered = filtered.filter((ele) => ele.pRating >= 4 && ele.pRating < 5);
    }
    if (ratingFilter === 1) {
      filtered = filtered.filter(
        (ele) => ele.pRating >= 1 && ele.pRating <= 3.9
      );
    }
    setFilteredProducts(filtered);
  }, [ratingFilter]);

  useEffect(() => {
    let filtered = [...products];
    if (proServices) {
      filtered = filtered.filter((ele) => ele.proService === true);
    }
    setFilteredProducts(filtered);
  }, [proServices]);

  useEffect(() => {
    let filtered = [...products];
    if (topRated) {
      filtered = filtered.filter((ele) => ele.topRated === true);
    }
    setFilteredProducts(filtered);
  }, [topRated]);

  return (
    <>
      <Navbar />
      <Box width={"95%"} margin={"100px auto"}>
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
              / Results Below
            </Text>
          </Box>
          <Text
            margin={"10px 0px"}
            color={"#222325"}
            fontWeight={{ base: "bold", sm: "bold" }}
            fontSize={{ base: "22px", sm: "28px", md: "32px" }}
          >{`${category}`}</Text>
          <Text>{`${categoryDesc}`}</Text>
        </Box>
        {/* Slider ........... */}
        <Box position={"relative"} width={"98%"} margin={"30px auto"}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              250: {
                slidesPerView: 1.2,
              },
              350: {
                slidesPerView: 1.5,
              },
              400: {
                slidesPerView: 1.8,
              },
              500: {
                slidesPerView: 2.1,
              },
              550: {
                slidesPerView: 2.3,
              },
              600: {
                slidesPerView: 2.6,
              },
              700: {
                slidesPerView: 2.9,
              },
              800: {
                slidesPerView: 3.4,
              },
              900: {
                slidesPerView: 3.8,
              },
              1000: {
                slidesPerView: 4.2,
              },
              1150: {
                slidesPerView: 4.8,
              },
            }}
          >
            {cards.map((ele, ind) => (
              <SwiperSlide key={ind}>
                <Box
                  display={"flex"}
                  w={"auto"}
                  padding={"12px"}
                  borderRadius={"100px"}
                  border={"1px solid #e4e5e7"}
                  css={{
                    "&:hover": {
                      backgroundColor: "blue.200",
                      border: "1px solid black",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    bg={"#f5f5f5"}
                    width={"60px"}
                    height={"60px"}
                    padding={"10px"}
                    borderRadius={"50%"}
                  >
                    <Image width={"40px"} height={"40px"} src={ele.img} />
                  </Box>
                  <Text
                    color={"#222325"}
                    fontWeight={"bolder"}
                    fontSize={"18px"}
                    margin={"auto 0px auto 18px"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    {ele.title}
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box
            position="absolute"
            top="75%"
            transform="translateY(-50%)"
            left={{ base: "-10px", md: "-20px" }}
            width={{ base: "30px", md: "40px" }}
            height={{ base: "30px", md: "40px" }}
            color="green"
            fontSize="10px"
            marginRight="0px"
            backgroundColor="rgb(227, 227, 227)"
            borderRadius="50%"
            transition=".5s"
            className="swiper-button-prev"
            _after={{
              fontSize: "1.3rem",
              marginLeft: "-5px",
              color: "#1dbf73",
            }}
            css={{
              "&:hover": {
                backgroundColor: "#0000002f",
                color: "black",
                cursor: "pointer",
              },
            }}
          ></Box>
          <Box
            position="absolute"
            top="75%"
            transform="translateY(-50%)"
            right={{ base: "-10px", md: "-20px" }}
            width={{ base: "30px", md: "40px" }}
            height={{ base: "30px", md: "40px" }}
            color="green"
            fontSize="10px"
            marginRight="0px"
            backgroundColor="rgb(227, 227, 227)"
            borderRadius="50%"
            transition=".5s"
            className="swiper-button-next"
            _after={{
              fontSize: "1.3rem",
              marginRight: "-5px",
              color: "#1dbf73",
            }}
            css={{
              "&:hover": {
                backgroundColor: "#0000002f",
                color: "black",
                cursor: "pointer",
              },
            }}
          ></Box>
        </Box>
        {/* Filtersss ........ */}
        <Box margin={"50px auto"} borderTop={"1px solid #efeff0"}>
          <Flex
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              margin={"30px 0px"}
              width={{ base: "75%", sm: "75%", md: "55%" }}
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={{ base: "wrap", sm: "nowrap" }}
              rowGap={2}
            >
              <Menu
                allowToggle
                width={"150px"}
                border={"1px solid #efeff0"}
                borderRadius={"25px"}
              >
                <MenuButton
                  colorScheme="green"
                  fontSize={"18px"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Price
                </MenuButton>
                <MenuList pb={4}>
                  <MenuItem
                    onClick={() => setPriceSort("asc")}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={() => setPriceSort("desc")}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    High to Low
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu
                allowToggle
                width={"150px"}
                border={"1px solid #efeff0"}
                borderRadius={"25px"}
              >
                <MenuButton
                  colorScheme="green"
                  fontSize={"18px"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Rating
                </MenuButton>
                <MenuList pb={4}>
                  <MenuItem
                    onClick={() => setRatingFilter(5)}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    5 Star
                  </MenuItem>
                  <MenuItem
                    onClick={() => setRatingFilter(4)}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    4-5 Star
                  </MenuItem>
                  <MenuItem
                    onClick={() => setRatingFilter(1)}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    1-4 Star
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu
                allowToggle
                width={"150px"}
                border={"1px solid #efeff0"}
                borderRadius={"25px"}
              >
                <MenuButton
                  colorScheme="green"
                  fontSize={"18px"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Sort By
                </MenuButton>
                <MenuList pb={4}>
                  <MenuItem
                    onClick={() => setSortBy("Recommended")}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    Recommended
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSortBy("Best selling")}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    Best Selling
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSortBy("Newest arrivals")}
                    cursor={"pointer"}
                    margin={"5px 0px"}
                  >
                    Newest Arrivals
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box
              margin={"0px"}
              width={{ sm: "65%", md: "40%" }}
              display={"flex"}
              justifyContent={{ base: "space-evenly", md: "space-around" }}
            >
              <Stack m={"auto 0px"} h={"30px"} direction="row">
                <Switch
                  m="auto 0px"
                  colorScheme="green"
                  onChange={() => setTopRated(!topRated)}
                />
                <Text m={"auto 0px"} fontSize={"18px"}>
                  Top Rated
                </Text>
              </Stack>
              <Stack m={"auto 0px"} h={"30px"} direction="row">
                <Switch
                  m="auto 0px"
                  colorScheme="green"
                  onChange={() => setProServices(!proServices)}
                />
                <Text m={"auto 0px"} fontSize={"18px"}>
                  Pro Services
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
        {/* Cards Grid....... */}
        <Grid
          templateRows={"auto"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {filteredProducts.map((ele, ind) => (
            <Link key={ind} to={`/single/${ele._id}`}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  h={{ base: "180px" }}
                  w={{ base: "100%" }}
                  src={ele.pImage}
                  alt={ele.pImage}
                />
                <Flex mt="12px" justifyContent="space-between">
                  <Box ml="1" display="flex" overflow={"hidden"}>
                    <Avatar w="30px" h="30px" src={ele.oImage} />
                    <Text
                      whiteSpace={"nowrap"}
                      textOverflow={"ellipsis"}
                      fontWeight="bold"
                      fontSize={"14px"}
                      m="auto 0px auto 5px"
                    >
                      {ele.oName}
                    </Text>
                  </Box>
                  {ele.topRated ? (
                    <Badge m="auto 10px " colorScheme="orange">
                      Top Rated
                    </Badge>
                  ) : null}
                  {ele.proService ? (
                    <Badge variant="solid" m="auto 10px " colorScheme="blue">
                      Pro
                    </Badge>
                  ) : null}
                </Flex>
                <Box p="5">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={2}
                  >
                    {ele.pTitle}
                  </Box>
                  <Box display="flex" mt="2" alignItems="center">
                    <StarIcon fontSize={"16px"} mr={"5px"} />{" "}
                    <Text fontSize={"18px"} fontWeight={"500"}>
                      {ele.pRating}
                    </Text>
                    <Box as="span" ml="2" color="gray.600" fontSize="16px">
                      {ele.pReview} reviews
                    </Box>
                  </Box>
                  <Box fontSize={"18px"} fontWeight={"500"} color={"#222325"}>
                    From {`₹${ele.pPrice}`}
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
      {dataFetched ? <Footer /> : null}
    </>
  );
};

export default Products;
