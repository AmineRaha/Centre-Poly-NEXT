import { Box, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { tokens } from '../../styles/theme'

const Welcome = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const classe = {
    '& > p': {
      '&:before': {
        content: `"\\201C"`,
        color: colors.primary[500]
      },
      '&:after': {
        content: `"\\201D"`,
        color: colors.primary[500],
      },

    },
    fontSize: { xs: "21px", sm: "40px", md: "55px", lg: "60px", xl: "50px" },
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: "10px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
  }
  //height: { xs: "60vh", sm: "75vh", md: "89vh" }
  return (
    <Box id="welcome" sx={{ paddingX: { xs: '7px', sm: "24px" }, height: { xs: "510px", sm: "620px", md: "730px" }, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundImage: `url(/assets/images/backgrounds/welcome.jpeg)` }}>
      <Stack justifyContent="center" alignItems="center">

        <Box sx={{
          width: { xs: "340px", sm: "600px", md: "700px", lg: "900px", xl: "1100px" },
          marginBottom: "40px",
          display: { xs: "none", md: "block" },
        }}
        >
          <Image src="/assets/images/logos/logo text.png" alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} />
        </Box>

        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{ marginBottom: { xs: "10px", sm: "25px" }, display: { md: "none" } }}>
          <Box sx={{ width: { xs: "150px", sm: "200px", md: "700px", lg: "900px", xl: "1100px" }, marginBottom: { xs: "10px", sm: "20px" }, position: "relative", height: "auto" }}>
            <Image src="/assets/images/logos/logo.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} />
          </Box>
          <Box sx={{ width: { xs: "340px", sm: "550px", md: "700px", lg: "900px", xl: "1100px" }, position: "relative", height: "auto" }}>
            <Image src="/assets/images/logos/text.png" alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Stack>

        <Typography variant='h1' color="black" sx={classe}>
          <p>Votre chemin vers le succés</p>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Welcome