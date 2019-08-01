import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import Colours from 'app/theme/color';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
import { HorizontalBarChartModel, barModel } from './model';

//TODO:
//  - Find a way to implement the colouring.
//  - Discuss with designer, implementation is not 1on1 with design

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarComponent = props => {
  return (
    <g {...props}>
      <rect {...props} fill={Colours.primaryBase} height={props.height / 2} />
      <text
        {...props}
        x={props.width - 64}
        y={props.y - 5}
        fontFamily="Inter"
        fontSize="12px"
        lineHeight="1.33"
        letterSpacing="0.42"
        fontWeight="normal"
        fill={Colours.greydark20OrFontsecondary}
      >
        {props.data.data.percentage}% ({props.data.data.value})
      </text>
    </g>
  );
};

const BarChart = styled(props => <ResponsiveBar {...props} />)`
  && {
  }
`;

//TODO: Chart container should adapt to the width of the card that it is in for responsiveness.
const ChartContainer = styled.div`
  height: 270px;
  width: 1000px;
`;

// https://nivo.rocks/bar/
export const HorizontalBarChart = (props: HorizontalBarChartModel) => {
  return (
    <ChartContainer>
      <BarChart
        {...barModel}
        data={props.values}
        colors={colorScheme(props.colors)}
        barComponent={BarComponent}
      />
    </ChartContainer>
  );
};
