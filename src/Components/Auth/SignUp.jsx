import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  
  const submitHandler = (e)=>{
    e.preventDefault();
   const formData = new FormData();
   formData.append("name", name);
   formData.append("email", email);
   formData.append("password", password);

   dispatch(register(formData));
   setName('');
   setEmail('');
   setPassword('');

  }
  return (
    <Container spacing={"16"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"} mt={"10"}>
        <Heading textTransform={"uppercase"} children="SignUp" />
        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Box my={"4"}>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Your Name"}
              type="text"
              focusBorderColor="pink.400"
            />
          </Box>
          <Box my={"4"}>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Email"}
              type="email"
              focusBorderColor="pink.400"
            />
          </Box>
          <Box my={"4"}>
            <Input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password"}
              type="password"
              focusBorderColor="pink.400"
            />
          </Box>
          <Button my="4" colorScheme="pink" type="submit" w={"full"}>
            Sign Up{" "}
          </Button>
          <Box my={"4"}>
            Already Signed Up?{" "}
            <Link to="/login">
              <Button fontSize={"sm"} color="pink.400" variant="link">
                Login
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default SignUp;
