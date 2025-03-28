import { Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../styles/theme";
import { motion } from "framer-motion";
import Link from "next/link";

const Langues = ({ onOpenModal }) => {
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

  var langues = [
    { titre: "français", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
    { titre: "Anglais", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
    { titre: "espagnol", prixMensuel: "400 dh", prixTrimestriel: "900 dh" },
  ];
  return (
    <motion.div
      variants={elementVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Grid
        container
        item
        xs={12}
        rowGap={0}
        sx={{ paddingX: { xs: "0", md: "0", lg: "20px" } }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
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

      <Stack gap={1} component={motion.div}
        variants={childElementVariants}
        sx={{
          paddingX: { xs: "10px", lg: "20px" },
          paddingY: "15px",
          marginTop: "30px",
          border: "2px solid" + colors.primary[400],
          borderRadius: "10px",
        }}>
        <Link href="/Langues" passHref>
          <Button variant="contained" fullWidth>
            En savoir plus
          </Button>
        </Link>
      </Stack>
    </motion.div >
  );
};

export default Langues;
