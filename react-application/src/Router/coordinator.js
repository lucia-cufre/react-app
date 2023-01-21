export const goToMoviesPage = (navigate) => {
  navigate("/");
};

export const goToDetailsPage = (navigate, id) => {
  navigate(`/movie/${id}`);
};
