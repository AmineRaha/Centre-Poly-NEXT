import { Grid, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';

const Tc = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    var tc = [
        {
            branche: "1", pack: "800 dh", programme: [
                { matiere: "mathématiques", prix: "200 dh" },
                { matiere: "physiques ", prix: "200 dh" },
                { matiere: "svt", prix: "200 dh" },
                { matiere: "anglais", prix: "150 dh" },
                { matiere: "français", prix: "150 dh" },
            ]
        },

        {
            branche: "2", pack: "1000 dh", programme: [
                { matiere: "mathématiques", prix: "200 dh" },
                { matiere: "svt ", prix: "200 dh" },
                { matiere: "histoire géographie", prix: "200 dh" },
                { matiere: "anglais", prix: "150 dh" },
                { matiere: "français", prix: "150 dh" },
            ]
        },
    ]

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
        <AnimatePresence>
            <motion.div
                variants={elementVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Grid container direction={"row"} rowGap={10} marginTop={5} justifyContent={"space-evenly"} alignItems={"center"} >

                    {
                        tc.map((items, i) =>
                            <Grid container item xs={12} lg={6} rowGap={0} paddingX={"20px"} justifyContent={"space-evenly"} alignItems={"center"} key={i}>
                                <Grid item xl={12} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
                                    <Typography variant='h2' sx={{ textTransform: "uppercase", fontSize: 35 }}>{tc[i].branche === '1' ? "sciences" : "Lettres et sciences humaines"}</Typography>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={8} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
                                        <Typography variant='h3' color={'white'} sx={{ backgroundColor: colors.primary[500], margin: "10px", padding: "15px", textTransform: "uppercase", borderRadius: "5px" }}>Matières</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
                                        <Typography variant='h3' color={'white'} sx={{
                                            backgroundColor: colors.primary[500],
                                            margin: "10px",
                                            padding: "15px",
                                            textTransform: "uppercase",
                                            borderRadius: "5px",
                                            height: "58px",
                                            fontSize: { xs: 16, sm: 20, md: 22, lg: 22 },
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            Prix mensuel
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {
                                    tc[i].programme.map((items, i) =>
                                        <Grid container key={i} alignItems={"center"}>
                                            <Grid item xs={8} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
                                                <Typography variant='h4' sx={{ backgroundColor: colors.primary[200], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px" }}>{items.matiere}</Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ textAlign: "center" }} component={motion.div} variants={childElementVariants}>
                                                <Typography variant='h4' sx={{ backgroundColor: colors.primary[200], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px" }}>{items.prix}</Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                }

                                <Grid container alignItems={"center"}>
                                    <Grid item xs={8} sx={{ textAlign: "center", alignSelf: "center" }} component={motion.div} variants={childElementVariants}>
                                        <Typography variant='h2' sx={{ backgroundColor: colors.primary[400], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px", letterSpacing: "6px" }}>Pack spécial</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ textAlign: "center", alignSelf: "center" }} component={motion.div} variants={childElementVariants}>
                                        <Typography variant='h2' sx={{ backgroundColor: colors.primary[400], margin: "10px", padding: "10px", textTransform: "uppercase", borderRadius: "5px" }}>{items.pack}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </motion.div>
        </AnimatePresence>
    )
}

export default Tc