import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid2 as Grid,
  Autocomplete,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AnimationFadeIn from '../landingpage/animation/Animation';
// icons
import icon1 from 'src/assets/images/FixidiIcons/generalHandyman.svg';
import icon2 from 'src/assets/images/FixidiIcons/tvMounting.svg';
import icon3 from 'src/assets/images/FixidiIcons/furnitureAssembly.svg';
import icon4 from 'src/assets/images/FixidiIcons/houseCleaning.svg';
import icon5 from 'src/assets/images/FixidiIcons/hanging.svg';
import icon6 from 'src/assets/images/FixidiIcons/furnitureMoving.svg';
import icon7 from 'src/assets/images/FixidiIcons/hauling.svg';
import icon8 from 'src/assets/images/FixidiIcons/lightfix.svg';
import icon9 from 'src/assets/images/FixidiIcons/smokeDetector.svg';
import icon10 from 'src/assets/images/FixidiIcons/gutterCleaning.svg';
import icon11 from 'src/assets/images/FixidiIcons/gardening-machinery-svgrepo-com.svg';
import icon12 from 'src/assets/images/FixidiIcons/lights.svg';

import houseServices from '../forms/form-elements/autoComplete/data';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import HpHeader from '../frontend-pages/shared/header/HpHeader';
import Footer from 'src/components/frontend-pages/shared/footer';
import ScrollToTop from '../frontend-pages/shared/scroll-to-top';
import { useNavigate } from 'react-router';
import FeaturesTitle from '../landingpage/features/FeaturesTitle';
import HowItWorksContainer from './HowItWorksContainer';
import { FAQCarousel } from './FaqSection';

const Frameworks = [
  {
    name: 'Handyman',
    id: 1,
    icon: icon1,
    subtext: 'Reliable solutions for all household fixes, big or small.',
    bgcolor: 'primary',
    emoji: '🔧',
  },
  {
    name: 'TV Mounting',
    id: 2,
    icon: icon2,
    subtext: 'Secure, stylish TV mounting with the perfect viewing angle.',
    bgcolor: 'warning',
    emoji: '📺',
  },
  {
    name: 'Assembly',
    id: 3,
    icon: icon3,
    subtext: 'Fast, precise furniture and equipment assembly, hassle-free.',
    bgcolor: 'secondary',
    emoji: '🛠️',
  },
  {
    name: 'Cleaning',
    id: 4,
    icon: icon4,
    subtext: 'Spotless, stress-free cleaning for homes and offices.',
    bgcolor: 'error',
    emoji: '✨',
  },
  {
    name: 'Hauling',
    id: 5,
    icon: icon7,
    subtext: 'Quick, eco-friendly junk and debris removal made easy.',
    bgcolor: 'success',
    emoji: '🚚',
  },
  {
    name: 'Hanging',
    id: 6,
    icon: icon5,
    subtext: 'Professional hanging for frames, mirrors, curtains, and more.',
    bgcolor: 'info',
    emoji: '🖼️',
  },
  {
    name: 'Lighting',
    id: 7,
    icon: icon8,
    subtext: 'Safe, stylish lighting installations to brighten your space.',
    bgcolor: 'primary',
    emoji: '💡',
  },
  {
    name: 'Moving',
    id: 8,
    icon: icon6,
    subtext: 'Stress-free moving with careful packing and reliable transport.',
    bgcolor: 'warning',
    emoji: '📦',
  },
  {
    name: 'Detectors',
    id: 12,
    icon: icon9,
    subtext: 'Expert smoke & CO detector installation for peace of mind.',
    bgcolor: 'secondary',
    emoji: '🔔',
  },
  {
    name: 'Gutterworks',
    id: 9,
    icon: icon10,
    subtext: 'Trusted gutter cleaning, repair, and installation services.',
    bgcolor: 'error',
    emoji: '🌧️',
  },
  {
    name: 'Landscaping',
    id: 11,
    icon: icon11,
    subtext: 'Beautiful, affordable landscaping for lawns and gardens.',
    bgcolor: 'success',
    emoji: '🌿',
  },
  {
    name: 'Decorating',
    id: 10,
    icon: icon12,
    subtext: 'Creative decorating that adds style and personality to any space.',
    bgcolor: 'info',
    emoji: '🎨',
  },
];

