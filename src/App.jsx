import { Navigate } from "react-router-dom";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Toolbar from "./components/app/Toolbar";
import Game from "./pages/Game";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/games"} replace={true} />} />
        <Route path="/games" element={<Home />} />
        <Route path="/games/:game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
