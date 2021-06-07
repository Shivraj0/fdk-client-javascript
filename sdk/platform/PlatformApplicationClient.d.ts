export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
    theme: Theme;
    user: User;
    content: Content;
    assignment: Assignment;
    communication: Communication;
    payment: Payment;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
}
declare namespace PlatformApplicationClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, UserSchema, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, ErrorResponseSchema, Success, CreatedModifiedByObject, PickupPointResponse, PickupPointSchema, ItemProperties, AddressObject, AdditionalContactsObject, TimingObject, OpeningClosingObject, PickupResponse, PickupConfiguration, PickupResponseItems, ShippingSchema, ShippingResponse, AssignmentSchema, FulfillmentPriorityObject, StoreSchema, StoreResponse, StoreAssignmentObject, StrategyObject, StrategyItems, StoreListResponse, ZoneSchema, ZoneListResponse, RegionObject, PincodeObject, RadiusObject, ZoneDetailsObject, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BankDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, ErrorResponse, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, ProductListingActionPage, ProductListingAction, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, Schedule, SeoDetail, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, UserCommon, Attributes, ProductPublished, Logo, Brand, ImageObject, Product, ProductListingResponse, TeaserTag, CustomOrder, ReturnConfig, ProductPublish, OrderQuantity, Trader, ProductCreateUpdate, ValidateProduct, UserDetail, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkProductRequest, NestedTags, ProductTagsViewResponse, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryDeleteData, InventoryDelete, BulkInventoryGetItems, BulkInventoryGet, CommonResponse, Size1, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, FilerList, InventoryConfig, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, BusinessCountryInfo, CompanyAddress, ReferralInfo, Document, CompanyStoreSerializerRequest, SellerPhoneNumber, ContactDetails, GetAddressSerializer, BusinessCountryInfo1, Website, BusinessDetails, GetCompanyProfileSerializerResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, CreateUpdateBrandRequestSerializer, UserSerializer1, GetBrandResponseSerializer, CompanyBrandPostRequestSerializer, GetCompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, GetAddressSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, LocationSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, RuleDefinition, DisplayMetaDict, DisplayMeta, Ownership, Validity, Identifier, Validation, CouponSchedule, Rule, CouponAction, PaymentAllowValue, PaymentModes, PaymentCodes, PostOrder, PriceRange, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, CouponAuthor, State, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CartItem, Breakup, ProductSizeChart, ProductImage, ProductListingBrandLogo, ProductWithSize, CartDetail, CartItems, OpenapiCartDetailsRequest, CategoryInfo, ActionQuery, ProductAction, Image, BaseInfo, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductInfo, DisplayBreakup, CouponBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, CartViewRequestSerializer, AddressSerializerV1, ServiceablityReqSerializer, CartDetailsResponseSerializer, AddressSerializer, OrderCartItem, OpenApiFiles, OpenApiCheckoutReq, ConfirmPaymentReqSerializer, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, ApiError, RemoveProxyResponse, EventConfig, EventConfigList, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberEvent, AuthMeta };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */
/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { string } priority
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } priority
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [sub_category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
        @property { Array<Object> } [notify]
        
         
    */
/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */
/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */
/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { Object } value
        
         
    */
/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } access_token
        
         
    */
/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */
/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
    */
/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */
/**
        @typedef TicketContext
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
    */
/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */
/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */
/**
        @typedef AddTicketPayload
        
        
        @property { Object } [created_by]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */
/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
        @property { Array<TicketSubCategory> } [sub_categories]
        
         
    */
/**
        @typedef TicketSubCategory
        
        
        @property { string } key
        
        @property { string } display
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Priority } priority
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { TicketSubCategory } [sub_category]
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { boolean } [is_feedback_pending]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Activity
        
        
        @property { Object } [current_state]
        
        @property { string } [document_id]
        
        @property { Object } [previous_state]
        
         
    */
/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<AddMediaRequest> } [media_list]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
         
    */
/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloud_id]
        
        @property { string } [cloud_name]
        
        @property { string } [cloud_provider]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { string } [media_url]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnail_url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entity_type]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */
/**
        @typedef Attribute
        
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */
/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef CursorGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef DateMeta
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef DeviceMeta
        
        
        @property { string } [app_version]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EntityRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
         
    */
/**
        @typedef FeedbackAttributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef FeedbackError
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef FeedbackState
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
    */
/**
        @typedef GetResponse
        
        
        @property { Object } [data]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetReviewResponse
        
        
        @property { Array<ReviewFacet> } [facets]
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
        @property { Array<SortMethod> } [sort]
        
         
    */
/**
        @typedef InsertResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef MediaMeta
        
        
        @property { number } [max_count]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef MediaMetaRequest
        
        
        @property { number } max_count
        
        @property { number } size
        
         
    */
/**
        @typedef NumberGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageCursor
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { number } size
        
        @property { string } type
        
         
    */
/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributes_slugs]
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef RatingRequest
        
        
        @property { Array<string> } attributes
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entity_id
        
        @property { string } entity_type
        
         
    */
/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [image_meta]
        
        @property { string } [title]
        
        @property { MediaMeta } [video_meta]
        
        @property { boolean } [vote_allowed]
        
         
    */
/**
        @typedef ReviewFacet
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [slug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ReviewRequest
        
        
        @property { string } description
        
        @property { string } header
        
        @property { MediaMetaRequest } image_meta
        
        @property { boolean } is_vote_allowed
        
        @property { string } title
        
        @property { MediaMetaRequest } video_meta
        
         
    */
/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */
/**
        @typedef SortMethod
        
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [type]
        
         
    */
/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Template
        
        
        @property { DateMeta } [date_meta]
        
        @property { Entity } [entity]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Rating } [rating]
        
        @property { Review } [review]
        
        @property { FeedbackState } [state]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef TemplateGetResponse
        
        
        @property { Array<Template> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } template_list
        
         
    */
/**
        @typedef UI
        
        
        @property { Array<string> } [feedback_question]
        
        @property { UIIcon } [icon]
        
        @property { Array<string> } [text]
        
        @property { string } [type]
        
         
    */
/**
        @typedef UIIcon
        
        
        @property { string } [active]
        
        @property { string } [inactive]
        
        @property { Array<string> } [selected]
        
         
    */
/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */
/**
        @typedef UpdateResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributes_rating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [device_meta]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<MediaMeta> } [media_resource]
        
        @property { number } [rating]
        
        @property { string } [review_id]
        
        @property { string } [template_id]
        
        @property { string } [title]
        
         
    */
/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef UpdateTemplateStatusRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
         
    */
/**
        @typedef AvailablePageSchema
        
        
        @property { string } [value]
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { Array<AvailablePageSchemaSections> } [sections]
        
        @property { Array<AvailablePageSectionMetaAttributes> } [sections_meta]
        
        @property { string } [theme]
        
        @property { AvailablePageSeo } [seo]
        
        @property { Array<Object> } [props]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef AvailablePageSectionMetaAttributes
        
        
        @property { Object } [attributes]
        
         
    */
/**
        @typedef AvailablePageSeo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef AvailablePageSchemaSections
        
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Array<Object> } [blocks]
        
        @property { Object } [preset]
        
        @property { AvailablePagePredicate } [predicate]
        
         
    */
/**
        @typedef AvailablePageScreenPredicate
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */
/**
        @typedef AvailablePageUserPredicate
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */
/**
        @typedef AvailablePageRoutePredicate
        
        
        @property { string } [selected]
        
        @property { string } [exact_url]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef AvailablePagePredicate
        
        
        @property { AvailablePageScreenPredicate } [screen]
        
        @property { AvailablePageUserPredicate } [user]
        
        @property { AvailablePageRoutePredicate } [route]
        
         
    */
/**
        @typedef AllAvailablePageSchema
        
        
        @property { Array<AvailablePageSchema> } [pages]
        
         
    */
/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [theme_id]
        
         
    */
/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parent_theme]
        
        @property { string } [applied_theme]
        
        @property { boolean } [upgrade]
        
         
    */
/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [last_modified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */
/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [version]
        
        @property { string } [parent_theme_version]
        
        @property { string } [parent_theme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { Array<availableSectionSchema> } [available_sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [_id]
        
        @property { number } [__v]
        
        @property { Colors } [colors]
        
         
    */
/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */
/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */
/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umd_js]
        
        @property { CommonJs } [common_js]
        
        @property { Css } [css]
        
         
    */
/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */
/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [global_schema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */
/**
        @typedef Preset
        
        
        @property { Array<AvailablePageSchema> } [sections]
        
         
    */
/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Colors
        
        
        @property { string } [bg_color]
        
        @property { string } [primary_color]
        
        @property { string } [secondary_color]
        
        @property { string } [accent_color]
        
        @property { string } [link_color]
        
        @property { string } [button_secondary_color]
        
         
    */
/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */
/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */
/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semi_bold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */
/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */
/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { EditProfileMobileSchema } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef EditProfileMobileSchema
        
        
        @property { string } [phone]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef VerifyEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
        @property { string } [captcha_code]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */
/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */
/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captcha_code]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef UserObjectSchema
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef ProfileEditSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [email]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { string } [email]
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */
/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */
/**
        @typedef OtpSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
    */
/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */
/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */
/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */
/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */
/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */
/**
        @typedef RequiredFields
        
        
        @property { PlatformEmail } [email]
        
        @property { PlatformMobile } [mobile]
        
         
    */
/**
        @typedef PlatformEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef PlatformMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
    */
/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [_id]
        
        @property { string } [robots_txt]
        
        @property { boolean } [sitemap_enabled]
        
        @property { Array<Object> } [custom_meta_tags]
        
        @property { Detail } [details]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [page_slug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EditorMeta
        
        
        @property { string } [foreground_color]
        
        @property { string } [background_color]
        
        @property { string } [content_type]
        
        @property { string } [content]
        
         
    */
/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [_id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editor_meta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [created_at]
        
        @property { string } [app]
        
        @property { string } [modified_at]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */
/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
         
    */
/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef AnnouncementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */
/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */
/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Asset
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [id]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BlogSchema
        
        
        @property { string } [_id]
        
        @property { Object } [_custom_json]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [date_meta]
        
         
    */
/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */
/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [_custom_json]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
         
    */
/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */
/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [en_us]
        
         
    */
/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */
/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [_locale_language]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sort_order]
        
        @property { NavigationReference } [sub_navigation]
        
         
    */
/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleep_time]
        
        @property { boolean } [start_on_launch]
        
        @property { number } [duration]
        
        @property { string } [slide_direction]
        
         
    */
/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bg_color]
        
        @property { number } [duration]
        
        @property { boolean } [auto_decide_duration]
        
        @property { Action } [action]
        
         
    */
/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */
/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */
/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */
/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [content]
        
         
    */
/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */
/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */
/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */
/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [icon_url]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */
/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */
/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */
/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */
/**
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */
/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */
/**
        @typedef NavigationSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef CustomPageSchema
        
        
        @property { string } [_id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */
/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */
/**
        @typedef FeatureImage
        
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */
/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */
/**
        @typedef PageSpecItem
        
        
        @property { string } [page_type]
        
        @property { string } [display_name]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */
/**
        @typedef PageSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { Array<string> } [component_ids]
        
        @property { Array<PageContent> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { Asset } [feature_image]
        
        @property { Array<PageMeta> } [page_meta]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */
/**
        @typedef CreatedBySchema
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [application]
        
        @property { Author } [author]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */
/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [system_pages]
        
        @property { Array<Object> } [custom_pages]
        
        @property { string } [application_id]
        
         
    */
/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [_id]
        
        @property { string } [config_type]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { ContactSchema } [contact]
        
         
    */
/**
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */
/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
    */
/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */
/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */
/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef ErrorResponseSchema
        
        
        @property { string } [message]
        
        @property { number } [code]
        
         
    */
/**
        @typedef Success
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CreatedModifiedByObject
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef PickupPointResponse
        
        
        @property { Array<ItemProperties> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PickupPointSchema
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef ItemProperties
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef AddressObject
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef AdditionalContactsObject
        
        
        @property { number } [number]
        
        @property { number } [country_code]
        
         
    */
/**
        @typedef TimingObject
        
        
        @property { OpeningClosingObject } [opening]
        
        @property { OpeningClosingObject } [closing]
        
        @property { boolean } [open]
        
        @property { string } [weekday]
        
         
    */
/**
        @typedef OpeningClosingObject
        
        
        @property { string } [hour]
        
        @property { string } [minute]
        
         
    */
/**
        @typedef PickupResponse
        
        
        @property { Array<PickupResponseItems> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PickupConfiguration
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
         
    */
/**
        @typedef PickupResponseItems
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef ShippingSchema
        
        
        @property { AssignmentSchema } [assignment]
        
        @property { string } [_id]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef ShippingResponse
        
        
        @property { ShippingSchema } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef AssignmentSchema
        
        
        @property { FulfillmentPriorityObject } [fulfillment_priority]
        
        @property { string } [default_sort_strategy]
        
         
    */
/**
        @typedef FulfillmentPriorityObject
        
        
        @property { string } [priorities]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef StoreSchema
        
        
        @property { StoreAssignmentObject } [assignment]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef StoreResponse
        
        
        @property { StoreSchema } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef StoreAssignmentObject
        
        
        @property { StrategyObject } [strategy]
        
        @property { string } [assignment_type]
        
         
    */
/**
        @typedef StrategyObject
        
        
        @property { Array<StrategyItems> } [rules]
        
         
    */
/**
        @typedef StrategyItems
        
        
        @property { Array<string> } [product_tags]
        
        @property { string } [zone]
        
         
    */
/**
        @typedef StoreListResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ZoneSchema
        
        
        @property { ZoneDetailsObject } [zone_detail]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef ZoneListResponse
        
        
        @property { Array<ZoneSchema> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef RegionObject
        
        
        @property { string } [country]
        
        @property { string } [state]
        
         
    */
/**
        @typedef PincodeObject
        
        
        @property { Array<number> } [pincode_list]
        
         
    */
/**
        @typedef RadiusObject
        
        
        @property { number } [value]
        
         
    */
/**
        @typedef ZoneDetailsObject
        
        
        @property { RadiusObject } [radius]
        
        @property { PincodeObject } [pincode]
        
        @property { RegionObject } [region]
        
         
    */
/**
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef PlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [interval_count]
        
         
    */
/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef DetailedPlanComponents
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { string } [group]
        
        @property { string } [icon]
        
        @property { Object } [links]
        
        @property { boolean } [enabled]
        
        @property { string } [display_text]
        
         
    */
/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */
/**
        @typedef SubscriptionTrialPeriod
        
        
        @property { string } [start_date]
        
        @property { string } [end_date]
        
         
    */
/**
        @typedef EntityChargePrice
        
        
        @property { number } amount
        
        @property { string } currency_code
        
         
    */
/**
        @typedef EntityChargeRecurring
        
        
        @property { string } interval
        
        @property { number } interval_time
        
         
    */
/**
        @typedef ChargeLineItem
        
        
        @property { string } name
        
        @property { string } term
        
        @property { string } pricing_type
        
        @property { EntityChargePrice } price
        
        @property { EntityChargeRecurring } [recurring]
        
        @property { number } [capped_amount]
        
        @property { Object } [metadata]
        
         
    */
/**
        @typedef CreateSubscriptionCharge
        
        
        @property { string } name
        
        @property { number } [trial_days]
        
        @property { Array<ChargeLineItem> } line_items
        
        @property { boolean } [is_test]
        
        @property { string } return_url
        
         
    */
/**
        @typedef CurrentPeriod
        
        
        @property { string } [start_date]
        
        @property { string } [end_date]
        
         
    */
/**
        @typedef SubscriptionCharge
        
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [term]
        
        @property { string } [pricing_type]
        
        @property { EntityChargePrice } [price]
        
        @property { EntityChargeRecurring } [recurring]
        
        @property { number } [capped_amount]
        
        @property { string } [activated_on]
        
        @property { string } [cancelled_on]
        
        @property { string } [billing_date]
        
        @property { CurrentPeriod } [current_period]
        
        @property { string } [status]
        
        @property { boolean } [is_test]
        
        @property { Object } [metadata]
        
         
    */
/**
        @typedef EntitySubscription
        
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [status]
        
        @property { number } [company_id]
        
        @property { string } [activated_on]
        
        @property { string } [cancelled_on]
        
        @property { number } [trial_days]
        
        @property { SubscriptionTrialPeriod } [trial_period]
        
        @property { Object } [metadata]
        
        @property { Array<SubscriptionCharge> } [line_items]
        
         
    */
/**
        @typedef CreateSubscriptionResponse
        
        
        @property { EntitySubscription } [subscription]
        
        @property { string } [confirm_url]
        
         
    */
/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [address_lines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [_id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvc_check]
        
        @property { string } [address_line1_check]
        
        @property { string } [address_postal_code_check]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataNetworks
        
        
        @property { Array<string> } [available]
        
        @property { string } [preferred]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
        
        
        @property { boolean } [supported]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsData
        
        
        @property { string } [brand]
        
        @property { string } [last4]
        
        @property { InvoiceDetailsPaymentMethodsDataChecks } [checks]
        
        @property { string } [wallet]
        
        @property { string } [country]
        
        @property { string } [funding]
        
        @property { number } [exp_year]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [exp_month]
        
        @property { string } [fingerprint]
        
        @property { string } [generated_from]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [three_d_secure_usage]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pg_payment_method_id]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */
/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [_id]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicePaymentMethod } [payment_method]
        
         
    */
/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [interval_count]
        
         
    */
/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceItems
        
        
        @property { string } [_id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unit_amount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoice_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
    */
/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [address_lines]
        
         
    */
/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */
/**
        @typedef InvoicesData
        
        
        @property { string } [_id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicesDataPaymentMethod } [payment_method]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
    */
/**
        @typedef Invoices
        
        
        @property { Array<InvoicesData> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */
/**
        @typedef Phone
        
        
        @property { string } [phone_number]
        
        @property { string } [phone_country_code]
        
         
    */
/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postal_code]
        
         
    */
/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [_id]
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef SubscriptionCurrentPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionPauseCollection
        
        
        @property { string } [behavior]
        
        @property { string } [resume_at]
        
         
    */
/**
        @typedef SubscriptionTrial
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionInvoiceSettings
        
        
        @property { boolean } [generation]
        
        @property { boolean } [charging]
        
         
    */
/**
        @typedef Subscription
        
        
        @property { SubscriptionCurrentPeriod } [current_period]
        
        @property { SubscriptionPauseCollection } [pause_collection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoice_settings]
        
        @property { boolean } [is_active]
        
        @property { boolean } [cancel_at_period_end]
        
        @property { string } [_id]
        
        @property { string } [subscriber_id]
        
        @property { string } [plan_id]
        
        @property { string } [product_suite_id]
        
        @property { Plan } [plan_data]
        
        @property { string } [current_status]
        
        @property { string } [collection_method]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [latest_invoice]
        
         
    */
/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [is_enabled]
        
        @property { Subscription } [subscription]
        
         
    */
/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hard_limit]
        
        @property { number } [soft_limit]
        
         
    */
/**
        @typedef SubscriptionLimitMarketplace
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitOtherPlatform
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitTeam
        
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitProducts
        
        
        @property { boolean } [bulk]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitExtensions
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitIntegrations
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimit
        
        
        @property { SubscriptionLimitApplication } [application]
        
        @property { SubscriptionLimitMarketplace } [marketplace]
        
        @property { SubscriptionLimitOtherPlatform } [other_platform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [is_trial_plan]
        
         
    */
/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [plan_id]
        
        @property { string } [payment_method]
        
         
    */
/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [subscription_id]
        
         
    */
/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */
/**
        @typedef Stats
        
        
        @property { string } [_id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */
/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */
/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */
/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CampignEmailProvider
        
        
        @property { string } [_id]
        
        @property { string } [from_name]
        
        @property { string } [from_email]
        
         
    */
/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */
/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipient_headers]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */
/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */
/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phone_number]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */
/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */
/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */
/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */
/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef TemplateAndType
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef EmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */
/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [is_default]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */
/**
        @typedef TriggerJobRequest
        
        
        @property { string } [job_id]
        
         
    */
