import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { tokens } from "../../styles/theme";
import { useEffect, useState } from "react";
//import bg from "../../assets/images/backgrounds/whitebg5.jpeg";

const Tesimonials = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallScreen(window.innerWidth < 600);
    }
  }, []);

  var items = [
    {
      name: "Ayoub Laarraibi",
      image: "/path/to/image.jpg",
      content:
        "Ce centre ne se limitent pas à l'aide aux devoirs et les examens et préparation des concours, mais apportent également des outils pour développer des méthodes de travail autonomes, utiles à long terme.",
      project: "",
    },
    {
      name: "Hiba Tahiri",
      image: "/path/to/image.jpg",
      content: "Super centre de soutien avec une équipe professionnelle et à l’écoute 👌",
      project: "",
    },
    {
      name: "Kenza Mouline",
      image: "/path/to/image.jpg",
      content:
        "Grâce à la formation au Centre Polyvalence Privé, j'ai acquis des connaissances approfondies dans mon domaine d'études. Les ressources pédagogiques et le soutien sont de haute qualité.",
      project: "",
    },

    {
      name: "Salma Hrizzi",
      image: "/path/to/image.jpg",
      content:
        "La qualité de l'enseignement au Centre Polyvalence Privé est remarquable. J'ai trouvé la formation très enrichissante et adaptée à mes besoins. Je recommande vivement ce centre.",
      project: "",
    },

    {
      name: "Abdeali Akhmiri",
      image: "/path/to/image.jpg",
      content:
        "La formation au Centre Polyvalence Privé m'a préparé de manière exhaustive pour mon avenir professionnel. Les programmes sont bien structurés, et l'équipe pédagogique est exceptionnelle.",
      project: "",
    },
  ];

  function Item(props) {
    const theme = useTheme();
    const classes = {
      root: {
        minHeight: 280,
        width: 650,
        borderRadius: "20px",
        border: "2px solid #d9d9d9",
        backgroundColor: "#ebebeb",
        boxShadow: "0px 0px 5px #c7c7c7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        marginTop: "50px",
        paddingBottom: "20px",
        paddingX: "10px",
        [theme.breakpoints.up("lg")]: {
          minHeight: 280,
          width: 650,
        },
        [theme.breakpoints.up("md")]: {
          minHeight: 280,
          width: 450,
        },
        [theme.breakpoints.up("sm")]: {
          minHeight: 250,
          width: 420,
        },
        [theme.breakpoints.up("xs")]: {
          minHeight: 250,
          width: 320,
        },
      },
      avatarContainer: {
        height: 100,
        width: 100,
        position: "absolute",
        top: -50,
        zIndex: 1,
        borderRadius: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          height: 90,
          width: 90,
          top: -45,
        },
        [theme.breakpoints.down("md")]: {
          height: 80,
          width: 80,
          top: -40,
        },
        [theme.breakpoints.down("xs")]: {
          height: 70,
          width: 70,
          top: -35,
        },
      },
      avatar: {
        width: "85%",
        height: "85%",
        backgroundColor: "#06232a",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        "& > p": {
          margin: 0,
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "#fda12e",
          [theme.breakpoints.down("md")]: {
            fontSize: "3rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "2.5rem",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "2rem",
          },
        },
      },
      body: {
        marginTop: "60px",
        flex: 1,
        fontFamily: "Helvetica, Arial, sans-serif",
        textAlign: "center",
        fontSize: "1.4rem",
        "& > p": {
          "&:before": {
            content: `"\\201C"`,
            fontSize: "2rem",
            color: colors.primary[500],
          },
          "&:after": {
            content: `"\\201D"`,
            color: colors.primary[500],
            fontSize: "2rem",
            position: "absolute",
          },
          margin: 0,
          lineHeight: "30px",
          [theme.breakpoints.down("sm")]: {
            lineHeight: "27px",
          },
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "55px",
          fontSize: "0.98rem",
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "45px",
          fontSize: "0.94rem",
        },
      },
      author: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "15px 0px 10px 0px",
        "& h3": {
          margin: 0,
          color: colors.primary[500],
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "1.3rem",
          [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.1rem",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
          },
        },
        "& p": {
          margin: 0,
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: "0.9rem",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.89rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.88rem",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.87rem",
          },
        },
      },
    };

    return (
      <Box

        sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sx={classes.root}>
          <Grid item xs={11} sx={classes.body}>
            <p> {props.item.content} </p>
          </Grid>
          <Grid item sx={classes.author}>
            <Grid item>
              <h3> {props.item.name} </h3>
            </Grid>
            <Grid item>
              <p> {props.item.project} </p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box
      id="testimonials"
      sx={{
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25) inset",
        backgroundImage: `url(/assets/images/backgrounds/whitebg5.jpeg)`,
      }}
    >
      <Box
        sx={{
          paddingY: { xs: "50px", sm: "70px", md: "100px" },
          maxWidth: { xl: "1536px" },
          marginX: "auto",
          paddingX: { xs: "16px", sm: "24px" },
        }}
      >
        <Stack direction={"column"}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "primary.main",
              backgroundColor: colors.grey[100],
              marginBottom: "50px",
              paddingX: { xs: "10px", sm: "70px" },
              paddingY: "20px",
              marginX: "10px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "0px 1px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Témoignage des étudiants
          </Typography>

          <Carousel
            next={(next, active) => ""}
            prev={(prev, active) => ""}
            animation="slide"
            duration={600}
            navButtonsAlwaysVisible={true}
            fullHeightHover={false}
            indicatorContainerProps={{
              style: {
                marginTop: "40px",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: colors.primary[500],
              },
            }}
            navButtonsProps={{
              style: {
                backgroundColor: colors.primary[500],
              },
            }}
            navButtonsAlwaysInvisible={isSmallScreen}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Stack>
      </Box>
    </Box>
  );
};

export default Tesimonials;
