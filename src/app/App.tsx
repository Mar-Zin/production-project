import { AppRouter } from "app/providers/router";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <AppRouter />
    </div>
  );
};

export default App;