/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Jobs
        
        
        @property { Array<Job> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [_id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */
/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */
/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */
/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expire_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
         
    */
/**
        @typedef PushtokenRes
        
        
        @property { string } [_id]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [application_id]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [expired_at]
        
         
    */
/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */
/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [click_action]
        
         
    */
/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [time_to_live]
        
         
    */
/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [_id]
        
        @property { string } [group]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
         
    */
/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [last_read_anchor]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<string> } excluded_fields
        
        @property { string } app_id
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } display_fields
        
        @property { boolean } success
        
        @property { boolean } created
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } config_type
        
        @property { boolean } [is_active]
        
        @property { string } secret
        
        @property { string } key
        
        @property { string } merchant_salt
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { string } app_id
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { Array<string> } aggregator
        
        @property { boolean } success
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [card_name]
        
        @property { string } [display_name]
        
        @property { string } [fynd_vpa]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [card_reference]
        
        @property { number } [exp_year]
        
        @property { string } [card_isin]
        
        @property { PaymentModeLogo } [logo_url]
        
        @property { string } [code]
        
        @property { string } [card_issuer]
        
        @property { string } [intent_flow]
        
        @property { string } [merchant_code]
        
        @property { string } [card_id]
        
        @property { string } [card_token]
        
        @property { string } [card_number]
        
        @property { boolean } [expired]
        
        @property { number } [timeout]
        
        @property { string } [card_type]
        
        @property { string } [card_brand]
        
        @property { number } [retry_count]
        
        @property { string } [card_brand_image]
        
        @property { string } aggregator_name
        
        @property { number } [exp_month]
        
        @property { string } [name]
        
        @property { number } [display_priority]
        
        @property { string } [card_fingerprint]
        
        @property { string } [nickname]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [anonymous_enable]
        
        @property { string } display_name
        
        @property { Array<PaymentModeList> } [list]
        
        @property { boolean } [add_card_enabled]
        
        @property { string } [aggregator_name]
        
        @property { string } name
        
        @property { number } display_priority
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } payment_options
        
        @property { boolean } success
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { Object } more_attributes
        
        @property { string } transfer_type
        
        @property { Array<Object> } payouts_aggregators
        
        @property { boolean } is_active
        
        @property { Object } customers
        
        @property { boolean } is_default
        
        @property { Object } unique_transfer_no
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } transfer_type
        
        @property { string } unique_external_id
        
        @property { boolean } is_active
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { Object } bank_details
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } payment_status
        
        @property { string } transfer_type
        
        @property { Object } payouts
        
        @property { boolean } is_active
        
        @property { boolean } created
        
        @property { Object } users
        
        @property { boolean } success
        
        @property { string } aggregator
        
        @property { Object } bank_details
        
        @property { string } unique_transfer_no
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } is_default
        
        @property { boolean } success
        
        @property { boolean } is_active
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } is_default
        
        @property { string } unique_external_id
        
        @property { boolean } is_active
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } unique_external_id
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */
/**
        @typedef BankDetails
        
        
        @property { string } [address]
        
        @property { string } email
        
        @property { string } ifsc_code
        
        @property { string } account_no
        
        @property { string } [comment]
        
        @property { string } mobile
        
        @property { string } account_holder
        
        @property { string } branch_name
        
        @property { string } bank_name
        
         
    */
/**
        @typedef AddBeneficiaryDetailsRequest
        
        
        @property { BankDetails } details
        
        @property { boolean } delights
        
        @property { string } shipment_id
        
        @property { string } order_id
        
        @property { string } transfer_mode
        
         
    */
/**
        @typedef RefundAccountResponse
        
        
        @property { string } message
        
        @property { boolean } success
        
        @property { Object } [data]
        
         
    */
/**
        @typedef NotFoundResourceError
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */
/**
        @typedef IfscCodeResponse
        
        
        @property { boolean } [success]
        
        @property { string } branch_name
        
        @property { string } bank_name
        
         
    */
/**
        @typedef OrderBeneficiaryDetails
        
        
        @property { string } display_name
        
        @property { string } beneficiary_id
        
        @property { string } delights_user_name
        
        @property { boolean } is_active
        
        @property { string } email
        
        @property { boolean } [mobile]
        
        @property { boolean } [branch_name]
        
        @property { string } bank_name
        
        @property { string } address
        
        @property { string } created_on
        
        @property { string } modified_on
        
        @property { string } account_holder
        
        @property { string } transfer_mode
        
        @property { number } id
        
        @property { string } account_no
        
        @property { boolean } [comment]
        
        @property { string } title
        
        @property { string } ifsc_code
        
        @property { string } subtitle
        
         
    */
/**
        @typedef OrderBeneficiaryResponse
        
        
        @property { Array<OrderBeneficiaryDetails> } beneficiaries
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sort_on
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { SearchKeywordResult } result
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { Object } [_custom_json]
        
        @property { string } [uid]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { string } type
        
        @property { Object } [params]
        
        @property { Object } query
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { Object } [_custom_json]
        
        @property { Media } [logo]
        
        @property { AutocompleteAction } [action]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { boolean } [is_active]
        
        @property { Array<AutocompleteResult> } [results]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Object } [_custom_json]
        
        @property { string } [uid]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [_custom_json]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [auto_add_to_cart]
        
        @property { number } product_uid
        
        @property { number } max_quantity
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_select]
        
        @property { number } min_quantity
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } [created_on]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { number } [company_id]
        
        @property { string } slug
        
        @property { string } [id]
        
        @property { boolean } is_active
        
        @property { string } name
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } [created_on]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } slug
        
        @property { boolean } is_active
        
        @property { string } name
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [modified_on]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } slug
        
        @property { boolean } is_active
        
        @property { string } name
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { boolean } [is_available]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Object } [identifier]
        
        @property { Array<string> } [sizes]
        
        @property { string } [short_description]
        
        @property { number } [uid]
        
        @property { string } [country_of_origin]
        
        @property { Object } [attributes]
        
        @property { Array<string> } [images]
        
        @property { number } [quantity]
        
        @property { Object } [price]
        
        @property { string } [slug]
        
        @property { string } [item_code]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Price
        
        
        @property { string } [currency]
        
        @property { number } [min_effective]
        
        @property { number } [max_marked]
        
        @property { number } [min_marked]
        
        @property { number } [max_effective]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { boolean } [auto_add_to_cart]
        
        @property { Array<Size> } [sizes]
        
        @property { LimitedProductData } [product_details]
        
        @property { number } [product_uid]
        
        @property { boolean } [allow_remove]
        
        @property { number } [max_quantity]
        
        @property { boolean } [auto_select]
        
        @property { Price } [price]
        
        @property { number } [min_quantity]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { number } [company_id]
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [logo]
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef Meta
        
        
        @property { string } [unit]
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [image]
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { Object } [created_by]
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [id]
        
        @property { string } title
        
        @property { boolean } [active]
        
        @property { number } [brand_id]
        
        @property { Guide } [guide]
        
        @property { string } [subtitle]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
        @property { Object } [created_by]
        
        @property { number } [company_id]
        
        @property { Object } [modified_by]
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [title]
        
        @property { number } [brand_id]
        
        @property { Object } [guide]
        
        @property { string } [subtitle]
        
        @property { string } [name]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { Array<string> } [filter_types]
        
        @property { Array<Object> } [units]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [similar]
        
        @property { Object } [compare]
        
        @property { Object } [detail]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } [name]
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { string } default_key
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [start]
        
        @property { number } [end]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { Object } [map]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { ConfigurationListingFilterValue } [value_config]
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } type
        
        @property { string } [logo]
        
        @property { boolean } is_active
        
        @property { string } [name]
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allow_single
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
        @property { string } display_type
        
        @property { boolean } is_active
        
        @property { string } name
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } [title]
        
        @property { ProductSize } [size]
        
        @property { boolean } is_active
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { string } config_type
        
        @property { string } [id]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { string } config_type
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } app_id
        
        @property { string } config_type
        
        @property { string } [id]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } [currency_code]
        
        @property { number } [selected_max]
        
        @property { string } value
        
        @property { string } display
        
        @property { string } [currency_symbol]
        
        @property { string } [display_format]
        
        @property { string } [query_format]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { boolean } is_selected
        
        @property { number } [selected_min]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { boolean } [is_selected]
        
        @property { string } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { string } url
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [query]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { ProductListingAction } [action]
        
        @property { string } [app_id]
        
        @property { Object } [_schedule]
        
        @property { Media1 } [logo]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { Object } [meta]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
        @property { string } [uid]
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { Object } [_custom_json]
        
        @property { Object } [query]
        
        @property { UserInfo } [created_by]
        
        @property { CollectionBanner } banners
        
        @property { string } name
        
        @property { boolean } [published]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } app_id
        
        @property { Array<string> } [tags]
        
        @property { string } [sort_on]
        
        @property { Schedule } [_schedule]
        
        @property { CollectionImage } logo
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { Object } [meta]
        
        @property { SeoDetail } [seo]
        
        @property { string } type
        
        @property { CollectionBadge } [badge]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { Object } [_locale_language]
        
        @property { boolean } [is_active]
        
        @property { UserInfo } [modified_by]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [meta]
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { Object } [_schedule]
        
        @property { Object } [badge]
        
        @property { BannerImage } [logo]
        
        @property { boolean } [allow_sort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { Object } [cron]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [meta]
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { Object } [_schedule]
        
        @property { Object } [badge]
        
        @property { Media1 } [logo]
        
        @property { boolean } [allow_sort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { Object } [cron]
        
         
    */
/**
        @typedef UpdateCollection
        
        
        @property { Object } [_custom_json]
        
        @property { Object } [query]
        
        @property { CollectionBanner } [banners]
        
        @property { string } [name]
        
        @property { boolean } [published]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Array<string> } [tags]
        
        @property { string } [sort_on]
        
        @property { Schedule } [_schedule]
        
        @property { CollectionImage } [logo]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { Object } [meta]
        
        @property { SeoDetail } [seo]
        
        @property { CollectionBadge } [badge]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [allow_facets]
        
        @property { Object } [_locale_language]
        
        @property { boolean } [is_active]
        
        @property { UserInfo } [modified_by]
        
         
    */
/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currency_code]
        
        @property { string } [currency_symbol]
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductBrand
        
        
        @property { ProductListingAction } [action]
        
        @property { Media1 } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } [product_online_date]
        
        @property { number } [rating_count]
        
        @property { Object } [promo_meta]
        
        @property { Object } [teaser_tag]
        
        @property { string } [image_nature]
        
        @property { string } [item_type]
        
        @property { string } [item_code]
        
        @property { string } [name]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [short_description]
        
        @property { string } [color]
        
        @property { number } [rating]
        
        @property { string } slug
        
        @property { Array<string> } [similars]
        
        @property { string } [description]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { Object } [attributes]
        
        @property { string } [type]
        
        @property { string } [discount]
        
        @property { ProductListingPrice } [price]
        
        @property { boolean } [has_variant]
        
        @property { boolean } [sellable]
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [highlights]
        
        @property { Array<Media1> } [medias]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_no
        
        @property { number } page_size
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [total_sizes]
        
        @property { number } [total_articles]
        
        @property { number } [available_sizes]
        
        @property { number } [article_freshness]
        
        @property { number } [available_articles]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [out_of_stock_count]
        
        @property { number } [count]
        
        @property { number } [sellable_count]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [store_ids]
        
        @property { string } opt_level
        
        @property { Array<number> } [brand_ids]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { Array<number> } brand_ids
        
        @property { number } created_on
        
        @property { Object } [created_by]
        
        @property { number } company_id
        
        @property { Object } [modified_by]
        
        @property { Array<number> } store_ids
        
        @property { string } opt_level
        
        @property { number } modified_on
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [company_type]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { string } [business_type]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [company_id]
        
        @property { string } [brand_name]
        
        @property { number } [total_article]
        
        @property { number } [brand_id]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Array<CompanyBrandDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { number } [store]
        
        @property { string } [company]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { Array<Object> } [additional_contacts]
        
        @property { string } [store_code]
        
        @property { number } [uid]
        
        @property { Object } [timing]
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { Array<Object> } [documents]
        
        @property { string } [store_type]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef AttributeMaster
        
        
        @property { Array<string> } [allowed_values]
        
        @property { string } [format]
        
        @property { boolean } [mandatory]
        
        @property { string } type
        
        @property { AttributeSchemaRange } [range]
        
        @property { boolean } [multi]
        
         
    */
/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3_keys]
        
         
    */
/**
        @typedef AttributeMasterMeta
        
        
        @property { boolean } [enriched]
        
        @property { AttributeMasterMandatoryDetails } mandatory_details
        
         
    */
/**
        @typedef AttributeMasterFilter
        
        
        @property { boolean } indexing
        
        @property { number } [priority]
        
        @property { Array<string> } [depends_on]
        
         
    */
/**
        @typedef AttributeMasterDetails
        
        
        @property { string } display_type
        
         
    */
/**
        @typedef GenderDetail
        
        
        @property { AttributeMaster } [schema]
        
        @property { string } [description]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } [slug]
        
        @property { boolean } [is_nested]
        
        @property { boolean } [enabled_for_end_consumer]
        
        @property { AttributeMasterDetails } [details]
        
        @property { string } [name]
        
        @property { string } [id]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [uid]
        
        @property { number } [page_no]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [priority_order]
        
        @property { string } [created_on]
        
        @property { UserSerializer } [created_by]
        
        @property { number } [page_size]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [logo]
        
        @property { string } [item_type]
        
        @property { string } [slug]
        
        @property { boolean } [is_active]
        
        @property { string } [search]
        
        @property { string } [name]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { boolean } is_physical
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [attributes]
        
        @property { Object } [created_by]
        
        @property { Array<string> } [categories]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { string } [logo]
        
        @property { string } slug
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { string } [name]
        
        @property { Object } [modified_by]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { ProductTemplate } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Properties
        
        
        @property { Object } [media]
        
        @property { Object } [sizes]
        
        @property { Object } [currency]
        
        @property { Object } [teaser_tag]
        
        @property { Object } [item_type]
        
        @property { Object } [item_code]
        
        @property { Object } [custom_order]
        
        @property { Object } [no_of_boxes]
        
        @property { Object } [name]
        
        @property { Object } [short_description]
        
        @property { Object } [multi_size]
        
        @property { Object } [brand_uid]
        
        @property { Object } [tags]
        
        @property { Object } [return_config]
        
        @property { Object } [trader_type]
        
        @property { Object } [hsn_code]
        
        @property { Object } [slug]
        
        @property { Object } [command]
        
        @property { Object } [description]
        
        @property { Object } [category_slug]
        
        @property { Object } [variants]
        
        @property { Object } [is_dependent]
        
        @property { Object } [product_publish]
        
        @property { Object } [moq]
        
        @property { Object } [highlights]
        
        @property { Object } [trader]
        
        @property { Object } [country_of_origin]
        
        @property { Object } [is_active]
        
        @property { Object } [product_group_tag]
        
        @property { Object } [size_guide]
        
         
    */
/**
        @typedef GlobalValidation
        
        
        @property { string } [description]
        
        @property { string } [type]
        
        @property { Object } [definitions]
        
        @property { Properties } [properties]
        
        @property { string } [title]
        
        @property { Array<string> } [required]
        
         
    */
/**
        @typedef TemplateValidationData
        
        
        @property { Object } [template_validation]
        
        @property { GlobalValidation } [global_validation]
        
         
    */
/**
        @typedef TemplateDetails
        
        
        @property { string } [tag]
        
        @property { string } [description]
        
        @property { boolean } is_physical
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [attributes]
        
        @property { Array<string> } [categories]
        
        @property { string } [logo]
        
        @property { string } slug
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { string } [name]
        
        @property { string } [id]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { TemplateValidationData } [data]
        
        @property { TemplateDetails } [template_details]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { Object } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsn_code]
        
        @property { Array<string> } [country_of_origin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductDownloadItemsData
        
        
        @property { Array<string> } [brand]
        
        @property { string } [type]
        
        @property { Array<string> } [templates]
        
         
    */
/**
        @typedef ProductDownloadsItems
        
        
        @property { string } [trigger_on]
        
        @property { string } [task_id]
        
        @property { number } [seller_id]
        
        @property { string } [status]
        
        @property { string } [url]
        
        @property { VerifiedBy } [created_by]
        
        @property { Object } [template_tags]
        
        @property { ProductDownloadItemsData } [data]
        
        @property { string } [completed_on]
        
        @property { string } [id]
        
         
    */
/**
        @typedef ProductDownloadsResponse
        
        
        @property { ProductDownloadsItems } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ProductConfigurationDownloads
        
        
        @property { Array<Object> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } logo
        
        @property { string } landscape
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalog_id]
        
        @property { string } name
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l1
        
        @property { number } department
        
        @property { number } l2
        
         
    */
/**
        @typedef Category
        
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { number } [uid]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<number> } departments
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { Object } [created_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { Object } [modified_by]
        
        @property { number } level
        
        @property { string } [slug]
        
        @property { boolean } is_active
        
        @property { string } [_id]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [tryouts]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<number> } departments
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { number } level
        
        @property { string } [slug]
        
        @property { boolean } is_active
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [tryouts]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SingleCategoryResponse
        
        
        @property { Category } [data]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [company_id]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [product_fit]
        
        @property { UserCommon } [created_by]
        
        @property { string } [image_nature]
        
        @property { VerifiedBy } [verified_by]
        
        @property { boolean } [is_image_less_product]
        
        @property { string } [primary_color]
        
        @property { string } [color]
        
        @property { string } [pattern]
        
        @property { string } [modified_on]
        
        @property { string } [verified_on]
        
        @property { string } [sleeve_length]
        
        @property { Array<string> } [gender]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [stage]
        
        @property { string } [meta_nature]
        
        @property { string } [material]
        
        @property { string } [essential]
        
        @property { string } [created_on]
        
        @property { string } [primary_material]
        
        @property { string } [neck_type]
        
        @property { Array<string> } [l3_mapping]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef Logo
        
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ImageObject
        
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [secure_url]
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Product
        
        
        @property { Array<Media1> } [media]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [currency]
        
        @property { string } [item_type]
        
        @property { string } [item_code]
        
        @property { string } [name]
        
        @property { string } [id]
        
        @property { boolean } [multi_size]
        
        @property { string } [hsn_code]
        
        @property { number } [company_id]
        
        @property { string } [slug]
        
        @property { string } [template_tag]
        
        @property { string } [description]
        
        @property { string } [category_slug]
        
        @property { boolean } [is_dependent]
        
        @property { Attributes } [attributes]
        
        @property { Array<string> } [all_sizes]
        
        @property { ProductPublished } [product_publish]
        
        @property { number } [uid]
        
        @property { string } [highlights]
        
        @property { Brand } [brand]
        
        @property { string } [country_of_origin]
        
        @property { Array<number> } [departments]
        
        @property { string } [status]
        
        @property { Array<ImageObject> } [images]
        
        @property { boolean } [is_set]
        
        @property { boolean } [is_active]
        
        @property { string } [size_guide]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturing_time]
        
        @property { boolean } [is_custom_order]
        
        @property { string } [manufacturing_time_unit]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { number } [time]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { Object } [_custom_json]
        
        @property { Array<Media1> } [media]
        
        @property { string } currency
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } item_type
        
        @property { string } item_code
        
        @property { string } [requester]
        
        @property { CustomOrder } [custom_order]
        
        @property { number } [no_of_boxes]
        
        @property { string } name
        
        @property { boolean } [is_image_less_product]
        
        @property { string } [short_description]
        
        @property { boolean } [multi_size]
        
        @property { number } brand_uid
        
        @property { Array<string> } [tags]
        
        @property { ReturnConfig } [return_config]
        
        @property { string } [trader_type]
        
        @property { string } hsn_code
        
        @property { number } company_id
        
        @property { string } slug
        
        @property { string } template_tag
        
        @property { string } category_slug
        
        @property { string } [description]
        
        @property { Object } [variants]
        
        @property { boolean } [is_dependent]
        
        @property { string } [change_request_id]
        
        @property { ProductPublish } [product_publish]
        
        @property { OrderQuantity } [moq]
        
        @property { number } [uid]
        
        @property { Array<string> } [highlights]
        
        @property { Trader } [trader]
        
        @property { string } country_of_origin
        
        @property { Array<number> } departments
        
        @property { boolean } [is_set]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [product_group_tag]
        
        @property { string } [size_guide]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [full_name]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { boolean } [is_active]
        
        @property { number } [succeed]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { string } [file_path]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [created_on]
        
        @property { UserDetail } [created_by]
        
        @property { number } [company_id]
        
        @property { ProductTemplate } [template]
        
        @property { UserDetail } [modified_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
        @property { string } [template_tag]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { number } [succeed]
        
        @property { number } total
        
        @property { number } [cancelled]
        
        @property { string } [file_path]
        
        @property { Array<Object> } [failed_records]
        
        @property { string } [custom_template_tag]
        
        @property { string } created_on
        
        @property { UserInfo1 } [created_by]
        
        @property { number } company_id
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modified_by]
        
        @property { string } [tracking_url]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { boolean } [is_active]
        
        @property { number } [failed]
        
        @property { string } [template_tag]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { number } company_id
        
        @property { Array<Object> } data
        
        @property { string } batch_id
        
        @property { string } template_tag
        
         
    */
