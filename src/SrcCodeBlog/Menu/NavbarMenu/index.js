import React from "react";
import styled from "styled-components";

const menu = [
  { icon: "fa-home", title: "Home", id: "home" },
  { icon: "fa-user", title: "My Profile", id: "about" },
  { icon: "fa-universal-access", title: "Resume", id: "resume" },
  { icon: "fa-address-card", title: "Blogs", id: "blogs" },
];
export default function NavbarMenu() {
  return (
    <Ul>
      {menu.map((item, index) => (
        <li key={index}>
          <a className="menu__item" href={`#${item.id}`}>
            <i className={`item__icon fa ${item.icon}`} aria-hidden />{" "}
            {item.title}
          </a>
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  padding-left: 0;
  li {
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .menu__item {
    display: inline-block;
    width: 100%;
    padding-left: 2.5em;
    list-style: none;
    text-decoration: none;
    color: #ffffffb3;
  }
  li:hover {
    color: white;
    transition: 0.3s ease-in-out;
    a {
      color: white;
    }
  }
  .item__icon {
    padding-right: 30px;
  }
`;
