import { Grid, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../styles/theme';
import {  motion } from 'framer-motion';
import React from 'react';


const Concours = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var concours = [
      { 
        branche: ["CCA", "GFCF", "Ingénieurs Comptable", "Financière et Fiscale", "Sciences de Gestion"],
        hours: "80",
        pack:"1500 dh", 
        programmes: ["comptabilité générale", "comptabilité des sociétés", "comptabilité analytique", "analyse et gestion financière", "fiscalité marocaine", "comptabilité approfondie", "contrôle de gestion ", "audit comptable et financière "]
      },

      { 
        branche: ["management des ressources humaines", "GRF"],
        hours: "40",
        pack:"1500 dh", 
        programmes: ["essor et enjeux de la grh", "recrutement / intégration ", "audit social", "rémunèration", "marketing rh", "formation et évaluation /gpec", "dialogue social / gestion des conflits", "technique de dissertation, rédaction, gestion du temps, orthographe, actualité", ]
      },
  ]

  const elementVariants = {
      visible: {
          transition: {
              when: "beforeChildren",
              staggerChildren:0.04,
        },
      },
    };

  const childElementVariants = {

      visible: { 
        y: [50,0],
        opacity:[0,1],
        transition: {
        duration: 0.5,
      },
  },
  };
  

  return (
        <motion.div
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Grid container rowGap={10} marginTop={5} justifyContent={"space-evenly"} alignItems={"center"} >
          {
              concours.map((concour,i)=>
                <Grid container item  xs={12} lg={6} rowGap={0} justifyContent={"space-evenly"} alignItems={"center"} key={i}>
                    <Grid item xl={12} sx={{textAlign:"center"}} component={motion.div} variants={childElementVariants}>
                        <Typography variant='h2' sx={{textTransform:"uppercase", fontSize:35, marginBottom:{lg:0}, height:{lg:"132px", xl:"125px"}}} >
                          {concour.branche.map((branch, index) => (
                            <React.Fragment key={index}>
                              {branch}
                              {index !== concour.branche.length - 1 && <span style={{ color: colors.primary[500] }}> / </span>}
                            </React.Fragment>
                          ))}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{textAlign:"center"}} component={motion.div} variants={childElementVariants}>
                            <Typography variant='h3' color={'white'} sx={{backgroundColor:colors.primary[500], margin:"10px", padding:"15px", textTransform:"uppercase", borderRadius:"5px"}}>PACK ({concour.hours} H)</Typography>
                        </Grid>
                    </Grid>

                    {concour.programmes.map((programme,i)=>
                      <Grid container key={i} alignItems="center" component={motion.div} variants={childElementVariants}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h4"
                            sx={{
                              backgroundColor: colors.primary[200],
                              margin: '10px',
                              padding: '10px',
                              textTransform: 'uppercase',
                              borderRadius: '5px',
                              height: { lg: '66px' },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent:"center",
                              textAlign:"center"
                            }}
                          >
                            {programme}
                          </Typography>
                        </Grid>
                      </Grid>
                      )
                    }

                    <Grid container alignItems={"center"}>
                        <Grid item xs={8} sx={{textAlign: "center", alignSelf: "center"}} component={motion.div} variants={childElementVariants}>
                            <Typography variant='h2' sx={{backgroundColor: colors.primary[400], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px", letterSpacing:"6px"}}>Prix</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: "center", alignSelf: "center"}} component={motion.div} variants={childElementVariants}>
                            <Typography variant='h2' sx={{backgroundColor: colors.primary[400], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px"}}>{concour.pack}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
              )
          } 
          </Grid>
        </motion.div>
  ) 
}

export default Concours