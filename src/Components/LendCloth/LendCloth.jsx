import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Progress,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import bg from "../../assets/bg.png";
import { createproduct } from "../../Redux/actions/productAction";
import { loadUser } from "../../Redux/actions/userAction";

const LendCloth = () => {
  const [productname, setProductname] = useState("");
  const [productdescription, setProductdescription] = useState("");
  const [actualprice, setActualprice] = useState("");
  const [finalprice, setFinalprice] = useState("");
  const [size, setSize] = useState("");
  const [productdetail, setProductdetail] = useState("");
  const [sizefit, setSizefit] = useState("");
  const [materialcare, setMaterialcare] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!productname) newErrors.productname = "Product name is required";
    if (!productdescription)
      newErrors.productdescription = "Product description is required";
    if (!actualprice) newErrors.actualprice = "Actual price is required";
    if (!finalprice) newErrors.finalprice = "Final price is required";
    if (!size) newErrors.size = "Size is required";
    if (!productdetail)
      newErrors.productdetail = "Product details are required";
    if (!sizefit) newErrors.sizefit = "Size & Fit details are required";
    if (!materialcare)
      newErrors.materialcare = "Material care details are required";
    if (!category) newErrors.category = "Category is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const formData = new FormData();
    formData.append("productname", productname);
    formData.append("productdescription", productdescription);
    formData.append("actualprice", actualprice);
    formData.append("finalprice", finalprice);
    formData.append("size", size);
    formData.append("productdetail", productdetail);
    formData.append("sizefit", sizefit);
    formData.append("materialcare", materialcare);
    formData.append("category", category);

    for (let i = 0; i < images.length; i++) {
      formData.append("files", images[i]);
    }

    try {
     setLoading(true)
      await dispatch(createproduct(formData));
      setLoading(false)
      dispatch(loadUser());
      setProductname("");
      setProductdescription("");
      setActualprice("");
      setFinalprice("");
      setSize("");
      setProductdetail("");
      setSizefit("");
      setMaterialcare("");
      setCategory("");
      setImages([]);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };


  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      bgImage={bg}
      bgPosition={"center"}
      bgSize={"cover"}
      alignItems={"center"}
    >
      <VStack
        spacing={"8"}
        border={"1px"}
        borderColor={"pink"}
        bgColor={"white"}
        p={8}
        w={"45rem"}
      >

        <Heading children="Lend Your Clothes" />
        <form onSubmit={handleSubmit} >
      
        {loading?<Progress size='xs' isIndeterminate  colorScheme="pink"/>:"" }
        
          <FormControl isInvalid={!productname && errors.productname} my={"4"}>
            <Input
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              type="text"
              placeholder="Product Name*"
              focusBorderColor="pink.400"
            />
            <FormErrorMessage>{errors.productname}</FormErrorMessage>
          </FormControl>
          <FormControl my={"4"} isInvalid={!productdescription && errors.productdescription}>
            <Input
              required
              value={productdescription}
              onChange={(e) => setProductdescription(e.target.value)}
              type="text"
              placeholder="Product Description*"
              focusBorderColor="pink.400"
            />
            <FormErrorMessage>{errors.productdescription}</FormErrorMessage>
          </FormControl>
          <HStack justifyContent={"space-between"}>
            <FormControl isInvalid={!actualprice && errors.actualprice} w={"50%"} my={"4"}>
              <Input
                required
                value={actualprice}
                onChange={(e) => setActualprice(e.target.value)}
                type="number"
                placeholder="Actual Price*"
                focusBorderColor="pink.400"
              />
              <FormErrorMessage>{errors.actualprice}</FormErrorMessage>
            </FormControl>
            <FormControl my={"4"} w={"50%"} isInvalid={!finalprice && errors.finalprice}>
              <Input
                required
                value={finalprice}
                onChange={(e) => setFinalprice(e.target.value)}
                type="number"
                placeholder="Final Price*"
                focusBorderColor="pink.400"
              />
              <FormErrorMessage>{errors.finalprice}</FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack>
            <FormControl my={"4"} isInvalid={!size && errors.size} width={"50%"}>
              <Input
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
                type="text"
                placeholder="Size*"
                focusBorderColor="pink.400"
              />
              <FormErrorMessage>{errors.size}</FormErrorMessage>
            </FormControl>
            <Popover autoFocus>
              <PopoverTrigger>
                <Button colorScheme="pink" variant={"link"}>
                  SizeChart
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>SizeChart!</PopoverHeader>
                <PopoverBody>
                  <Image src="https://images.squarespace-cdn.com/content/v1/60a7f864f8ffcc75738788d5/1622298107914-T7SQM7UWUTJWEY7364YX/Matentabel-vrouw.jpg" />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <FormControl my={"4"} isInvalid={!productdetail && errors.productdetail}>
            <Box>
              <Input
                required
                value={productdetail}
                onChange={(e) => setProductdetail(e.target.value)}
                type="text"
                placeholder="Product details.*"
                focusBorderColor="pink.400"
              />
            </Box>
            <FormErrorMessage>{errors.productdetail}</FormErrorMessage>
          </FormControl>
          <HStack justifyContent={"space-between"}>
            <FormControl my={"4"} w={"50%"} isInvalid={!sizefit && errors.sizefit}>
              <Input
                required
                value={sizefit}
                onChange={(e) => setSizefit(e.target.value)}
                type="text"
                placeholder="Size & Fit "
                focusBorderColor="pink.400"
              />
              <FormErrorMessage>{errors.sizefit}</FormErrorMessage>
            </FormControl>
            <FormControl my={"4"} w={"50%"} isInvalid={!materialcare && errors.materialcare}>
              <Input
                required
                value={materialcare}
                onChange={(e) => setMaterialcare(e.target.value)}
                type="text"
                placeholder="Material Care*"
                focusBorderColor="pink.400"
              />
              <FormErrorMessage>{errors.materialcare}</FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl>
            <Select
              placeholder="Select Category"
              focusBorderColor="pink.400"
              colorScheme="pink"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Ethnic Wear">Ethnic Wear</option>
              <option value="Bridesmaid Wear">Bridesmaid Wear</option>
              <option value="Western Wear">Western Wear</option>
              <option value="Drama costumes">Drama costumes</option>
              <option value="Cool Trends Wear">Cool Trends Wear</option>
            </Select>
          </FormControl>
          <HStack>
            <Box my={4}>
              <Input
                required
                accept="image/*"
                type="file"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </Box>
            <Button colorScheme="pink" variant={"ghost"}>
              Upload Images
            </Button>
          </HStack>
          <Box>
            <Button colorScheme="pink" w={"full"} onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default LendCloth;
