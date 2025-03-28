import { Grid, Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { tokens } from '../../../styles/theme';
import { motion } from 'framer-motion';
import FilterButton from './FilterButton';

const Universitaire = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedFilter, setSelectedFilter] = useState("eco");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  var list = [
    {
      eco: [
        {
          programme: [
            { matiere: "introduction à l'économie", prix: "300 dh" },
            { matiere: "comptabilité générale 1", prix: "300 dh" },
            { matiere: "micro économie 1", prix: "300 dh" },
            { matiere: "Mathématiques 1", prix: "300 dh" },
            { matiere: "Mathématiques financières", prix: "300 dh" },
          ],
        },

        {
          programme: [
            { matiere: "comptabilité générale 2", prix: "300 dh" },
            { matiere: "macro économie ", prix: "300 dh" },
            { matiere: "micro économie 2", prix: "300 dh" },
            { matiere: "algèbre, mathématiques financières", prix: "300 DH" },
            { matiere: "management 2", prix: "300 dh" },
            { matiere: "langues et terminologie économique", prix: "300 dh" },
          ],
        },

        {
          programme: [
            { matiere: "économie monétaire", prix: "300 dh" },
            { matiere: "comptabilité analytique", prix: "300 dh" },
            { matiere: "pes", prix: "300 dh" },
            { matiere: "marketing de base", prix: "300 dh" },
            { matiere: "échantillonnage", prix: "300 dh" },
          ],
        },

        {
          programme: [
            { matiere: "économie monétaire et financière 2", prix: "300 dh" },
            { matiere: "finances publiques ", prix: "300 dh" },
            { matiere: "diagnostic et analyse financière", prix: "300 dh" },
            { matiere: "comptabilité des sociétés", prix: "300 dh" },
            { matiere: "informatique de gestion", prix: "300 dh" },
            { matiere: "droit commercial et des sociétés", prix: "300 dh" },
          ],
        },

        {
          programme: [
            { matiere: "comptabilite approfondie", prix: "300 dh" },
            { matiere: "Fiscalite de l'entreprise ", prix: "300 dh" },
            { matiere: "finance de marche", prix: "300 dh" },
            { matiere: "recherche operationnelle", prix: "300 dh" },
            { matiere: "politiques financieres ", prix: "300 dh" },
          ],
        },

        {
          programme: [
            { matiere: "économie industrielle", prix: "300 dh" },
            { matiere: "relations économiques internationales", prix: "300 dh" },
            { matiere: "audit et contrôle de gestion", prix: "300 dh" },
            { matiere: "gestion commerciale", prix: "300 dh" },
          ],
        },


      ],
    },
  ];

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
        {/* <FilterButton
          tag="sci"
          text="Scientifique"
          handleFilterClick={handleFilterClick}
          selectedFilter={selectedFilter}
        /> */}
      </Stack>

      {list.map((items, i) =>
        Object.entries(items).map(
          ([subject, semstres]) =>
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
                  {semstres.map((items, semestreIndex) => (
                    <Grid
                      container
                      item
                      xs={12}
                      lg={6}
                      rowGap={0}
                      sx={{ paddingX: { xs: "0", sm: "20px" }, height: { lg: "540px" } }}
                      justifyContent={"space-evenly"}
                      alignContent={"flex-start"}
                      alignItems={"flex-start"}
                      key={semestreIndex}
                      height={"540px"}
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
                          Semestre{" "}
                          <span style={{ color: colors.primary[500] }}>
                            {semestreIndex + 1}
                          </span>
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
                            Modules
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
                            }}
                          >
                            Prix
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

                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )
        )
      )}
    </>
  )
}

export default Universitaire