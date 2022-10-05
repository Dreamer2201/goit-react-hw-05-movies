import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Navbar from "./NavBar/NavBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
