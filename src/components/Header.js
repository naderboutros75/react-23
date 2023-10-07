import logo from "../assets/images/react-logo.png";

export function Header() {
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
      </ul>
    </nav>
  );
}
