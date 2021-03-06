interface SubmoduleNavItem {
  name: string;
  path: string;
}
interface SubmoduleHeader {
  path: string;
  organisationName: string;
  navItems: SubmoduleNavItem[];
  organisationID: string;
  showPublisherLink: boolean;
}

export interface SubmoduleHeaderLayoutModel {
  orgType: string;
  organisationName: string;
  yearRange: string;
  code: string;
  linkText: string;
  suppLink?: string;
}

const submoduleHeaderConfig: SubmoduleHeader = {
  path: 'empty',
  organisationName: 'ActionAid UK',
  organisationID: 'GB-CHC-274467 2017-2019',
  navItems: [
    {
      name: 'Overview',
      path: 'overview',
    },
    {
      name: 'Activity List',
      path: 'activity-list',
    },
    {
      name: 'Incoming transactions',
      path: 'incoming-transactions',
    },
    {
      name: 'Providers',
      path: 'providers',
    },
    {
      name: 'Outgoing transactions',
      path: 'outgoing-transactions',
    },
    {
      name: 'Recipients',
      path: 'recipients',
    },
    {
      name: 'Timeliness',
      path: 'timeliness',
    },
    {
      name: 'Coverage',
      path: 'coverage',
    },
  ],
  showPublisherLink: true,
};
