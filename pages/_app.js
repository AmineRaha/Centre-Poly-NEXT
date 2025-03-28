import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../styles/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Home/Footer";
import FormModal from "../components/Modals/FormModal";
import FormTextBox from "../components/Modals/FormTextBox";
import ScrollToTopButton from "../components/ScrollToTopButton";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, colorMode] = useMode();
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    const root = document.getElementById('__next');
    if (openModal) {
      root.setAttribute('aria-hidden', 'true');
    } else {
      root.removeAttribute('aria-hidden');
    }
  }, [openModal]);

  const handleOpenModal = (modalType) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Navbar onOpenModal={handleOpenModal} />
          <main className="content">
            {Component ? (
              <Component {...pageProps} onOpenModal={handleOpenModal} />
            ) : (
              <div>Page not found</div> // Fallback for missing Component
            )}
            <Footer />
            <ScrollToTopButton />
          </main>
        </div>
        {openModal === 'FormModal' && <FormModal isOpen={true} onClose={handleCloseModal} />}
        {openModal === 'FormTextBox' && <FormTextBox isOpen={true} onClose={handleCloseModal} />}
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