/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */
/**
        @typedef Items
        
        
        @property { number } [retry]
        
        @property { boolean } [is_active]
        
        @property { number } [succeed]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { string } [file_path]
        
        @property { Array<string> } [failed_records]
        
        @property { UserCommon } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { number } [company_id]
        
        @property { string } [id]
        
        @property { string } [tracking_url]
        
        @property { Array<string> } [cancelled_records]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
        @property { UserCommon } [modified_by]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [company_id]
        
        @property { string } url
        
         
    */
/**
        @typedef ProductSizeDeleteDataResponse
        
        
        @property { number } [company_id]
        
        @property { number } [item_id]
        
        @property { string } [size]
        
         
    */
/**
        @typedef ProductSizeDeleteResponse
        
        
        @property { ProductSizeDeleteDataResponse } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef InventoryResponse
        
        
        @property { string } [inventory_updated_on]
        
        @property { string } [currency]
        
        @property { string } [uid]
        
        @property { Object } [identifiers]
        
        @property { number } [price_transfer]
        
        @property { Object } [store]
        
        @property { number } [quantity]
        
        @property { number } [price]
        
        @property { number } [seller_identifier]
        
        @property { string } [size]
        
        @property { number } [price_effective]
        
        @property { number } [item_id]
        
        @property { number } [sellable_quantity]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtin_value
        
        @property { string } gtin_type
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */
/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */
/**
        @typedef InventorySet
        
        
        @property { SizeDistribution } size_distribution
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { string } store_code
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { string } currency
        
        @property { number } [item_height]
        
        @property { Array<GTIN> } identifiers
        
        @property { number } [price_transfer]
        
        @property { number } [item_width]
        
        @property { number } [item_length]
        
        @property { number } [item_weight]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } quantity
        
        @property { number } price
        
        @property { string } size
        
        @property { number } price_effective
        
        @property { boolean } [is_set]
        
        @property { InventorySet } [set]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [item_code]
        
        @property { number } [brand_uid]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } company_id
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef InventoryDeleteData
        
        
        @property { number } [location_id]
        
        @property { number } [item_id]
        
        @property { string } [size]
        
         
    */
/**
        @typedef InventoryDelete
        
        
        @property { InventoryDeleteData } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef BulkInventoryGetItems
        
        
        @property { number } [succeed]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { string } [file_path]
        
        @property { string } [created_on]
        
        @property { Object } [created_by]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { Object } [modified_by]
        
        @property { string } [id]
        
        @property { string } [stage]
        
        @property { Array<string> } [cancelled_records]
        
        @property { boolean } [is_active]
        
        @property { number } [failed]
        
        @property { Array<string> } [failed_records]
        
         
    */
/**
        @typedef BulkInventoryGet
        
        
        @property { Array<BulkInventoryGetItems> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { string } store_code
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { string } currency
        
        @property { number } [item_height]
        
        @property { Array<Object> } [identifiers]
        
        @property { number } [price_transfer]
        
        @property { number } [item_width]
        
        @property { number } [item_length]
        
        @property { number } [item_weight]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } quantity
        
        @property { number } price
        
        @property { string } seller_identifier
        
        @property { string } [size]
        
        @property { number } price_effective
        
        @property { boolean } [is_set]
        
        @property { InventorySet } [set]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Object } [user]
        
        @property { number } company_id
        
        @property { Array<Size1> } sizes
        
        @property { string } batch_id
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } [trigger_on]
        
        @property { number } seller_id
        
        @property { string } task_id
        
        @property { string } [status]
        
        @property { string } [url]
        
        @property { Object } [request_params]
        
        @property { string } [completed_on]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */
/**
        @typedef HsnCodesObject
        
        
        @property { number } [threshold1]
        
        @property { boolean } [tax_on_mrp]
        
        @property { number } [threshold2]
        
        @property { string } [modified_on]
        
        @property { string } [hsn_code]
        
        @property { number } [company_id]
        
        @property { number } [tax2]
        
        @property { boolean } [tax_on_esp]
        
        @property { string } [hs2_code]
        
        @property { number } [tax1]
        
        @property { string } [id]
        
         
    */
/**
        @typedef PageResponse
        
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { string } [current]
        
        @property { number } [size]
        
         
    */
/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
    */
/**
        @typedef HsnUpsert
        
        
        @property { number } threshold1
        
        @property { number } [uid]
        
        @property { boolean } tax_on_mrp
        
        @property { number } [threshold2]
        
        @property { string } hsn_code
        
        @property { number } company_id
        
        @property { number } [tax2]
        
        @property { boolean } [tax_on_esp]
        
        @property { string } hs2_code
        
        @property { number } tax1
        
         
    */
/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */
/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */
/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef BrandItem
        
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { Array<string> } [departments]
        
        @property { string } [discount]
        
        @property { Media } [logo]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef Department
        
        
        @property { number } [uid]
        
        @property { number } [priority_order]
        
        @property { Media } [logo]
        
        @property { string } [slug]
        
        @property { string } [name]
        
         
    */
/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */
/**
        @typedef ThirdLevelChild
        
        
        @property { Object } [_custom_json]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Array<Object> } [childs]
        
        @property { string } [name]
        
         
    */
/**
        @typedef SecondLevelChild
        
        
        @property { Object } [_custom_json]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Array<ThirdLevelChild> } [childs]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Child
        
        
        @property { Object } [_custom_json]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Array<SecondLevelChild> } [childs]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CategoryItems
        
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Array<Child> } [childs]
        
        @property { string } [name]
        
         
    */
/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */
/**
        @typedef DepartmentIdentifier
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentCategoryTree> } [data]
        
        @property { Array<DepartmentIdentifier> } [departments]
        
         
    */
/**
        @typedef ApplicationProductListingResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sort_on]
        
         
    */
/**
        @typedef ProductDetail
        
        
        @property { string } [product_online_date]
        
        @property { number } [rating_count]
        
        @property { Object } [promo_meta]
        
        @property { Object } [teaser_tag]
        
        @property { string } [image_nature]
        
        @property { string } [item_type]
        
        @property { string } [item_code]
        
        @property { string } [name]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [short_description]
        
        @property { string } [color]
        
        @property { number } [rating]
        
        @property { string } slug
        
        @property { Array<string> } [similars]
        
        @property { string } [description]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { Object } [attributes]
        
        @property { string } [type]
        
        @property { boolean } [has_variant]
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [highlights]
        
        @property { Array<Media1> } [medias]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country_code]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { number } longitude
        
        @property { string } address1
        
        @property { string } [country_code]
        
        @property { string } state
        
        @property { string } [landmark]
        
        @property { string } country
        
        @property { string } [address2]
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { string } city
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referral_code]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } legal_name
        
        @property { string } [url]
        
        @property { string } type
        
        @property { string } value
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } [business_info]
        
        @property { Array<number> } brands
        
        @property { BusinessCountryInfo } business_country_info
        
        @property { string } name
        
        @property { CompanyAddress } address
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<string> } [notification_emails]
        
        @property { string } business_type
        
        @property { ReferralInfo } [referral_info]
        
        @property { Document } document
        
        @property { number } [uid]
        
        @property { Object } [warnings]
        
         
    */
/**
        @typedef SellerPhoneNumber
        
        
        @property { string } number
        
        @property { number } country_code
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<SellerPhoneNumber> } [phone]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { number } [longitude]
        
        @property { string } [address1]
        
        @property { string } [country_code]
        
        @property { string } [state]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { string } [city]
        
        @property { string } [address_type]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country_code]
        
        @property { string } [country]
        
         
    */
/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { Array<Document> } [documents]
        
        @property { number } uid
        
        @property { UserSerializer } [created_by]
        
        @property { string } [created_on]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { Object } [warnings]
        
        @property { UserSerializer } [verified_by]
        
        @property { string } [name]
        
        @property { boolean } [franchise_enabled]
        
        @property { UserSerializer } [modified_by]
        
        @property { Array<string> } [notification_emails]
        
        @property { ContactDetails } [contact_details]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [modified_on]
        
        @property { BusinessCountryInfo1 } [business_country_info]
        
        @property { BusinessDetails } [business_details]
        
        @property { string } business_type
        
        @property { string } [business_info]
        
        @property { string } company_type
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [company_documents]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [store_documents]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [product]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Object } [_locale_language]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } name
        
        @property { string } logo
        
        @property { string } [brand_tier]
        
        @property { string } [description]
        
        @property { number } [company_id]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Object } [_locale_language]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } name
        
        @property { string } [slug_key]
        
        @property { string } [logo]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [description]
        
        @property { string } [stage]
        
        @property { string } [reject_reason]
        
        @property { string } [verified_on]
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
        @property { number } company
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { string } [name]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [stage]
        
        @property { string } [reject_reason]
        
        @property { string } [verified_on]
        
        @property { string } [business_type]
        
        @property { number } [uid]
        
        @property { string } [company_type]
        
        @property { UserSerializer } [verified_by]
        
         
    */
/**
        @typedef CompanyBrandSerializer
        
        
        @property { UserSerializer1 } [created_by]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { Object } [warnings]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [stage]
        
        @property { string } [reject_reason]
        
        @property { string } [verified_on]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [verified_by]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandSerializer> } [items]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { string } [name]
        
        @property { SellerPhoneNumber } mobile_no
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { number } [longitude]
        
        @property { string } [address1]
        
        @property { string } [country_code]
        
        @property { string } [state]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { string } [city]
        
        @property { string } [address_type]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [e_invoice]
        
        @property { InvoiceCredSerializer } [e_waybill]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [on_same_store]
        
        @property { number } [store_uid]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [store_type]
        
        @property { string } name
        
        @property { number } company
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<string> } [notification_emails]
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { string } display_name
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { string } code
        
        @property { number } [uid]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { Object } [warnings]
        
        @property { Object } [_custom_json]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integration_type]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } display_name
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { number } [uid]
        
        @property { Array<Document> } [documents]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { Object } [_custom_json]
        
        @property { UserSerializer1 } [created_by]
        
        @property { string } [created_on]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { string } phone_number
        
        @property { UserSerializer1 } [verified_by]
        
        @property { Object } [warnings]
        
        @property { string } [store_type]
        
        @property { string } name
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<string> } [notification_emails]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [modified_on]
        
        @property { GetAddressSerializer } address
        
        @property { string } code
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<GetLocationSerializer> } [items]
        
         
    */
/**
        @typedef BulkLocationSerializer
        
        
        @property { Array<LocationSerializer> } [data]
        
         
    */
/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */
/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */
/**
        @typedef StartResponse
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
        @property { Object } [params]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */
/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */
/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
        @property { CopyFileTask } task
        
         
    */
/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */
/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */
/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signed_url
        
        @property { number } expiry
        
         
    */
/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */
/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */
/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */
/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [force_web]
        
         
    */
/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */
/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
    */
/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */
/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */
/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef DataTresholdDTO
        
        
        @property { number } [min_price]
        
        @property { number } [safe_stock]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { Array<GenericDTO> } [period_type_list]
        
         
    */
/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integration_data]
        
        @property { string } [company_name]
        
        @property { number } company_id
        
        @property { TaskDTO } [task_details]
        
        @property { DataTresholdDTO } [threshold_details]
        
        @property { string } [job_code]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [group_list]
        
         
    */
/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [access_key]
        
        @property { string } [secret_key]
        
        @property { string } [local_file_path]
        
        @property { string } [archive_path]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_format]
        
        @property { string } [file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archive_dir]
        
         
    */
/**
        @typedef Audit
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [source_slug]
        
         
    */
/**
        @typedef CompanyConfig
        
        
        @property { number } [company_id]
        
        @property { Array<number> } [exclude_steps]
        
        @property { Array<string> } [hidden_closet_keys]
        
        @property { Object } [open_tags]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { number } [delete_quantity_threshold]
        
         
    */
/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driver_class]
        
        @property { string } [jdbc_url]
        
        @property { Object } [optional_properties]
        
         
    */
/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */
/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intf_article_id]
        
        @property { PropBeanDTO } [price_effective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */
/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junk_data_threshold_count]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { string } [unwind_field]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */
/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [read_from_content]
        
        @property { boolean } [filter_based_on_recepients]
        
        @property { string } [pcol]
        
        @property { string } [subject_line_regex]
        
        @property { string } [sender_address]
        
        @property { string } [local_dir]
        
        @property { Array<string> } [folder_name_hierarchies]
        
        @property { string } [attachment_regex]
        
        @property { string } [body_content_regex]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_format]
        
        @property { boolean } [attachment_mandate]
        
        @property { boolean } [filter_files_after_extraction]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_unread_mails]
        
        @property { string } [content_type]
        
        @property { boolean } [downloadable_link]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { string } [zip_file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [file_has_header]
        
        @property { number } [header_index]
        
        @property { Array<string> } [header_array]
        
        @property { number } [data_start_index]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { number } [junk_data_threshold_count]
        
        @property { string } [file_type]
        
        @property { boolean } [line_validity_check]
        
        @property { Array<string> } [sheet_names]
        
        @property { boolean } [read_all_sheets]
        
        @property { string } [quote_char]
        
        @property { string } [escape_char]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */
/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheet_id]
        
        @property { string } [client_secret_location]
        
        @property { string } [cred_storage_directory]
        
        @property { string } [local_dir]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [request_params]
        
        @property { string } [http_method]
        
        @property { string } [request_payload]
        
        @property { string } [local_path]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */
/**
        @typedef JobConfig
        
        
        @property { number } [_id]
        
        @property { string } [job_code]
        
        @property { string } [task_type]
        
        @property { number } [sync_delay]
        
        @property { string } [cron_expression]
        
        @property { StoreFilter } [store_filter]
        
        @property { ProcessConfig } [process_config]
        
        @property { Array<StoreConfig> } [store_config]
        
        @property { Object } [properties]
        
        @property { boolean } [immediate_first_run]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependent_job_codes]
        
        @property { Array<CompanyConfig> } [company_config]
        
        @property { Array<number> } [company_ids]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { string } [priority]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { DBConnectionProfile } [db_connection_profile]
        
        @property { Object } [params]
        
        @property { Object } [open_tags]
        
        @property { number } [delete_quantity_threshold]
        
        @property { CatalogMasterConfig } [catalog_master_config]
        
        @property { Array<string> } [aggregator_types]
        
        @property { string } [integration_type]
        
        @property { number } [min_price]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } company_name
        
        @property { number } company_id
        
        @property { JobConfig } [data]
        
         
    */
/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
         
    */
/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [working_dir]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef MongoDocConfig
        
        
        @property { string } [collection_name]
        
        @property { Object } [find_query]
        
        @property { Object } [projection_query]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { Array<Object> } [aggregate_pipeline]
        
        @property { boolean } [skip_save]
        
         
    */
/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumer_key]
        
        @property { string } [consumer_secret]
        
        @property { string } [token]
        
        @property { string } [token_secret]
        
        @property { string } [rest_url]
        
        @property { string } [rest_base_url]
        
        @property { string } [function_name]
        
         
    */
/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [db_config]
        
        @property { DBParamConfig } [db_param_config]
        
        @property { SFTPConfig } [sftp_config]
        
        @property { AWSS3config } [aws_s3_config]
        
        @property { MongoDocConfig } [mongo_doc_config]
        
        @property { FTPConfig } [ftp_config]
        
        @property { EmailConfig } [email_config]
        
        @property { FileConfig } [file_config]
        
        @property { JsonDocConfig } [json_doc_config]
        
        @property { DocMappingConfig } [doc_mapping_config]
        
        @property { TaskStepConfig } [task_step_config]
        
        @property { HttpConfig } [http_config]
        
        @property { LocalFileConfig } [local_file_config]
        
        @property { OAuthConfig } [oauth_config]
        
        @property { GoogleSpreadSheetConfig } [google_spreadsheet_config]
        
         
    */
/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */
/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [private_key_path]
        
        @property { boolean } [strict_host_key_checking]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */
/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */
/**
        @typedef StoreConfig
        
        
        @property { string } [job_code]
        
        @property { string } [storeid]
        
        @property { string } [store_alias]
        
        @property { string } [store_file_regex]
        
        @property { string } [store_file_name]
        
        @property { ProcessConfig } [process_config]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [include_tags]
        
        @property { Array<string> } [exclude_tags]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [task_config_id]
        
        @property { Array<TaskParam> } [task_params]
        
         
    */
/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [task_configs]
        
        @property { Array<number> } [task_config_ids]
        
        @property { Array<number> } [task_config_group_ids]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
    */
/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */
/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */
/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
    */
/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */
/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
    */
/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */
/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */
/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
    */
/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */
/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */
/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
        @property { string } [message]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
    */
/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */
/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */
/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */
/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */
/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */
/**
        @typedef UpdateDomain
        
        
        @property { string } [_id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
    */
/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */
/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */
/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */
/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */
/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
    */
/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [company_type]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
    */
/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
    */
/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
        @property { any } [items]
        
         
    */
/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */
/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
    */
/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */
/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */
/**
        @typedef ListingPageFeature
        
        
        @property { string } [sort_on]
        
         
    */
/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
    */
/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CartFeature
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */
/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */
/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */
/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
    */
/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef Currency
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */
/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
        @property { Domain } [domain]
        
         
    */
/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */
/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */
/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
         
    */
/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */
/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */
/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
    */
/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BusinessHighlights
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */
/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
    */
/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
    */
/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */
/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */
/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { boolean } [auto_apply]
        
        @property { string } applicable_on
        
        @property { Array<string> } [scope]
        
        @property { string } [currency_code]
        
        @property { string } value_type
        
        @property { boolean } [is_exact]
        
        @property { string } calculate_on
        
        @property { string } type
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [description]
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [remove]
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [auto]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<number> } [company_id]
        
        @property { Array<number> } [store_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<string> } [article_id]
        
        @property { Array<number> } [item_id]
        
        @property { Array<string> } [user_id]
        
         
    */
/**
        @typedef Validation
        
        
        @property { string } [user_registered_after]
        
        @property { boolean } [anonymous]
        
        @property { Array<string> } [app_id]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [end]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [min]
        
        @property { number } [value]
        
        @property { number } [discount_qty]
        
        @property { number } [key]
        
        @property { number } [max]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [txn_mode]
        
        @property { string } [action_date]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [codes]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [qr]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellation_allowed]
        
        @property { boolean } [return_allowed]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [total]
        
        @property { number } [user]
        
        @property { number } [app]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [maximum]
        
        @property { UsesRemaining } [remaining]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PaymentCodes } [payments]
        
        @property { PostOrder } [post_order]
        
        @property { PriceRange } [price_range]
        
        @property { boolean } [coupon_allowed]
        
        @property { UsesRestriction } [uses]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { Array<string> } [platforms]
        
        @property { Array<number> } [ordering_stores]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_archived]
        
        @property { boolean } [is_display]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { RuleDefinition } rule_definition
        
        @property { DisplayMeta } display_meta
        
        @property { Ownership } ownership
        
        @property { Array<string> } [tags]
        
        @property { Validity } validity
        
        @property { Identifier } identifiers
        
        @property { Validation } [validation]
        
        @property { CouponSchedule } [_schedule]
        
        @property { string } type_slug
        
        @property { Array<Rule> } rule
        
        @property { CouponAction } [action]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponAuthor } [author]
        
        @property { State } [state]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { string } code
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */
/**
        @typedef SuccessMessage
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef OperationErrorResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef CouponUpdate
        
        
        @property { RuleDefinition } rule_definition
        
        @property { DisplayMeta } display_meta
        
        @property { Ownership } ownership
        
        @property { Array<string> } [tags]
        
        @property { Validity } validity
        
        @property { Identifier } identifiers
        
        @property { Validation } [validation]
        
        @property { CouponSchedule } [_schedule]
        
        @property { string } type_slug
        
        @property { Array<Rule> } rule
        
        @property { CouponAction } [action]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponAuthor } [author]
        
        @property { State } [state]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { string } code
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { CouponSchedule } [schedule]
        
        @property { boolean } [archive]
        
         
    */
