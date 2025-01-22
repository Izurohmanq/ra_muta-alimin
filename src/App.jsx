import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import PPDB from "./pages/PPDB";
import Galery from "./pages/Galeri";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/ppdb" element={<PPDB />}></Route>
          <Route path="/galery" element={<Galery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
