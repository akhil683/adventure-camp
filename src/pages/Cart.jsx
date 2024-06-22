import React, { useEffect } from "react";
import Container from "../components/Container";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../store/CartSlice";
import useFetch from "../hooks/useFetch";
import config from "../config/config";
import SkeletonProduct from "../components/SkeletonProduct";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { isLoading, data } = useFetch(config.appwriteCartCollectionId);
  getCartItems(data);

  const cartTotal = cartItems.reduce((total, currentItem) => {
    const currentItemPrice = currentItem.price;
    return total + currentItem.quantity * currentItemPrice;
  }, 0);
  const total = cartTotal - cartTotal * 0.1 + cartTotal * 0.15 + 4;

  return (
    <Container>
      <div className="flex max-md:flex-col gap-6 pt-12">
        <div className="md:w-[70%] min-h-300px flex flex-col items-center w-full">
          {isLoading ? (
            <>
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </>
          ) : cartItems?.length ? (
            cartItems?.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))
          ) : (
            <h1 className="text-5xl font-semibold text-center my-[10vh]">
              No Item in Cart
            </h1>
          )}
        </div>
        <div className="md:w-[25%] rounded-lg w-full flex bg-gray-100 h-full justify-center p-4">
          <div className="rounded-lg font-roboto">
            <p className="text-center text-2xl mb-4">Order Summary</p>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{cartTotal}</td>
                </tr>
                <tr>
                  <td>Discount(10%)</td>
                  <td>-{(cartTotal * 0.1).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>GST(15%)</td>
                  <td>{(cartTotal * 0.15).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$4</td>
                </tr>
                <tr className="font-semibold">
                  <td>Total</td>
                  <td>{total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2 text-red-600">
              Free shipping above $200 purchase
            </p>
            <button className="mt-8 uppercase bg-black text-white hover:bg-green-600 px-4 py-3 rounded-lg duration-200 w-full">
              Checkout
            </button>
            <button
              onClick={() => navigate("/all-products")}
              className="hover:underline no-underline mt-4 text-center w-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
