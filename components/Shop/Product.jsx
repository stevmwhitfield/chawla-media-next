const Product = ({ name, price }) => {
  return (
    <>
      {name}: {price.formatted_with_symbol}
    </>
  );
};

export default Product;
