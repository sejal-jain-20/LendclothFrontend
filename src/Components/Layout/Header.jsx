import {
    Box,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    Spacer,
    Stack,
    VStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    HStack,
    Heading,
    Image,
    Text,
    Badge,
    Tooltip,
  } from "@chakra-ui/react";
  import { BsCoin } from "react-icons/bs";
  import { FaCoins } from "react-icons/fa";
  import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
  import React, { useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { useDisclosure } from "@chakra-ui/react";
  import logo from '../../assets/log_o.png';
import { logout } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

  const MenuLink = ({ url = "/", title = "Home" }) => (
    <Link to={url}>
      <Button variant={"link"} colorScheme="pink" fontSize={'lg'}>{title}</Button>
    </Link>
  );

  
  const Header = ({isAuthenticated=false,user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const[searchParam,setSearchParam] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const logoutHandler = () => {
      onClose();
      dispatch(logout());
    };

    const handleSearch =()=>{
      if(searchParam)
      { navigate(`/explore/${searchParam}`)
        setSearchParam('')
      }
    }

    return (
      <Stack
        direction={{ base: "row", md: "row"}}
        align={{ base: "center", md: "center" }}
        justify="space-between"
        p={4}
        boxShadow={'lg'}
        maxW={"100%"}
      >
        {/* Logo on the left side */}
        <Box minW="9rem" >
          <Link to={'/'}>
          <Image src={logo} w={40} />
          </Link>
        </Box>
  
        {/* Menu Links in the middle */}
        <HStack display={{ base: "none", md: "flex" }} spacing={6}  >
          <MenuLink  url="/explore" title="Explore" />
          <MenuLink  url="/lendcloth" title="Lend Clothes" />
          {isAuthenticated==true?
          <>
          <MenuLink  url="/myspace" title="My Space" />
          <InputGroup borderRadius={5} > 
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text"  placeholder="Search..." focusBorderColor="pink.400" value={searchParam}  onChange={(e)=>setSearchParam(e.target.value)}/>
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="md" colorScheme="pink" variant={"ghost"}  onClick={handleSearch}>
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
          </>
          :" "}
        </HStack>
        
    
        {/* Login button on the right */}
        <Box display={{ base: "none", md: "flex" }} >
        <Box display={"flex"} direction="row" mr={3} justifyContent={"center"} alignItems={"center"}> 
          <Tooltip label="Available token">
          <Badge variant='solid'  colorScheme='pink' mr="2">
         <Text children={user?.lendtoken}/>
        </Badge>
          </Tooltip>
           <BsCoin size={"26"} color="hotpink" className="headertoken"/>
          </Box>
          {!isAuthenticated==true?
          <>
          <Link to={'/login'}>
          <Button colorScheme="pink" >Login</Button>
          </Link>
          </>
          :
          <>
          <Link to={'/'}>
          <Button colorScheme="pink"  onClick={logoutHandler}>Logout</Button>
          </Link>
          </>
          }
        
        </Box>
  
        {/* Responsive Drawer */}
       
        <Box display={{ base: "flex", md: "none" }}>
        <Box display={"flex"} direction="row" mr={3} justifyContent={"center"} alignItems={"center"}> 
          <Tooltip label="Available token">
          <Badge variant='solid'  colorScheme='pink' mr="2">
         <Text children={user?.lendtoken}/>
        </Badge>
          </Tooltip>
           <BsCoin size={"26"} color="hotpink" className="headertoken"/>
          </Box>
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Open Menu"
            colorScheme="pink"
            ml={4}
          />
        </Box>
  
        {/* Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody mt={30} >
              <VStack spacing="8" >
                <MenuLink  url="/lendcloth" title="Lend Clothes" />
                <MenuLink  url="/explore" title="Explore" />
                {isAuthenticated==true?(
                <MenuLink  url="/myspace" title="My Space" />):("")
                }
                {/* Add more MenuLinks for other items */}
                {!isAuthenticated==true?
                <>
                <Link to={'/login'}>
                <Button colorScheme="pink" onClick={onClose} >Login</Button>
                </Link>
                </>
                :
                <>
                <Link to={'/'}>
                <Button colorScheme="pink" onClick={logoutHandler}>Logout</Button>
                </Link>
                </>
                }
                
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    );
  };
  
  export default Header;
  