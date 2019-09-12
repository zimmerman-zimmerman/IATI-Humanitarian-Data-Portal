/* models/interfaces */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

/* utils */
import {
  formatMoney,
  getInfoTHead,
} from 'app/components/datadisplay/Table/helpers';

export const covQuery = (repOrgRef: string) => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND transaction_type:(1 3 4)`,
    rows: 0,
    'json.facet': `{
      transactions: {
        type: 'range',
        field: 'transaction_date_iso_date',
        start: '1900-01-01T00:00:00Z',
        end: 'NOW',
        gap: '+1YEARS',
        mincount: 1,
        facet: {
          incom_funds: {
            type: 'query',
            q: 'transaction_type:1',
            facet: {
              trans_currency: {
                type: 'terms',
                field: 'transaction_value_currency',
                facet: {
                  transaction_sum: 'sum(transaction_value)',
                },
              },
            },
          },
          disbs_expends: {
            type: 'query',
            q: 'transaction_type:(3 4)',
            facet: {
              trans_currency: {
                type: 'terms',
                field: 'transaction_value_currency',
                facet: {
                  transaction_sum: 'sum(transaction_value)',
                },
              },
            },
          },
        },
      },
    }`,
  };
};

export const baseCovTable: TableModuleModel = {
  title: 'Coverage data',
  data: [],
  columns: [
    {
      name: 'Period started',
      options: {
        filter: false,
      },
    },
    {
      name: 'Period end',
      options: {
        filter: false,
      },
    },
    {
      name: 'Operational funds available',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Operational funds available',
            'Operational funds available'
          ),
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value.length > 0) {
            return formatMoney(value[0], value[1]);
          }
          return 'No data';
        },
      },
    },
    {
      name: 'Disbursements & Expenditure',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Disbursements & Expenditure',
            'Disbursements & Expenditure'
          ),
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value.length > 0) {
            return formatMoney(value[0], value[1]);
          }
          return 'No data';
        },
      },
    },
    {
      name: 'Rating',
      options: {
        filter: false,
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead('Rating', 'Rating'),
      },
    },
  ],
  options: {
    print: true,
    search: false,
    filter: false,
    download: true,
    rowHover: false,
    pagination: false,
    viewColumns: true,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  columnsCell: ['', '', '', '', ''],
  totalCell: true,
  totalRowColsDef: [
    { dataType: 'none' },
    { dataType: 'none' },
    { dataType: 'money' },
    { dataType: 'money' },
    { dataType: 'none' },
  ],
};