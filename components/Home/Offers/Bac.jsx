import { useTheme } from "@emotion/react";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../../styles/theme";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { motion } from "framer-motion";


const Bac = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const list = [
    {
      eco: [
        {
          tag: "eco",
          annee: "1",
          pack: "800 dh",
          programme: [
            { matiere: "économie générale", prix: "200 dh" },
            { matiere: "comptabilité ", prix: "200 dh" },
            { matiere: "organisation des entreprises", prix: "150 dh" },
            { matiere: "mathématiques", prix: "200 dh" },
            { matiere: "français", prix: "200 dh" },
          ],
        },

        {
          annee: "2",
          pack: "1000 dh",
          programme: [
            { matiere: "économie générale", prix: "250 dh" },
            { matiere: "comptabilité ", prix: "250 dh" },
            { matiere: "organisation des entreprises", prix: "200 dh" },
            { matiere: "mathématiques", prix: "250 dh" },
            { matiere: "anglais", prix: "200 dh" },
          ],
        },
      ],
    },

    {
      sci: [
        {
          tag: "sci",
          annee: "1",
          pack: "800 dh",
          programme: [
            { matiere: "mathématiques", prix: "200 dh" },
            { matiere: "Physiques ", prix: "200 dh" },
            { matiere: "SVT", prix: "150 dh" },
            { matiere: "histoire Géographie", prix: "150 dh" },
            { matiere: "français", prix: "200 dh" },
          ],
        },

        {
          annee: "2",
          pack: "1000 dh",
          programme: [
            { matiere: "mathématiques", prix: "250 dh" },
            { matiere: "Physiques ", prix: "250 dh" },
            { matiere: "SVT", prix: "200 dh" },
            { matiere: "philosophie", prix: "200 dh" },
            { matiere: "anglais", prix: "200 dh" },
          ],
        },
      ],
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("eco");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };


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

  return (
    <>
      <Stack
        direction={"row"}
        width={"fit-content"}
        alignSelf={"center"}
        columnGap={1}
        component={motion.div}
        variants={elementVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <FilterButton
          tag="eco"
          text="Economique"
          handleFilterClick={handleFilterClick}
          selectedFilter={selectedFilter}
        />
        <FilterButton
          tag="sci"
          text="Scientifique"
          handleFilterClick={handleFilterClick}
          selectedFilter={selectedFilter}
        />
      </Stack>

      {list.map((items, i) =>
        Object.entries(items).map(
          ([subject, years]) =>
            selectedFilter === subject && (
              <motion.div
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={i}
              >
                <Grid
                  container
                  direction={"row"}
                  rowGap={10}
                  marginTop={5}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  key={i}
                >
                  {years.map((items, yearIndex) => (
                    <Grid
                      container
                      item
                      xs={12}
                      lg={6}
                      rowGap={0}
                      sx={{ paddingX: { xs: "0", sm: "20px" } }}
                      justifyContent={"space-evenly"}
                      alignItems={"center"}
                      key={yearIndex}
                    >
                      <Grid
                        item
                        xl={12}
                        sx={{ textAlign: "center" }}
                        component={motion.div}
                        variants={childElementVariants}
                      >
                        <Typography
                          variant="h2"
                          sx={{ textTransform: "uppercase", fontSize: 35 }}
                        >
                          <span style={{ color: colors.primary[500] }}>
                            {items.annee === "1" ? "1ere " : "2éme "}
                          </span>{" "}
                          année baccalauréat
                        </Typography>
                      </Grid>
                      <Grid container key={i}>
                        <Grid
                          item
                          xs={8}
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
                            Matières
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
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
                              fontSize: { xs: 16, sm: 20, md: 22, lg: 22 },
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            Prix mensuel
                          </Typography>
                        </Grid>
                      </Grid>
                      {items.programme.map((course, courseIndex) => (
                        <Grid container key={courseIndex}>
                          <Grid
                            item
                            xs={8}
                            sx={{ textAlign: "center", alignSelf: "center" }}
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
                              {course.matiere}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            sx={{ textAlign: "center", alignSelf: "center" }}
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
                              {course.prix}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}

                      <Grid container>
                        <Grid
                          item
                          xs={8}
                          sx={{ textAlign: "center", alignSelf: "center" }}
                          component={motion.div}
                          variants={childElementVariants}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              backgroundColor: colors.primary[400],
                              margin: "10px",
                              padding: "10px",
                              textTransform: "uppercase",
                              borderRadius: "5px",
                              letterSpacing: "6px",
                            }}
                          >
                            Pack spécial
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          sx={{ textAlign: "center", alignSelf: "center" }}
                          component={motion.div}
                          variants={childElementVariants}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              backgroundColor: colors.primary[400],
                              margin: "10px",
                              padding: "10px",
                              textTransform: "uppercase",
                              borderRadius: "5px",
                            }}
                          >
                            {items.pack}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )
        )
      )}
    </>
  );
};

export default Bac;
