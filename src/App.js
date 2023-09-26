import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { applyTheme } from "./applyTheme";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="App">
      <AddTodo />
      <Todos />
      <Theme />
    </div>
  );
}

export default App;
