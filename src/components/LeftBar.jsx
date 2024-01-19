import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaHome, FaSearch } from "react-icons/fa";
import SpotifyLogo from "../assets/img/logo/Spotify_Logo.png";
import { IoAlbumsSharp } from "react-icons/io5";

const LeftBar = () => {
  const menuItems = [
    { icon: <FaHome className="fas fa-home fa-lg me-2" />, text: "Home", href: "/" },
    { icon: <FaSearch className="fas fa-search fa-lg me-2" />, text: "Search", href: "/search" },
    { icon: <IoAlbumsSharp className="fas fa-heart-fill fa-lg me-1 my-2" />, text: "My Album", href: "/MyAlbum" },
  ];

  return (
    <Navbar className="navbar navbar-expand-md fixed-left" id="sidebar">
      <Navbar.Brand href="/">
        <Image src={SpotifyLogo} alt="Spotify Logo" id="logo-LeftBar" className="py-3" />
      </Navbar.Brand>
      <Navbar.Collapse className="align-items-start">
        <Nav className="flex-column">
          {menuItems.map((item, index) => (
            <Nav.Link key={index} href={item.href}>
              {item.icon}
              {item.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftBar;