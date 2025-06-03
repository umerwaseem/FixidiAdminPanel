// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid2 as Grid, Link, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    (<Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        <Grid
          textAlign="center"
          size={{
            xs: 12,
            sm: 5,
            lg: 4
          }}>
          {/* <img src={logoIcon} alt="icon" /> */}
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            All rights reserved by Modernize. Designed & Developed by
            <Link target="_blank" href="https://adminmart.com/">
              <Typography color="textSecondary" component="span" display="inline">
                {' '}
                AdminMart
              </Typography>{' '}
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>)
  );
};

export default Footer;
