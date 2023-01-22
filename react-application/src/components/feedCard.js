import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRequestedData from "../hooks/useRequestedData";
import { goToDetailsPage } from "../router/coordinator";

const FeedCards = ({ text }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useRequestedData("/");
  const search = text;

  return (
    <>
      {isLoading ? (
       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40vh'}}>
        <CircularProgress/>
        </Box>
      ) : (
        data?.results
          ?.filter((clients) => {
            return clients.name.first.toLowerCase().includes(search.toLowerCase()) || clients.name.last.toLowerCase().includes(search.toLowerCase());
          })
          .map((client) => (
            <div key={client.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={client.name.first}
                    src={client.picture.medium}
                    sx={{ width: 100, height: 100 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={client.name.first + " " + client.name.last} dense sx={{ margin: 5 }} />
                <Button
                  variant="contained"
                  sx={{ marginTop: 4 }}
                  onClick={() => goToDetailsPage(navigate, client.email)}
                >
                  Details
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))
      )}
    </>
  );
};
export default FeedCards;
