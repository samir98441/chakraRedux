import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@chakra-ui/react";
import Search from "../search/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/loginSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.cart);
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/user");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">ChakraLogO</Link>
      </div>
      <div className="searchbar">
        <Search />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Avatar
              name="Sameer kayastha"
              src="https://bit.ly/broken-link"
              fontSize="1rem"
              onClick={handleHomeClick}
            />
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
            <span> ({cart.length})</span>
          </li>
          <li>
            <LogoutIcon
              style={{ color: "red" }}
              onClick={() => dispatch(logout())}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
