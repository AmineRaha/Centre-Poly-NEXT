import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../styles/theme';
import { motion } from 'framer-motion';

const College = () => {

  const programme = [
    { matiere: "mathématiques", prix: "200 dh" },
    { matiere: "physiques ", prix: "200 dh" },
    { matiere: "svt", prix: "200 dh" },
    { matiere: "anglais", prix: "150 dh" },
    { matiere: "français", prix: "150 dh" },
  ]

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const elementVariants = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.04,
      },
    },
  };

  const childElementVariants = {
    visible: {
      y: [50, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  const repeatedContent = Array.from({ length: 3 }, (_, index) => (
    <Grid container item xs={12} md={6} lg={4} rowGap={0} paddingX={"10px"} justifyContent={"space-evenly"} alignItems={"center"} key={index}>
      <Grid item xl={12} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
        <Typography variant='h2' sx={{ textTransform: "uppercase", fontSize: 35 }}><span style={{ color: colors.primary[500] }}>{index === 0 ? "1ere " : index === 1 ? "2éme" : "3éme"}</span> année</Typography>
      </Grid>
      <Grid container item justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={8} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
          <Typography variant='h3' color={'white'} sx={{
            backgroundColor: colors.primary[500],
            margin: "10px",
            padding: "15px",
            textTransform: "uppercase",
            borderRadius: "5px"
          }}>
            Matières
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
          <Typography variant='h3' color={'white'} sx={{
            backgroundColor: colors.primary[500],
            margin: "10px",
            padding: "15px",
            textTransform: "uppercase",
            borderRadius: "5px",
            height: "58px",
            fontSize: { xs: 16, sm: 20, md: 22, lg: 22 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            Prix mensuel
          </Typography>
        </Grid>
      </Grid>

      {programme.map((items, i) =>
        <Grid container item key={i} alignItems={"center"}>
          <Grid item xs={8} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
            <Typography variant='h4' sx={{ backgroundColor: colors.primary[200], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px" }}>{items.matiere}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
            <Typography variant='h4' sx={{ backgroundColor: colors.primary[200], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px" }}>{items.prix}</Typography>
          </Grid>
        </Grid>
      )}

    </Grid>
  ));

  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Grid container rowGap={10} marginTop={5} justifyContent={"space-evenly"} alignItems={"center"} >
        {repeatedContent}
      </Grid>
    </motion.div>
  )
}

export default College