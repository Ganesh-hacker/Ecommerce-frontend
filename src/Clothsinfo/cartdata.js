let products = [
  ];
  
  const addProduct = (newProduct) => {
    products = [...products, newProduct];
  };
  
  export  { products, addProduct };