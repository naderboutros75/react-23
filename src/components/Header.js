import logo from "../assets/images/react-logo.png";
import { useContext } from "react";
import Context from "./Context";

export function Header() {
  const userData = useContext(Context);

  return (
    <nav className="nav-bar">
      <p>
        <img src={logo} alt="logo" height="50" />
      </p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact-us">Contacts</a>
        </li>
        <li>Cart: {userData.cartItems}</li>
      </ul>
    </nav>
  );
}
