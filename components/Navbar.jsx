import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';
import { useTheme } from '@mui/material';
import { tokens } from '../styles/theme';

const Navbar = ({ onOpenModal }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isLanguesPage = router.pathname === '/Langues';
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const listItemButtonStyle = {
    backgroundColor: colors.primary[100],
    marginY: '5px',
    textTransform: 'uppercase',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: colors.primary[200],
    },
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {isHomePage && (
          <>
            <ListItemButton component="a" href="#welcome" sx={listItemButtonStyle}>
              <ListItemText primary="Acceuil" />
            </ListItemButton>
            <ListItemButton component="a" href="#offres" sx={listItemButtonStyle}>
              <ListItemText primary="Nos Offres" />
            </ListItemButton>
            <ListItemButton component="a" href="#programme" sx={listItemButtonStyle}>
              <ListItemText primary="Nos Programmes" />
            </ListItemButton>
            <ListItemButton component="a" href="#contact" sx={listItemButtonStyle}>
              <ListItemText primary="Contact" />
            </ListItemButton>
            <ListItemButton component="a" href="#testimonials" sx={listItemButtonStyle}>
              <ListItemText primary="Témoignages" />
            </ListItemButton>
            <ListItemButton component="a" href="#team" sx={listItemButtonStyle}>
              <ListItemText primary="Notre équipe" />
            </ListItemButton>
          </>
        )}
        {isLanguesPage && (
          <ListItemButton component={Link} href="/" sx={listItemButtonStyle}>
            <ListItemText primary="Acceuil" />
          </ListItemButton>
        )}
        <ListItemButton onClick={() => onOpenModal('FormModal')} sx={{ backgroundColor: 'black', textTransform: 'uppercase' }}>
          <ListItemText primary="Nous rejoindre" sx={{ color: 'white', fontWeight: 600 }} />
        </ListItemButton>

      </List>
    </Box>
  );

  return (
    <AppBar
      sx={{
        position: 'fixed',
        background: "rgba(220, 220, 220, 0.25)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        top: 0,
        zIndex: 100
      }}
      color="transparent"
    >
      <Container sx={{ display: { xs: "flex", md: "flex" }, paddingY: "10px", justifyContent: { xs: "space-between", md: "center" }, maxWidth: { xl: "1536px" } }}>
        <Box width={"230px"} >
          <Image
            alt="logo"
            src="/assets/images/logos/logo2.png" // Use the relative path from the public folder
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', marginTop: '5px' }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: isHomePage ? 'space-evenly' : "flex-start", textAlign: "center", marginLeft: isHomePage ? '' : '70px' }}>
          {isHomePage && (
            <>
              <Button href="#welcome" sx={{ fontWeight: "700" }}>Acceuil</Button>
              <Button href="#offres" sx={{ fontWeight: "700" }}>Nos Offres</Button>
              <Button href="#programme" sx={{ fontWeight: "700" }}>Nos Programmes</Button>
              <Button href="#contact" sx={{ fontWeight: "700" }}>Contact</Button>
              <Button href="#testimonials" sx={{ fontWeight: "700" }}>Témoignages</Button>
              <Button href="#team" sx={{ fontWeight: "700" }}>Notre équipe</Button>
            </>
          )}
          {isLanguesPage && (
            <Button component={Link} href="/" sx={{ fontWeight: "700" }}>Acceuil</Button>
          )}
          <Button variant='contained' onClick={() => onOpenModal('FormModal')} sx={{ fontWeight: "700", marginLeft: isHomePage ? "" : "auto" }}>Nous rejoindre</Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, zIndex: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: colors.primary[500],
              },
            }}
          >
            {drawerList}
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
