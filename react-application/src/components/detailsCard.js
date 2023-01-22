import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  useParams } from "react-router-dom";
import useRequestedData from "../hooks/useRequestedData";
const DetailsCard = () => {
    const { email } = useParams();
    const { data, isLoading } = useRequestedData("/");
    return(
        <>
        {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40vh'}}>
            <CircularProgress/>
            </Box>
          ) : (
            data?.results
              ?.filter((clients) => {
                return clients.email.includes(email);
              })
              .map((client) => ( 
                <div key={client.id}>
              <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                  {client.name.first} {client.name.last}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Gender: {client.gender}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Email: {client.email}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Phone: {client.phone}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Location: {client.location.street.name}, {client.location.street.number}, {client.location.city}, {client.location.country}
                  </Typography>
                </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={client.picture.medium}
                  alt="client.name.first"
                />
              </Card>
              </div>
             /*    <div key={client.id}>
                  <img src={client.picture.medium} alt={client.name.first} width="200px" />
                  <h3>{client.name.first} {client.name.last}</h3>
                  <p>Gender: {client.gender}</p>
                  <p>Email: {client.email}</p>
                  <p>Phone: {client.phone}</p>
                  <p>Location: {client.location.street.name}, {client.location.street.number}, {client.location.city}, {client.location.country}</p>
                </div> */
              ))
          )}
    </>
    )
}

export default DetailsCard