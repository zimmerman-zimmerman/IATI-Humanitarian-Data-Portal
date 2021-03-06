/* eslint-disable @typescript-eslint/camelcase */
export const outgoingCallFacetValues = {
  outPledgeBar: { type: 'query', q: 'transaction_type:12' },
  outCommitmentBar: { type: 'query', q: 'transaction_type:2' },
  outDisbursementBar: { type: 'query', q: 'transaction_type:3' },
  outExpenditureBar: { type: 'query', q: 'transaction_type:4' },
};

export const outgoingTransactionsValues = {
  outPledgeTransactions: { type: 'query', q: 'transaction_type:12' },
  outCommitmentTransactions: { type: 'query', q: 'transaction_type:2' },
  disbTransactions: { type: 'query', q: 'transaction_type:3' },
  expTransactions: { type: 'query', q: 'transaction_type:4' },
  outPledge_2: {
    type: 'query',
    q: '(transaction_type:12 AND transaction_receiver_org_narrative:*)',
  },
  outPledge_3: {
    type: 'query',
    q: '(transaction_type:12 AND transaction_receiver_org_type:*)',
  },
  outCommitment_2: {
    type: 'query',
    q: '(transaction_type:2 AND transaction_receiver_org_narrative:*)',
  },
  outCommitment_3: {
    type: 'query',
    q: '(transaction_type:2 AND transaction_receiver_org_type:*)',
  },
  outDisbursement_2: {
    type: 'query',
    q: '(transaction_type:3 AND transaction_receiver_org_narrative:*)',
  },
  outDisbursement_3: {
    type: 'query',
    q: '(transaction_type:3 AND transaction_receiver_org_type:*)',
  },
  expenditure_3: {
    type: 'query',
    q:
      '(transaction_type:4 AND (transaction_receiver_org_narrative:* OR transaction_receiver_org_ref:*))',
  },
  expenditure_4: {
    type: 'query',
    q: '(transaction_type:4 AND transaction_receiver_org_type:*)',
  },
};

export const inPageNavigationItems = {
  lists: [
    {
      label: 'Pledges',
      elName: 'incComms',
      url: '#pledges',
    },
    {
      label: 'Commitments',
      elName: 'incComms',
      url: '#commitments',
    },
    {
      label: 'Disbursements',
      elName: 'incComms',
      url: '#disbursements',
    },
    {
      label: 'Expenditure',
      elName: 'incComms',
      url: '#expenditure',
    },
  ],
};
