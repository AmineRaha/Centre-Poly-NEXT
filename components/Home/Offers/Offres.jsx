import { Box, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../../styles/theme';
import Bac from './Bac';
import Tc from './Tc';
import FilterButton from './FilterButton';
import { AnimatePresence } from 'framer-motion';
//import bg from '../../../assets/images/backgrounds/whitebg4.jpeg'
import College from './College';
import Langues from './Langues';
import Concours from './Concours';
import Universitaire from './Universitaire';

const Offres2 = ({ onOpenModal }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedFilter, setSelectedFilter] = useState('langues');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  }


  return (
    <Box id="offres" sx={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25) inset', backgroundImage: `url(/assets/images/backgrounds/whitebg4.jpeg)` }}>
      <Box sx={{ paddingY: { xs: "50px", sm: "70px", md: "120px" }, maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" } }}>
        <Stack direction={'column'} rowGap={3} justifyContent={"center"} alignItems={"center"}>

          <Typography variant='h1' sx={{
            textAlign: "center",
            color: "primary.main",
            backgroundColor: colors.grey[100],
            marginBottom: "50px",
            paddingX: { xs: "20px", sm: "70px" },
            paddingY: "20px",
            width: "fit-content",
            alignSelf: "center",
            borderRadius: "20px",
            boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
            fontWeight: "600"
          }}>
            NOS OFFRES
          </Typography>

          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} columnGap={1} flexWrap={"wrap"} rowGap={"10px"} >
            <FilterButton tag="langues" text="Langues" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
            {/* <FilterButton tag="col" text="Collége" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} /> */}
            {/* <FilterButton tag="tc" text="Tronc commun" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} /> */}
            <FilterButton tag="bac" text="BAC" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
            <FilterButton tag="universitaire" text="Universitaire" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
            <FilterButton tag="concours" text="Concours" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
          </Stack>

          <AnimatePresence mode='wait'>
            {selectedFilter === 'col' && <College />}
            {selectedFilter === 'tc' && <Tc />}
            {selectedFilter === 'bac' && <Bac />}
            {selectedFilter === 'concours' && <Concours />}
            {selectedFilter === 'universitaire' && <Universitaire />}
            {selectedFilter === 'langues' && <Langues onOpenModal={onOpenModal} />}
          </AnimatePresence>

        </Stack>
      </Box>
    </Box>
  )
}

export default Offres2