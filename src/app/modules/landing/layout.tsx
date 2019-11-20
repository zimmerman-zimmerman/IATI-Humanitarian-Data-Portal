/* eslint-disable react/jsx-max-depth */
// core
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
// utils
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
// comps
import { StatContainer } from 'app/modules/landing/common/StatContainer/StatContainer';
import { LandingModel } from 'app/modules/landing/model';
import { DecorationLanding } from 'app/modules/common/ModuleBackground/assets/DecorationLanding';

const LandingPaper = styled.div`
  background-color: white;
  max-width: 839px;
  padding: 40px;
  position: relative;
`;

const LandingIntrotext = styled(Typography)`
  &&& {
    line-height: 1.2;
    mark {
      color: white;
      background: #5accbf;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

const VersionBox = styled(Box)`
  && {
    padding-bottom: 10px;
    span {
      color: #5accbf;
    }
  }
`;

export const LandingLayout = (props: LandingModel) => {
  return (
    <Container>
      {/*<DebugBox>*/}
      <LandingPaper>
        <Grid container direction="column">
          <Grid item md={12}>
            <Box width="97%">
              <Typography variant="h5" color="primary">
                <b>Welcome to the IATI Humanitarian Data Portal</b>
              </Typography>
              <Box height="10px" />
              <LandingIntrotext variant="h1">
                <Highlighter
                  autoEscape
                  searchWords={['Humanitarian']}
                  textToHighlight="A Spotlight on International Humanitarian Assistance IATI Data"
                />
              </LandingIntrotext>
            </Box>
          </Grid>
          <Box height="40px" />
          <Grid item md={7}>
            <Typography variant="h5">
              Why the{' '}
              <Link to="/about">Grand Bargain Transparency Commitment</Link> is
              aiming to improve the availability of timely, high quality,
              harmonised and transparent open data on global humanitarian
              action.
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Box position="absolute" zIndex="-1" right="-332px" top="0px">
            <DecorationLanding data-testid="landing-decoration" />
          </Box>
        </Hidden>
      </LandingPaper>
      {/*</DebugBox>*/}
      <Box height="40px" />
      <Box paddingLeft="40px">
        <StatContainer items={props.stats} />
      </Box>

      <VersionBox paddingLeft="40px">
        <Typography variant="body2">
          The Initial Release: <span>Alpha Release</span>
        </Typography>
      </VersionBox>
    </Container>
  );
};