/**
        @typedef CartItem
        
        
        @property { string } product_id
        
        @property { number } [quantity]
        
        @property { string } size
        
         
    */
/**
        @typedef Breakup
        
        
        @property { number } [value]
        
        @property { string } [key]
        
         
    */
/**
        @typedef ProductSizeChart
        
        
        @property { string } [display]
        
        @property { Array<string> } [values]
        
        @property { string } [unit]
        
        @property { number } [is_available]
        
         
    */
/**
        @typedef ProductImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ProductListingBrandLogo
        
        
        @property { string } [aspect_ratio]
        
        @property { ProductListingAction } [action]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ProductWithSize
        
        
        @property { string } product_id
        
        @property { Array<ProductSizeChart> } [sizes]
        
        @property { ProductImage } [image]
        
        @property { string } price_effective
        
        @property { ProductListingAction } [action]
        
        @property { string } discount
        
        @property { string } price_marked
        
        @property { string } selected_size
        
        @property { string } message
        
        @property { ProductListingBrandLogo } [brand_logo]
        
        @property { string } brand
        
         
    */
/**
        @typedef CartDetail
        
        
        @property { boolean } [is_valid]
        
        @property { Array<Breakup> } [breakup]
        
        @property { Array<ProductWithSize> } [items]
        
         
    */
/**
        @typedef CartItems
        
        
        @property { Array<CartItem> } cart_items
        
         
    */
/**
        @typedef OpenapiCartDetailsRequest
        
        
        @property { CartItems } [cart_items]
        
         
    */
/**
        @typedef CategoryInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [product_slug]
        
         
    */
/**
        @typedef ProductAction
        
        
        @property { ActionQuery } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Image
        
        
        @property { string } [secure_url]
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef BaseInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductPrice
        
        
        @property { number } [marked]
        
        @property { number } [selling]
        
        @property { number } [effective]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { number } [add_on]
        
         
    */
/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [base]
        
        @property { ProductPrice } [converted]
        
         
    */
/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */
/**
        @typedef ProductAvailability
        
        
        @property { boolean } [deliverable]
        
        @property { boolean } [out_of_stock]
        
        @property { Array<string> } [sizes]
        
        @property { number } [other_store_quantity]
        
        @property { boolean } [is_valid]
        
         
    */
/**
        @typedef BasePrice
        
        
        @property { number } [marked]
        
        @property { number } [effective]
        
        @property { string } [currency_code]
        
        @property { string } [currency_symbol]
        
         
    */
/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [base]
        
        @property { BasePrice } [converted]
        
         
    */
/**
        @typedef ProductArticle
        
        
        @property { BaseInfo } [store]
        
        @property { number } [quantity]
        
        @property { string } [uid]
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [size]
        
        @property { BaseInfo } [seller]
        
        @property { Object } [extra_meta]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PromoMeta
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartProductInfo
        
        
        @property { Product } [product]
        
        @property { Object } [bulk_offer]
        
        @property { ProductPriceInfo } [price_per_unit]
        
        @property { number } [quantity]
        
        @property { boolean } [is_set]
        
        @property { CartProductIdentifer } identifiers
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [coupon_message]
        
        @property { ProductAvailability } [availability]
        
        @property { ProductArticle } [article]
        
        @property { string } [discount]
        
        @property { string } [key]
        
        @property { string } [message]
        
        @property { PromoMeta } [promo_meta]
        
         
    */
/**
        @typedef DisplayBreakup
        
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { Array<string> } [message]
        
        @property { number } [value]
        
         
    */
/**
        @typedef CouponBreakup
        
        
        @property { string } [type]
        
        @property { string } [uid]
        
        @property { boolean } [is_applied]
        
        @property { string } [message]
        
        @property { number } [value]
        
        @property { string } [code]
        
         
    */
/**
        @typedef RawBreakup
        
        
        @property { number } [convenience_fee]
        
        @property { number } [vog]
        
        @property { number } [cod_charge]
        
        @property { number } [delivery_charge]
        
        @property { number } [coupon]
        
        @property { number } [fynd_cash]
        
        @property { number } [discount]
        
        @property { number } [subtotal]
        
        @property { number } [gst_charges]
        
        @property { string } [mrp_total]
        
        @property { number } [you_saved]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CartBreakup
        
        
        @property { Array<DisplayBreakup> } [display]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { CouponBreakup } [coupon]
        
        @property { RawBreakup } [raw]
        
         
    */
/**
        @typedef OpenapiCartDetailsResponse
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [message]
        
        @property { CartBreakup } [breakup_values]
        
        @property { boolean } [is_valid]
        
         
    */
/**
        @typedef CartViewRequestSerializer
        
        
        @property { number } product_id
        
        @property { number } [quantity]
        
        @property { string } size
        
         
    */
/**
        @typedef AddressSerializerV1
        
        
        @property { Object } [meta]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { number } [pincode]
        
        @property { string } [name]
        
        @property { string } [landmark]
        
        @property { string } [address]
        
        @property { string } area_code
        
        @property { string } country
        
        @property { string } city
        
        @property { string } [address_type]
        
        @property { number } [phone]
        
        @property { string } [country_code]
        
        @property { string } state
        
        @property { string } [area_code_slug]
        
         
    */
/**
        @typedef ServiceablityReqSerializer
        
        
        @property { Array<CartViewRequestSerializer> } [cart_items]
        
        @property { AddressSerializerV1 } shipping_address
        
        @property { string } [coupon]
        
         
    */
/**
        @typedef CartDetailsResponseSerializer
        
        
        @property { Object } [delivery_promise]
        
        @property { Array<Object> } [items]
        
        @property { string } [breakup_values]
        
        @property { string } [message]
        
        @property { boolean } [is_valid]
        
         
    */
/**
        @typedef AddressSerializer
        
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { number } [pincode]
        
        @property { string } [name]
        
        @property { string } [landmark]
        
        @property { string } [address]
        
        @property { string } [city]
        
        @property { string } [address_type]
        
        @property { number } phone
        
         
    */
/**
        @typedef OrderCartItem
        
        
        @property { number } product_id
        
        @property { number } cod_charges
        
        @property { number } [quantity]
        
        @property { number } delivery_charges
        
        @property { number } [loyalty_discount]
        
        @property { string } size
        
        @property { number } price_effective
        
        @property { number } coupon_effective_discount
        
        @property { number } discount
        
        @property { number } amount_paid
        
        @property { number } price_marked
        
        @property { number } cashback_applied
        
        @property { number } [employee_discount]
        
         
    */
/**
        @typedef OpenApiFiles
        
        
        @property { Array<string> } values
        
        @property { string } key
        
         
    */
/**
        @typedef OpenApiCheckoutReq
        
        
        @property { string } request_hash
        
        @property { string } coupon_code
        
        @property { string } [affiliate_order_id]
        
        @property { AddressSerializer } billing_address
        
        @property { number } delivery_charges
        
        @property { string } [coupon]
        
        @property { boolean } is_cod
        
        @property { number } cart_value
        
        @property { Array<OrderCartItem> } [cart_items]
        
        @property { number } cashback_applied
        
        @property { string } [payment_mode]
        
        @property { AddressSerializer } shipping_address
        
        @property { number } coupon_value
        
        @property { Object } [employee_discount]
        
        @property { number } cod_charges
        
        @property { Array<OpenApiFiles> } [files]
        
        @property { number } [loyalty_discount]
        
        @property { string } [order_id]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef ConfirmPaymentReqSerializer
        
        
        @property { string } [request_hash]
        
        @property { Object } [payment_meta]
        
        @property { string } [order_id]
        
         
    */
/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplace_store_id]
        
        @property { number } [store_id]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef AllChannels
        
        
        @property { boolean } [mkp_name]
        
         
    */
/**
        @typedef MyntraPayload
        
        
        @property { string } [merchant_id]
        
        @property { string } [secret_key]
        
         
    */
/**
        @typedef AmazonPayload
        
        
        @property { string } [seller_id]
        
        @property { string } [mws_auth_token]
        
         
    */
/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef TatacliqPayload
        
        
        @property { string } [user_name]
        
        @property { string } [password]
        
        @property { string } [merchant_id]
        
         
    */
/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [client_ip]
        
         
    */
/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */
/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [store_mapping_enabled]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */
/**
        @typedef StatusPayload
        
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef StatusResp
        
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef SyncPayload
        
        
        @property { string } [modified_since]
        
         
    */
/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [worker_assigned]
        
        @property { boolean } [is_active]
        
        @property { boolean } [store_mapping_enabled]
        
        @property { number } [company_id]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */
/**
        @typedef AppUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { string } [block_reason]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef Giveaway
        
        
        @property { string } [_id]
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [description]
        
        @property { string } [name]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef HistoryPretty
        
        
        @property { string } [_id]
        
        @property { string } [application_id]
        
        @property { boolean } [claimed]
        
        @property { string } [created_at]
        
        @property { string } [expires_on]
        
        @property { number } [points]
        
        @property { number } [remaining_points]
        
        @property { string } [text_1]
        
        @property { string } [text_2]
        
        @property { string } [text_3]
        
        @property { string } [txn_name]
        
        @property { string } [updated_at]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */
/**
        @typedef Offer
        
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [sub_text]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */
/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef RewardUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [created_at]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updated_at]
        
        @property { string } [user_block_reason]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef RewardsAudience
        
        
        @property { string } [header_user_id]
        
        @property { string } [id]
        
         
    */
/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */
/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */
/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
    */
/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */
/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */
/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */
/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */
/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */
/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [properties_cart_id]
        
        @property { string } [context_traits_first_name]
        
        @property { string } [context_traits_last_name]
        
        @property { string } [context_traits_phone_number]
        
        @property { string } [context_traits_email]
        
        @property { string } [context_app_application_id]
        
        @property { string } [properties_breakup_values_raw_total]
        
        @property { ReceivedAt } [received_at]
        
         
    */
/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cart_total]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AbandonCartDetail
        
        
        @property { string } [_id]
        
        @property { string } [user_id]
        
        @property { string } [cart_value]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */
/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_time]
        
        @property { string } [end_time]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
         
    */
/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
         
    */
/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
        @property { string } [download_url]
        
         
    */
/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
         
    */
/**
        @typedef MkpLogsResp
        
        
        @property { string } [start_time_iso]
        
        @property { string } [end_time_iso]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */
/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
        @property { string } [identifier]
        
        @property { string } [identifier_value]
        
         
    */
/**
        @typedef LogInfo
        
        
        @property { string } [_id]
        
        @property { string } [status]
        
        @property { string } [event_type]
        
        @property { string } [marketplace_name]
        
        @property { string } [event]
        
        @property { string } [trace_id]
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { string } [store_code]
        
        @property { number } [store_id]
        
        @property { number } [item_id]
        
        @property { string } [article_id]
        
        @property { string } [seller_identifier]
        
         
    */
/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ValidityObject
        
        
        @property { string } start
        
        @property { string } end
        
         
    */
/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } app_ids
        
        @property { string } job_type
        
        @property { string } discount_type
        
        @property { string } discount_level
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
         
    */
/**
        @typedef DiscountJob
        
        
        @property { string } _id
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } [app_ids]
        
        @property { string } [job_type]
        
        @property { string } [discount_type]
        
        @property { string } [discount_level]
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
        @property { string } created_on
        
        @property { string } modified_on
        
        @property { UserDetails } created_by
        
        @property { UserDetails } modified_by
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } company_id
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } file_type
        
         
    */
/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
         
    */
/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } user_id
        
         
    */
/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */
/**
        @typedef AddProxyReq
        
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
         
    */
/**
        @typedef AddProxyResponse
        
        
        @property { string } [_id]
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
        @property { string } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */
/**
        @typedef ApiError
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef RemoveProxyResponse
        
        
        @property { string } [message]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef EventConfig
        
        
        @property { number } [id]
        
        @property { string } [event_name]
        
        @property { string } [event_type]
        
        @property { string } [version]
        
        @property { string } [display_name]
        
        @property { string } [description]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef EventConfigList
        
        
        @property { Array<EventConfig> } [items]
        
         
    */
/**
        @typedef SubscriberConfigList
        
        
        @property { Array<SubscriberConfig> } [subscribers]
        
         
    */
/**
        @typedef EventProcessedStatus
        
        
        @property { number } [id]
        
        @property { string } [subscriber_id]
        
        @property { number } [attempt]
        
        @property { string } [response_code]
        
        @property { string } [response_message]
        
        @property { string } [created_on]
        
        @property { string } [processed_on]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef EventPayload
        
        
        @property { number } [id]
        
        @property { string } [event_trace_id]
        
        @property { number } [event_company_id]
        
        @property { string } [event_application_id]
        
        @property { string } [event_extension_id]
        
        @property { string } [event_name]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef SubscriberConfig
        
        
        @property { number } [id]
        
        @property { string } [webhook_url]
        
        @property { number } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [status]
        
        @property { any } [auth_meta]
        
        @property { string } [created_on]
        
        @property { string } [updated_on]
        
        @property { any } [subscriber_event_mapping]
        
         
    */
/**
        @typedef SubscriberEvent
        
        
        @property { number } [id]
        
        @property { number } [subscriber_id]
        
        @property { number } [event_id]
        
        @property { string } [created_date]
        
         
    */
