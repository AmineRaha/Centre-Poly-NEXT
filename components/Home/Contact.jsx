import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link"; // Updated to use next/link
import { tokens } from "../../styles/theme";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkIcon from "@mui/icons-material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const parentVarient = {
    visible: {
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const childVarient = {
    visible: {
      y: [100, 0],
      opacity: [0, 1],
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const dashedText = {
    fontWeight: "600",
    textTransform: "uppercase",
    color: colors.primary[500],
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    "&:before": {
      content: '""',
      flex: "1 1",
      borderBottom: "5px solid",
      margin: "auto",
      width: { xs: "30px", lg: "80px", xl: "120px" },
      color: "white",
    },
    "&:after": {
      content: '""',
      flex: "1 1",
      borderBottom: "5px solid",
      margin: "auto",
      color: "white",
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.25) inset",
        backgroundColor: "#2a2a2a",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        sx={{
          paddingY: { xs: "50px", sm: "70px", md: "120px" },
          maxWidth: { xl: "1536px" },
          marginX: "auto",
          paddingX: { xs: "16px", sm: "24px" },
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={9}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "primary.main",
              backgroundColor: colors.grey[100],
              marginBottom: "50px",
              paddingX: { xs: "20px", sm: "70px" },
              paddingY: "20px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.40)",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Contact
          </Typography>

          <Grid container alignItems={"center"} gap={7}>
            {/* INFOS */}
            <Grid
              container
              item
              xs={12}
              sx={{
                paddingX: { md: "0px", lg: "40px" },
                rowGap: 10,
                columnGap: 5,
                textAlign: "center",
                alignItems: "stretch",
                justifyContent: "space-evenly",
              }}
              component={motion.div}
              viewport={{ once: true }}
              variants={parentVarient}
              whileInView="visible"
            >
              {/* ADRESSE */}
              <Grid
                item
                xs={12}
                md={5.5}
                paddingX={"20px"}
                sx={{
                  border: "4px solid white",
                  borderRadius: "5px",
                  opacity: 0,
                }}
                component={motion.div}
                variants={childVarient}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    gap: 2,
                    paddingY: "40px",
                    position: "relative",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 100,
                      position: "absolute",
                      top: "-60px",
                      backgroundColor: "#2a2a2a",
                    }}
                  />
                  <Typography variant="h2" sx={dashedText}>
                    <span style={{ margin: "0px 10px" }}>Adresse</span>
                  </Typography>
                  <Typography variant="h3" sx={{ letterSpacing: "3px" }}>
                    Avenue assalam CYM RABAT
                  </Typography>
                </Stack>
              </Grid>

              {/* TELEPHONE */}
              <Grid
                item
                xs={12}
                md={5.5}

                sx={{
                  border: "4px solid white",
                  borderRadius: "5px",
                  opacity: 0,
                  paddingX: { xs: "3px", sm: "20px" },
                }}
                component={motion.div}
                variants={childVarient}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: { xs: "25px" },
                    color: "white",
                    gap: 1,
                    paddingY: "40px",
                    position: "relative",
                  }}
                >
                  <CallIcon
                    sx={{
                      fontSize: 100,
                      position: "absolute",
                      top: "-60px",
                      backgroundColor: "#2a2a2a",
                    }}
                  />
                  <Typography variant="h2" sx={dashedText}>
                    <span style={{ margin: "0px 10px" }}>Téléphone</span>
                  </Typography>

                  <Stack
                    direction={"column"}
                    gap={2}
                    sx={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ lineHeight: "1rem", letterSpacing: "3px" }}
                    >
                      +212 (0)6 53 42 20 77
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ lineHeight: "1rem", letterSpacing: "3px" }}
                    >
                      +212 (0)8 08 68 97 32
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              {/* HORAIRES */}
              <Grid
                item
                xs={12}
                md={5.5}

                sx={{
                  border: "4px solid white",
                  borderRadius: "5px",
                  opacity: 0,
                  paddingX: { xs: "3px", sm: "20px" },
                }}
                component={motion.div}
                variants={childVarient}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    color: "white",
                    gap: 1,
                    paddingY: "40px",
                    position: "relative",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: 100,
                      position: "absolute",
                      top: "-60px",
                      backgroundColor: "#2a2a2a",
                    }}
                  />
                  <Typography variant="h2" sx={dashedText}>
                    <span style={{ margin: "0px 10px" }}>
                      Nos horaires de travail
                    </span>
                  </Typography>

                  <Stack
                    direction={"column"}
                    gap={2}
                    sx={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        lineHeight: "2",
                        letterSpacing: "3px",
                        borderBottom: "2px solid white",
                      }}
                    >
                      Du Mercredi au Dimanche
                    </Typography>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      width={"100%"}
                      gap={2}
                    >
                      <Typography variant="h3">De :</Typography>
                      <Stack direction={"column"} alignItems={"center"}>
                        <Typography variant="h3" sx={{ letterSpacing: "5px" }}>
                          12h00 à 21h00
                        </Typography>
                        {/* <Typography variant="h3" sx={{ letterSpacing: "5px" }}>
                          15h30 à 21h30
                        </Typography> */}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>

              {/* SOCIALS */}
              <Grid
                item
                xs={12}
                md={5.5}
                paddingX={"20px"}
                sx={{
                  border: "4px solid white",
                  borderRadius: "5px",
                  opacity: 0,
                }}
                component={motion.div}
                variants={childVarient}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: { xs: "25px" },
                    color: "white",
                    gap: 1,
                    paddingY: "40px",
                    position: "relative",
                  }}
                >
                  <LinkIcon
                    sx={{
                      fontSize: 100,
                      position: "absolute",
                      top: "-60px",
                      backgroundColor: "#2a2a2a",
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{ ...dashedText, marginY: "10px" }}
                  >
                    <span style={{ margin: "0px 10px" }}>réseaux sociaux</span>
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    flexWrap={"wrap"}
                    gap={5}
                  >
                    <Link
                      href="https://www.facebook.com/profile.php?id=100090992540508"
                      passHref
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <FacebookIcon
                          sx={{ color: "white", fontSize: "70px" }}
                        />
                      </IconButton>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/centre-polyvalence/"
                      passHref
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <LinkedInIcon
                          sx={{ color: "white", fontSize: "70px" }}
                        />
                      </IconButton>
                    </Link>
                    <Link
                      href="https://www.instagram.com/centrepolyvalence/"
                      passHref
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <InstagramIcon
                          sx={{ color: "white", fontSize: "70px" }}
                        />
                      </IconButton>
                    </Link>
                    <Link href="https://wa.me/+212653422077" passHref>
                      <IconButton sx={{ padding: 0 }}>
                        <WhatsAppIcon
                          sx={{ color: "white", fontSize: "70px" }}
                        />
                      </IconButton>
                    </Link>
                  </Stack>

                  <Typography
                    variant="h2"
                    sx={{ ...dashedText, marginY: "10px" }}
                  >
                    <span style={{ margin: "0px 10px" }}>Email</span>
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{ fontSize: { xs: "20px", sm: "24px" } }}
                  >
                    <span style={{ margin: "0px 10px" }}>
                      Polyvalence.center@gmail.com
                    </span>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* GOOGLE MAPS */}
            <Grid
              item
              xs={12}
              width={"100%"}
              sx={{ boxShadow: "0 0 9px 4px white" }}
            >
              {/*Amine: AIzaSyDX4UGBB0iOnjMo1WTj3D0ouyX4kIF8_EE */}
              {/* <LoadScript googleMapsApiKey="AIzaSyDX4UGBB0iOnjMo1WTj3D0ouyX4kIF8_EE"> */}
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: "400px",
                    sm: "500px",
                    md: "600px",
                    lg: "700px",
                  },
                  position: "relative",
                }}
              >

                <APIProvider apiKey={'AIzaSyDX4UGBB0iOnjMo1WTj3D0ouyX4kIF8_EE'}>
                  <Map defaultCenter={{
                    lat: 33.9973458679049,
                    lng: -6.87091436441807,
                  }} defaultZoom={18} mapId="DEMO_MAP_ID">
                    <AdvancedMarker position={{
                      lat: 33.9973458679049,
                      lng: -6.87091436441807,
                    }} />
                  </Map>
                </APIProvider>
              </Box>
              {/* </LoadScript> */}
            </Grid>

          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
