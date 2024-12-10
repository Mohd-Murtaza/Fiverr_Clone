import React, { useContext } from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const toast=useToast()
  const navigate = useNavigate();
  const { loginPersonName, setLoginPersonName } = useContext(AuthContext);
  const {isAuth, setIsAuth}=useContext(AuthContext)
  const handleLogout = async () => {
    try {
      let logout;
  
      if (localStorage.getItem("accessToken")) {
        // User logged in via Google
        logout = await axios.post(
          `https://fiverr-backend-pied.vercel.app/logout`,
          {},
          { withCredentials: true }
        );
        console.log("Google logout successful:", logout);
      } else {
        // User logged in via traditional login
        logout = await axios.post(
          `https://fiverr-backend-pied.vercel.app/user/logout`,
          {},
          { withCredentials: true }
        );
        console.log("Traditional logout successful:", logout);
      }
  
      // Handle logout success
      if (logout.data.msg === "logout successfull" || logout.data.message==="Logged out successfully") {
        toast({
          position: 'top',
          title: `${loginPersonName}, you are logged out successfully.`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
  
        // Clear session data
        setIsAuth(false);
        setLoginPersonName("");
        localStorage.removeItem("loginPersonName");
        localStorage.removeItem("isAuth");
        localStorage.removeItem("accessToken"); // Token from Google login
        localStorage.removeItem("userName"); // Name from Google login
        localStorage.removeItem("userEmail"); // Email from Google login
  
        // Navigate to the homepage
        navigate("/");
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="green"
        padding={{ base: "5px", sm: "16px" }}
      >
        Profile
      </MenuButton>
      <MenuList minWidth={{ base: "150px", sm: "200px" }}>
        <MenuGroup title="Profile">
          <MenuItem backgroundColor="green" color="white">
            {loginPersonName}
          </MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <Button
            width={"100%"}
            backgroundColor={"red"}
            color={"white"}
            transition={".3s"}
            _hover={{
              background: "pink",
              color: "black",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
