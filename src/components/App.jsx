import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Navbar from "./NavBar/NavBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";
import Reviews from "./pages/SingleMoviePage/Reviews/Reviews";
import Cast from "./pages/SingleMoviePage/Cast/Cast";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
