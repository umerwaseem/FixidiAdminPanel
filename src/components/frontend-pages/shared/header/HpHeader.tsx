import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Logo from '../../../../layouts/full/shared/logo/Logo';
import { useNavigate } from 'react-router';

const HpHeader: React.FC = () => {
  const navigate = useNavigate();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.light, // old color kept
    [theme.breakpoints.up('lg')]: {
      minHeight: '40px',
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    color: theme.palette.text.secondary,
    justifyContent: 'space-between',
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'primary.main', // your old blue
    color: '#fff',
    borderRadius: '25px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 2px 8px rgba(26, 151, 245, 0.4)',
    '&:hover': {
      backgroundColor: '#0d8ce0',
      boxShadow: '0 3px 10px rgba(26, 151, 245, 0.5)',
    },
    // Mobile responsiveness
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      padding: '6px 14px',
      borderRadius: '20px',
      marginRight: theme.spacing(1),
    },
  }));

  const onProfessionalClickk = () => {
    navigate('/user-registration', { state: { userType: 'professional' } });
  };

  return (
    <AppBarStyled position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Logo />
          <StyledButton variant="contained" onClick={onProfessionalClickk}>
            Start as a Pro
          </StyledButton>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};

export default HpHeader;
