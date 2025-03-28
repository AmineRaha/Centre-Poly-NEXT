import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
//oimport bg from "../../assets/images/backgrounds/rail.jpeg";
import { tokens } from "../../styles/theme";

const Numbers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var items = [
    { number: 5, text: "ANS D'EXPERIENCES", percent: false },
    { number: 342, text: "BÉNÉFICIAIRES", percent: false },
    { number: 100, text: "TAUX DE REUSSITE", percent: true },
    { number: 99, text: "SATISFACTION CLIENT", percent: true },
    { number: 100, text: "TAUX D'ACHÈVEMENT DES PROGRAMMES", percent: true },
    { number: 98, text: "TAUX DE RÉTENTION", percent: true },
  ];

  return (
    <Box
      sx={{
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25) inset",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundImage: `url(/assets/images/backgrounds/rail.jpeg)`,
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
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
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
              marginX: "10px",
              width: "fit-content",
              alignSelf: "center",
              borderRadius: "20px",
              boxShadow: "6px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
            }}
          >
            NOS CHIFFRES
          </Typography>
          <Grid container rowGap={5} sx={{ spacing: { xs: 0, sm: 2, md: 8 } }}>
            {items.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Stack
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    color: "white",
                    textShadow: "2px 1px 2px rgba(0,0,0,0.4)",
                    fontSize: {
                      xs: "30px",
                      sm: "35px",
                      md: "50px",
                      xl: "75px",
                    },
                    fontWeight: "600",
                  }}
                >
                  <span>
                    <CountUp
                      end={item.number}
                      decimals={0}
                      duration={1}
                      enableScrollSpy={1}
                      scrollSpyOnce={true}
                      scrollSpyDelay={100}
                      style={{ textAlign: "center" }}
                    />
                    {item.percent === true ? "%" : ""}
                  </span>
                  <Typography
                    color="white"
                    sx={{
                      lineHeight: "1.2em",
                      letterSpacing: "1px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: {
                        xs: "1.25rem!important",
                        sm: "1.5rem!important",
                        xl: "2rem!important",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Numbers;
