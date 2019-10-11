import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getOutDisbursementsListData = (rawData1, rawData2, tooltipsData): ListModel => {
  const allHumActCount = get(rawData1, 'count', 0);
  const outDisbursement1 = get(rawData1, 'outDisbursementBar.count', 0);
  const outDisbursement2 = get(rawData1, 'outDisbursement_2.count', 0);
  const outDisbursement3 = get(rawData1, 'outDisbursement_3.count', 0);
  const outDisbursement4 = get(rawData2, 'outDisbursement_4.count', 0);
  return {
    title: 'Disbursements',
    elName: 'outDisbs',
    items: [
      {
        label: 'Total no. of Activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Total no. of Activities'
        ),
        values: [
          {
            ptc: percentage(outDisbursement1, allHumActCount),
            qtc: outDisbursement1,
          },
        ],
      },
      {
        label: 'Funding Recipient details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Funding Recipient details'
        ),
        values: [
          {
            ptc: percentage(outDisbursement2, allHumActCount),
            qtc: outDisbursement2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(outDisbursement3, allHumActCount),
            qtc: outDisbursement3,
          },
        ],
      },

      {
        label: 'Source traceability information',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Outgoing - Disbursements',
          'Source traceability information'
        ),
        values: [
          {
            ptc: percentage(outDisbursement4, allHumActCount),
            qtc: outDisbursement4,
          },
        ],
      },
    ],
  };
};