const FixidiLandingPage = () => {
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // true for mobile/tablet
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [, setSelectedService] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  /*   const lgUp = useMediaQuery(theme.breakpoints.up('lg')); */
  const handleButtonClick = (fwName: string, userType: 'client' | 'professional') => {
    if (fwName === 'More') {
      navigate('/all-services');
      return;
    }

    const dataToSend = {
      username: 'JohnDoe',
      userType: userType,
      serviceType: fwName,
      frameworkId: Frameworks.find((fw) => fw.name === fwName)?.id,
      houseServiceId: houseServices.find((fw) => fw.title === fwName)?.id,
    };

    navigate('/user-registration', { state: dataToSend });
  };
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // slight delay ensures rendering complete
      }
    }
  }, [location]);
  return (
    <>
      <HpHeader showProButton={true}

      />
      <Box py={{ xs: 6, md: 10 }}>
        <Container maxWidth="lg">
          {/* Enhanced Title Section */}
          <Box textAlign="center" mb={5}>
            <FeaturesTitle />
          </Box>

          {/* Enhanced Autocomplete with Helpful Chips */}
          <Grid container justifyContent="center" mb={6}>
            <Grid
              size={{
                xs: 12,
                md: 10,
                lg: 8,
              }}
            >
              <Autocomplete
                id="framework-search"
                freeSolo
                fullWidth
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    fontSize: '1.1rem',
                    padding: '16px 20px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(26,151,245,0.15)',
                    },
                    '&.Mui-focused': {
                      boxShadow: '0 8px 32px rgba(26,151,245,0.25)',
                    },
                  },
                }}
                options={houseServices.map((option) => option.title)}
                onChange={(_, newValue) => {
                  if (newValue) {
                    setSelectedService(newValue);
                    handleButtonClick(newValue, 'client');
                  }
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    placeholder="🔍 What can we help you with today?"
                    aria-label="framework-search"
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* Enhanced Framework Cards */}
        <AnimationFadeIn>
  <Grid container spacing={4} justifyContent="center">
    {Frameworks.slice(
      0,
      isSmallScreen ? (showMore ? Frameworks.length : 3) : Frameworks.length
    ).map((fw, index) => (
      <Grid
        key={index}
        size={{
          xs: 12,
          sm: 4,
          md: 3,
        }}
      >
        <Box
          role="button"
          // Desktop / Laptop: full card clickable
          onClick={() => {
            if (!isTouchDevice) handleButtonClick(fw.name, 'client');
          }}
          onMouseEnter={() => !isTouchDevice && setHoveredCard(index)}
          onMouseLeave={() => !isTouchDevice && setHoveredCard(null)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
          height="100%"
          p={3.5}
          borderRadius="24px"
          position="relative"
          sx={{
            cursor: !isTouchDevice ? 'pointer' : 'default', // pointer on desktop, default on mobile
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '2px solid',
            borderColor: hoveredCard === index ? 'primary.main' : 'grey.200',
            background:
              hoveredCard === index
                ? 'linear-gradient(135deg, #ffffff 0%, #95c0f2ff 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #ddedffff 100%)',
            boxShadow:
              hoveredCard === index
                ? '0 12px 40px rgba(26,151,245,0.2)'
                : '0 2px 8px rgba(0,0,0,0.05)',
            transform: 'translateY(0)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              borderRadius: '24px 24px 0 0',
              opacity: hoveredCard === index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            },
          }}
        >
          {/* Icon */}
          <Box sx={{ mb: 2, transform: 'scale(1.15) translateY(1)' }}>
            <img src={fw.icon} alt={fw.name} width={55} height={65} />
          </Box>

          {/* Service Name */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: 'primary.main',
              transition: 'color 0.3s ease',
              letterSpacing: 0.3,
            }}
          >
            {fw.name}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            mt={1.5}
            sx={{
              minHeight: 48,
              lineHeight: 1.6,
              fontSize: '0.9rem',
              opacity: hoveredCard === index ? 1 : 0.85,
              transition: 'opacity 0.3s ease',
            }}
          >
            {fw.subtext}
          </Typography>

          {/* Get Started button - mobile only */}
        {isTouchDevice && (
  <Box
    role="button"
    onClick={() => handleButtonClick(fw.name, 'client')}
    onTouchStart={() => handleButtonClick(fw.name, 'client')}
    sx={{
      mt: 3,
      mb: 1,
      px: 3, // horizontal padding
      py: 1.5, // vertical padding for easier tap
      fontWeight: 700,
      fontSize: '1rem', // larger text
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #1a97f5 0%, #26c6da 100%)',
      color: '#ffffff',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.5,
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(26,151,245,0.3)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(26,151,245,0.4)',
      },
      '& span': {
        fontSize: '1.3rem',
      },
    }}
  >
    Get Started
    <span>→</span>
  </Box>
)}

          {/* Desktop / Laptop: optionally show CTA text for consistency */}
          {!isTouchDevice && (
            <Box
              sx={{
                mt: 2,
                opacity: 1,
                transition: 'all 0.3s ease',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              Get Started
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </Box>
          )}
        </Box>
      </Grid>
    ))}
  </Grid>
</AnimationFadeIn>


          {isSmallScreen && !showMore && (
            <Box display="flex" justifyContent="center" mt={5}>
              <Box
                onClick={() => {
                  setShowMore(true);
                }}
                sx={{
                  cursor: 'pointer',
                  px: 4,
                  py: 2,
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'grey.300',
                  background: '#ffffff',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 16px rgba(26,151,245,0.15)',
                  },
                }}
              >
                <Typography variant="body1" fontWeight={600} color="text.secondary">
                  Show More
                </Typography>
                <Box
                  className="show-less-icon"
                  sx={{
                    fontSize: '1.3rem',
                    color: 'text.secondary',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  ↓
                </Box>
              </Box>
            </Box>
          )}

          {isSmallScreen && showMore && (
            <Box display="flex" justifyContent="center" mt={5}>
              <Box
                onClick={() => {
                  setShowMore(false);
                  setTimeout(() => {
                    const scrollElement =
                      document.scrollingElement || document.documentElement || document.body;

                    scrollElement.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }, 100);
                }}
                sx={{
                  cursor: 'pointer',
                  px: 4,
                  py: 2,
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'grey.300',
                  background: '#ffffff',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 16px rgba(26,151,245,0.15)',
                  },
                }}
              >
                <Typography variant="body1" fontWeight={600} color="text.secondary">
                  Show Less
                </Typography>
                <Box
                  className="show-less-icon"
                  sx={{
                    fontSize: '1.3rem',
                    color: 'text.secondary',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  ↑
                </Box>
              </Box>
            </Box>
          )}
        </Container>
      </Box>

      <HowItWorksContainer />
      <section id="faq">

      <FAQCarousel />
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FixidiLandingPage;
