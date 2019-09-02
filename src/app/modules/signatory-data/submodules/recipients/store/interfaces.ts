import { ApiModel } from 'app/state/api/interfaces';

export interface BaseQuery {
  q: string;
  rows: number;
}

export interface RecTypesQueryModel extends BaseQuery {
  facet: string;
  'facet.pivot': string;
  'facet.limit': number;
}

export interface RecipientsQueryModel extends RecTypesQueryModel {
  stats: boolean;
  'stats.field': string;
  'facet.missing': boolean;
}

export interface RecTypesItemModel {
  field: string;
  value: string | null;
  count: number;
}

export interface PivotItemModel extends RecTypesItemModel {
  pivot?: PivotItemModel[];
  stats: {
    stats_fields: {
      transaction_value: {
        sum: number;
      };
    };
  };
}

export interface HumActQueryModel extends BaseQuery {
  fl: string;
}

export interface ActivityItemModel {
  iati_identifier: string;
}

export const pivotKey =
  'transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type,iati_identifier,transaction_type,transaction_value_currency';

export interface BaseRespModel<QueryModel, DocModel> {
  responseHeader: {
    status: number;
    QTime: number;
    params: QueryModel;
  };
  response: {
    numFound: number;
    start: number;
    // this guy will be empty
    docs: DocModel[];
  };
}

export interface RecTypeRespModel<QueryModel, DocModel>
  extends BaseRespModel<QueryModel, DocModel> {
  facet_counts: {
    facet_queries: object;
    facet_fields: object;
    facet_ranges: object;
    facet_intervals: object;
    facet_heatmaps: object;
    facet_pivot: {
      transaction_receiver_org_type: PivotItemModel[];
    };
  };
}

export interface RecipientsRespModel<QueryModel, DocModel>
  extends BaseRespModel<QueryModel, DocModel> {
  facet_counts: {
    facet_queries: object;
    facet_fields: object;
    facet_ranges: object;
    facet_intervals: object;
    facet_heatmaps: object;
    facet_pivot: {
      [pivotKey]: PivotItemModel[];
    };
  };
}

export interface RecipientsInterface
  extends ApiModel<
    RecipientsQueryModel,
    RecipientsRespModel<RecipientsQueryModel, any>
  > {}

export interface RecTypesInterface
  extends ApiModel<
    RecTypesQueryModel,
    RecTypeRespModel<RecTypesQueryModel, any>
  > {}

// interface to get humanitarian activities
// associated with the signatory
export interface HumActInterface
  extends ApiModel<
    HumActQueryModel,
    BaseRespModel<HumActQueryModel, ActivityItemModel>
  > {}
