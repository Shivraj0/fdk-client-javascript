export class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
export class Billing {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get invoices
      * @description: Get invoices.
      * @param {Object} arg - arg object.
      
      **/
    getInvoices({}?: any): any;
    /**
      *
      * @summary: Get invoice by id
      * @description: Get invoice by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.invoiceId - Invoice id
      
      **/
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): any;
    /**
      *
      * @summary: Get subscription customer detail
      * @description: Get subscription customer detail.
      * @param {Object} arg - arg object.
      
      **/
    getCustomerDetail({}?: any): any;
    /**
     *
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     * @param {Object} arg - arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     **/
    upsertCustomerDetail({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get current subscription detail
      * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
  
      * @param {Object} arg - arg object.
      
      **/
    getSubscription({}?: any): any;
    /**
      *
      * @summary: Get subscription subscription limits
      * @description: Get subscription subscription limits.
      * @param {Object} arg - arg object.
      
      **/
    getFeatureLimitConfig({}?: any): any;
    /**
     *
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     * @param {Object} arg - arg object.
     * @param {SubscriptionActivateReq} arg.body
     **/
    activateSubscriptionPlan({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     * @param {Object} arg - arg object.
     * @param {CancelSubscriptionReq} arg.body
     **/
    cancelSubscriptionPlan({ body }?: {
        body: any;
    }): any;
}
export class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: any;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: any;
    }): any;
}
export class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): any;
}
export class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     * @param {Object} arg - arg object.
     * @param {CompanyStoreSerializerRequest} arg.body
     **/
    updateCompany({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
    /**
      *
      * @summary: Get company metrics
      * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
     *
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     * @param {Object} arg - arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    editBrand({ brandId, body }?: {
        brandId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get a single brand.
      * @description: This API helps to get data associated to a particular brand.
      * @param {Object} arg - arg object.
      * @param {string} arg.brandId - Id of the brand to be viewed.
      
      **/
    getBrand({ brandId }?: {
        brandId: string;
    }): any;
    /**
     *
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      
      **/
    getBrands({}?: any): any;
    /**
     *
     * @summary: Create a location asscoiated to a company.
     * @description: This API allows to create a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {LocationSerializer} arg.body
     **/
    createLocation({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     **/
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get details of a specific location.
      * @description: This API helps to get data associated to a specific location.
      * @param {Object} arg - arg object.
      * @param {string} arg.locationId - Id of the location which you want to view.
      
      **/
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): any;
}
export class Assets {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    companyCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: any;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowse({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowsePaginator({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
export class Inventory {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get Job Configs For A Company
      * @description: REST Endpoint that returns all job configs for a company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    updateJob({ body, xUserData }?: {
        xUserData?: string;
        body: any;
    }): any;
    /**
     *
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    createJob({ body, xUserData }?: {
        xUserData?: string;
        body: any;
    }): any;
    /**
      *
      * @summary: Get Job Configs By Company And Integration
      * @description: REST Endpoint that returns all job configs by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get Job Configs Defaults
      * @description: REST Endpoint that returns default fields job configs by company And integration
      * @param {Object} arg - arg object.
      
      **/
    getJobConfigDefaults({}?: any): any;
    /**
      *
      * @summary: Get Job Config By Code
      * @description: REST Endpoint that returns job config by code
      * @param {Object} arg - arg object.
      * @param {string} arg.code - Job Code
      
      **/
    getJobByCode({ code }?: {
        code: string;
    }): any;
    /**
      *
      * @summary: Get Job Codes By Company And Integration
      * @description: REST Endpoint that returns all job codes by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
}
export class Configuration {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create application
     * @description: Create new application
     * @param {Object} arg - arg object.
     * @param {CreateApplicationRequest} arg.body
     **/
    createApplication({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {object} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: object;
    }): any;
    /**
      *
      * @summary: Get all currencies
      * @description: Get all currencies
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
     *
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     * @param {Object} arg - arg object.
     * @param {DomainSuggestionsRequest} arg.body
     **/
    getDomainAvailibility({ body }?: {
        body: any;
    }): any;
    /**
      *
      * @summary: Get integration data
      * @description: Get integration data
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Integration id
      
      **/
    getIntegrationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get integration level config
      * @description: Get integration level config
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      
      **/
    getIntegrationLevelConfig({ id, level }?: {
        id: string;
        level: string;
    }): any;
    /**
      *
      * @summary: Get level data for integration
      * @description: Get level data for integration
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Check store has active integration
      * @description: API checks if a store is already opted in any other integrations
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Get brands by company
      * @description: Get brands by company
      * @param {Object} arg - arg object.
      
      **/
    getBrandsByCompany({}?: any): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: any;
    }): any;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: any;
    }): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      
      **/
    getOtherSellerApplications({}?: any): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller application
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Application Id
      
      **/
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     **/
    optOutFromApplication({ id, body }?: {
        id: string;
        body: any;
    }): any;
}
