import React from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fab
      color="primary"
      aria-label="scroll to top"
      onClick={handleScrollToTop}
      style={{ position: 'fixed', bottom: '16px', right: '16px' }}
      size='medium'
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default ScrollToTopButton;