import React, { useState } from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../Redux/actions/userAction';



const Forgetpassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()
  const submitHandler = e =>{
    e.preventDefault();
    dispatch(forgetPassword(email));
    setEmail('');
}

  return (
    <Container py={'16'} h={'90vh'}>
    <form onSubmit={submitHandler} > 
      <Heading
        children="Forget Password"
        my={'16'}
        textTransform={'uppercase'}
        textAlign={['center', 'left']}
      />
      <VStack spacing={'8'}>
        <Input
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          type="email"
          focusBorderColor="pink.400"
        />
        <Button type="submit" w={'full'} colorScheme="pink">
          Send Reset Link
        </Button>
      </VStack>
    </form>
  </Container>
  )
}

export default Forgetpassword
