import FeedCards from "../components/feedCard";
import useForm from "../hooks/useForm";
import HeaderComponent from "../components/appBarFeed";
import { List } from "@mui/material";
const ClientsPage = () => {
  const { form, onChange } = useForm({
    search: "",
  });

  return (
    <div>
      <HeaderComponent value={form.search} onChange={onChange} />
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <FeedCards text={form.search} />
      </List>
    </div>
  );
};

export default ClientsPage;
