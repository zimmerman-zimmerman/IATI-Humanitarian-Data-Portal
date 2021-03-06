import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RecipientsLayout } from 'app/modules/signatory-data/submodules/recipients/layout';

/* store */
import { recStore } from 'app/modules/signatory-data/submodules/recipients/store';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* consts */
import {
  recipientsQuery,
  allRecipientsQuery,
} from 'app/modules/signatory-data/submodules/recipients/const';
import { pivotKey } from 'app/modules/signatory-data/submodules/recipients/store/interfaces';
import { baseProviderConfig } from 'app/modules/signatory-data/submodules/providersPage/consts';
import { CustomFooter } from 'app/modules/signatory-data/submodules/providersPage/common/CustomFooter';
/* utils */
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import { getBarChartData1 } from 'app/modules/signatory-data/submodules/providersPage/utils/getBarChartData';
import { getTableData } from 'app/modules/signatory-data/submodules/providersPage/utils/getTableData';

function RecipientsF(props) {
  const [state, actions] = recStore();
  const orgTypeNames = useStoreState(
    reduxstate => reduxstate.codelists.orgTypeNames.data
  );
  useEffect(() => {
    // and here we get all the receiving organisation types
    // of the signatory
    actions.sigAllReceivers.fetch({
      values: allRecipientsQuery(
        decodeURIComponent(props.match.params.code),
        'transaction_receiver_org_type,transaction_receiver_org_narrative'
      ),
    });
  }, []);

  const [facetOffset, setFacetOffset] = React.useState(0);

  useEffect(() => {
    // so we call table data here
    actions.recipients.fetch({
      values: recipientsQuery(
        decodeURIComponent(props.match.params.code),
        facetOffset
      ),
    });
  }, [orgTypeNames, facetOffset]);

  const recData = get(state.recipients, `data.data`, null);

  const sigAllReceivers = get(
    state.sigAllReceivers,
    'data.data.facet_counts.facet_pivot.transaction_receiver_org_type,transaction_receiver_org_narrative',
    null
  );

  const recTableData = getTableData(
    recData,
    `facet_counts.facet_pivot.${pivotKey}`,
    get(orgTypeNames, 'data', {}),
    '3',
    'receiver'
  );

  const barChartData = getBarChartData1(
    get(orgTypeNames, 'data', null),
    sigAllReceivers,
    'Funding Recipient Organisation Types'
  );

  const sigDataActivityListFilterAction = useStoreActions(
    actionsGen => actionsGen.sigDataActivityListFilter.setActivityListFilter
  );

  const onItemClick = value => {
    sigDataActivityListFilterAction(value);
    props.history.push('activity-list');
  };

  const tableDataConfig = baseProviderConfig(false, onItemClick);

  return (
    <RecipientsLayout
      barChartData={barChartData}
      tableData={{
        ...tableDataConfig,
        options: {
          ...tableDataConfig.options,
          customFooter: () => (
            <CustomFooter
              facetOffset={facetOffset}
              setFacetOffset={setFacetOffset}
              nextEnabled={uniq(recTableData.map(item => item[0])).length > 9}
            />
          ),
          rowsPerPage: 100,
        },
        data: recTableData,
      }}
      loading={
        state.recipients.loading ||
        state.humRecTypes.loading ||
        state.sigAllReceivers.loading
      }
    />
  );
}

//cc:look into issue TS2451
export const Recipients = withRouter(RecipientsF);
