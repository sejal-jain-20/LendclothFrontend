import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../Redux/actions/userAction';
import { useDispatch } from 'react-redux';

const Restpassword = () => {
  const [password,setPassword]=useState("");
  const token = useParams();
  const dispatch = useDispatch()
  const submitHandler = e =>{
    e.preventDefault();
    dispatch(resetPassword(password,token));
    setPassword('');
}


  return (
    <Container py={'16'} h={'90vh'}>
      <form onSubmit={submitHandler} >
        <Heading
          children="Reset Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
        <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter New Password'
            type='password'
            focusBorderColor='pink.500'
          />
          <Button type="submit" w={'full'} colorScheme="pink">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Restpassword;



