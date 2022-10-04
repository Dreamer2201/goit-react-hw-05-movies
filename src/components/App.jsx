import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Navbar from "./NavBar/NavBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
