import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientsPage from "../Pages/clientsPage";
import ClientDetails from "../Pages/clientDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientsPage />} />
        <Route path={"/client/:email"} element={<ClientDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
