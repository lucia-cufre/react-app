import { useNavigate } from "react-router-dom";
import HeaderDetailsComponent from "../components/appBarDetails";
import DetailsCard from "../components/detailsCard";
import { goToClientsPage } from "../router/coordinator";
const ClientDetails = () => {

  const navigate = useNavigate();
  return (
    <div>
      <HeaderDetailsComponent onClick={() => goToClientsPage(navigate)} />
      <DetailsCard/>
    </div>
  );
};

export default ClientDetails;
