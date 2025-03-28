import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image"; // Updated import for Next.js Image component
import { tokens } from "../../styles/theme";

const Team = () => {
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

  const teamMembers = [
    { image: "/assets/images/avatars/jihad.jpg", name: "Mohamed Jihad El Baraka", role: "Founder" },
    { image: "/assets/images/avatars/achraf.jpg", name: "Achraf Belfquih", role: "Partner" },
    { image: "/assets/images/avatars/amine.JPG", name: "Amine Raha", role: "Web Developper" },
    { image: "/assets/images/avatars/anas.jpg", name: "Anas Mazoz", role: "Web Developper" },
    { image: "/assets/images/avatars/oussama.png", name: "Oussama Elattaoui", role: "Community Manager" },
    { image: "/assets/images/avatars/adam.jpg", name: "Adam Abourida", role: "Accountant" },
  ];

  const paperStyle = {
    padding: "16px",
    textAlign: "center",
    color: "black",
    height: "100%",
    boxShadow: "none",
  };

  return (
    <Box
      id="team"
      sx={{
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25) inset",
        backgroundColor: "white",
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
        <Stack justifyContent="center" alignItems="center">
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
              boxShadow: "6px 6px 9px rgba(0, 0, 0, 0.25)",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: { xs: "4px", sm: "7px" },
              fontSize: { xs: "26", sm: "40" },
            }}
          >
            Les collaborateurs
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent={"space-around"}
            component={motion.div}
            viewport={{ once: true }}
            variants={parentVarient}
            whileInView="visible"
          >
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                key={index}
                component={motion.div}
                variants={childVarient}
              >
                <Paper style={paperStyle}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150} // Set appropriate width
                    height={150} // Set appropriate height
                    style={{
                      borderRadius: "50%",
                      marginBottom: "8px",
                      boxShadow: "0px 0px 30px 0px rgba(255,158,12,0.45)",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ letterSpacing: 1, textTransform: "uppercase" }}
                    gutterBottom
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", letterSpacing: "2px" }}
                    color={colors.primary[400]}
                  >
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Team;
