import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import videoStyles from "../../styles/Video.module.scss";
import { tokens } from '../../styles/theme';
//import FilterButton from '../Home/Offers/FilterButton';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export async function getStaticProps() {
  const langues = [
    { titre: "français", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
    { titre: "Anglais", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
    { titre: "espagnol", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
  ];

  return {
    props: { langues },
  };
}

const LanguesContent = ({ onOpenModal, langues }) => {

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const childElementVariants = {
    visible: {
      y: [50, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box sx={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25) inset', backgroundImage: `url(assets/images/backgrounds/whitebg1.jpg)` }}>
      <Box sx={{ paddingY: { xs: "50px", sm: "70px", md: "80px" }, maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" } }}>

        <Stack direction={'column'} rowGap={3} justifyContent={"center"} alignItems={"center"}>

          <Typography variant='h1' sx={{
            textAlign: "center",
            color: "primary.main",
            backgroundColor: colors.grey[100],
            marginBottom: "30px",
            paddingX: { xs: "20px", sm: "70px" },
            paddingY: "20px",
            width: "fit-content",
            alignSelf: "center",
            borderRadius: "20px",
            boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
            fontWeight: "600"
          }}>
            LANGUES
          </Typography>

          <Stack gap={1}
            sx={{
              paddingX: { xs: "10px", lg: "20px" },
              paddingY: "35px", marginTop: "30px",
              position: { xs: "", md: "relative" },
              border: "2px solid" + colors.primary[400],
              borderRadius: "10px",
              marginBottom: "40px"
            }}>
            <Typography variant="h2" color={colors.primary[500]}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                position: { xs: "", md: "absolute" },
                top: "-20px",
                paddingX: { xs: "0", sm: "10px", md: "20px" },
                marginX: { xs: "0", md: "20px" },
                marginBottom: { xs: "10px", md: "20px" },
                backgroundColor: { xs: "", md: "rgba(255, 255, 255, 1)" },
              }}
            >
              Maîtrisez la langue et ouvrez de nouvelles opportunités !
            </Typography>
            <Typography variant="h4">Vous souhaitez améliorer votre communication en français, anglais ou espagnol, que ce soit à l'ecrit ou à l'oral? Rejoignez notre centre de formation spécialsé et progressez rapidement grâce à des cours adaptés à vos besoin ! </Typography>
            <Typography variant="h4">Avec le centre polyvalence, vous pouvez bénéficier de :</Typography>
            <Typography variant="h4">
              • Préparation sur mesures
            </Typography>
            <Typography variant="h4">
              • Des enseignant qualifiés et expérimentés dans le domaine
            </Typography>
            <Typography variant="h4">
              • Ambiance convivale
            </Typography>
            <Typography variant="h4">Investissez en vous-même, maîtrisez la langue et faires la différence !</Typography>

          </Stack>
          {/* 
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} columnGap={1} flexWrap={"wrap"} rowGap={"10px"} >
            <FilterButton tag="fr" text="Français" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
            <FilterButton tag="en" text="Anglais" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
            <FilterButton tag="es" text="Espagnol" handleFilterClick={handleFilterClick} selectedFilter={selectedFilter} />
          </Stack> */}




          {/* FRENCH */}
          <Stack
            style={{ width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"50px"}
          >

            <Typography variant='h2' sx={{
              textAlign: "center",
              color: colors.primary[500],
              backgroundColor: colors.primary[100],
              marginBottom: "30px",
              paddingX: { xs: "20px", sm: "70px" },
              paddingY: "5px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              textTransform: "uppercase"
            }}>
              Communication Française
            </Typography>

            <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: 1 }}>

              <Grid item md={12} lg={12} sx={{ padding: '2%', height: '400px' }}>
                <ReactPlayer
                  className={videoStyles.reactPlayer}
                  url={'/assets/videos/fr vid.mp4'}
                  controls={true}
                  width="100%"
                  height="100%"
                  volume={0.3}
                />
              </Grid>
              <Grid item md={12} lg={12} >
                <Stack direction={"column"}
                  sx={{
                    alignItems: { xs: 'center', md: "center", lg: "flex-start" },
                    justifyContent: 'center',
                    border: "1px solid" + colors.primary[200],
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px", }}>
                    Le programme de communication en Français est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (TCF,DELF,DALF,...). <br />
                    Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                    Alors n'attendez pas et venez profiter de votre première séance gratuite !
                  </Typography>
                  <Button onClick={onOpenModal} variant='contained' sx={{ fontSize: "15px", textTransform: "uppercase", alignSelf: "center", paddingX: "40px" }}>Je m'inscris</Button>
                </Stack>
              </Grid>

            </Grid>
          </Stack >

          {/* ENGLISH */}
          <Stack
            style={{ width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"50px"}
          >

            <Typography variant='h2' sx={{
              textAlign: "center",
              color: colors.primary[500],
              backgroundColor: colors.primary[100],
              marginBottom: "30px",
              paddingX: { xs: "20px", sm: "70px" },
              paddingY: "5px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              textTransform: "uppercase"
            }}>
              Communication Anglaise
            </Typography>

            <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: 1 }}>

              <Grid item md={12} lg={12} sx={{ padding: '2%', height: '400px' }}>
                <ReactPlayer
                  className={videoStyles.reactPlayer}
                  url={'/assets/videos/en vid.mp4'}
                  controls={true}
                  width="100%"
                  height="100%"
                  volume={0.3}
                />
              </Grid>
              <Grid item md={12} lg={12} >
                <Stack direction={"column"}
                  sx={{
                    alignItems: { xs: 'center', md: "center", lg: "flex-start" },
                    justifyContent: 'center',
                    border: "1px solid" + colors.primary[200],
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px", }}>
                    Le programme de communication en Anglais  est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (TOEFL,IELTS,CAMBRIDGE...). <br />
                    Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                    Alors n'attendez pas et venez profiter de votre première séance gratuite !
                  </Typography>
                  <Button onClick={onOpenModal} variant='contained' sx={{ fontSize: "15px", textTransform: "uppercase", alignSelf: "center", paddingX: "40px" }}>Je m'inscris</Button>
                </Stack>
              </Grid>

            </Grid>
          </Stack >

          {/* ESP */}
          <Stack
            style={{ width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"50px"}
          >

            <Typography variant='h2' sx={{
              textAlign: "center",
              color: colors.primary[500],
              backgroundColor: colors.primary[100],
              marginBottom: "30px",
              paddingX: { xs: "20px", sm: "70px" },
              paddingY: "5px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              textTransform: "uppercase"
            }}>
              Communication Espagnol
            </Typography>

            <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: 1 }}>

              <Grid item md={12} lg={12} sx={{ padding: '2%', height: '400px' }}>
                <ReactPlayer
                  className={videoStyles.reactPlayer}
                  url={""}
                  controls={true}
                  width="100%"
                  height="100%"
                  volume={0.3}
                />
              </Grid>
              <Grid item md={12} lg={12} >
                <Stack direction={"column"}
                  sx={{
                    alignItems: { xs: 'center', md: "center", lg: "flex-start" },
                    justifyContent: 'center',
                    border: "1px solid" + colors.primary[200],
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px", }}>
                    Le programme de communication en Espagnol  est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (DELE,SIELE,CELU,...). <br />
                    Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                    Alors n'attendez pas et venez profiter de votre première séance gratuite !
                  </Typography>
                  <Button onClick={onOpenModal} variant='contained' sx={{ fontSize: "15px", textTransform: "uppercase", alignSelf: "center", paddingX: "40px" }}>Je m'inscris</Button>
                </Stack>
              </Grid>

            </Grid>
          </Stack >

          {/* PRICES GRID */}

          <Typography variant='h2' sx={{
            textAlign: "center",
            color: colors.primary[500],
            backgroundColor: colors.primary[100],
            marginBottom: "30px",
            paddingX: { xs: "20px", sm: "70px" },
            paddingY: "5px",
            width: "fit-content",
            alignSelf: "center",
            borderRadius: "20px",
            boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
            fontWeight: "600",
            textTransform: "uppercase"
          }}>
            Grille des prix
          </Typography>

          <Grid
            container
            item
            xs={12}
            rowGap={0}
            sx={{ paddingX: 0 }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            marginBottom={"50px"}
          >
            <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
              <Grid
                item
                xs={6}
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={childElementVariants}
              >
                <Typography
                  variant="h3"
                  color={"white"}
                  sx={{
                    backgroundColor: colors.primary[500],
                    margin: "10px",
                    padding: "15px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                  }}
                >
                  Langues
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={childElementVariants}
              >
                <Typography
                  variant="h3"
                  color={"white"}
                  sx={{
                    backgroundColor: colors.primary[500],
                    margin: "10px",
                    padding: "15px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                    height: "58px",
                    fontSize: { xs: 11, sm: 15, md: 18, lg: 24 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Prix mensuel
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={childElementVariants}
              >
                <Typography
                  variant="h3"
                  color={"white"}
                  sx={{
                    backgroundColor: colors.primary[500],
                    margin: "10px",
                    padding: "15px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                    height: "58px",
                    fontSize: { xs: 11, sm: 15, md: 18, lg: 24 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Prix trimestriel
                </Typography>
              </Grid>
            </Grid>

            {langues.map((items, i) => (
              <Grid container key={i} alignItems={"center"}>
                <Grid
                  item
                  xs={6}
                  sx={{ textAlign: "center" }}
                  component={motion.div}
                  variants={childElementVariants}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      backgroundColor: colors.primary[200],
                      margin: "10px",
                      padding: "10px",
                      textTransform: "uppercase",
                      borderRadius: "5px",
                    }}
                  >
                    {items.titre}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{ textAlign: "center" }}
                  component={motion.div}
                  variants={childElementVariants}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      backgroundColor: colors.primary[200],
                      margin: "10px",
                      paddingY: "10px",
                      paddingX: { xs: "1px", sm: "5px", md: "10px" },
                      textTransform: "uppercase",
                      borderRadius: "5px",
                    }}
                  >
                    {items.prixMensuel}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{ textAlign: "center" }}
                  component={motion.div}
                  variants={childElementVariants}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      backgroundColor: colors.primary[200],
                      margin: "10px",
                      paddingY: "10px",
                      paddingX: { xs: "1px", sm: "5px", md: "10px" },
                      textTransform: "uppercase",
                      borderRadius: "5px",
                    }}
                  >
                    {items.prixTrimestriel}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/* <AnimatePresence mode='wait'>
            {selectedFilter === 'fr' &&
              <motion.div
                key="fr"
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ width: "100%" }}
              >
                <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: { xs: 1, sm: 2, md: 5 } }}>
                  <Grid item md={12} lg={6} sx={{ padding: '2%', height: '400px' }} component={motion.div} variants={childElementVariants}>
                    <ReactPlayer
                      className='react-player'
                      url={frvid}
                      controls={true}
                      width="100%"
                      height="100%"
                      volume={0.3}
                    />
                  </Grid>
                  <Grid item md={12} lg={6} component={motion.div} variants={childElementVariants}>
                    <Stack direction={"column"} sx={{ alignItems: { xs: 'center', md: "center", lg: "flex-start" }, justifyContent: 'center' }}>
                      <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px" }}>
                        Le programme de communication en Français est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (TCF,DELF,DALF,...). <br />
                        Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                      </Typography>
                      <Button onClick={onOpenModal} variant='contained' sx={{ fontSize: "15px" }}>Alors n'attendez pas et venez profiter de votre première séance gratuite !</Button>
                    </Stack>
                  </Grid>

                </Grid>
              </motion.div >
            }

            {selectedFilter === 'en' &&
              <motion.div
                key="en"
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ width: "100%" }}
              >
                <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: { xs: 1, sm: 2, md: 5 } }}>
                  <Grid item md={12} lg={6} sx={{ padding: '2%', height: '400px' }} component={motion.div} variants={childElementVariants}>
                    <ReactPlayer
                      className='react-player'
                      url={envid}
                      controls={true}
                      width="100%"
                      height="100%"
                      volume={0.3}
                    />
                  </Grid>
                  <Grid item md={12} lg={6} component={motion.div} variants={childElementVariants}>
                    <Stack direction={"column"} sx={{ alignItems: { xs: 'center', md: "center", lg: "flex-start" }, justifyContent: 'center' }}>
                      <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px" }}>
                        Le programme de communication en Anglais  est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (TOEFL,IELTS,CAMBRIDGE...). <br />
                        Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                      </Typography>
                      <Button onClick={onOpenModal} variant='outlined' sx={{ fontSize: "15px" }}>Alors n'attendez pas et venez profiter de votre première séance gratuite !</Button>
                    </Stack>
                  </Grid>

                </Grid>
              </motion.div >
            }
            {selectedFilter === 'es' &&
              <motion.div
                key="es"
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ width: "100%" }}
              >
                <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: { xs: 1, sm: 2, md: 5 } }}>
                  <Grid item md={12} lg={6} sx={{ padding: '2%', height: '400px' }} component={motion.div} variants={childElementVariants}>
                    <ReactPlayer
                      className='react-player'
                      url={video}
                      controls={true}
                      width="100%"
                      height="100%"
                      volume={0.3}
                    />
                  </Grid>
                  <Grid item md={12} lg={6} component={motion.div} variants={childElementVariants}>
                    <Stack direction={"column"} sx={{ alignItems: { xs: 'center', md: "center", lg: "flex-start" }, justifyContent: 'center' }}>
                      <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px" }}>
                        Le programme de communication en Espagnol  est un programme complet qui vous permettra d'améliorer votre aisance a l'écrit comme a l'orale tout en vous préparant aux divers tests de langues (DELE,SIELE,CELU,...). <br />
                        Le programme comprend 12 séances avec un total de 36 heures qui peut se faire en 3 mois.<br />
                      </Typography>
                      <Button onClick={onOpenModal} variant='outlined' sx={{ fontSize: "15px" }}>Alors n'attendez pas et venez profiter de votre première séance gratuite !</Button>
                    </Stack>
                  </Grid>

                </Grid>
              </motion.div >
            }
          </AnimatePresence> */}

        </Stack>
      </Box>
      <Box sx={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25) inset', backgroundColor: colors.primary[500] }}>
        <Box sx={{ paddingY: "40px", maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button variant='text' onClick={onOpenModal}
            sx={{
              textAlign: "center",
              color: "primary.main",
              backgroundColor: colors.grey[100],
              paddingX: { xs: "20px", sm: "70px" },
              paddingY: "20px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "6px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              fontSize: "20px",
              letterSpacing: "6px",
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              }
            }}
          >
            Je m'inscris
          </Button>

        </Box>
      </Box>
    </Box>
  );
};

export default LanguesContent;