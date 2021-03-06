// @ts-nocheck
/* eslint-disable no-restricted-globals */
import React from 'react';

/* models/ interfaces */
import { ActDetailQuery } from 'app/modules/activityDetails/store/interface';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

/* helpers */
import { formatMoney } from 'app/components/datadisplay/Table/helpers';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';

export const actMetadataQuery: ActDetailQuery = {
  q: '*:*',
  wt: 'json',
  // So with this kind of fl we ignore the transaction data for an activity
  // because we load in the actual transaction data via a separate endpoint
  // and these transactions can be pretty massive so we don't want
  // the same/extra transaction data with the activity meta data call
  fl: `default_currency,activity_status_code,collaboration_type_code,
        capital_spend_percentage,default_flow_type_code,hierarchy,
        iati_identifier,default_finance_type_code,default_tied_status_code,
        default_lang,reporting_org:[json],title,title_narrative_text,description,
        participating_org:[json],activity_date:[json],contact_info:[json],
        recipient_country:[json],sector:[json],country_budget_items:[json],
        policy_marker:[json],default_aid_type:[json],recipient_region:[json],
        planned_disbursement:[json],budget:[json],document_link:[json],
        other_identifier:[json],humanitarian_scope:[json],location:[json],
        reporting_org_narrative,reporting_org_ref,crs_add:[json],
        activity_date_type,activity_date_iso_date,fss:[json],related_activity:[json],
        legacy_data:[json],conditions:[json],activity_scope_code,transaction_recipient_country_code,transaction_sector_code`,
};

export const actResultsQuery = (activityIdentifier: string): ActDetailQuery => {
  return {
    q: `iati_identifier:${activityIdentifier}`,
    fl: 'result_title_narrative,result_aggregation_status,result_type,id',
    rows: 10000,
  };
};

export const inTransactionsQuery = (iatiIdentifier: string): ActDetailQuery => {
  return {
    q: `iati_identifier:${iatiIdentifier} AND (transaction_type:1 OR transaction_type:11 OR transaction_type:13)`,
    fl:
      'transaction_date_iso_date,transaction_provider_org_narrative,transaction_receiver_org_narrative,transaction_value,transaction_value_currency,transaction_type,transaction_provider_org_provider_activity_id,transaction_receiver_org_receiver_activity_id',
    rows: 1000,
  };
};

export const outTransactionsQuery = (
  iatiIdentifier: string
): ActDetailQuery => {
  return {
    q: `iati_identifier:${iatiIdentifier} AND (transaction_type:2 OR transaction_type:3 OR transaction_type:4 OR transaction_type:12)`,
    fl:
      'transaction_date_iso_date,transaction_provider_org_narrative,transaction_receiver_org_narrative,transaction_value,transaction_value_currency,transaction_type,transaction_provider_org_provider_activity_id,transaction_receiver_org_receiver_activity_id',
    rows: 1000,
  };
};

