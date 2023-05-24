import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Shopping Cart</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
