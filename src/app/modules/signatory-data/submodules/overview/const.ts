/* eslint-disable @typescript-eslint/camelcase */
export const humCallValues = {
  humElData_1: {
    type: 'query',
    q: 'humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:[* TO *]',
  },
  humElData_2: {
    type: 'query',
    q:
      '(sector_vocabulary:10 AND sector_code:*) OR (transaction_sector_vocabulary:10 AND transaction_sector_code:*)',
  },
  humElData_3: {
    type: 'query',
    q: 'humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:[* TO *]',
  },
  humElData_4: {
    type: 'query',
    q:
      '((sector_code:[70000 TO 79999] AND -(-sector_vocabulary:1 OR sector_vocabulary:*)) OR (transaction_sector_code:[70000 TO 79999] AND -(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*))) AND (humanitarian:1 OR transaction_humanitarian:1)',
  },
  currentHumValuesData: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 2] AND activity_date_iso_date:[* TO NOW]) AND (activity_date_type:[3 TO 4] AND activity_date_iso_date:[NOW TO *])',
  },
  humActFTSData_1: {
    type: 'query',
    q:
      '(((sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018]) AND -(-sector_vocabulary:1 OR sector_vocabulary:*)) OR ((transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018]) AND -(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*)))',
  },
  humActFTSData_2: {
    type: 'query',
    q: '(humanitarian:1 OR transaction_humanitarian:1)',
  },
  humActFTSData_3: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*)',
  },
  humActFTSData_4: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:1-2 AND humanitarian_scope_code:*)',
  },
  humActFTSData_5: {
    type: 'query',
    q: '(humanitarian_scope_vocabulary:99 AND humanitarian_scope_code:*)',
  },
  humActFTSData_6: {
    type: 'query',
    q:
      '(sector_code:* AND sector_vocabulary:10) OR (transaction_sector_code:* AND transaction_sector_vocabulary:10)',
  },
  humActwGBClassificationsData_1: {
    type: 'query',
    q:
      '((default_aid_type_vocabulary:2 AND default_aid_type_code:*) OR (transaction_aid_type_vocabulary:2 AND transaction_aid_type_code:*))',
  },
  humActwGBClassificationsData_2: {
    type: 'query',
    q:
      '((default_aid_type_vocabulary:3 AND default_aid_type_code:*) OR (transaction_aid_type_vocabulary:3 AND transaction_aid_type_code:*))',
  },
  humActwGBClassificationsData_3: {
    type: 'query',
    q:
      '((participating_org_type:24 AND participating_org_role:4) OR transaction_receiver_org_type:24)',
  },
  humActwGBClassificationsData_4: {
    type: 'query',
    q:
      '((default_aid_type_vocabulary:4 AND default_aid_type_code:*) OR (transaction_aid_type_vocabulary:4 AND transaction_aid_type_code:*))',
  },
  humOtherClassOfInterestData_1: {
    type: 'query',
    q:
      '(sector_code:* AND -(-sector_vocabulary:1 OR sector_vocabulary:*)) OR (transaction_sector_code:* AND -(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*))',
  },
  humOtherClassOfInterestData_2: {
    type: 'query',
    q:
      '((default_aid_type_vocabulary:1 AND default_aid_type_code:*) OR (transaction_aid_type_vocabulary:1 AND transaction_aid_type_code:*))',
  },
  humOtherClassOfInterestData_3: {
    type: 'query',
    q:
      '(policy_marker_code:1 AND (sector_vocabulary:1 OR transaction_sector_vocabulary:1))',
  },
  humOtherClassOfInterestData_4: {
    type: 'query',
    q: '(tag_vocabulary:2)',
  },
  humOtherClassOfInterestData_5: {
    type: 'query',
    q: '(tag_vocabulary:3)',
  },
  humActWLocationInfoData_1: {
    type: 'query',
    q: 'recipient_country_code:* OR transaction_recipient_country_code:*',
  },
  humActWLocationInfoData_region: {
    type: 'query',
    q: 'recipient_region_code:* OR transaction_recipient_region_code:*',
  },
  humActWLocationInfoData_2: {
    type: 'query',
    q: 'location_point_pos:*',
  },
  humActWLocationInfoData_3: {
    type: 'query',
    q: 'location_id_code:* OR location_point_pos:*',
  },
  humActWLocationInfoData_4: {
    type: 'query',
    q: '-(location_point_pos:* AND location_id_code:*)',
  },
  humActWMultiYearFundData_1: {
    type: 'query',
    q: '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *])',
  },
  humActWMultiYearFundData_2: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *] AND -budget:*)',
  },
  humActWMultiYearFundData_3: {
    type: 'query',
    q:
      '(activity_date_type:[1 TO 4] AND activity_date_iso_date:[* TO *] AND budget_period_start_iso_date:[* TO *] AND (budget_period_end_iso_date:[* TO *] AND budget_value:*))',
  },
  HRActivitiesRes: {
    type: 'query',
    q: 'result_title_narrative:*',
  },
  HRActDocLinks: {
    type: 'query',
    q: 'result_document_link_url:*',
  },
  HRActIndBase: {
    type: 'query',
    q:
      'result_indicator_title_narrative:* AND result_indicator_baseline_value:* AND result_indicator_period_target_value:*',
  },
  HRIndDocLinks: {
    type: 'query',
    q: 'result_indicator_document_link_url:*',
  },
};

export const hum4DonutValues = {
  data: {
    type: 'query',
    q:
      'humanitarian:1 AND ((-(-sector_vocabulary:1 OR sector_vocabulary:*) AND (sector_code:[69999 TO 80000] OR sector_code:[93010 TO 93018])) OR (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND (transaction_sector_code:[69999 TO 80000] OR transaction_sector_code:[93010 TO 93018])))',
  },
};

export const activityStatusValues = {
  latest_update: 'max(dataset_date_updated)',
  data_first_published: 'min(dataset_date_created)',
  latest_iati_version: 'max(dataset_iati_version)',
  currentHumValuesData: {
    type: 'query',
    q:
      '((activity_date_type: [1 TO 2] AND activity_date_iso_date: [* TO NOW]) AND (activity_date_type: [3 TO 4] AND activity_date_iso_date: [NOW TO *]) AND humanitarian: 1)',
  },
  currency: {
    type: 'terms',
    field: 'default_currency',
    limit: 1,
  },
};

export const currencyCallValues = {
  currency: {
    type: 'terms',
    field: 'transaction_value_currency',
    limit: 1,
  },
};
export const barJsonFacet = (years, queryDateField) => {
  const result = {};

  years.forEach(year => {
    result[year] = {
      type: 'query',
      q: `activity_date_start_actual_f:[${year}-01-01T00:00:00Z TO ${year}-12-31T23:59:59Z] OR activity_date_start_planned_f:[${year}-01-01T00:00:00Z TO ${year}-12-31T23:59:59Z]`,
      facet: {
        hum_count: {
          type: 'query',
          q:
            'humanitarian:1 OR transaction_humanitarian:1 OR (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018]))',
        },
      },
    };
  });

  return result;
};
