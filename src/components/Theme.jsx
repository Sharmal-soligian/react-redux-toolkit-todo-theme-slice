import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="themeContainer">
      <h1>{theme} Theme</h1>
      <button
        onClick={handleThemeToggle}
        style={{
          marginTop: "20px",
          background: "rgb(0, 171, 240)",
          padding: "20px 30px",
          border: "1px solid teal",
          borderRadius: "5px",
          fontSize: "18px",
        }}
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Theme;
