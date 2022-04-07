import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["Cirriculum", "Teach", "Sign In"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  status: {
    danger: "#e53e3e"
  },
  palette: {
    primary: {
      main: "#e5e5e5",
      darker: "#053e85"
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff"
    }
  }
});
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" style={{ 
        // marginLeft: "5%",
        // marginRight: "5%",
        margin:"1%",
        padding:"5px 0",
        // position: "absolute",
        width: "98%",
        // height: "110px",
        // left: "58px",
        // top: "40px",
        
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '40px',
        lineHeight: '47px',
        /* identical to box height */
        
        color:"#000000",
       
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Playcub
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Playcub
            </Typography>
            <Box sx={{ flexGrow: 1, 
            display: { xs: "none", md: "flex" } ,
            
        justifyContent:"flex-end"}}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,
                    fontFamily: 'Work Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    margin:"0 20px", color: "#000000", display: "block" }}
                >
                  {page}
                </Button>
              ))}
              <Box sx={{ 
                
                background: "#FFFFFF",
                border: "1px solid #000000",
                boxSizing: "border-box",
                borderRadius: "5px",
                // height: "68px",
                width: "209px",
              }}>
              <Button
                  key={"Book-a-free-slot"}
                  sx={{ my: 2,
                    fontFamily: 'Work Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: "20px",
                    lineHeight: "23px",
                    textAlign: "center",
                    margin:"0 0px", 
                    color: "#000000", display: "block" }}
                >
                  {"Book a Free Demo Class"}
                </Button>
              </Box>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
