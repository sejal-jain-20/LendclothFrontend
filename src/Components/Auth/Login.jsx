import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../../Redux/actions/userAction';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email , setEmail] =useState("");
    const [password, setPassword]=useState("");

    
    const dispatch = useDispatch();
    const submitHandler = e =>{
        e.preventDefault();
        dispatch(login(email,password));
        setEmail('');
        setPassword('');
    }
  
  return (
    <Container h={"full"}>
        <VStack h={"full"} justifyContent={"center"} spacing={"16"} mt={"10"}>
            <Heading children={"Welcome to Rental_Clothes"} />
            <form onSubmit={submitHandler} style={{width:"100%"}}>
                <Box my="4">
                    <Input
                    required
                    value={email}
                    type='email'
                    placeholder='Your Email'
                    onChange={e=>setEmail(e.target.value)}
                    focusBorderColor="pink.400"
                    />
                </Box>
                <Box my="4">
                    <Input
                    required
                    value={password}
                    type='password'
                    placeholder='Password'
                    onChange={e=>setPassword(e.target.value)}
                    focusBorderColor="pink.400"
                    />
                </Box>
                <Box my={'4'}>
                <Link to ="/forgetpassword">
                <Button fontSize={'sm'} variant="link">Forget Password?</Button>
                </Link>
                </Box>
                <Button my="4" colorScheme='pink' type="submit" w={"full"}>Login </Button>
                <Box my={'4'}>
                New User?{' '}
                <Link to ="/signup">
                    <Button fontSize={'sm'} color='pink.400' variant="link">Sign Up</Button>{' '}
                    here
                </Link>
                </Box>

            </form>
        </VStack>
    </Container>
  )
}

export default Login
