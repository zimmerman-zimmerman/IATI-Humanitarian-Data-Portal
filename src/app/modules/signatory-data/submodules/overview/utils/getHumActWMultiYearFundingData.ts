import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActWMultiYearFundingData = (
  rawData,
  tooltipsData
): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActWMultiYearFundData_1.count', 0),
    get(rawData, 'facets.humActWMultiYearFundData_2.count', 0),
    get(rawData, 'facets.humActWMultiYearFundData_3.count', 0),
  ];
  return {
    title: 'Humanitarian activites with multi-year funding',
    elName: 'incComms',
    items: [
      {
        label: 'Duration > 24 months',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Duration > 24 months'
        ),
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Current hum. activities > 24 months budget exempt',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Current hum. activities > 24 months budget exempt'
        ),
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label:
          "Current hum. activities > 24 months & budgets for > 'next' 12 months",
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          "Current hum. activities > 24 months & budgets for > 'next' 12 months"
        ),
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
    ],
  };
};
