export const filterProducts = (searchQuery, products) => {
    const query = searchQuery.toLowerCase();
    const filterproducts = products?.filter((product) => {
      return (
        product?.productname?.toLowerCase().includes(query) ||
        product?.category?.toLowerCase().includes(query)
      );
    });
  
    return filterproducts;
  };