/**
        @typedef AuthMeta
        
        
        @property { string } [type]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
      * @description: Gets the list of Application level Tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      
      **/
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a application level ticket
      * @description: Retreives ticket details of a application level ticket with ticket ID
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific application level ticket
      * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get specific custom form using it's slug
      * @description: Get specific custom form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     **/
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get list of custom form
      * @description: Get list of custom form for given application
      * @param {Object} arg - arg object.
      
      **/
    getCustomForms({}?: any): any;
    /**
     *
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     * @param {Object} arg - arg object.
     * @param {CreateCustomFormPayload} arg.body
     **/
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of video room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
     *
     * @summary: Open a video room.
     * @description: Open a video room.
     * @param {Object} arg - arg object.
     * @param {CreateVideoRoomPayload} arg.body
     **/
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): any;
    /**
      *
      * @summary: Close the video room and force all participants to leave.
      * @description: Close the video room and force all participants to leave.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
}
declare class Feedback {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - pagination page no
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get list of customer reviews [admin]
      * @description: The endpoint provides a list of customer reviews based on entity and provided filters
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - review id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.next] - pagination next
      * @param {string} [arg.start] - pagination start
      * @param {string} [arg.limit] - pagination limit
      * @param {string} [arg.count] - pagination count
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getCustomerReviews({ id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageId, pageSize, }?: {
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews [admin]
      * @description: The endpoint provides a list of customer reviews based on entity and provided filters
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {string} [arg.id] - review id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.next] - pagination next
      * @param {string} [arg.start] - pagination start
      * @param {string} [arg.limit] - pagination limit
      * @param {string} [arg.count] - pagination count
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getCustomerReviewsPaginator({ companyId, applicationId, id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageSize, }?: {
        companyId: string;
        applicationId: string;
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: update approve details
     * @description: The is used to update approve details like status and description text
     * @param {Object} arg - arg object.
     * @param {string} arg.reviewId - review id
     * @param {ApproveRequest} arg.body
     **/
    updateApprove({ reviewId, body }?: {
        reviewId: string;
        body: ApproveRequest;
    }): any;
    /**
      *
      * @summary: get history details
      * @description: The is used to get the history details like status and description text
      * @param {Object} arg - arg object.
      * @param {string} arg.reviewId - review id
      
      **/
    getHistory({ reviewId }?: {
        reviewId: string;
    }): any;
    /**
      *
      * @summary: Get list of templates
      * @description: Get all templates of application
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getApplicationTemplates({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of templates
      * @description: Get all templates of application
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getApplicationTemplatesPaginator({ companyId, applicationId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Create a new template
      * @description: Create a new template for review with following data:
  - Enable media, rating and review
  - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
  - Review - header, title, description, image and video meta, enable votes
      * @param {Object} arg - arg object.
      * @param {TemplateRequestList} arg.body
      **/
    createTemplate({ body }?: {
        body: TemplateRequestList;
    }): any;
    /**
      *
      * @summary: Get a template by ID
      * @description: Get the template for product or l3 type by ID
      * @param {Object} arg - arg object.
      * @param {string} arg.id - template id
      
      **/
    getTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.id - template id
     * @param {UpdateTemplateRequest} arg.body
     **/
    updateTemplate({ id, body }?: {
        id: string;
        body: UpdateTemplateRequest;
    }): any;
    /**
     *
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.id - template id
     * @param {UpdateTemplateStatusRequest} arg.body
     **/
    updateTemplateStatus({ id, body }?: {
        id: string;
        body: UpdateTemplateStatusRequest;
    }): any;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get all pages of a theme
      * @description: Use this API to retrieve all the available pages of a theme by its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme to be retrieved
      
      **/
    getAllPages({ themeId }?: {
        themeId: string;
    }): any;
    /**
     *
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     **/
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }): any;
    /**
     *
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     **/
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }): any;
    /**
      *
      * @summary: Get page of a theme
      * @description: Use this API to retrieve a page of a theme.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme to be retrieved
      * @param {string} arg.pageValue - Value of the page to be retrieved
      
      **/
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): any;
    /**
     *
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     **/
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): any;
    /**
      *
      * @summary: Deletes a page
      * @description: Use this API to delete a page for a theme by its ID and page_value.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme
      * @param {string} arg.pageValue - Value of the page to be updated
      
      **/
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): any;
    /**
      *
      * @summary: Get a list of themes from the theme library
      * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      
      **/
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
     *
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
      *
      * @summary: Checks if theme is upgradable
      * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    isUpgradable({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Upgrade a theme
      * @description: Use this API to upgrade the current theme to its latest version.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Get all public themes
      * @description: Use this API to get a list of free themes that you can apply to your website.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      
      **/
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     * @param {Object} arg - arg object.
     * @param {ThemesSchema} arg.body
     **/
    createTheme({ body }?: {
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Get the applied theme
      * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Get all the supported fonts in a theme
      * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
      * @param {Object} arg - arg object.
      
      **/
    getFonts({}?: any): any;
    /**
      *
      * @summary: Gets theme by id
      * @description: Use this API to retrieve the details of a specific theme by using its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    getThemeById({ themeId }?: {
        themeId: string;
    }): any;
    /**
     *
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {ThemesSchema} arg.body
     **/
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Delete a theme
      * @description: Use this API to delete a theme from the theme library.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    deleteTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Get a theme preview
      * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Publish a theme
      * @description: Use this API to publish a theme that is either newly created or edited.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    publishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unpublish a theme
      * @description: Use this API to remove an existing theme from the list of available themes.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Archive a theme
      * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    archiveTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unarchive a theme
      * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID allotted to the theme.
      
      **/
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): any;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get a list of customers
      * @description: Use this API to retrieve a list of customers who have registered in the application.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. Mobile number or email ID of a customer.
      * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
      
      **/
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Search an existing user.
      * @description: Use this API to retrieve an existing user from a list.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. Mobile number or email ID of a customer.
      
      **/
    searchUsers({ q }?: {
        q?: string;
    }): any;
    /**
      *
      * @summary: Get platform configurations
      * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
      * @param {Object} arg - arg object.
      
      **/
    getPlatformConfig({}?: any): any;
    /**
     *
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     * @param {Object} arg - arg object.
     * @param {PlatformSchema} arg.body
     **/
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): any;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create an annoucement
     * @description: Create an announcement
     * @param {Object} arg - arg object.
     * @param {AdminAnnouncementSchema} arg.body
     **/
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): any;
    /**
      *
      * @summary: Get annoucement by id
      * @description: Get announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Update an annoucement
     * @description: Update an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {AdminAnnouncementSchema} arg.body
     **/
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): any;
    /**
     *
     * @summary: Update schedule or published status of an annoucement
     * @description: Update schedule or published status of an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {ScheduleSchema} arg.body
     **/
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): any;
    /**
      *
      * @summary: Delete annoucement by id
      * @description: Delete announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Create blog
     * @description: Use this to create a blog.
     * @param {Object} arg - arg object.
     * @param {BlogRequest} arg.body
     **/
    createBlog({ body }?: {
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Update blog
     * @description: Use this to update blog.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Blog Id
     * @param {BlogRequest} arg.body
     **/
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Delete blogs
      * @description: Use this to delete blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Blog Id
      
      **/
    deleteBlog({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get components by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - slug of page to be fetched
      
      **/
    getComponentById({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get FAQ categories list
      * @description: Get list of FAQ categories
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get FAQ category by slug or id
      * @description: Get FAQ category by slug or id
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates a FAQ category
     * @description: Add Faq Category
     * @param {Object} arg - arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     **/
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): any;
    /**
     *
     * @summary: Updates a FAQ category
     * @description: Update Faq Category
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Faq category ID
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     **/
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): any;
    /**
      *
      * @summary: Deletes a FAQ category
      * @description: Delete Faq Category
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Faq category ID
      
      **/
    deleteFaqCategory({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get FAQs of a Faq Category id or slug
      * @description: Get FAQs of a Faq Category `id` or `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates FAQs for category whose `id` is specified
     * @description: Creates FAQs for category whose `id` is specified
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {CreateFaqSchema} arg.body
     **/
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): any;
    /**
     *
     * @summary: Updates FAQ
     * @description: Updates FAQ
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {string} arg.faqId - Faq ID
     * @param {CreateFaqSchema} arg.body
     **/
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): any;
    /**
      *
      * @summary: Delete FAQ
      * @description: Delete FAQ
      * @param {Object} arg - arg object.
      * @param {string} arg.categoryId - Faq category ID
      * @param {string} arg.faqId - Faq ID
      
      **/
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): any;
    /**
      *
      * @summary: Get frequently asked question
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create landing-page
     * @description: Use this to create landing-page.
     * @param {Object} arg - arg object.
     * @param {LandingPageSchema} arg.body
     **/
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): any;
    /**
     *
     * @summary: Update landing-page
     * @description: Use this to update landing-page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Landing page ID
     * @param {LandingPageSchema} arg.body
     **/
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): any;
    /**
      *
      * @summary: Delete landing-page
      * @description: Use this to delete landing-page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Landing page ID
      
      **/
    deleteLandingPage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get legal information
      * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
     *
     * @summary: Save legal information
     * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param {Object} arg - arg object.
     * @param {ApplicationLegal} arg.body
     **/
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create navigation
     * @description: Use this to create navigation.
     * @param {Object} arg - arg object.
     * @param {NavigationRequest} arg.body
     **/
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Get default navigations
      * @description: Use this to get default navigations.
      * @param {Object} arg - arg object.
      
      **/
    getDefaultNavigations({}?: any): any;
    /**
      *
      * @summary: Get navigation by slug
      * @description: Use this to get navigation by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update navigation
     * @description: Use this to update navigation.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Navigation ID
     * @param {NavigationRequest} arg.body
     **/
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Delete navigation
      * @description: Use this to delete navigation.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Navigation ID
      
      **/
    deleteNavigation({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get page meta
      * @description: Use this to get Page Meta.
      * @param {Object} arg - arg object.
      
      **/
    getPageMeta({}?: any): any;
    /**
      *
      * @summary: Get page spec
      * @description: Use this to get page spec.
      * @param {Object} arg - arg object.
      
      **/
    getPageSpec({}?: any): any;
    /**
     *
     * @summary: Create page
     * @description: Use this to create a page.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPage({ body }?: {
        body: PageRequest;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create page preview
     * @description: Use this to create a page preview.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPagePreview({ body }?: {
        body: PageRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Page publish slug
     * @param {PagePublishRequest} arg.body
     **/
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Page Id
     * @param {PageSchema} arg.body
     **/
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): any;
    /**
      *
      * @summary: Delete page
      * @description: Use this to delete page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Page Id
      
      **/
    deletePage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get pages by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of page to be fetched
      
      **/
    getPageBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get seo of application
      * @description: Get seo of application
      * @param {Object} arg - arg object.
      
      **/
    getSEOConfiguration({}?: any): any;
    /**
     *
     * @summary: Update seo of application
     * @description: Update seo of application
     * @param {Object} arg - arg object.
     * @param {SeoComponent} arg.body
     **/
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create slideshow
     * @description: Use this to create slideshow.
     * @param {Object} arg - arg object.
     * @param {SlideshowRequest} arg.body
     **/
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Get slideshow by slug
      * @description: Use this to get slideshow by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update slideshow
     * @description: Use this to update slideshow.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Slideshow ID
     * @param {SlideshowRequest} arg.body
     **/
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Delete slideshow
      * @description: Use this to delete slideshow.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Slideshow ID
      
      **/
    deleteSlideshow({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get support information
      * @description: Get contact details for customer support. Including emails and phone numbers
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
     *
     * @summary: Update support data of application
     * @description: Update support data of application
     * @param {Object} arg - arg object.
     * @param {Support} arg.body
     **/
    updateSupportInformation({ body }?: {
        body: Support;
    }): any;
    /**
     *
     * @summary: Updates a Tag
     * @description: Update tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
      *
      * @summary: Delete tags for application
      * @description: Delete tags for application
      * @param {Object} arg - arg object.
      
      **/
    deleteAllInjectableTags({}?: any): any;
    /**
      *
      * @summary: Get tags for application
      * @description: Get tags for application
      * @param {Object} arg - arg object.
      
      **/
    getInjectableTags({}?: any): any;
    /**
     *
     * @summary: Adds a Tag
     * @description: Add tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
     *
     * @summary: Removes a Tag
     * @description: Remove a particular tag
     * @param {Object} arg - arg object.
     * @param {RemoveHandpickedSchema} arg.body
     **/
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): any;
    /**
     *
     * @summary: Edits a Tag by Id
     * @description: Edits a particular tag
     * @param {Object} arg - arg object.
     * @param {string} arg.tagId - Tag ID
     * @param {UpdateHandpickedSchema} arg.body
     **/
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): any;
}
declare class Assignment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary:
      * @description: Create a new Pickup point for an application.
  
      * @param {Object} arg - arg object.
      * @param {PickupPointSchema} arg.body
      **/
    createPickupLocation({ body }?: {
        body: PickupPointSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: Update list of pickup points for an application.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageNo] - Request a page number
      * @param {number} [arg.pageSize] - Request a page size
      
      **/
    getPickupLocation({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary:
      * @description: Update list of pickup points for an application.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageSize] - Request a page size
      * @param {number} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      
      **/
    getPickupLocationPaginator({ q, pageSize, companyId, applicationId }?: {
        q?: string;
        pageSize?: number;
        companyId: number;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary:
      * @description: Update Pickup Point for an application. Pickup Point once created
  can be updated using this API. 'x-application-id'm and request body are required to trigger
  a successful update.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Pickup Point ID
      * @param {PickupPointSchema} arg.body
      **/
    updatePickupLocation({ id, body }?: {
        id: number;
        body: PickupPointSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: This API returns Pickup point data for an id. Returns not found if no data exists for the
  store id passed.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Pickup Point Id
      
      **/
    getPickupLocationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary:
      * @description: Create a new pickup configuration for an application id. Only one configuration can be
  created per application id.
  
      * @param {Object} arg - arg object.
      * @param {PickupConfiguration} arg.body
      **/
    createPickupConfiguration({ body }?: {
        body: PickupConfiguration;
    }): any;
    /**
      *
      * @summary:
      * @description: Let pickup configuration for an application. z-application-id is required in
  the header to fetch the data.
  
      * @param {Object} arg - arg object.
      
      **/
    getPickupConfiguration({}?: any): any;
    /**
      *
      * @summary:
      * @description: Get Shipping configuration for an application. Returns the global shipping configuration
  including shipping priority and default strategy, etc. Every application can have one set of
  configuration each. The endpoint requires an application id to get the data.
  
      * @param {Object} arg - arg object.
      
      **/
    getAllocationConfiguration({}?: any): any;
    /**
      *
      * @summary:
      * @description: Create a new Shipping configuration for an application The configuration is for
  all the stores under an application. There can be only one configuration for an
  application i.e, for an application configuration can be created only once.
  
      * @param {Object} arg - arg object.
      * @param {ShippingSchema} arg.body
      **/
    createAllocationConfiguration({ body }?: {
        body: ShippingSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: Update Shipping configuration for an application. Application configuration once created
  can be updated using this API. 'x-application-id'm and request body are required to trigger
  a successful update.
  
      * @param {Object} arg - arg object.
      * @param {ShippingSchema} arg.body
      **/
    updateAllocationConfiguration({ body }?: {
        body: ShippingSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: List Stores of an application. Two types of stores are listed,
  some having allocation types as standard and others, advanced.
  API has support for pagination, filter by type and search by name.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageNo] - Request a page number
      * @param {number} [arg.pageSize] - Request a page size
      * @param {string} [arg.type] - Type can be 'standard' or 'advanced'
      
      **/
    getAllocationLocations({ q, pageNo, pageSize, type }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
        type?: string;
    }): any;
    /**
      *
      * @summary:
      * @description: List Stores of an application. Two types of stores are listed,
  some having allocation types as standard and others, advanced.
  API has support for pagination, filter by type and search by name.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageSize] - Request a page size
      * @param {string} [arg.type] - Type can be 'standard' or 'advanced'
      * @param {number} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      
      **/
    getAllocationLocationsPaginator({ q, pageSize, type, companyId, applicationId, }?: {
        q?: string;
        pageSize?: number;
        type?: string;
        companyId: number;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary:
      * @description: This API returns store data for an id. Returns not found if no data exists for the
  store id passed. The data is returned from sixspeed database which includes only the
  shipping configuration of the stores including store id and app id.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Store Id
      
      **/
    getAllocationLocationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary:
      * @description: A store configuration once created can be updated via this API. Store id in request params
  and udpated request body are required to successfully update the store data.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Store Id
      * @param {StoreSchema} arg.body
      **/
    updateAllocationLocation({ id, body }?: {
        id: number;
        body: StoreSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: Create a new store shipping configuratiion. The configuration is stored into the
  sixspeed database. One one store data can be created for one store id. Ther can be one
  default configuration and multiple non-default ones. The default is not binded with product
  tags while others are required to be.
  
      * @param {Object} arg - arg object.
      * @param {StoreSchema} arg.body
      **/
    createAllocationLocation({ body }?: {
        body: StoreSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: Get a list of zones created, where every zone has a unique name and id. They can be
  of three different types, radius, pincode and country.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageNo] - Request a page number
      * @param {number} [arg.pageSize] - Request a page size
      
      **/
    getDestinationZones({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary:
      * @description: Get a list of zones created, where every zone has a unique name and id. They can be
  of three different types, radius, pincode and country.
  
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search query
      * @param {number} [arg.pageSize] - Request a page size
      * @param {number} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      
      **/
    getDestinationZonesPaginator({ q, pageSize, companyId, applicationId }?: {
        q?: string;
        pageSize?: number;
        companyId: number;
        applicationId: string;
    }): Paginator;
    /**
      *
      * @summary:
      * @description: This API lets you create a zone which can be used further be mapped with store
  configuration rules to defined a shipping rule. Either of the three details need to
  be passed, zone_detail, pincode and region.
  
      * @param {Object} arg - arg object.
      * @param {ZoneSchema} arg.body
      **/
    postDestinationZone({ body }?: {
        body: ZoneSchema;
    }): any;
    /**
      *
      * @summary:
      * @description: Returns zone data for the specified zone id. Id is the required parameter and returns
  not found if no data is found for the passed zone id.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Store Id
      
      **/
    getDestinationZoneById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary:
      * @description: Zone once created can be updated using this API. Zone id and request body are the required
  data to update a zone.
  
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Store Id
      * @param {ZoneSchema} arg.body
      **/
    updateDestinationZone({ id, body }?: {
        id: number;
        body: ZoneSchema;
    }): any;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get campaigns
      * @description: Get campaigns
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get campaigns
      * @description: Get campaigns
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create campaign
     * @description: Create campaign
     * @param {Object} arg - arg object.
     * @param {CampaignReq} arg.body
     **/
    createCampaign({ body }?: {
        body: CampaignReq;
    }): any;
    /**
      *
      * @summary: Get campaign by id
      * @description: Get campaign by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Campaign id
      
      **/
    getCampaignById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update campaign by id
     * @description: Update campaign by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     **/
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): any;
    /**
      *
      * @summary: Get stats of campaign by id
      * @description: Get stats of campaign by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Campaign id
      
      **/
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get audiences
      * @description: Get audiences
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get audiences
      * @description: Get audiences
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create audience
     * @description: Create audience
     * @param {Object} arg - arg object.
     * @param {AudienceReq} arg.body
     **/
    createAudience({ body }?: {
        body: AudienceReq;
    }): any;
    /**
     *
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     * @param {Object} arg - arg object.
     * @param {BigqueryHeadersReq} arg.body
     **/
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): any;
    /**
      *
      * @summary: Get audience by id
      * @description: Get audience by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Audience id
      
      **/
    getAudienceById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update audience by id
     * @description: Update audience by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     **/
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): any;
    /**
     *
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     * @param {Object} arg - arg object.
     * @param {GetNRecordsCsvReq} arg.body
     **/
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): any;
    /**
      *
      * @summary: Get email providers
      * @description: Get email providers
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get email providers
      * @description: Get email providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create email provider
     * @description: Create email provider
     * @param {Object} arg - arg object.
     * @param {EmailProviderReq} arg.body
     **/
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): any;
    /**
      *
      * @summary: Get email provider by id
      * @description: Get email provider by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email provider id
      
      **/
    getEmailProviderById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update email provider by id
     * @description: Update email provider by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     **/
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): any;
    /**
      *
      * @summary: Get email templates
      * @description: Get email templates
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get email templates
      * @description: Get email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create email template
     * @description: Create email template
     * @param {Object} arg - arg object.
     * @param {EmailTemplateReq} arg.body
     **/
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): any;
    /**
      *
      * @summary: Get system email templates
      * @description: Get system email templates
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get system email templates
      * @description: Get system email templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
      *
      * @summary: Get email template by id
      * @description: Get email template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email template id
      
      **/
    getEmailTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update email template by id
     * @description: Update email template by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     **/
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): any;
    /**
      *
      * @summary: Delete email template by id
      * @description: Delete email template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Email template id
      
      **/
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get event subscriptions
      * @description: Get event subscriptions
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.populate] - populate fields
      
      **/
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): any;
    /**
      *
      * @summary: Get event subscriptions
      * @description: Get event subscriptions
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.populate] - populate fields
      
      **/
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get jobs
      * @description: Get jobs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     * @param {Object} arg - arg object.
     * @param {TriggerJobRequest} arg.body
     **/
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): any;
    /**
      *
      * @summary: Get job logs
      * @description: Get job logs
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get job logs
      * @description: Get job logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on _id
      * @param {Object} [arg.query] -
      
      **/
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): any;
    /**
      *
      * @summary: Get communication logs
      * @description: Get communication logs
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on _id
      * @param {Object} [arg.query] -
      
      **/
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get sms providers
      * @description: Get sms providers
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create sms provider
     * @description: Create sms provider
     * @param {Object} arg - arg object.
     * @param {SmsProviderReq} arg.body
     **/
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): any;
    /**
      *
      * @summary: Get sms provider by id
      * @description: Get sms provider by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms provider id
      
      **/
    getSmsProviderById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     **/
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): any;
    /**
      *
      * @summary: Get sms templates
      * @description: Get sms templates
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get sms templates
      * @description: Get sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     *
     * @summary: Create sms template
     * @description: Create sms template
     * @param {Object} arg - arg object.
     * @param {SmsTemplateReq} arg.body
     **/
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): any;
    /**
      *
      * @summary: Get sms template by id
      * @description: Get sms template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms template id
      
      **/
    getSmsTemplateById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update sms template by id
     * @description: Update sms template by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     **/
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): any;
    /**
      *
      * @summary: Delete sms template by id
      * @description: Delete sms template by id
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Sms template id
      
      **/
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get system sms templates
      * @description: Get system sms templates
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): any;
    /**
      *
      * @summary: Get system sms templates
      * @description: Get system sms templates
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company id
      * @param {string} arg.applicationId - Application id
      * @param {number} [arg.pageSize] - Current request items count
      * @param {Object} [arg.sort] - To sort based on created_at
      
      **/
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get All Brand Payment Gateway Config Secret
      * @description: Get All Brand Payment Gateway Config Secret
      * @param {Object} arg - arg object.
      
      **/
    getBrandPaymentGatewayConfig({}?: any): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {boolean} arg.refresh -
      * @param {string} arg.requestType -
      
      **/
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): any;
    /**
     *
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     **/
    addBeneficiaryDetails({ body }?: {
        body: AddBeneficiaryDetailsRequest;
    }): any;
    /**
      *
      * @summary: List Order Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: List User Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): any;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     **/
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Delete a Search Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get a Search Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Search Custom Keyword Listing
      * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAllSearchKeyword({}?: any): any;
    /**
     *
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateSearchKeyword} arg.body
     **/
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): any;
    /**
     *
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Delete a Autocomplete Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get a Autocomplete Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Autocomplete Keyword Listing
      * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAutocompleteConfig({}?: any): any;
    /**
     *
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Get configuration meta  details for catalog for admin panel
      * @description: configuration meta  details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getCatalogConfiguration({}?: any): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getConfigurations({}?: any): any;
    /**
     *
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     * @param {Object} arg - arg object.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      * @param {string} arg.type - type can be brands, categories etc.
      
      **/
    getConfigurationByType({ type }?: {
        type: string;
    }): any;
    /**
     *
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get query filters to configure a collection
      * @description: Get query filters to configure a collection
      * @param {Object} arg - arg object.
      
      **/
    getQueryFilters({}?: any): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
      * @param {Object} arg - arg object.
      
      **/
    getAllCollections({}?: any): any;
    /**
     *
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     * @param {Object} arg - arg object.
     * @param {CreateCollection} arg.body
     **/
    createCollection({ body }?: {
        body: CreateCollection;
    }): any;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetail({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {UpdateCollection} arg.body
     **/
    updateCollection({ id, body }?: {
        id: string;
        body: UpdateCollection;
    }): any;
    /**
      *
      * @summary: Delete a Collection
      * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    deleteCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get the items for a collection
      * @description: Get items from a collection specified by its `id`.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain next_id param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     **/
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory.
      * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
      * @param {Object} arg - arg object.
      * @param {string} [arg.brand] - Brand slug
      
      **/
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): any;
    /**
      *
      * @summary: List all the brands
      * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getApplicationBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List all the brands
      * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - A `company_id` is a unique identifier for a particular seller account.
      * @param {string} arg.applicationId - A `application_id` is a unique identifier for a particular sale channel.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: List all the departments
      * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
      * @param {Object} arg - arg object.
      
      **/
    getDepartments({}?: any): any;
    /**
      *
      * @summary: List all the categories
      * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      
      **/
    getCategories({ department }?: {
        department?: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
      * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
      
      **/
    getAppicationProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - A `company_id` is a unique identifier for a particular seller account.
      * @param {string} arg.applicationId - A `application_id` is a unique identifier for a particular sale channel.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getAppicationProductsPaginator({ companyId, applicationId, q, f, filters, sortOn, pageSize, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get a product
      * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): any;
}
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `appStartUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `appCompleteUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `appStartUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `appCompleteUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} [arg.pageNo] - page no
      
      **/
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} arg.companyId - company_id
      * @param {number} arg.applicationId - application_id
      
      **/
    browsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Create short link
     * @description: Create short link
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): any;
    /**
      *
      * @summary: Get short links
      * @description: Get short links
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page number
      * @param {number} [arg.pageSize] - Current page size
      * @param {string} [arg.createdBy] - Short link creator
      * @param {string} [arg.active] - Short link active status
      * @param {string} [arg.q] - Search text for original and short url
      
      **/
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get short links
      * @description: Get short links
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Current page size
      * @param {string} [arg.createdBy] - Short link creator
      * @param {string} [arg.active] - Short link active status
      * @param {string} [arg.q] - Search text for original and short url
      
      **/
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get short link by hash
      * @description: Get short link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short url
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
     *
     * @summary: Update short link by id
     * @description: Update short link by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     **/
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): any;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get latest build config
      * @description: Get latest build config
      * @param {Object} arg - arg object.
      * @param {string} arg.platformType - Current platform name
      
      **/
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): any;
    /**
     *
     * @summary: Update build config for next build
     * @description: Update build config for next build
     * @param {Object} arg - arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     **/
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): any;
    /**
      *
      * @summary: Get previous build versions
      * @description: Get previous build versions
      * @param {Object} arg - arg object.
      * @param {string} arg.platformType - Current platform name
      
      **/
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): any;
    /**
      *
      * @summary: Get features of application
      * @description: Get features of application
      * @param {Object} arg - arg object.
      
      **/
    getAppFeatures({}?: any): any;
    /**
     *
     * @summary: Update features of application
     * @description: Update features of application
     * @param {Object} arg - arg object.
     * @param {AppFeatureRequest} arg.body
     **/
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): any;
    /**
      *
      * @summary: Get basic application details
      * @description: Get basic application details like name
      * @param {Object} arg - arg object.
      
      **/
    getAppBasicDetails({}?: any): any;
    /**
     *
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     * @param {Object} arg - arg object.
     * @param {ApplicationDetail} arg.body
     **/
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): any;
    /**
      *
      * @summary: Get application information
      * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
      * @param {Object} arg - arg object.
      
      **/
    getAppContactInfo({}?: any): any;
    /**
     *
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     * @param {Object} arg - arg object.
     * @param {ApplicationInformation} arg.body
     **/
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): any;
    /**
      *
      * @summary: Get social tokens
      * @description: Get social tokens.
      * @param {Object} arg - arg object.
      
      **/
    getAppApiTokens({}?: any): any;
    /**
     *
     * @summary: Add social tokens
     * @description: Add social tokens.
     * @param {Object} arg - arg object.
     * @param {TokenResponse} arg.body
     **/
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): any;
    /**
      *
      * @summary: Application inventory enabled companies
      * @description: Application inventory enabled companies.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppCompanies({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Application inventory enabled companies
      * @description: Application inventory enabled companies.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppCompaniesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Application inventory enabled stores
      * @description: Application inventory enabled stores.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current application id
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get application configuration
      * @description: Get application configuration for various features and data
      * @param {Object} arg - arg object.
      
      **/
    getInventoryConfig({}?: any): any;
    /**
     *
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     * @param {Object} arg - arg object.
     * @param {ApplicationInventory} arg.body
     **/
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): any;
    /**
     *
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     * @param {Object} arg - arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     **/
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): any;
    /**
      *
      * @summary: Get application enabled currency list
      * @description: Get application enabled currency list
      * @param {Object} arg - arg object.
      
      **/
    getAppCurrencyConfig({}?: any): any;
    /**
     *
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     * @param {Object} arg - arg object.
     * @param {AppSupportedCurrency} arg.body
     **/
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): any;
    /**
     *
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): any;
    /**
     *
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     * @param {Object} arg - arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     **/
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     *
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     * @param {Object} arg - arg object.
     * @param {OrderingStoreConfig} arg.body
     **/
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): any;
    /**
      *
      * @summary: Get attached domain list
      * @description: Get attached domain list.
      * @param {Object} arg - arg object.
      
      **/
    getDomains({}?: any): any;
    /**
     *
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     * @param {Object} arg - arg object.
     * @param {DomainAddRequest} arg.body
     **/
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): any;
    /**
      *
      * @summary: Remove attached domain
      * @description: Remove attached domain.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Domain _id
      
      **/
    removeDomainById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     * @param {Object} arg - arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     **/
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): any;
    /**
     *
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     * @param {Object} arg - arg object.
     * @param {DomainStatusRequest} arg.body
     **/
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): any;
    /**
      *
      * @summary: Get application data from id
      * @description: Get application data from id
      * @param {Object} arg - arg object.
      
      **/
    getApplicationById({}?: any): any;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get coupon list with pagination
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {boolean} [arg.isArchived] -
      * @param {string} [arg.title] -
      * @param {boolean} [arg.isPublic] -
      * @param {boolean} [arg.isDisplay] -
      * @param {string} [arg.typeSlug] -
      * @param {string} [arg.code] -
      
      **/
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get coupon list with pagination
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Current company id
      * @param {string} arg.applicationId - Current Application _id
      * @param {number} [arg.pageSize] -
      * @param {boolean} [arg.isArchived] -
      * @param {string} [arg.title] -
      * @param {boolean} [arg.isPublic] -
      * @param {boolean} [arg.isDisplay] -
      * @param {string} [arg.typeSlug] -
      * @param {string} [arg.code] -
      
      **/
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     *
     * @summary: Create new coupon
     * @description: Create new coupon
     * @param {Object} arg - arg object.
     * @param {CouponAdd} arg.body
     **/
    createCoupon({ body }?: {
        body: CouponAdd;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get single coupon details with `id` in path param
      * @param {Object} arg - arg object.
      * @param {string} arg.id -
      
      **/
    getCouponById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     **/
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): any;
    /**
     *
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     **/
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): any;
    /**
      *
      * @summary: Fetch Cart Details
      * @description: Get all the details of cart for a list of provided `cart_items`
      * @param {Object} arg - arg object.
      * @param {Array<CartItem>} arg.cartItems -
      
      **/
    fetchCartItems({ cartItems }?: {
        cartItems: Array<CartItem>;
    }): any;
    /**
     *
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     * @param {Object} arg - arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     **/
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): any;
    /**
     *
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     * @param {Object} arg - arg object.
     * @param {ServiceablityReqSerializer} arg.body
     **/
    checkCartServiceability({ body }?: {
        body: ServiceablityReqSerializer;
    }): any;
    /**
     *
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     * @param {Object} arg - arg object.
     * @param {OpenApiCheckoutReq} arg.body
     **/
    checkoutCartItems({ body }?: {
        body: OpenApiCheckoutReq;
    }): any;
    /**
     *
     * @summary: Confirm payment on Fynd order id
     * @description: Confirm paymet successful status for sent `order_id`
     * @param {Object} arg - arg object.
     * @param {ConfirmPaymentReqSerializer} arg.body
     **/
    updateCheckoutPaymentStatus({ body }?: {
        body: ConfirmPaymentReqSerializer;
    }): any;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveaways({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveawaysPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Adds a new giveaway.
     * @description: Adds a new giveaway.
     * @param {Object} arg - arg object.
     * @param {Giveaway} arg.body
     **/
    createGiveaway({ body }?: {
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: Get giveaway by ID.
      * @description: Get giveaway by ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Giveaway ID
      
      **/
    getGiveawayByID({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     **/
    updateGiveaway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: List of offer of the current application.
      * @description: List of offer of the current application.
      * @param {Object} arg - arg object.
      
      **/
    getOffers({}?: any): any;
    /**
      *
      * @summary: Get offer by name.
      * @description: Get offer by name.
      * @param {Object} arg - arg object.
      * @param {string} arg.cookie - User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation.
      * @param {string} arg.name - Offer name
      
      **/
    getOfferByName({ cookie, name }?: {
        cookie: string;
        name: string;
    }): any;
    /**
     *
     * @summary: Updates the offer by name.
     * @description: Updates the offer by name.
     * @param {Object} arg - arg object.
     * @param {string} arg.name - Offer name
     * @param {Offer} arg.body
     **/
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): any;
    /**
      *
      * @summary: User's reward details.
      * @description: User's reward details.
      * @param {Object} arg - arg object.
      * @param {string} arg.userId - user id
      
      **/
    getUserAvailablePoints({ userId }?: {
        userId: string;
    }): any;
    /**
     *
     * @summary: Update User status
     * @description: Update user status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.userId - user id
     * @param {AppUser} arg.body
     **/
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} arg.userId - user id
      * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param {number} [arg.pageLimit] - PageLimit is the number of requested items in response.
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistory({ userId, pageId, pageLimit, pageSize }?: {
        userId: string;
        pageId?: string;
        pageLimit?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {string} arg.userId - user id
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistoryPaginator({ companyId, applicationId, userId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        userId: string;
        pageSize?: number;
    }): Paginator;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get statistics groups
      * @description: Get statistics groups
      * @param {Object} arg - arg object.
      
      **/
    getStatiscticsGroups({}?: any): any;
    /**
      *
      * @summary: Get statistics group components
      * @description: Get statistics group components
      * @param {Object} arg - arg object.
      * @param {string} arg.groupName - Group name
      
      **/
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics csv
      * @description: Get component statistics csv
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics pdf
      * @description: Get component statistics pdf
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics
      * @description: Get component statistics
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStats({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts list
      * @description: Get abandon carts list
      * @param {Object} arg - arg object.
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      * @param {number} [arg.pageNo] - Current page number
      * @param {number} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get abandon carts list
      * @description: Get abandon carts list
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      * @param {number} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get abandon carts csv
      * @description: Get abandon carts csv
      * @param {Object} arg - arg object.
      * @param {string} arg.fromDate - From date
      * @param {string} arg.toDate - To date
      
      **/
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts details
      * @description: Get abandon cart details
      * @param {Object} arg - arg object.
      * @param {string} arg.cartId - Cart Id
      
      **/
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): any;
}
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Add proxy path for external url
     * @description: Add proxy path for external url
     * @param {Object} arg - arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {AddProxyReq} arg.body
     **/
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): any;
    /**
      *
      * @summary: Remove proxy path for external url
      * @description: Remove proxy path for external url
      * @param {Object} arg - arg object.
      * @param {string} arg.extensionId - Extension id
      * @param {string} arg.attachedPath - Attachaed path slug
      
      **/
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
    }): any;
}
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    items?: Array<TicketHistory>;
    page?: Page;
};
type CustomFormList = {
    items?: Array<CustomForm>;
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    header_image?: string;
    priority: string;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    priority: string;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assigned_to?: AgentChangePayload;
    tags?: Array<string>;
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
    notify?: Array<any>;
};
type Filter = {
    priorities: Array<Priority>;
    categories?: Array<TicketCategory>;
    statuses: Array<Status>;
    assignees: Array<any>;
};
type TicketHistoryPayload = {
    value: any;
    type: string;
};
type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
type KeyValue = {
    key: string;
    value: any;
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    ticket: Ticket;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: string;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: string;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: string;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
    sub_categories?: Array<TicketSubCategory>;
};
type TicketSubCategory = {
    key: string;
    display: string;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: Array<any>;
    created_on?: CreatedOn;
    created_by?: any;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    ticket_id: string;
    category: TicketCategory;
    sub_category?: TicketSubCategory;
    source: string;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: Array<string>;
    _custom_json?: any;
    is_feedback_pending?: boolean;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: Array<AddMediaRequest>;
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: Array<string>;
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: Array<TagMeta>;
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: Array<TagMeta>;
};
type CursorGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Array<Attribute>;
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: Array<ReviewFacet>;
    items?: Array<any>;
    page?: Page;
    sort?: Array<SortMethod>;
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Array<Attribute>;
    attributes_slugs?: Array<string>;
    ui?: UI;
};
type RatingRequest = {
    attributes: Array<string>;
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: Array<MediaMeta>;
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: Array<TagMeta>;
};
type TemplateGetResponse = {
    items?: Array<Template>;
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: Array<TemplateRequest>;
};
type UI = {
    feedback_question?: Array<string>;
    icon?: UIIcon;
    text?: Array<string>;
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: Array<string>;
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: Array<AttributeObject>;
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: Array<MediaMeta>;
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
};
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: Array<AvailablePageSchemaSections>;
    sections_meta?: Array<AvailablePageSectionMetaAttributes>;
    theme?: string;
    seo?: AvailablePageSeo;
    props?: Array<any>;
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: Array<any>;
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: Array<AvailablePageSchema>;
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: Array<string>;
    subsets?: Array<string>;
    version?: string;
    last_modified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: Array<availableSectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks;
    name?: string;
    label?: string;
    props?: any;
};
type Information = {
    images?: Images;
    features?: Array<string>;
    name?: string;
    description?: string;
};
type Images = {
    desktop?: Array<string>;
    android?: Array<string>;
    ios?: Array<string>;
    thumbnail?: Array<string>;
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umd_js?: UmdJs;
    common_js?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
};
type Seo = {
    title?: string;
    description?: string;
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchema;
};
type Preset = {
    sections?: Array<AvailablePageSchema>;
};
type GlobalSchema = {
    props?: any;
};
type ListSchema = {
    global?: any;
    page?: ConfigPage;
    name?: string;
};
type Colors = {
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semi_bold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: Array<string>;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type UserSearchResponseSchema = {
    users?: Array<UserSchema>;
};
type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type UserSchema = {
    first_name?: string;
    last_name?: string;
    phone_numbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    uid?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: Array<ApplicationLegalFAQ>;
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: Array<any>;
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<AnnouncementPageSchema>;
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: Array<any>;
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: scheduleStartSchema;
};
type scheduleStartSchema = {
    start?: string;
};
type BlogGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type BlogRequest = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: Array<AdminAnnouncementSchema>;
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type NavigationReference = {
    acl?: Array<string>;
    tags?: Array<string>;
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: Array<string>;
};
type FaqResponseSchema = {
    faqs?: Array<FAQ>;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: Array<CreateTagSchema>;
};
type APIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    _id?: string;
    slug?: string;
    title?: string;
    application?: string;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema;
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: Array<any>;
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: Array<CategorySchema>;
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: Array<string>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: Array<any>;
};
type NavigationGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type Orientation = {
    portrait?: Array<string>;
    landscape?: Array<string>;
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference;
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: Orientation;
    navigation?: NavigationReference;
};
type CustomPageSchema = {
    _id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: Array<string>;
    content?: Array<ContentSchema>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageSpec = {
    specifications?: Array<any>;
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: Array<PageSpecParam>;
    query?: Array<PageSpecParam>;
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: Array<string>;
    content?: Array<PageContent>;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: Array<PageMeta>;
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: Array<ResourceContent>;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    system_pages?: Array<any>;
    custom_pages?: Array<any>;
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<SlideshowMedia>;
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: Array<PhoneProperties>;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: Array<EmailProperties>;
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: Array<TagSchema>;
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type ErrorResponseSchema = {
    message?: string;
    code?: number;
};
type Success = {
    message?: string;
};
type CreatedModifiedByObject = {
    username?: string;
    user_id?: string;
};
type PickupPointResponse = {
    items?: Array<ItemProperties>;
    page?: Page;
};
type PickupPointSchema = {
    notification_emails?: Array<string>;
    name?: string;
    is_active?: boolean;
    code?: string;
    address?: AddressObject;
    additional_contacts?: AdditionalContactsObject;
    timing?: Array<AdditionalContactsObject>;
    created_by?: CreatedModifiedByObject;
    modified_by?: TimingObject;
    created_on?: string;
    modified_on?: string;
};
type ItemProperties = {
    notification_emails?: Array<string>;
    name?: string;
    is_active?: boolean;
    code?: string;
    address?: AddressObject;
    additional_contacts?: AdditionalContactsObject;
    timing?: Array<AdditionalContactsObject>;
    created_by?: CreatedModifiedByObject;
    modified_by?: TimingObject;
    created_on?: string;
    modified_on?: string;
};
type AddressObject = {
    address1?: string;
    city?: string;
    state?: string;
    pincode?: number;
    country?: string;
    country_code?: string;
};
type AdditionalContactsObject = {
    number?: number;
    country_code?: number;
};
type TimingObject = {
    opening?: OpeningClosingObject;
    closing?: OpeningClosingObject;
    open?: boolean;
    weekday?: string;
};
type OpeningClosingObject = {
    hour?: string;
    minute?: string;
};
type PickupResponse = {
    items?: Array<PickupResponseItems>;
    page?: Page;
};
type PickupConfiguration = {
    datetime_check?: boolean;
    header?: string;
    instruction_for_customer?: string;
};
type PickupResponseItems = {
    datetime_check?: boolean;
    header?: string;
    instruction_for_customer?: string;
    app_id?: string;
};
type ShippingSchema = {
    assignment?: AssignmentSchema;
    _id?: string;
    app_id?: string;
};
type ShippingResponse = {
    data?: ShippingSchema;
    message?: string;
};
type AssignmentSchema = {
    fulfillment_priority?: FulfillmentPriorityObject;
    default_sort_strategy?: string;
};
type FulfillmentPriorityObject = {
    priorities?: string;
    enabled?: boolean;
};
type StoreSchema = {
    assignment?: StoreAssignmentObject;
    _id?: string;
};
type StoreResponse = {
    data?: StoreSchema;
    message?: string;
};
type StoreAssignmentObject = {
    strategy?: StrategyObject;
    assignment_type?: string;
};
type StrategyObject = {
    rules?: Array<StrategyItems>;
};
type StrategyItems = {
    product_tags?: Array<string>;
    zone?: string;
};
type StoreListResponse = {
    items?: Array<any>;
    page?: Page;
};
type ZoneSchema = {
    zone_detail?: ZoneDetailsObject;
    _id?: string;
};
type ZoneListResponse = {
    items?: Array<ZoneSchema>;
    page?: Page;
};
type RegionObject = {
    country?: string;
    state?: string;
};
type PincodeObject = {
    pincode_list?: Array<number>;
};
type RadiusObject = {
    value?: number;
};
type ZoneDetailsObject = {
    radius?: RadiusObject;
    pincode?: PincodeObject;
    region?: RegionObject;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: Array<DetailedPlanComponents>;
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
    interval_time: number;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: Array<ChargeLineItem>;
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: Array<SubscriptionCharge>;
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: Array<string>;
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: Array<string>;
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: Array<string>;
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: Array<InvoiceItems>;
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: Array<string>;
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: Array<InvoiceItems>;
};
type Invoices = {
    data?: Array<InvoicesData>;
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Array<Stats>;
};
type CampaignReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: Array<any>;
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Campaigns = {
    items?: Array<Campaign>;
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: Array<BigqueryHeadersResHeaders>;
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: Array<GetNRecordsCsvResItems>;
};
type AudienceReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Array<Audience>;
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailProviders = {
    items?: Array<EmailProvider>;
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    static_to?: Array<string>;
    static_cc?: Array<string>;
    static_bcc?: Array<string>;
    reply_to?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<string>;
    static_cc?: Array<string>;
    static_bcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    reply_to?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<any>;
    static_cc?: Array<any>;
    static_bcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: Array<any>;
    static_cc?: Array<any>;
    static_bcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: Array<EmailTemplate>;
    page?: Page;
};
type SystemEmailTemplates = {
    items?: Array<SystemEmailTemplate>;
    page?: Page;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: Array<EventSubscription>;
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Array<Job>;
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type JobLogs = {
    items?: Array<JobLog>;
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: Array<string>;
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Array<Log>;
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsProviders = {
    items?: Array<SmsProvider>;
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: Array<any>;
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SmsTemplates = {
    items?: Array<SmsTemplate>;
    page?: Page;
};
type SystemSmsTemplates = {
    items?: Array<SystemSmsTemplate>;
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: Array<SystemNotification>;
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    excluded_fields: Array<string>;
    app_id: string;
    aggregators?: Array<any>;
    display_fields: Array<string>;
    success: boolean;
    created: boolean;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    secret: string;
    key: string;
    merchant_salt: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: Array<string>;
    success: boolean;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type PaymentModeList = {
    card_name?: string;
    display_name?: string;
    fynd_vpa?: string;
    intent_app_error_list?: Array<string>;
    card_reference?: string;
    exp_year?: number;
    card_isin?: string;
    logo_url?: PaymentModeLogo;
    code?: string;
    card_issuer?: string;
    intent_flow?: string;
    merchant_code?: string;
    card_id?: string;
    card_token?: string;
    card_number?: string;
    expired?: boolean;
    timeout?: number;
    card_type?: string;
    card_brand?: string;
    retry_count?: number;
    card_brand_image?: string;
    aggregator_name: string;
    exp_month?: number;
    name?: string;
    display_priority?: number;
    card_fingerprint?: string;
    nickname?: string;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    display_name: string;
    list?: Array<PaymentModeList>;
    add_card_enabled?: boolean;
    aggregator_name?: string;
    name: string;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    more_attributes: any;
    transfer_type: string;
    payouts_aggregators: Array<any>;
    is_active: boolean;
    customers: any;
    is_default: boolean;
    unique_transfer_no: any;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    is_active: boolean;
    users: any;
    aggregator: string;
    bank_details: any;
};
type PayoutResponse = {
    payment_status: string;
    transfer_type: string;
    payouts: any;
    is_active: boolean;
    created: boolean;
    users: any;
    success: boolean;
    aggregator: string;
    bank_details: any;
    unique_transfer_no: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    unique_external_id: string;
    is_active: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: Array<any>;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type BankDetails = {
    address?: string;
    email: string;
    ifsc_code: string;
    account_no: string;
    comment?: string;
    mobile: string;
    account_holder: string;
    branch_name: string;
    bank_name: string;
};
type AddBeneficiaryDetailsRequest = {
    details: BankDetails;
    delights: boolean;
    shipment_id: string;
    order_id: string;
    transfer_mode: string;
};
type RefundAccountResponse = {
    message: string;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    display_name: string;
    beneficiary_id: string;
    delights_user_name: string;
    is_active: boolean;
    email: string;
    mobile?: boolean;
    branch_name?: boolean;
    bank_name: string;
    address: string;
    created_on: string;
    modified_on: string;
    account_holder: string;
    transfer_mode: string;
    id: number;
    account_no: string;
    comment?: boolean;
    title: string;
    ifsc_code: string;
    subtitle: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries: Array<OrderBeneficiaryDetails>;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    words?: Array<string>;
    result: SearchKeywordResult;
    is_active?: boolean;
};
type GetSearchWordsData = {
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    words?: Array<string>;
    result?: any;
};
type ErrorResponse = {
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: Array<GetSearchWordsData>;
    page?: Page;
};
type Media = {
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    type: string;
    params?: any;
    query: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    words?: Array<string>;
    is_active?: boolean;
    results?: Array<AutocompleteResult>;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    words?: Array<string>;
    results?: Array<any>;
};
type GetAutocompleteWordsResponse = {
    items?: Array<GetAutocompleteWordsData>;
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    results?: Array<any>;
    words?: Array<string>;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    product_uid: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    meta?: any;
    page_visibility?: Array<string>;
    modified_on?: string;
    created_by?: any;
    same_store_assignment?: boolean;
    created_on?: string;
    products: Array<ProductBundleItem>;
    logo?: string;
    choice: string;
    company_id?: number;
    slug: string;
    id?: string;
    is_active: boolean;
    name: string;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    items?: Array<GetProductBundleCreateResponse>;
    page?: Page;
};
type ProductBundleRequest = {
    meta?: any;
    page_visibility?: Array<string>;
    modified_on?: string;
    created_by?: any;
    same_store_assignment?: boolean;
    created_on?: string;
    products: Array<ProductBundleItem>;
    logo?: string;
    choice: string;
    slug: string;
    is_active: boolean;
    name: string;
    modified_by?: any;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    page_visibility?: Array<string>;
    modified_on?: string;
    same_store_assignment?: boolean;
    products: Array<ProductBundleItem>;
    logo?: string;
    choice: string;
    slug: string;
    is_active: boolean;
    name: string;
    modified_by?: any;
};
type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    is_available?: boolean;
};
type LimitedProductData = {
    identifier?: any;
    sizes?: Array<string>;
    short_description?: string;
    uid?: number;
    country_of_origin?: string;
    attributes?: any;
    images?: Array<string>;
    quantity?: number;
    price?: any;
    slug?: string;
    item_code?: string;
    name?: string;
};
type Price = {
    currency?: string;
    min_effective?: number;
    max_marked?: number;
    min_marked?: number;
    max_effective?: number;
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    sizes?: Array<Size>;
    product_details?: LimitedProductData;
    product_uid?: number;
    allow_remove?: boolean;
    max_quantity?: number;
    auto_select?: boolean;
    price?: Price;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    meta?: any;
    page_visibility?: Array<string>;
    company_id?: number;
    same_store_assignment?: boolean;
    products?: Array<GetProducts>;
    logo?: string;
    choice?: string;
    slug?: string;
    is_active?: boolean;
    name?: string;
};
type ListSizeGuide = {
    items?: Array<any>;
    page?: any;
};
type Meta = {
    unit?: string;
    values?: Array<any>;
    headers?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    tag?: string;
    description?: string;
    created_by?: any;
    created_on?: string;
    company_id?: number;
    modified_on?: string;
    id?: string;
    title: string;
    active?: boolean;
    brand_id?: number;
    guide?: Guide;
    subtitle?: string;
    name: string;
    modified_by?: any;
};
type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
type SizeGuideResponse = {
    tag?: string;
    created_on?: string;
    created_by?: any;
    company_id?: number;
    modified_by?: any;
    id?: string;
    active?: boolean;
    title?: string;
    brand_id?: number;
    guide?: any;
    subtitle?: string;
    name?: string;
    modified_on?: string;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    display?: string;
    filter_types?: Array<string>;
    units?: Array<any>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    similar?: any;
    compare?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: Array<ConfigurationListingSortConfig>;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    sort?: string;
    condition?: string;
    bucket_points?: Array<ConfigurationBucketPoints>;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    key: string;
    type: string;
    logo?: string;
    is_active: boolean;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    priority: number;
    key: string;
    logo?: string;
    size: ProductSize;
    display_type: string;
    is_active: boolean;
    name: string;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProductConfig = {
    priority: number;
    key: string;
    logo?: string;
    title?: string;
    size?: ProductSize;
    is_active: boolean;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    config_id?: string;
    app_id: string;
    config_type: string;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    config_id?: string;
    app_id: string;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    app_id: string;
    config_type: string;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    logo?: string;
    name: string;
    kind?: string;
};
type ProductFiltersValue = {
    currency_code?: string;
    selected_max?: number;
    value: string;
    display: string;
    currency_symbol?: string;
    display_format?: string;
    query_format?: string;
    max?: number;
    min?: number;
    is_selected: boolean;
    selected_min?: number;
    count?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type ProductListingActionPage = {
    type?: string;
    query?: any;
};
type ProductListingAction = {
    type?: string;
    page?: ProductListingActionPage;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    query?: any;
    banners?: ImageUrls;
    name?: string;
    visible_facets_keys?: Array<string>;
    action?: ProductListingAction;
    app_id?: string;
    _schedule?: any;
    logo?: Media1;
    slug?: string;
    description?: string;
    meta?: any;
    type?: string;
    badge?: any;
    allow_sort?: boolean;
    allow_facets?: boolean;
    cron?: any;
    tag?: Array<string>;
    uid?: string;
    is_active?: boolean;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
type GetCollectionListingResponse = {
    items?: Array<GetCollectionDetailNest>;
    page?: Page;
    filters?: CollectionListingFilter;
};
type UserInfo = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type Schedule = {
    start?: string;
    duration?: number;
    cron?: string;
    end?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    _custom_json?: any;
    query?: any;
    created_by?: UserInfo;
    banners: CollectionBanner;
    name: string;
    published?: boolean;
    visible_facets_keys?: Array<string>;
    app_id: string;
    tags?: Array<string>;
    sort_on?: string;
    _schedule?: Schedule;
    logo: CollectionImage;
    slug: string;
    description?: string;
    meta?: any;
    seo?: SeoDetail;
    type: string;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _locale_language?: any;
    is_active?: boolean;
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    tag?: Array<string>;
    description?: string;
    query?: any;
    visible_facets_keys?: Array<string>;
    meta?: any;
    app_id?: string;
    type?: string;
    _schedule?: any;
    badge?: any;
    logo?: BannerImage;
    allow_sort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    allow_facets?: boolean;
    is_active?: boolean;
    name?: string;
    cron?: any;
};
type CollectionDetailResponse = {
    tag?: Array<string>;
    description?: string;
    query?: any;
    visible_facets_keys?: Array<string>;
    meta?: any;
    app_id?: string;
    type?: string;
    _schedule?: any;
    badge?: any;
    logo?: Media1;
    allow_sort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    allow_facets?: boolean;
    is_active?: boolean;
    name?: string;
    cron?: any;
};
type UpdateCollection = {
    _custom_json?: any;
    query?: any;
    banners?: CollectionBanner;
    name?: string;
    published?: boolean;
    visible_facets_keys?: Array<string>;
    tags?: Array<string>;
    sort_on?: string;
    _schedule?: Schedule;
    logo?: CollectionImage;
    slug?: string;
    description?: string;
    meta?: any;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _locale_language?: any;
    is_active?: boolean;
    modified_by?: UserInfo;
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: Array<ProductDetailAttribute>;
    title?: string;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    action?: ProductListingAction;
    logo?: Media1;
    name?: string;
    uid?: number;
};
type ProductListingDetail = {
    product_online_date?: string;
    rating_count?: number;
    promo_meta?: any;
    teaser_tag?: any;
    image_nature?: string;
    item_type?: string;
    item_code?: string;
    name?: string;
    tryouts?: Array<string>;
    short_description?: string;
    color?: string;
    rating?: number;
    slug: string;
    similars?: Array<string>;
    description?: string;
    grouped_attributes?: Array<ProductDetailGroupedAttribute>;
    attributes?: any;
    type?: string;
    discount?: string;
    price?: ProductListingPrice;
    has_variant?: boolean;
    sellable?: boolean;
    uid?: number;
    brand?: ProductBrand;
    highlights?: Array<string>;
    medias?: Array<Media1>;
};
type GetCollectionItemsResponse = {
    items?: Array<ProductListingDetail>;
    page?: Page;
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type CollectionItemRequest = {
    page_no: number;
    page_size: number;
};
type UpdatedResponse = {
    message?: string;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    total_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
    name?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    store_ids?: Array<number>;
    opt_level: string;
    brand_ids?: Array<number>;
    enabled?: boolean;
};
type CompanyOptIn = {
    platform: string;
    enabled: boolean;
    brand_ids: Array<number>;
    created_on: number;
    created_by?: any;
    company_id: number;
    modified_by?: any;
    store_ids: Array<number>;
    opt_level: string;
    modified_on: number;
};
type GetOptInPlatform = {
    items: Array<CompanyOptIn>;
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    uid?: number;
    business_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: Array<CompanyBrandDetail>;
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    additional_contacts?: Array<any>;
    store_code?: string;
    uid?: number;
    timing?: any;
    created_on?: string;
    company_id?: number;
    documents?: Array<any>;
    store_type?: string;
    display_name?: string;
    name?: string;
    modified_on?: string;
};
type OptinStoreDetails = {
    items?: Array<StoreDetail>;
    page?: Page;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: Array<string>;
    format?: string;
    mandatory?: boolean;
    type: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: Array<string>;
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: Array<string>;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    schema?: AttributeMaster;
    description?: string;
    meta?: AttributeMasterMeta;
    filters?: AttributeMasterFilter;
    departments?: Array<string>;
    logo?: string;
    slug?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    name?: string;
    id?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: Array<any>;
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
    message?: string;
};
type UserSerializer = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetDepartment = {
    uid?: number;
    page_no?: number;
    synonyms?: Array<string>;
    priority_order?: number;
    created_on?: string;
    created_by?: UserSerializer;
    page_size?: number;
    modified_by?: UserSerializer;
    logo?: string;
    item_type?: string;
    slug?: string;
    is_active?: boolean;
    search?: string;
    name?: string;
    modified_on?: string;
};
type DepartmentsResponse = {
    items?: Array<GetDepartment>;
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
    message?: string;
};
type ProductTemplate = {
    tag?: string;
    description?: string;
    is_physical: boolean;
    departments?: Array<string>;
    attributes?: Array<string>;
    created_by?: any;
    categories?: Array<string>;
    created_on?: string;
    modified_on?: string;
    logo?: string;
    slug: string;
    is_active?: boolean;
    is_archived?: boolean;
    name?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    media?: any;
    sizes?: any;
    currency?: any;
    teaser_tag?: any;
    item_type?: any;
    item_code?: any;
    custom_order?: any;
    no_of_boxes?: any;
    name?: any;
    short_description?: any;
    multi_size?: any;
    brand_uid?: any;
    tags?: any;
    return_config?: any;
    trader_type?: any;
    hsn_code?: any;
    slug?: any;
    command?: any;
    description?: any;
    category_slug?: any;
    variants?: any;
    is_dependent?: any;
    product_publish?: any;
    moq?: any;
    highlights?: any;
    trader?: any;
    country_of_origin?: any;
    is_active?: any;
    product_group_tag?: any;
    size_guide?: any;
};
type GlobalValidation = {
    description?: string;
    type?: string;
    definitions?: any;
    properties?: Properties;
    title?: string;
    required?: Array<string>;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    tag?: string;
    description?: string;
    is_physical: boolean;
    departments?: Array<string>;
    attributes?: Array<string>;
    categories?: Array<string>;
    logo?: string;
    slug: string;
    is_active?: boolean;
    is_archived?: boolean;
    name?: string;
    id?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    hsn_code?: Array<string>;
    country_of_origin?: Array<string>;
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    brand?: Array<string>;
    type?: string;
    templates?: Array<string>;
};
type ProductDownloadsItems = {
    trigger_on?: string;
    task_id?: string;
    seller_id?: number;
    status?: string;
    url?: string;
    created_by?: VerifiedBy;
    template_tags?: any;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: Array<any>;
    multivalue?: boolean;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
};
type Category = {
    media?: Media2;
    priority?: number;
    uid?: number;
    marketplaces?: CategoryMapping;
    departments: Array<number>;
    synonyms?: Array<string>;
    name: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    modified_by?: any;
    level: number;
    slug?: string;
    is_active: boolean;
    _id?: string;
    hierarchy?: Array<Hierarchy>;
    tryouts?: Array<string>;
};
type CategoryResponse = {
    items?: Array<Category>;
    page?: Page;
};
type CategoryRequestBody = {
    media?: Media2;
    priority?: number;
    marketplaces?: CategoryMapping;
    departments: Array<number>;
    synonyms?: Array<string>;
    name: string;
    level: number;
    slug?: string;
    is_active: boolean;
    hierarchy?: Array<Hierarchy>;
    tryouts?: Array<string>;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Attributes = {
    product_fit?: string;
    created_by?: UserCommon;
    image_nature?: string;
    verified_by?: VerifiedBy;
    is_image_less_product?: boolean;
    primary_color?: string;
    color?: string;
    pattern?: string;
    modified_on?: string;
    verified_on?: string;
    sleeve_length?: string;
    gender?: Array<string>;
    modified_by?: UserCommon;
    stage?: string;
    meta_nature?: string;
    material?: string;
    essential?: string;
    created_on?: string;
    primary_material?: string;
    neck_type?: string;
    l3_mapping?: Array<string>;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
type ImageObject = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type Product = {
    media?: Array<Media1>;
    sizes?: Array<any>;
    currency?: string;
    item_type?: string;
    item_code?: string;
    name?: string;
    id?: string;
    multi_size?: boolean;
    hsn_code?: string;
    company_id?: number;
    slug?: string;
    template_tag?: string;
    description?: string;
    category_slug?: string;
    is_dependent?: boolean;
    attributes?: Attributes;
    all_sizes?: Array<string>;
    product_publish?: ProductPublished;
    uid?: number;
    highlights?: string;
    brand?: Brand;
    country_of_origin?: string;
    departments?: Array<number>;
    status?: string;
    images?: Array<ImageObject>;
    is_set?: boolean;
    is_active?: boolean;
    size_guide?: string;
};
type ProductListingResponse = {
    items?: Array<Product>;
    page?: Page;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type OrderQuantity = {
    minimum?: number;
    maximum?: number;
    is_set?: boolean;
};
type Trader = {
    name: string;
    address: string;
};
type ProductCreateUpdate = {
    _custom_json?: any;
    media?: Array<Media1>;
    currency: string;
    teaser_tag?: TeaserTag;
    item_type: string;
    item_code: string;
    requester?: string;
    custom_order?: CustomOrder;
    no_of_boxes?: number;
    name: string;
    is_image_less_product?: boolean;
    short_description?: string;
    multi_size?: boolean;
    brand_uid: number;
    tags?: Array<string>;
    return_config?: ReturnConfig;
    trader_type?: string;
    hsn_code: string;
    company_id: number;
    slug: string;
    template_tag: string;
    category_slug: string;
    description?: string;
    variants?: any;
    is_dependent?: boolean;
    change_request_id?: string;
    product_publish?: ProductPublish;
    moq?: OrderQuantity;
    uid?: number;
    highlights?: Array<string>;
    trader?: Trader;
    country_of_origin: string;
    departments: Array<number>;
    is_set?: boolean;
    is_active?: boolean;
    product_group_tag?: Array<string>;
    size_guide?: string;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    is_active?: boolean;
    succeed?: number;
    total?: number;
    cancelled?: number;
    file_path?: string;
    failed_records?: Array<string>;
    created_on?: string;
    created_by?: UserDetail;
    company_id?: number;
    template?: ProductTemplate;
    modified_by?: UserDetail;
    cancelled_records?: Array<string>;
    stage?: string;
    failed?: number;
    template_tag?: string;
    modified_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    succeed?: number;
    total: number;
    cancelled?: number;
    file_path?: string;
    failed_records?: Array<any>;
    custom_template_tag?: string;
    created_on: string;
    created_by?: UserInfo1;
    company_id: number;
    stage?: string;
    modified_by?: UserInfo1;
    tracking_url?: string;
    cancelled_records?: Array<any>;
    is_active?: boolean;
    failed?: number;
    template_tag?: string;
    modified_on?: string;
};
type BulkProductRequest = {
    company_id: number;
    data: Array<any>;
    batch_id: string;
    template_tag: string;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type Items = {
    retry?: number;
    is_active?: boolean;
    succeed?: number;
    total?: number;
    cancelled?: number;
    file_path?: string;
    failed_records?: Array<string>;
    created_by?: UserCommon;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    id?: string;
    tracking_url?: string;
    cancelled_records?: Array<string>;
    stage?: string;
    failed?: number;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Array<Items>;
    page?: Page;
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    inventory_updated_on?: string;
    currency?: string;
    uid?: string;
    identifiers?: any;
    price_transfer?: number;
    store?: any;
    quantity?: number;
    price?: number;
    seller_identifier?: number;
    size?: string;
    price_effective?: number;
    item_id?: number;
    sellable_quantity?: number;
};
type GTIN = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    currency: string;
    item_height?: number;
    identifiers: Array<GTIN>;
    price_transfer?: number;
    item_width?: number;
    item_length?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    quantity: number;
    price: number;
    size: string;
    price_effective: number;
    is_set?: boolean;
    set?: InventorySet;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: Array<InvSize>;
    item: ItemQuery;
};
type InventoryDeleteData = {
    location_id?: number;
    item_id?: number;
    size?: string;
};
type InventoryDelete = {
    data?: InventoryDeleteData;
    success?: boolean;
};
type BulkInventoryGetItems = {
    succeed?: number;
    total?: number;
    cancelled?: number;
    file_path?: string;
    created_on?: string;
    created_by?: any;
    company_id?: number;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    stage?: string;
    cancelled_records?: Array<string>;
    is_active?: boolean;
    failed?: number;
    failed_records?: Array<string>;
};
type BulkInventoryGet = {
    items?: Array<BulkInventoryGetItems>;
    page?: Page;
};
type CommonResponse = {
    success?: string;
};
type Size1 = {
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    currency: string;
    item_height?: number;
    identifiers?: Array<any>;
    price_transfer?: number;
    item_width?: number;
    item_length?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    quantity: number;
    price: number;
    seller_identifier: string;
    size?: string;
    price_effective: number;
    is_set?: boolean;
    set?: InventorySet;
};
type InventoryBulkRequest = {
    user?: any;
    company_id: number;
    sizes: Array<Size1>;
    batch_id: string;
};
type InventoryExportJob = {
    trigger_on?: string;
    seller_id: number;
    task_id: string;
    status?: string;
    url?: string;
    request_params?: any;
    completed_on?: string;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    type?: string;
    store?: Array<number>;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: Array<FilerList>;
    multivalues?: boolean;
};
type HsnCodesObject = {
    threshold1?: number;
    tax_on_mrp?: boolean;
    threshold2?: number;
    modified_on?: string;
    hsn_code?: string;
    company_id?: number;
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    tax1?: number;
    id?: string;
};
type PageResponse = {
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
    size?: number;
};
type HsnCodesListingResponse = {
    items?: Array<HsnCodesObject>;
    page?: PageResponse;
};
type HsnUpsert = {
    threshold1: number;
    uid?: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    hsn_code: string;
    company_id: number;
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code: string;
    tax1: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: Array<HsnUpsert>;
};
type BulkHsnResponse = {
    success?: boolean;
};
type BrandItem = {
    action?: ProductListingAction;
    uid?: number;
    departments?: Array<string>;
    discount?: string;
    logo?: Media;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
};
type BrandListingResponse = {
    items?: Array<BrandItem>;
    page: Page;
};
type Department = {
    uid?: number;
    priority_order?: number;
    logo?: Media;
    slug?: string;
    name?: string;
};
type DepartmentResponse = {
    items?: Array<Department>;
};
type ThirdLevelChild = {
    _custom_json?: any;
    uid?: number;
    action?: ProductListingAction;
    banners?: ImageUrls;
    slug?: string;
    childs?: Array<any>;
    name?: string;
};
type SecondLevelChild = {
    _custom_json?: any;
    uid?: number;
    action?: ProductListingAction;
    banners?: ImageUrls;
    slug?: string;
    childs?: Array<ThirdLevelChild>;
    name?: string;
};
type Child = {
    _custom_json?: any;
    uid?: number;
    action?: ProductListingAction;
    banners?: ImageUrls;
    slug?: string;
    childs?: Array<SecondLevelChild>;
    name?: string;
};
type CategoryItems = {
    uid?: number;
    action?: ProductListingAction;
    banners?: ImageUrls;
    slug?: string;
    childs?: Array<Child>;
    name?: string;
};
type DepartmentCategoryTree = {
    items?: Array<CategoryItems>;
    department?: string;
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type CategoryListingResponse = {
    data?: Array<DepartmentCategoryTree>;
    departments?: Array<DepartmentIdentifier>;
};
type ApplicationProductListingResponse = {
    items?: Array<ProductListingDetail>;
    page: Page;
    filters?: Array<ProductFilters>;
    sort_on?: Array<ProductSortOn>;
};
type ProductDetail = {
    product_online_date?: string;
    rating_count?: number;
    promo_meta?: any;
    teaser_tag?: any;
    image_nature?: string;
    item_type?: string;
    item_code?: string;
    name?: string;
    tryouts?: Array<string>;
    short_description?: string;
    color?: string;
    rating?: number;
    slug: string;
    similars?: Array<string>;
    description?: string;
    grouped_attributes?: Array<ProductDetailGroupedAttribute>;
    attributes?: any;
    type?: string;
    has_variant?: boolean;
    uid?: number;
    brand?: ProductBrand;
    highlights?: Array<string>;
    medias?: Array<Media1>;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type CompanyAddress = {
    longitude: number;
    address1: string;
    country_code?: string;
    state: string;
    landmark?: string;
    country: string;
    address2?: string;
    pincode: number;
    latitude: number;
    city: string;
};
type ReferralInfo = {
    referral_code?: string;
};
type Document = {
    legal_name: string;
    url?: string;
    type: string;
    value: string;
    verified?: boolean;
};
type CompanyStoreSerializerRequest = {
    business_info?: string;
    brands: Array<number>;
    business_country_info: BusinessCountryInfo;
    name: string;
    address: CompanyAddress;
    franchise_enabled?: boolean;
    notification_emails?: Array<string>;
    business_type: string;
    referral_info?: ReferralInfo;
    document: Document;
    uid?: number;
    warnings?: any;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<SellerPhoneNumber>;
};
type GetAddressSerializer = {
    longitude?: number;
    address1?: string;
    country_code?: string;
    state?: string;
    landmark?: string;
    country?: string;
    address2?: string;
    pincode?: number;
    latitude?: number;
    city?: string;
    address_type?: string;
};
type BusinessCountryInfo1 = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    documents?: Array<Document>;
    uid: number;
    created_by?: UserSerializer;
    created_on?: string;
    stage?: string;
    verified_on?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    name?: string;
    franchise_enabled?: boolean;
    modified_by?: UserSerializer;
    notification_emails?: Array<string>;
    contact_details?: ContactDetails;
    addresses?: Array<GetAddressSerializer>;
    modified_on?: string;
    business_country_info?: BusinessCountryInfo1;
    business_details?: BusinessDetails;
    business_type: string;
    business_info?: string;
    company_type: string;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    uid?: number;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    name: string;
    logo: string;
    brand_tier?: string;
    description?: string;
    company_id?: number;
    uid?: number;
    synonyms?: Array<string>;
    _custom_json?: any;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetBrandResponseSerializer = {
    _locale_language?: any;
    created_by?: UserSerializer1;
    modified_on?: string;
    created_on?: string;
    banner?: BrandBannerSerializer;
    name: string;
    slug_key?: string;
    logo?: string;
    modified_by?: UserSerializer1;
    description?: string;
    stage?: string;
    reject_reason?: string;
    verified_on?: string;
    warnings?: any;
    uid?: number;
    synonyms?: Array<string>;
    verified_by?: UserSerializer1;
    _custom_json?: any;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: Array<number>;
    company: number;
};
type GetCompanySerializer = {
    addresses?: Array<GetAddressSerializer>;
    created_by?: UserSerializer;
    modified_on?: string;
    created_on?: string;
    name?: string;
    modified_by?: UserSerializer;
    stage?: string;
    reject_reason?: string;
    verified_on?: string;
    business_type?: string;
    uid?: number;
    company_type?: string;
    verified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    created_by?: UserSerializer1;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    created_on?: string;
    warnings?: any;
    company?: GetCompanySerializer;
    modified_by?: UserSerializer1;
    stage?: string;
    reject_reason?: string;
    verified_on?: string;
    uid?: number;
    verified_by?: UserSerializer1;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: Array<CompanyBrandSerializer>;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type GetAddressSerializer1 = {
    longitude?: number;
    address1?: string;
    country_code?: string;
    state?: string;
    landmark?: string;
    country?: string;
    address2?: string;
    pincode?: number;
    latitude?: number;
    city?: string;
    address_type?: string;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type LocationSerializer = {
    timing?: Array<LocationDayWiseSerializer>;
    manager?: LocationManagerSerializer;
    store_type?: string;
    name: string;
    company: number;
    address: GetAddressSerializer1;
    notification_emails?: Array<string>;
    documents?: Array<Document>;
    stage?: string;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    code: string;
    uid?: number;
    contact_numbers?: Array<SellerPhoneNumber>;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    _custom_json?: any;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    integration_type?: LocationIntegrationType;
    timing?: Array<LocationDayWiseSerializer>;
    manager?: LocationManagerSerializer;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    uid?: number;
    documents?: Array<Document>;
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    created_by?: UserSerializer1;
    created_on?: string;
    stage?: string;
    verified_on?: string;
    contact_numbers?: Array<SellerPhoneNumber>;
    phone_number: string;
    verified_by?: UserSerializer1;
    warnings?: any;
    store_type?: string;
    name: string;
    company?: GetCompanySerializer;
    notification_emails?: Array<string>;
    modified_by?: UserSerializer1;
    modified_on?: string;
    address: GetAddressSerializer;
    code: string;
};
type LocationListSerializer = {
    page?: Page;
    items?: Array<GetLocationSerializer>;
};
type BulkLocationSerializer = {
    data?: Array<LocationSerializer>;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: Array<string>;
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: Array<string>;
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    created_on: string;
    modified_on: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attempts_made: number;
    stacktrace?: Array<string>;
    finished_on: number;
    processed_on: number;
};
type BulkResponse = {
    tracking_url: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Array<Urls>;
};
type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
type DbRecord = {
    success: boolean;
    tags: Array<string>;
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
};
type BrowseResponse = {
    items: Array<DbRecord>;
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: Array<GenericDTO>;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integration_data?: any;
    company_name?: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: Array<GenericDTO>;
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: Array<number>;
    hidden_closet_keys?: Array<string>;
    open_tags?: any;
    tax_identifiers?: Array<string>;
    delete_quantity_threshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: Array<PropBeanConfig>;
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: Array<string>;
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: Array<string>;
    data_start_index?: number;
    prop_bean_configs?: Array<PropBeanConfig>;
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: Array<string>;
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: Array<StoreConfig>;
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: Array<string>;
    company_config?: Array<CompanyConfig>;
    company_ids?: Array<number>;
    tax_identifiers?: Array<string>;
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: Array<string>;
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    company_name: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: Array<PropBeanConfig>;
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: Array<PropBeanConfig>;
    aggregate_pipeline?: Array<any>;
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    source_field?: string;
    source_fields?: Array<string>;
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: Array<string>;
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    trace_id?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: Array<string>;
    exclude_tags?: Array<string>;
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: Array<TaskParam>;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: Array<TaskConfig>;
    task_config_ids?: Array<number>;
    task_config_group_ids?: Array<number>;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: Array<string>;
    _id?: string;
    loyalty_points?: LoyaltyPoints;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: Array<any>;
    image?: Array<string>;
    company_store?: Array<any>;
};
type InventoryBrand = {
    criteria?: string;
    brands?: Array<any>;
};
type InventoryStore = {
    criteria?: string;
    stores?: Array<any>;
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: Array<number>;
    brands?: Array<any>;
};
type InventoryCategory = {
    criteria?: string;
    categories?: Array<any>;
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    post_order_reassignment?: boolean;
    enforced_stores?: Array<any>;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: Array<any>;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    auto_apply?: boolean;
    strategy_channel?: string;
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPoints = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPoints;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: Array<BrandCompanyInfo>;
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Array<Application>;
    page?: Page;
};
type MobileAppConfiguration = {
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: Array<string>;
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Array<Domain>;
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: Array<DomainStatus>;
};
type DomainSuggestionsRequest = {
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: Array<DomainSuggestion>;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn;
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema;
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    last_patch?: Array<any>;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    last_patch?: LastPatch;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: Array<string>;
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: Array<number>;
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: Array<OtherSellerApplication>;
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: Array<number>;
    company: Array<number>;
};
type ProductDetailFeature = {
    similar?: Array<string>;
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    listing_page?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
    sort?: string;
};
type ListingPageFeature = {
    sort_on?: string;
};
type CurrencyFeature = {
    value?: Array<string>;
    type?: string;
    default_currency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_default?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: Array<string>;
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: Array<number>;
};
type StoreCriteriaRule = {
    companies?: Array<number>;
    brands?: Array<number>;
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: Array<StoreCriteriaRule>;
    stores?: Array<number>;
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: Array<string>;
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    enforced_stores?: Array<number>;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: Array<string>;
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: Array<string>;
    email?: Array<string>;
    timing?: string;
};
type SocialLinks = {
    facebook?: Facebook;
    instagram?: Instagram;
    twitter?: Twitter;
    pinterest?: Pinterest;
    google_plus?: GooglePlus;
    youtube?: Youtube;
    linked_in?: LinkedIn;
    vimeo?: Vimeo;
    blog_link?: BlogLink;
};
type Instagram = {
    title?: string;
    icon?: string;
    link?: string;
};
type Twitter = {
    title?: string;
    icon?: string;
    link?: string;
};
type Pinterest = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlus = {
    title?: string;
    icon?: string;
    link?: string;
};
type Youtube = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedIn = {
    title?: string;
    icon?: string;
    link?: string;
};
type Vimeo = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Array<Domain>;
    _id?: string;
};
type CurrenciesResponse = {
    items?: Array<Currency>;
};
type StoreLatLong = {
    type?: string;
    coordinates?: Array<number>;
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: Array<OrderingStore>;
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    auth?: Auth;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type Auth = {
    google?: Google;
    facebook?: Facebook;
    accountkit?: Accountkit;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    applicable_on: string;
    scope?: Array<string>;
    currency_code?: string;
    value_type: string;
    is_exact?: boolean;
    calculate_on: string;
    type: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    description?: string;
    subtitle?: string;
    title?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Validity = {
    priority?: number;
};
type Identifier = {
    collection_id?: Array<string>;
    brand_id?: Array<number>;
    company_id?: Array<number>;
    store_id?: Array<number>;
    category_id?: Array<number>;
    article_id?: Array<string>;
    item_id?: Array<number>;
    user_id?: Array<string>;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: Array<string>;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    start?: string;
    next_schedule?: Array<any>;
    end?: string;
};
type Rule = {
    min?: number;
    value?: number;
    discount_qty?: number;
    key?: number;
    max?: number;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: Array<string>;
    types?: Array<string>;
    uses?: PaymentAllowValue;
    codes?: Array<string>;
};
type PaymentCodes = {
    card?: PaymentModes;
    pl?: PaymentModes;
    upi?: PaymentModes;
    nb?: PaymentModes;
    wl?: PaymentModes;
    ps?: PaymentModes;
    qr?: PaymentModes;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    payments?: PaymentCodes;
    post_order?: PostOrder;
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: Array<string>;
    ordering_stores?: Array<number>;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAdd = {
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    ownership: Ownership;
    tags?: Array<string>;
    validity: Validity;
    identifiers: Identifier;
    validation?: Validation;
    _schedule?: CouponSchedule;
    type_slug: string;
    rule: Array<Rule>;
    action?: CouponAction;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    state?: State;
    date_meta?: CouponDateMeta;
    code: string;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type CouponUpdate = {
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    ownership: Ownership;
    tags?: Array<string>;
    validity: Validity;
    identifiers: Identifier;
    validation?: Validation;
    _schedule?: CouponSchedule;
    type_slug: string;
    rule: Array<Rule>;
    action?: CouponAction;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    state?: State;
    date_meta?: CouponDateMeta;
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type Breakup = {
    value?: number;
    key?: string;
};
type ProductSizeChart = {
    display?: string;
    values?: Array<string>;
    unit?: string;
    is_available?: number;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
};
type ProductListingBrandLogo = {
    aspect_ratio?: string;
    action?: ProductListingAction;
    url?: string;
};
type ProductWithSize = {
    product_id: string;
    sizes?: Array<ProductSizeChart>;
    image?: ProductImage;
    price_effective: string;
    action?: ProductListingAction;
    discount: string;
    price_marked: string;
    selected_size: string;
    message: string;
    brand_logo?: ProductListingBrandLogo;
    brand: string;
};
type CartDetail = {
    is_valid?: boolean;
    breakup?: Array<Breakup>;
    items?: Array<ProductWithSize>;
};
type CartItems = {
    cart_items: Array<CartItem>;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItems;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ActionQuery = {
    product_slug?: Array<string>;
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductPrice = {
    marked?: number;
    selling?: number;
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    add_on?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    out_of_stock?: boolean;
    sizes?: Array<string>;
    other_store_quantity?: number;
    is_valid?: boolean;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    store?: BaseInfo;
    quantity?: number;
    uid?: string;
    price?: ArticlePriceInfo;
    size?: string;
    seller?: BaseInfo;
    extra_meta?: any;
    type?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    product?: Product;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    is_set?: boolean;
    identifiers: CartProductIdentifer;
    price?: ProductPriceInfo;
    coupon_message?: string;
    availability?: ProductAvailability;
    article?: ProductArticle;
    discount?: string;
    key?: string;
    message?: string;
    promo_meta?: PromoMeta;
};
type DisplayBreakup = {
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    display?: string;
    message?: Array<string>;
    value?: number;
};
type CouponBreakup = {
    type?: string;
    uid?: string;
    is_applied?: boolean;
    message?: string;
    value?: number;
    code?: string;
};
type RawBreakup = {
    convenience_fee?: number;
    vog?: number;
    cod_charge?: number;
    delivery_charge?: number;
    coupon?: number;
    fynd_cash?: number;
    discount?: number;
    subtotal?: number;
    gst_charges?: number;
    mrp_total?: string;
    you_saved?: number;
    total?: number;
};
type CartBreakup = {
    display?: Array<DisplayBreakup>;
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: Array<CartProductInfo>;
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type CartViewRequestSerializer = {
    product_id: number;
    quantity?: number;
    size: string;
};
type AddressSerializerV1 = {
    meta?: any;
    area?: string;
    email?: string;
    pincode?: number;
    name?: string;
    landmark?: string;
    address?: string;
    area_code: string;
    country: string;
    city: string;
    address_type?: string;
    phone?: number;
    country_code?: string;
    state: string;
    area_code_slug?: string;
};
type ServiceablityReqSerializer = {
    cart_items?: Array<CartViewRequestSerializer>;
    shipping_address: AddressSerializerV1;
    coupon?: string;
};
type CartDetailsResponseSerializer = {
    delivery_promise?: any;
    items?: Array<any>;
    breakup_values?: string;
    message?: string;
    is_valid?: boolean;
};
type AddressSerializer = {
    area?: string;
    email?: string;
    pincode?: number;
    name?: string;
    landmark?: string;
    address?: string;
    city?: string;
    address_type?: string;
    phone: number;
};
type OrderCartItem = {
    product_id: number;
    cod_charges: number;
    quantity?: number;
    delivery_charges: number;
    loyalty_discount?: number;
    size: string;
    price_effective: number;
    coupon_effective_discount: number;
    discount: number;
    amount_paid: number;
    price_marked: number;
    cashback_applied: number;
    employee_discount?: number;
};
type OpenApiFiles = {
    values: Array<string>;
    key: string;
};
type OpenApiCheckoutReq = {
    request_hash: string;
    coupon_code: string;
    affiliate_order_id?: string;
    billing_address: AddressSerializer;
    delivery_charges: number;
    coupon?: string;
    is_cod: boolean;
    cart_value: number;
    cart_items?: Array<OrderCartItem>;
    cashback_applied: number;
    payment_mode?: string;
    shipping_address: AddressSerializer;
    coupon_value: number;
    employee_discount?: any;
    cod_charges: number;
    files?: Array<OpenApiFiles>;
    loyalty_discount?: number;
    order_id?: string;
    currency_code?: string;
};
type ConfirmPaymentReqSerializer = {
    request_hash?: string;
    payment_meta?: any;
    order_id?: string;
};
type StoreMapping = {
    enabled?: string;
    marketplace_store_id?: string;
    store_id?: number;
    meta?: any;
};
type AllChannels = {
    mkp_name?: boolean;
};
type MyntraPayload = {
    merchant_id?: string;
    secret_key?: string;
};
type AmazonPayload = {
    seller_id?: string;
    mws_auth_token?: string;
};
type FlipkartPayload = {
    code?: string;
};
type TatacliqPayload = {
    user_name?: string;
    password?: string;
    merchant_id?: string;
};
type AjioPayload = {
    username?: string;
    password?: string;
    client_ip?: string;
};
type InventorySyncConfig = {
    inventory?: boolean;
    price?: boolean;
};
type StoreMappingPayload = {
    store_mapping_enabled?: boolean;
    store_mapping?: Array<StoreMapping>;
};
type StatusPayload = {
    is_active?: boolean;
};
type StatusResp = {
    is_active?: boolean;
};
type SyncPayload = {
    modified_since?: string;
};
type SyncResp = {
    message?: string;
};
type MkpResp = {
    marketplace?: string;
    worker?: number;
    worker_assigned?: string;
    is_active?: boolean;
    store_mapping_enabled?: boolean;
    company_id?: number;
    configuration?: any;
    store_mapping?: Array<StoreMapping>;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type GiveawayResponse = {
    items?: Array<Giveaway>;
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: Array<HistoryPretty>;
    page?: Page;
    points?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: Array<StatGroup>;
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: Array<StatsGroupComponent>;
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: Array<AbandonCartsDetail>;
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: Array<MkpLogsResp>;
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
};
type SearchLogRes = {
    items?: Array<LogInfo>;
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: Array<string>;
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: Array<string>;
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: Array<DiscountJob>;
    page: Page;
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: Array<number>;
    store_ids?: Array<number>;
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
type ApiError = {
    code?: string;
    message?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: Array<EventConfig>;
};
type SubscriberConfigList = {
    subscribers?: Array<SubscriberConfig>;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    event_company_id?: number;
    event_application_id?: string;
    event_extension_id?: string;
    event_name?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    webhook_url?: string;
    company_id?: number;
    application_id?: string;
    extension_id?: string;
    status?: string;
    auth_meta?: any;
    created_on?: string;
    updated_on?: string;
    subscriber_event_mapping?: any;
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    username?: string;
    password?: string;
};
import Paginator = require("../common/Paginator");