export const baseTranstable: TableModuleModel = {
  title: 'Incoming transactions',
  data: [],
  columns: [
    {
      name: 'Date',
      options: {
        filter: false,
      },
    },
    {
      name: 'From',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `From: ${value}`,
      },
    },
    {
      name: 'To',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `To: ${value}`,
      },
    },
    {
      name: 'Transaction Type',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Transaction Type: ${value}`,
      },
    },
    {
      name: 'Transaction Value',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value[1] !== undefined && !isNaN(value[1])) {
            return formatMoney(value[1], value[0]);
          }
          return 'No data';
        },
      },
    },
    {
      name: 'Trace ID.',
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value => `Trace ID.: ${value}`,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value.toLowerCase() !== 'no data') {
            return (
              <LinkCellModule
                link={`/activity-detail/${value}`}
                value={value}
              />
            );
          }
          return 'No data';
        },
      },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: true,
    responsive: 'scrollFullHeight',
    pagination: true,
    viewColumns: true,
    selectableRows: 'none',
    selectableRowsHeader: false,
  },
};

export const fssFields = [
  {
    colHeading: 'Year',
    key: 'year',
  },
  {
    colHeading: 'Value',
    key: 'value',
    value: true,
  },
];

export const crsAddFields = [
  {
    key: 'channel_code',
    label: 'Channel code',
  },
  { key: 'other_flags', label: 'Other flag codes', arrayKey: 'code' },
  { key: 'loan_terms.rate.1', label: 'Loan term rates 1' },
  { key: 'loan_terms.rate.2', label: 'Loan term rates 2' },
  {
    key: 'loan_terms.repayment.type_code',
    label: 'Loan terms repayment code',
  },
  {
    key: 'loan_terms.repayment.plan_code',
    label: 'Loan terms repayment plan',
  },
  {
    key: 'loan_terms.repayment.first_date_iso_date',
    label: 'Loan terms repayment start',
  },
  {
    key: 'loan_terms.repayment.final_date_iso_date',
    label: 'Loan terms repayment end',
  },
  {
    key: 'loan_terms.commitment.date_iso_date',
    label: 'Loan terms commitment date',
  },
  {
    key: 'loan_terms.commitment.date_iso_date',
    label: 'Loan terms commitment date',
  },
  {
    key: 'loan_status.year',
    label: 'Loan date',
  },
  {
    key: 'loan_status.currency',
    label: 'Loan currency',
  },
  {
    key: 'loan_status.interest_received',
    label: 'Loan interest received',
  },
  {
    key: 'loan_status.principal_outstanding',
    label: 'Loan principal outstanding',
  },
  {
    key: 'loan_status.principal_arrears',
    label: 'Loan principal arrears',
  },
  {
    key: 'loan_status.interest_arrears',
    label: 'Loan interest arrears',
  },
];

export const docLinkFields = [
  {
    colHeading: 'Title',
    key: 'title.narratives',
    narrative: true,
    extLink: 'url',
  },
  {
    colHeading: 'Categories',
    key: 'categories',
    arrayKey: 'category.name',
  },
  {
    colHeading: 'Date',
    key: 'document_date.iso_date',
  },
];

export const disbursFields = (orgTypeNames, budgTypeNames) => {
  return [
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: budgTypeNames,
    },
    {
      colHeading: 'Start date',
      key: 'period_start',
    },
    {
      colHeading: 'End date',
      key: 'period_end',
    },
    {
      colHeading: 'Value',
      key: 'value',
      value: true,
    },
    {
      colHeading: 'Provider organisation',
      key: 'provider_organisation.narratives',
    },
    {
      colHeading: 'Provider organisation reference',
      key: 'provider_organisation.ref',
    },
    {
      colHeading: 'Provider organisation type',
      key: 'provider_organisation.type.code',
      codeNames: orgTypeNames,
    },
    {
      colHeading: 'Receiving organisation',
      key: 'receiver_organisation.narratives',
    },
    {
      colHeading: 'Receiving organisation reference',
      key: 'receiver_organisation.ref',
    },
    {
      colHeading: 'Receiving organisation type',
      key: 'receiver_organisation.type.code',
      codeNames: orgTypeNames,
    },
  ];
};

export const budgetFields = (budgTypeNames, budgStatusNames) => {
  return [
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: budgTypeNames,
    },
    {
      colHeading: 'Status',
      key: 'status.code',
      codeNames: budgStatusNames,
    },
    {
      colHeading: 'Start date',
      key: 'period_start',
    },
    {
      colHeading: 'End date',
      key: 'period_end',
    },
    {
      colHeading: 'Value',
      key: 'value',
      value: true,
    },
  ];
};

export const defAidTypeFields = defAidTypeVocNames => {
  return [
    {
      colHeading: 'Code',
      key: 'code',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: defAidTypeVocNames,
    },
  ];
};

export const polMarkerFields = (
  polMarkCodeNames,
  policMSignificanceName,
  polMarkerVocabNames
) => {
  return [
    {
      colHeading: 'Title',
      key: 'narratives',
    },
    {
      colHeading: 'Code',
      key: 'code',
      codeNames: polMarkCodeNames,
    },
    {
      colHeading: 'Significance',
      key: 'significance.code',
      codeNames: policMSignificanceName,
    },
    {
      colHeading: 'Vocabulary URI',
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: polMarkerVocabNames,
    },
  ];
};

export const humScopeFields = (humScopTypeNames, humVocNames) => {
  return [
    {
      colHeading: 'Title',
      key: 'narratives',
    },
    {
      colHeading: 'Code',
      key: 'code',
    },
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: humScopTypeNames,
    },
    {
      colHeading: 'Vocabulary URI',
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: humVocNames,
    },
  ];
};

export const countBufgItFields = [
  {
    colHeading: 'Description',
    key: 'description.narratives',
    narrative: true,
  },
  {
    colHeading: 'Code name',
    key: 'budget_identifier.name',
  },
  {
    colHeading: 'Percentage',
    key: 'percentage',
    suffix: '%',
  },
];

export const tagFields = tagVocNames => {
  return [
    {
      colHeading: 'Description',
      key: 'narratives',
    },
    {
      colHeading: 'Code',
      key: 'code',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: tagVocNames,
    },
    {
      colHeading: 'Vocabulary URI',
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
  ];
};

export const sectorFields = sectorVocabs => {
  return [
    {
      colHeading: 'Code',
      key: 'sector.code',
    },
    {
      colHeading: 'Description',
      key: 'sector.name',
    },
    {
      colHeading: 'Percentage',
      key: 'percentage',
      suffix: '%',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: sectorVocabs,
      extLink: 'vocabulary_uri',
    },
  ];
};

export const recRegFields = regVocNames => {
  return [
    {
      colHeading: 'Description',
      key: 'narratives',
    },
    {
      colHeading: 'Code',
      key: 'region.code',
    },
    {
      colHeading: 'Percentage',
      key: 'percentage',
      suffix: '%',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary.code',
      codeNames: regVocNames,
    },
    {
      colHeading: 'Vocabulary URI',
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
  ];
};

export const recCountFields = [
  {
    colHeading: 'Description',
    key: 'country.name',
  },
  {
    colHeading: 'Code',
    key: 'country.code',
  },
  {
    colHeading: 'Percentage',
    key: 'percentage',
    suffix: '%',
  },
];

export const contInfoFields = contactTypeNames => {
  return [
    {
      colHeading: 'Type',
      label: 'Type',
      key: 'type.code',
      codeNames: contactTypeNames,
    },
    {
      colHeading: 'Telephone',
      label: 'Telephone',
      key: 'telephone',
    },
    {
      colHeading: 'Email',
      label: 'Email',
      key: 'email',
    },
    {
      colHeading: 'Website',
      label: 'Website',
      key: 'website',
      extLink: 'website',
    },
    {
      colHeading: 'Organisation name',
      label: 'Organisation name',
      key: 'organisation.narratives',
    },
    {
      colHeading: 'Department name',
      label: 'Department name',
      key: 'department.narratives',
    },
    {
      colHeading: 'Contact Person',
      label: 'Contact Person',
      key: 'person_name.narratives',
    },
    {
      colHeading: 'Contact Person Position',
      label: 'Contact Person Position',
      key: 'job_title.narratives',
    },
    {
      colHeading: 'Mailing address',
      label: 'Mailing address',
      key: 'mailing_address.narratives',
    },
  ];
};

export const othIdFields = othIDTypeNames => {
  return [
    {
      colHeading: 'Reference',
      key: 'ref',
    },
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: othIDTypeNames,
    },
    {
      colHeading: 'Owner organisation',
      key: 'owner_org.narratives',
    },
    {
      colHeading: 'Owner organisation reference',
      key: 'owner_org.ref',
    },
  ];
};

export const partOrgFields = (orgTypeNames, orgRoleNames) => {
  return [
    {
      colHeading: 'Name',
      key: 'narratives',
    },
    {
      colHeading: 'Reference',
      key: 'ref',
    },
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: orgTypeNames,
    },
    {
      colHeading: 'Role',
      key: 'role.code',
      codeNames: orgRoleNames,
    },
  ];
};

export const repOrgFields = [
  { key: 'narrative', label: 'Title' },
  { key: 'type.name', label: 'Type' },
  { key: 'ref', label: 'Reference' },
];

export const actSummFields = (
  actStatusNames,
  actScopeNames,
  colabTypeNames,
  defFlowTypeNames,
  defTiedStatusName
) => {
  return [
    {
      key: 'activity_status_code',
      label: 'Status',
      codeNames: actStatusNames,
    },
    {
      key: 'activity_scope_code',
      label: 'Scope',
      codeNames: actScopeNames,
    },
    {
      key: 'collaboration_type_code',
      label: 'Collaboration type',
      codeNames: colabTypeNames,
    },
    {
      key: 'default_flow_type_code',
      label: 'Default flow type',
      codeNames: defFlowTypeNames,
    },
    {
      key: 'default_finance_type_code',
      label: 'Default finance type',
    },
    {
      key: 'default_tied_status_code',
      label: 'Default tied status',
      codeNames: defTiedStatusName,
    },
    {
      key: 'capital_spend_percentage',
      label: 'Capital spend',
      suffix: '%',
    },
    {
      key: 'activity_date',
      label: 'Planned start',
      searchKey: 'type.code',
      searchValue: '1',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Actual start',
      searchKey: 'type.code',
      searchValue: '2',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Planned end',
      searchKey: 'type.code',
      searchValue: '3',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Actual end',
      searchKey: 'type.code',
      searchValue: '4',
      foundKey: 'iso_date',
    },
  ];
};

export const locationFields = (
  locReachNames,
  locVocNames,
  locExNames,
  locClassNames
) => {
  return [
    {
      colHeading: 'Name',
      key: 'name.narratives',
    },
    {
      colHeading: 'Reference',
      key: 'ref',
    },
    {
      colHeading: 'Reach',
      key: 'location_reach.code',
      codeNames: locReachNames,
    },
    {
      colHeading: 'Vocabulary',
      key: 'location_id.vocabulary.code',
      codeNames: locVocNames,
    },
    {
      colHeading: 'Description',
      key: 'description.narratives',
    },
    {
      colHeading: 'Activity at location',
      key: 'activity_description.narratives',
    },
    {
      colHeading: 'Longitude',
      key: 'point.pos.longitude',
    },
    {
      colHeading: 'Latitude',
      key: 'point.pos.latitude',
    },
    {
      colHeading: 'Exactness',
      key: 'exactness.code',
      codeNames: locExNames,
    },
    {
      colHeading: 'Class',
      key: 'location_class.code',
      codeNames: locClassNames,
    },
    {
      colHeading: 'Designation',
      key: 'feature_designation.code',
    },
  ];
};

export const relActFields = relActTypes => {
  return [
    {
      colHeading: 'Reference',
      key: 'ref',
      intLink: 'ref',
      intLinkForm: '/activity-detail/{id}',
    },
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: relActTypes,
    },
  ];
};

export const legDataFields = [
  {
    colHeading: 'Name',
    key: 'name',
  },
  {
    colHeading: 'Value',
    key: 'value',
  },
  {
    colHeading: 'Equivalent',
    key: 'iati_equivalent',
  },
];

export const conditionsFields = condCodeNames => {
  return [
    {
      colHeading: 'Type',
      key: 'type.code',
      codeNames: condCodeNames,
    },
    {
      colHeading: 'Title',
      key: 'narratives',
    },
  ];
};
