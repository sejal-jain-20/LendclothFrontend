import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Input,
} from "@chakra-ui/react";
import {
  deleteproduct,
  getUserClothes,
  updateProduct,
} from "../../Redux/actions/productAction";

const LendTable = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editActualPrice, setEditActualPrice] = useState("");
  const [editFinalPrice, setEditFinalPrice] = useState("");
  const { products, loading } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (Array.isArray(products)) {
      setUserProducts(
        products.filter((product) => product.createdby._id === user._id)
      );
    }
  }, [products, user]);

  const deleteProductHandler = async (e, productId) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this product?")) {
      await dispatch(deleteproduct(productId));
      dispatch(getUserClothes());
    }
  };

  const editProductHandler = (productId, actualprice ,finalprice) => {
    setEditProductId(productId);
    setEditActualPrice(actualprice);
    setEditFinalPrice(finalprice);
  };

  const saveProductHandler = async (e,productId) => {
    e.preventDefault();
    await dispatch(
      updateProduct(productId, {
        actualprice: editActualPrice,
        finalprice: editFinalPrice,
      })
    );
    setEditProductId(null);
    setEditActualPrice("");
    setEditFinalPrice("");
    dispatch(getUserClothes());
  };

  return (
    <>
      {!loading ? (
        <TableContainer h={"100vh"} w={"100%"} mt={14}>
          <Table variant="simple">
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
                <Th>createdby</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userProducts.map((clothing) => (
                <Tr key={clothing.product_id}>
                  <Td>{clothing._id}</Td>
                  <Td>{clothing.productname}</Td>
                  <Td>{clothing.productdescription}</Td>
                  <Td>{clothing.size}</Td>
                  <Td>{clothing.category}</Td>
                  <Td>
                    {editProductId === clothing._id ? (
                      <Input
                        type="number"
                        value={editActualPrice}
                        onChange={(e) => setEditActualPrice(e.target.value)}
                        focusBorderColor="pink.400"
                        
                      />
                    ) : (
                      clothing.actualprice
                    )}
                  </Td>
                  <Td>
                    {editProductId === clothing._id ? (
                      <Input
                        type="number"
                        value={editFinalPrice}
                        onChange={(e) => setEditFinalPrice(e.target.value)}
                        focusBorderColor="pink.400"
                      />
                    ) : (
                      clothing.finalprice
                    )}
                  </Td>
                  <Td>{clothing.createdby.name}</Td>
                  <Td>
                    {editProductId === clothing._id ? (
                      <Button
                        colorScheme="green"
                        onClick={(e) => saveProductHandler(e,clothing._id)}
                      >
                        Save
                      </Button>
                    ) : (
                      <>
                        <Button
                          mr={4}
                          onClick={() =>
                            editProductHandler(
                              clothing._id,
                              clothing.actualprice,
                              clothing.finalprice
                            )
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          variant={"outline"}
                          colorScheme="red"
                          onClick={(e) => deleteProductHandler(e, clothing._id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default LendTable;
