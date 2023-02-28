import React from "react";

export default function DarkMode({ isToggled = false, onToggle = () => {} }) {
  return (
    <div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </div>
  );
}
