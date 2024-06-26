import ProductCard from "../components/products/ProductCard";
import Container from "../components/Layout/Container";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import config from "../config/config";
import SkeletonProduct from "../components/Layout/SkeletonProduct";
import { addToCart } from "../store/CartSlice";
import useFetch from "../hooks/useFetch";
import { setProducts } from "../store/ProductSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  const { isLoading, data: Products } = useFetch(
    config.appwriteProductCollectionId,
    "Products",
  );
  dispatch(setProducts(Products));

  const handleCart = (item) => {
    dispatch(addToCart({ ...item, userID: userData.$id }));
    toast.success("Added to the Cart !");
  };

  return (
    <Container>
      <h2 className="md:text-5xl text-2xl pt-12 px-20 max-md:px-4 font-bebasNeue">
        All Products
      </h2>
      <Toaster position="top-center" />
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        {isLoading ? (
          <>
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
          </>
        ) : (
          Products?.map((product) => (
            <ProductCard
              key={product?.id}
              handleCart={handleCart}
              product={product}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default AllProducts;
