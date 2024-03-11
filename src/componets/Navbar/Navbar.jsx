import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="image/brand_logo.png" alt="" />
      </div>
      <ul className="links">
        <li>MENE</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
