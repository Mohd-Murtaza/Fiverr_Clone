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
      const logout = await axios.post(
        `https://fiverrbackend-production.up.railway.app/user/logout`,
        {},
        { withCredentials: true }
      );
      console.log(logout);
      if (logout.data.msg == "logout successfull") {
        toast({
          position: 'top',
          title: `${loginPersonName} you are logout successfully`,
          status: "success",
          isClosable: true,
          duration: 3000,
        })
        setIsAuth(false);
        localStorage.removeItem("loginPersonName")
        localStorage.setItem("isAuth",false)
        setLoginPersonName("")
        navigate("/");
      }
    } catch (error) {
      console.log(error);
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
