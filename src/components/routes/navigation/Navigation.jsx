import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/images/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="nav__links">
          {/* <Link className="link" to="/shop">
            Shop
          </Link> */}
          <Link className="link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
