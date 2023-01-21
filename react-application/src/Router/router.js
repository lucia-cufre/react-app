import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "../Pages/moviesPage";
import MovieDetails from "../Pages/movieDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path={"/movie/:id"} element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
