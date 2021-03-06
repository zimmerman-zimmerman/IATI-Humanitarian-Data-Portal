/* core */
import React from 'react';
import { Container } from '@material-ui/core';

/* components */
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';
import { SignatoryDataRoutes } from 'app/modules/signatory-data/submodules/routes';

/* state & utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { sigDataStore } from 'app/modules/signatory-data/submodules/store';
import {
  getHeaderDateRange,
  getActivityDateTypeField,
} from 'app/modules/signatory-data/submodules/utils';

/* mock */
import { OrgNarrative } from 'app/modules/signatory-data/mock';

export function SubmoduleContainer(props) {
  // todo: look into Error:(16, 43) TS2589: Type instantiation is excessively deep and possibly infinite.
  const [locStore, locActions] = sigDataStore();
  const gbsignatoriesData = useStoreState(state => state.gbsignatories);
  const sigdatadatesheaderData = useStoreState(
    state => state.sigdatadatesheader.data
  );
  const organisationNarrativeData = useStoreState(
    state => state.organisationnarrative
  );
  const orgNarrativeDetails = get(
    organisationNarrativeData,
    'data.data.grouped.reporting_org_ref.groups',
    []
  );
  const singleOrgNarrativeData = find(orgNarrativeDetails, [
    'groupValue',
    decodeURIComponent(props.match.params.code).toLowerCase(),
  ]);
  const orgDetails = find(gbsignatoriesData.data as any, {
    IATIOrgRef: decodeURIComponent(props.match.params.code),
  });
  /* create the API call instances */
  const sigdataactivityyearsCall = useStoreActions(
    actions => actions.sigdataactivityyears.fetch
  );
  const sigdatadatesheaderCall = useStoreActions(
    actions => actions.sigdatadatesheader.fetch
  );
  const queryDateField = getActivityDateTypeField(
    get(locStore.checkSigDateTypeAvailable, 'data.data.response.docs', [])
  );
  const organisationNarrativeCall = useStoreActions(
    actions => actions.organisationnarrative.fetch
  );

  const sigdataactivityyearsLoading = useStoreState(
    state => state.sigdataactivityyears.loading
  );
  const sigdatadatesheaderLoading = useStoreState(
    state => state.sigdatadatesheader.loading
  );
  const sigdataactivityyearsSuccess = useStoreState(
    state => state.sigdataactivityyears.success
  );
  const sigdatadatesheaderSuccess = useStoreState(
    state => state.sigdatadatesheader.success
  );

  /* use useEffect as componentDidMount and commit the API calls */
  React.useEffect(() => {
    if (
      organisationNarrativeData.data === null &&
      !organisationNarrativeData.loading
    ) {
      const callValuesNarrative = {
        values: {
          ...OrgNarrative.values,
          q: `reporting_org_ref:(${decodeURIComponent(
            props.match.params.code
          )})`,
        },
      };
      organisationNarrativeCall(callValuesNarrative);
    }
    const callValues = {
      values: {
        q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
        fl: 'activity_date_type',
      },
    };
    locActions.checkSigDateTypeAvailable.fetch(callValues);
  }, []);
  React.useEffect(() => {
    if (!sigdataactivityyearsLoading) {
      const callValues = {
        values: {
          q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
          facet: 'on',
          'facet.pivot': `${queryDateField},humanitarian`,
          fl: 'facet_counts',
        },
      };
      sigdataactivityyearsCall(callValues);
    }
    if (!sigdatadatesheaderLoading) {
      sigdatadatesheaderCall({
        values: {
          q: `reporting_org_ref:${decodeURIComponent(props.match.params.code)}`,
          'json.facet': JSON.stringify({
            date1: `min(activity_date_start_actual)`,
            date2: `min(activity_date_start_planned)`,
            date3: `max(activity_date_start_actual)`,
            date4: `max(activity_date_start_planned)`,
          }),
          rows: 0,
        },
      });
    }
  }, [props.match.params.code, locStore.checkSigDateTypeAvailable.success]);

  let suppLink = get(orgDetails, 'suppInfoUrl', 'no url provided');
  suppLink =
    suppLink.toLowerCase().indexOf('no url provided') !== -1
      ? undefined
      : suppLink;
  const linkText = suppLink
    ? 'Publisher supplementary information'
    : 'No publisher supplementary information provided';

  return (
    <Container maxWidth="lg">
      {/** contains the header that is shown in every submodule */}
      <SubmoduleHeader
        linkText={linkText}
        suppLink={suppLink}
        code={props.match.params.code}
        orgType={get(orgDetails, 'orgType', 'No Data')}
        organisationName={get(
          singleOrgNarrativeData,
          'doclist.docs[0].reporting_org_narrative[0]',
          'Not Found'
        )}
        yearRange={getHeaderDateRange(
          get(sigdatadatesheaderData, 'data.facets', [])
        )}
      />
      {/** contains the routes of the submodules of the signatory data */}
      <SignatoryDataRoutes
        queryDateField={queryDateField}
        suppLink={suppLink}
      />
    </Container>
  );
}
