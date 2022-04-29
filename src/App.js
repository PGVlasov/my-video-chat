import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { AboutPage } from "./pages/AboutPage";
import { MainPage } from "./pages/MainPage";
import { NotFound404 } from "./pages/NotFound404";
import { RoomPage } from "./pages/RoomPage";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<RoomPage />} path="/room/:id" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<NotFound404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
