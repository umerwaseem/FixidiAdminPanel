import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
  IconButton,
  Grid2 as Grid,
} from '@mui/material';
import { NavLink } from 'react-router';


import IconInstagram from 'src/assets/images/frontend-pages/icons/icon-instagram.svg';

const footerLinks = [
  {
    id: 1,
    children: [
      {
        title: true,
        titleText: 'Company Info',
      },
      {
        title: false,
        titleText:
          'We provide reliable household services including cleaning, plumbing, electrical, and more — trusted by 10,000+ households.',
        link: '#',
      },
    ],
  },
  {
    id: 2,
    children: [
      { title: true, titleText: 'Quick Links' },
      { title: false, titleText: 'Home', link: '#' },
      { title: false, titleText: 'Services', link: '#' },
      { title: false, titleText: 'FAQs',link: '/#faq' },
    ],
  },
  {
    id: 3,
    children: [
      { title: true, titleText: 'Policy Links' },
      { title: false, titleText: 'Privacy Policy', link: '/privacy-policy' },
      { title: false, titleText: 'Terms & Conditions', link: '/terms-and-conditions' },
      { title: false, titleText: 'Cancellation & Refund Policy', link: '/cancellation-and-refund-policy'  },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)',
        color: 'text.secondary',
        mt: 8,
        position: 'relative',
        overflow: 'hidden',
       /*  '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1a97f5 0%, #26c6da 50%, #1a97f5 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite',
        }, */
        '@keyframes shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* Main Footer Content */}
        <Grid container spacing={5} justifyContent="space-between" mb={6}>
          {footerLinks.map((section) => (
            <Grid
              key={section.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {section.children.map((child, i) =>
                child.title ? (
                  <Typography
                    key={i}
                    fontSize="18px"
                    fontWeight="700"
                    mb={3}
                    color="text.primary"
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        width: '40px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #1a97f5 0%, #26c6da 100%)',
                        borderRadius: '2px',
                      },
                    }}
                  >
                    {child.titleText}
                  </Typography>
                ) : (
                 <Typography
  key={i}
  component="a"
  href={child.link}
  sx={{
    display: 'block',
    fontSize: '15px',
    lineHeight: 2,
    color: 'text.secondary',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    paddingLeft: { xs: 0, md: '12px' },
    '&::before': {
      content: '"→"',
      position: 'absolute',
      left: 0,
      opacity: 0,
      transition: 'opacity 0.3s ease',
      color: 'primary.main',
      display: { xs: 'none', md: 'block' },
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: 'primary.main',
        paddingLeft: { md: '20px' },
        '&::before': {
          opacity: 1,
        },
      },
    },
  }}
>
                    {child.titleText}
                  </Typography>
                ),
              )}
            </Grid>
          ))}

          {/* Social Icons - Enhanced */}
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography
              fontSize="18px"
              fontWeight="700"
              mb={3}
              color="text.primary"
              sx={{
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #1a97f5 0%, #26c6da 100%)',
                  borderRadius: '2px',
                },
              }}
            >
              Follow Us 
            </Typography>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              {[
                { icon: IconInstagram, label: 'Instagram', color: '#E4405F' },
              ].map((social, idx) => (
                <Tooltip title={social.label} key={idx}>
                  <IconButton
  component={NavLink}
  to="#"
  sx={{
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
    border: '2px solid',
    borderColor: 'grey.200',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '& img': { transition: 'all 0.3s ease' },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        background: 'linear-gradient(135deg, #1a97f5 0%, #26c6da 100%)',
        borderColor: 'primary.main',
        transform: 'translateY(-4px) rotate(5deg)',
        boxShadow: '0 8px 20px rgba(26,151,245,0.3)',
        '& img': {
          filter: 'brightness(0) invert(1)',
          transform: 'scale(1.1)',
        },
      },
    },
  }}
>
                    <img src={social.icon} alt={social.label} width={22} height={22} />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
            
            {/* Contact Info */}
          
          </Grid>
        </Grid>

        <Divider
          sx={{
            mb: 4,
            borderColor: 'grey.200',
            opacity: 0.6,
          }}
        />

        {/* Bottom Bar - Enhanced */}
       
      </Container>
    </Box>
  );
};

export default Footer;