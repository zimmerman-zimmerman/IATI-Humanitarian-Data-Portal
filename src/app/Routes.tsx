import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';

import About from 'app/modules/about';

import { Page } from 'app/modules/common/Page';
import { Landing } from 'app/modules/landing';

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/faq" render={() => <Page />} />
        //////////////////////////////////////////////////////////////////////
        <Route
          exact
          path="/signatory-data/:code/overview"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/activity-list"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/incoming"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/providers"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/outgoing"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/recipients"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/timelines"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/coverage"
          render={() => <Page />}
        />
        //////////////////////////////////////////////////////////////////////
        <Route exact path="/signatory-progress" render={() => <Page />} />
        //////////////////////////////////////////////////////////////////////
        <Route
          exact
          path="/signatory-data/:code/activity-list/:code/detail"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/providers/:code/detail"
          render={() => <Page />}
        />
        <Route
          exact
          path="/signatory-data/:code/recipients/:code/detail"
          render={() => <Page />}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
