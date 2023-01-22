import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const HeaderDetailsComponent = ({onClick}) => {
   
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex", marginRight:5 }}
            >
              Clients List
            </Typography>
            <Button variant="contained" onClick={onClick} startIcon={<ArrowBackIosIcon />}>
                Go Back
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  
  export default HeaderDetailsComponent;