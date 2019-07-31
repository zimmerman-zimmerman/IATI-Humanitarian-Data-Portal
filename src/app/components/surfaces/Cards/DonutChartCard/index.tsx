import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Card as MuiCard} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { DonutChart } from 'app/components/charts/DonutChart/index';
import { DonutChartCardModel } from './model';

const Card = styled(props => <MuiCard {...props} />)`&&{
  box-shadow:  0 0 2px 1px rgba(130, 136, 148, 0.08);
}`;

const Content = styled(props => <CardContent {...props} />)`
  display: flex;
  align-items: center;
  &&{
    padding: 32px !important;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  max-width: 300px;
  &&{
    margin-right: 100px;
  }
`;

export const DonutChartCard = (props: DonutChartCardModel) => {
  return (
    <Card>
      <Content>
        <Typo variant="h6">{props.activity}</Typo>
        <DonutChart value={props.value}/>
      </Content>
    </Card>
  );
};
