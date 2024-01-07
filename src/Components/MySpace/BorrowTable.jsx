// Import necessary dependencies
import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { getUserClothes, returnproduct } from '../../Redux/actions/productAction';


const BorrowTable = () => {
 
  const {products,loading} = useSelector((state) => state.product); 
  const {user} = useSelector((state)=>state.user) ;
  const [userProducts, setUserProducts] = React.useState([]);
  const dispatch =useDispatch();

  
  const returnProductHandler = async (e, productId) => {
    e.preventDefault();
    await dispatch(returnproduct(productId));
    dispatch(getUserClothes()); 
  };

 

  useEffect(() => {
    if (Array.isArray(products)) {
      // console.log(products);
      setUserProducts(
        products.filter(
          (product) => product.borrowby && product.borrowby._id === user._id
        )
      );
    }
  }, [products,user]);




  
  return (
    <>
      {!loading ? (
        <TableContainer h={'100vh'} w={'100%'} mt={14}>
          <Table variant='simple'>
            <TableCaption>List of Lend Clothes</TableCaption>
            <Thead>
              <Tr>
                <Th>Product_Id</Th>
                <Th>Product_Name</Th>
                <Th>Product_Description</Th>
                <Th>Size</Th>
                <Th>Category</Th>
                <Th>Actual_price</Th>
                <Th>Final_price</Th>
                <Th>borrowby</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Map through lendClothes array and render each row */}
              {userProducts.map((clothing) => (
                <Tr key={clothing.product_id}>
                  <Td>{clothing._id}</Td>
                  <Td>{clothing.productname}</Td>
                  <Td>{clothing.productdescription}</Td>
                  <Td>{clothing.size}</Td>
                  <Td>{clothing.category}</Td>
                  <Td>{clothing.actualprice}</Td>
                  <Td>{clothing.finalprice}</Td>
                  <Td>{clothing.borrowby.name}</Td>
                  <Td>
                  <Button variant={"outline"} colorScheme='red'  onClick={(e) => returnProductHandler(e, clothing._id)}>Return</Button>
                  </Td>
                </Tr>
              ))}
             
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '10%' }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default BorrowTable;
