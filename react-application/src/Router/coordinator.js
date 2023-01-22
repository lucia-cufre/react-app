export const goToClientsPage = (navigate) => {
  navigate("/");
};

export const goToDetailsPage = (navigate, email) => {
  navigate(`/client/${email}`);
};
