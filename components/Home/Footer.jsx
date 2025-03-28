import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const Footer = () => {

  return (
    <Box sx={{ width: "100%", backgroundColor: "black" }}>
      <Box sx={{ paddingTop: "30px", paddingBottom: "80px", maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" } }}>
        <Grid container sx={{ color: "white", justifyContent: "space-between", rowGap: 4 }}>
          {/* <Grid item xs={12} md={6}>
            <Stack sx={{width:"100%", marginBottom:{xs:"25px"}, gap:4}}>
              <Box sx={{width: {xs:'100%', sm:"400px"}}}>
                <img src={logo} alt="logo" style={{height:'100%', width:"100%"}} />
              </Box>
              <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1.1rem", letterSpacing:"3px", textAlign:"justify"}}>Le centre polyvalence est dédié à accompagner les étudiants dans leur parcours académique, ainsi que les fonctionnaires dans leur parcours professionnel. Grâce à une équipe de professionnelle expérimentée et motivée, nous sommes prêt à vous éclaircir le chemin et vous aider à atteindre vos objectifs. Pour toute information complémentaire, n'hésitez pas à nous contacter. Votre réussite est notre priorité.</Typography>
              <Stack direction={"row"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={2}>
                <Link href="https://www.facebook.com/profile.php?id=100090992540508" target={"_blank"} sx={{textDecoration:"none"}}>
                  <IconButton sx={{padding:0}}>
                      <FacebookIcon sx={{color:"white", fontSize:"40px"}}/>
                  </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/company/centre-polyvalence/" target={"_blank"} sx={{textDecoration:"none"}}>
                  <IconButton sx={{padding:0}}>
                      <LinkedInIcon sx={{color:"white", fontSize:"40px"}}/>
                  </IconButton>
                </Link>
                <Link href="https://www.instagram.com/centrepolyvalence/" target={"_blank"} sx={{textDecoration:"none"}}>
                  <IconButton sx={{padding:0}}>
                      <InstagramIcon sx={{color:"white", fontSize:"40px"}}/>
                  </IconButton>
                </Link>
                <Link href="https://wa.me/+212653422077" target={"_blank"} sx={{textDecoration:"none"}}>
                  <IconButton sx={{padding:0}}>
                      <WhatsAppIcon sx={{color:"white", fontSize:"40px"}}/>
                  </IconButton>
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack sx={{width:"100%", marginBottom:{xs:"25px"}, gap:4}}>

              <Typography variant='h2' sx={{fontWeight:"600", lineHeight:"1rem", textTransform:"uppercase", color:colors.primary[500], marginTop:"40px", marginBottom:{xs:"0", md:"44px"}}}>contact</Typography>

              <Stack direction={"column"} gap={2}>
                <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>Pour toute information :</Typography>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <EmailIcon sx={{padding:0, fontSize:20}}/>
                  <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>polyvalence.centre@gmail.com</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <CallIcon sx={{padding:0, fontSize:20}}/>
                  <Grid container>
                    <Grid item container xs={12}>
                      <Grid item sm={2.5} md={4} lg={3} xl={2.5}>
                        <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>Téléphone: </Typography>
                      </Grid>
                      <Grid item sm={9.5} md={8} lg={9} xl={9.5}>
                        <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>+212 (0)6 53 42 20 77</Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                      <Grid item sm={2.5} md={4} lg={3} xl={2.5} sx={{marginRight:{xs:"58px",sm:"0"}}}>
                        <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>Fixe: </Typography>
                      </Grid>
                      <Grid item sm={9.5} md={8} lg={9} xl={9.5}>
                        <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>+212 (0)8 08 68 97 32</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <LocationOnIcon sx={{padding:0, fontSize:20}}/>
                  <Typography variant='h3' sx={{fontSize:"14px", lineHeight:"1rem", letterSpacing:"3px"}}>Avenue assalam CYM RABAT</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid> */}

          <Grid item xs={12} md={6}>
            <Typography variant='h3'
              sx={{
                fontSize: "14px",
                ineHeight: "1.1rem",
                letterSpacing: "3px",
                textAlign: { xs: "center", md: "justify" },
                height: "100%",
                alignContent: "center",
              }}
            >
              ©{new Date().getFullYear()} , CENTRE POLYVALENCE, Tous droits réservés
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box sx={{ width: { xs: '100%', sm: "400px" } }}>
              <Image
                src={'/assets/images/logos/logo text navbar white.png'}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Stack direction={"row"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={2} sx={{ placeSelf: "center" }}>
              <Link href="https://www.facebook.com/profile.php?id=100090992540508" target={"_blank"} sx={{ textDecoration: "none" }}>
                <IconButton sx={{ padding: 0 }}>
                  <FacebookIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Link>
              <Link href="https://www.linkedin.com/company/centre-polyvalence/" target={"_blank"} sx={{ textDecoration: "none" }}>
                <IconButton sx={{ padding: 0 }}>
                  <LinkedInIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/centrepolyvalence/" target={"_blank"} sx={{ textDecoration: "none" }}>
                <IconButton sx={{ padding: 0 }}>
                  <InstagramIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Link>
              <Link href="https://wa.me/+212653422077" target={"_blank"} sx={{ textDecoration: "none" }}>
                <IconButton sx={{ padding: 0 }}>
                  <WhatsAppIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Link>
            </Stack>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;