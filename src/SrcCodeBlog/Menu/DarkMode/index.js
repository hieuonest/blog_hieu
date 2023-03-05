import React from "react";
import styled from "styled-components";

export default function DarkMode({ mode = false, setMode = () => {} }) {
  const onToggle = () => {
    setMode(!mode);
  };

  return (
    <Div>
      <i className="fa fa-sun-o" aria-hidden />
      <label className="toggle-switch">
        <input type="checkbox" checked={mode} onChange={onToggle} />
        <span className="switch" />
      </label>
      <i className="fa fa-moon-o" aria-hidden />
    </Div>
  );
}

const Div = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: 0 0.75rem;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: #b6b6b6;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #333;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(25px);
    background-color: #333;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #2bc6ff;
  }
`;
