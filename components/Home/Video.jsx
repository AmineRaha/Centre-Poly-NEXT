import dynamic from 'next/dynamic';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import "../../styles/Video.module.scss";
import { tokens } from '../../styles/theme';

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Video = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25) inset', backgroundImage: `url(/assets/images/backgrounds/whitebg1.jpg)` }}>
      <Box sx={{ paddingY: { xs: "50px", sm: "70px", md: "120px" }, maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" } }}>

        <Grid container direction="row" justifyContent="space-around" spacing={2} alignItems={"flex-start"} sx={{ rowGap: { xs: 1, sm: 2, md: 5 } }}>
          <Grid item xs={12} sx={{ textAlign: "-webkit-center" }}>
            <Typography variant='h1' sx={{ textAlign: "center", color: "primary.main", backgroundColor: colors.grey[100], marginBottom: "50px", paddingX: { xs: "20px", sm: "70px" }, paddingY: "20px", width: "fit-content", alignSelf: "center", borderRadius: "20px", boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)", fontWeight: "600", textTransform: "uppercase" }}>bienvenue au centre</Typography>
          </Grid>
          <Grid item md={12} lg={6} sx={{ padding: '2%' }}>
            <ReactPlayer
              className='react-player'
              url={"assets/videos/video.mp4"}
              controls={true}
              width="100%"
              height="100%"
              volume={0.3}
            />
          </Grid>

          <Grid item md={12} lg={6}>
            <Stack direction={"column"} sx={{ alignItems: { xs: 'center', md: "center", lg: "flex-start" }, justifyContent: 'center' }}>
              <Typography variant='h4' sx={{ lineHeight: "40px", textAlign: "justify", marginBottom: "25px" }}>Le Centre Polyvalence est un établissement dédié à l'épanouissement tant académique, professionnel que personnel des étudiants. Bénéficiant d'un corps professoral jeune et hautement expérimenté, notre centre, au-delà d’être un simple institut de formation, excelle pour offrir un environnement dynamique propice à la réalisation de vos ambitions. Notre approche pédagogique et méthodologique distinctive constitue le pilier de votre parcours vers le succès. Au Centre Polyvalence, nous sommes déterminés à vous aider à non seulement atteindre vos objectifs, mais aussi à les surpasser, afin de concrétiser vos aspirations les plus profondes.</Typography>
              {/* <Button variant='outlined' sx={{fontSize: "20px"}}>A propos</Button> */}
            </Stack>
          </Grid>

        </Grid>

      </Box>
    </Box>
  );
};

export default Video;