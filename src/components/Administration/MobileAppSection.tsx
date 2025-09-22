import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoLight from './Fixidi.svg';
import mobileView from './Fixidi mobile view.svg';

function MobileAppSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 👈 detect mobile

  return (
    <Container
      sx={{
        maxWidth: '1400px !important',
        py: { xs: '20px', lg: '30px' },
      }}
    >
      <Grid xs={12} lg={7}>
        <Typography
          textAlign="center"
          variant="h4"
          lineHeight={1.4}
          mb={6}
          fontWeight={700}
          sx={{
            fontSize: {
              lg: '40px',
              xs: '35px',
            },
          }}
        >
          Join now
        </Typography>
      </Grid>

      <Box
        borderRadius="24px"
        overflow="hidden"
        sx={{
          py: { xs: '40px', lg: '70px' },
          backgroundImage: `url(${isMobile ? mobileView : LogoLight})`, // 👈 switch image
          backgroundSize: `${isMobile ? 'contain' : 'cover'}`, // 👈 switch size)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: { xs: 300, sm: 400, lg: 500 },
        }}
      >
        {/* Content goes here */}
      </Box>
    </Container>
  );
}

export default MobileAppSection;
