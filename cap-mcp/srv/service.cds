using { API_BUSINESS_PARTNER as bupa } from './external/API_BUSINESS_PARTNER';

service Bupa {
    @mcp: {
    name       : 'Business partner email address',
    description: 'Bupa email address catalog',
    resource   : [
        'filter',
        'orderby',
        'select',
        'top',
        'skip'
        ]
    }
    entity A_AddressEmailAddress as projection on bupa.A_AddressEmailAddress;
    entity A_AddressFaxNumber as projection on bupa.A_AddressFaxNumber;
    entity A_AddressHomePageURL as projection on bupa.A_AddressHomePageURL;
    entity A_AddressPhoneNumber as projection on bupa.A_AddressPhoneNumber;
    entity A_BPAddrDepdntIntlLocNumber as projection on bupa.A_BPAddrDepdntIntlLocNumber;
    entity A_BPAddressIndependentEmail as projection on bupa.A_BPAddressIndependentEmail;
    entity A_BPAddressIndependentFax as projection on bupa.A_BPAddressIndependentFax;
    entity A_BPAddressIndependentMobile as projection on bupa.A_BPAddressIndependentMobile;

    entity A_BPAddressIndependentPhone as projection on bupa.A_BPAddressIndependentPhone;
    entity A_BPAddressIndependentWebsite as projection on bupa.A_BPAddressIndependentWebsite;
    entity A_BPContactPersonEmlAddr as projection on bupa.A_BPContactPersonEmlAddr;
    entity A_BPContactPersonFaxNmbr as projection on bupa.A_BPContactPersonFaxNmbr;
    entity A_BPContactPersonMblNmbr as projection on bupa.A_BPContactPersonMblNmbr;
    entity A_BPContactPersonTelNmbr as projection on bupa.A_BPContactPersonTelNmbr;
    entity A_BPContactPersonWbsteURL as projection on bupa.A_BPContactPersonWbsteURL;
    entity A_BPContactToAddress as projection on bupa.A_BPContactToAddress;
    entity A_BPContactToFuncAndDept as projection on bupa.A_BPContactToFuncAndDept;
    entity A_BPCreditWorthiness as projection on bupa.A_BPCreditWorthiness;
    entity A_BPDataController as projection on bupa.A_BPDataController;
    entity A_BPEmployment as projection on bupa.A_BPEmployment;
    entity A_BPFinancialServicesExtn as projection on bupa.A_BPFinancialServicesExtn;
    entity A_BPFinancialServicesReporting as projection on bupa.A_BPFinancialServicesReporting;
    entity A_BPFiscalYearInformation as projection on bupa.A_BPFiscalYearInformation;
    entity A_BPIntlAddressVersion as projection on bupa.A_BPIntlAddressVersion;
    entity A_BPRelationship as projection on bupa.A_BPRelationship;
    entity A_BuPaAddressUsage as projection on bupa.A_BuPaAddressUsage;
    entity A_BuPaIdentification as projection on bupa.A_BuPaIdentification;
    entity A_BuPaIndustry as projection on bupa.A_BuPaIndustry;
    @mcp: {
    name       : 'Business partner list',
    description: 'Bupa email address catalog',
    resource   : [
        'filter',
        'orderby',
        'select',
        'top',
        'skip'
        ]
    }
    entity A_BusinessPartner as projection on bupa.A_BusinessPartner;

  // Optionally expose Books as tools for LLMs (query/get enabled by default config)
    annotate A_BusinessPartner with @mcp.wrap: {
    tools: true,
    modes: [
      'query',
      'get'
    ],
    hint : 'Use for read-only lookups of books'
  };
}