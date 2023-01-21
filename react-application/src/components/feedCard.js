import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRequestedData from "../hooks/useRequestedData";
import { goToDetailsPage } from "../Router/coordinator";

const FeedCards = ({ text }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useRequestedData("/");
  const search = text;

  return (
    <>
      {isLoading ? (
        <p>Carregando..</p>
      ) : (
        data?.items
          ?.filter((movies) => {
            return movies.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((movie) => (
            <div key={movie.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={movie.fullTitle}
                    src={movie.image}
                    sx={{ width: 100, height: 100 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={movie.title} dense sx={{ margin: 5 }} />
                <Button
                  variant="contained"
                  sx={{ marginTop: 4 }}
                  onClick={() => goToDetailsPage(navigate, movie.id)}
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
