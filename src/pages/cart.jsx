import UserForm from "../components/UserForm/UserForm";
import CartList from "../components/CartList/CartList";
import CartItem from "../components/CartItem/CartItem";
import CartTotalThumb from "../components/CartTotalThumb/CartTotalThumb";
const Cart = () => {
  return (
    <>
      <h1>Shop Cart</h1>
      <UserForm />
      <CartList>
        <CartItem />
      </CartList>
      <CartTotalThumb />
    </>
  );
};

export default Cart;
