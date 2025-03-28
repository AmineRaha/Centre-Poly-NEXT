import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/Programme.module.scss";
import { tokens } from "../../styles/theme";
import { useEffect, useState } from "react";

const Programme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [slidesToShow, setSlidesToShow] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      // Change the number of slides based on window width
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 900) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1536) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial adjustment
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    { link: "/assets/images/programmes/UIR.png", alt: "UIR" },
    { link: "/assets/images/programmes/umv.jpeg", alt: "Université Mohammed V" },
    { link: "/assets/images/programmes/EMSI.png", alt: "EMSI" },
    { link: "/assets/images/programmes/ISCAE.jpeg", alt: "ISCAE" },
    { link: "/assets/images/programmes/encg.png", alt: "ENCG" },
    { link: "/assets/images/programmes/ibntofail.png", alt: "Ibn Tofail" },
    { link: "/assets/images/programmes/isga.png", alt: "ISGA" },
    { link: "/assets/images/programmes/uh2c.png", alt: "UH2C" },
    { link: "/assets/images/programmes/esca.png", alt: "ESCA" },
    { link: "/assets/images/programmes/ofppt.png", alt: "OFPPT" },
  ];

  const carouselSettings = {
    accessibility: false,
    arrows: false,
    touchMove: false,
    pauseOnHover: false,
    centerMode: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <Box
      id="programme"
      sx={{
        paddingY: { xs: "70px", sm: "100px", md: "150px" },
        paddingX: { sx: "10px", md: "80px", xl: "100px" },
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25) inset",
      }}
    >
      <Stack direction={"column"} rowGap={10}>
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
            boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.25)",
            fontWeight: "600",
          }}
        >
          NOS PROGRAMMES
        </Typography>
        <Box position={"relative"}>
          <div className={styles.sliderbg} />
          <Slider {...carouselSettings}>
            {images.map((item, i) => (
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "none",
                  width: "300px",
                }}
                key={i}
              >
                <Image src={item.link} alt={item.alt} width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            ))}
          </Slider>
        </Box>
      </Stack>
    </Box>
  );
};

export default Programme;
