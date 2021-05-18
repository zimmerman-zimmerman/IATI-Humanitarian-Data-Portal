## IATI Humanitarian Data Portal

[![CircleCI](https://circleci.com/gh/zimmerman-team/IATI-Humanitarian-Data-Portal.svg?style=svg&circle-token=ab45d5e13a4eb1d9b99b6b2622937f3b00c436ab)](https://circleci.com/gh/zimmerman-team/IATI-Humanitarian-Data-Portal)
[![Maintainability](https://api.codeclimate.com/v1/badges/4824056e61afa2019da5/maintainability)](https://codeclimate.com/repos/5d307081c8591501b500efd2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4824056e61afa2019da5/test_coverage)](https://codeclimate.com/repos/5d307081c8591501b500efd2/test_coverage)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)


## What is the IATI Humanitarian Data Portal?

The IATI Humanitarian Data Portal has been developed by Development Initiatives as part of its programme to support the Grand Bargain transparency workstream. The portal provides information on the Grand Bargain transparency commitments, how they are measured , and monitors progress at an aggregate level for signatories in meeting their commitment to publish timely, high quality, harmonised and transparent open data on global humanitarian action.

Data flows in from the <a href="https://iati.cloud/" target="_blank">IATI Datastore (IATI.cloud)</a> and non IATI data elements are controlled by the CMS.

## About the project
* Website:         <a href="https://www.humportal.org/" target="_blank">IATI Humanitarian Data Portal</a>
* License:          AGPLv3 (see included <a href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal/blob/develop/LICENSE.MD" target="_blank">LICENSE</a> file for full license)
* Github Repo:      <a href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal" target="_blank">github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal</a>


## Installing

<b>1.</b> Set up the <a href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal-CMS" target="_blank">CMS for this project</a> as a starter<br/>
<b>2.</b> Checkout repo to local folder<br/>
<b>3.</b> Make sure you've installed node.js 10.16.3 or higher<br/>
<b>4.</b> Run yarn install <br/>
<b>5.</b> Create an .env file and specify the following variables:
- NODE_PATH=src/
- REACT_APP_CLIENT_NAME=CLIENT_NAME
- REACT_APP_CMS_PROJECT_ID=CMS_NAME
- REACT_APP_CMS_API=URL_OF_CMS_API
- REACT_APP_DS_API_DEV=URL_OF_IATI_DATASTORE_DEV_INSTANCE
- REACT_APP_DS_API=URL_OF_IATI_DATASTORE_INSTANCE
- REACT_APP_SPACE_CLOUD_URL=URL_OF_SPACE_CLOUD_INSTANCE

<b>6.</b> Run yarn start 

## Contributing

Yes please! We are mainly looking for coders to help on the project. If you are a coder feel free to *Fork* the repository and send us Pull requests!

