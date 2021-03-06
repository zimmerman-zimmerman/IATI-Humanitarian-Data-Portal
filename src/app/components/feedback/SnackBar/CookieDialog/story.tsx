import React from 'react';
import { storiesOf } from '@storybook/react';
import { CookieDialog } from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Feedback|Snackbar/', module).add('Cookie Dialog', () => (
  <Providers>
    <Grid container spacing={3}>
      <CookieDialog
        message="The website uses cookies for tracking statistics. Read Grand Bargains data privacy for more details."
        open
      />
    </Grid>
  </Providers>
));
