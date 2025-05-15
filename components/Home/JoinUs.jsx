import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { tokens } from '../../styles/theme';

const JoinUs = ({ onOpenModal }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25) inset', backgroundColor: colors.primary[500] }}>
      <Stack sx={{ paddingY: "60px", maxWidth: { xl: "1536px" }, marginX: "auto", paddingX: { xs: '16px', sm: "24px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant='h2' sx={{ color: "white", fontWeight: "600", textAlign: "center" }}>
          Nous vous invitons à nous contacter pour plus d'informations sur nos programmes.
        </Typography>
        <Button variant='text' onClick={() => onOpenModal('FormTextBox')}
          sx={{
            textAlign: "center",
            color: "primary.main",
            backgroundColor: colors.grey[100],
            paddingX: { xs: "20px", sm: "70px" },
            paddingY: "20px",
            width: "fit-content",
            alignSelf: "center",
            borderRadius: "20px",
            boxShadow: "6px 6px 9px rgba(0, 0, 0, 0.25)",
            fontWeight: "600",
            fontSize: "20px",
            letterSpacing: "6px",
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            }
          }}
        >
          Envoyez-nous un message
        </Button>

      </Stack>
    </Box>
  )
}

export default JoinUs