import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@chakra-ui/react";

import { useLoginContext } from "../../context/LoginContext";
import Search from "../search/Search";

const Header = () => {
  const { handleLogout } = useLoginContext();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/home");
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
            {/* <Link to="/user"> */}
            <Avatar
              name="Sameer kayastha"
              src="https://bit.ly/broken-link"
              fontSize="1rem"
              onClick={handleHomeClick}
            />
            {/* </Link> */}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
