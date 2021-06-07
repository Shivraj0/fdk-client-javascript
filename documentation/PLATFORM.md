# FDK Platform Front API Documentaion


* [Lead](#Lead) - Handles communication between Administrator <-> Staff and Staff <-> Users 
* [Feedback](#Feedback) - User Reviews and Rating System 
* [Theme](#Theme) - Responsible for themes 
* [User](#User) - Authentication Service 
* [Content](#Content) - Content System 
* [Assignment](#Assignment) -  
* [Billing](#Billing) - Handle platform subscription 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [CompanyProfile](#CompanyProfile) - Company Profile API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [FileStorage](#FileStorage) - File Storage 
* [Share](#Share) - Short link and QR Code 
* [Inventory](#Inventory) -  
* [Configuration](#Configuration) - Application configuration apis 
* [Cart](#Cart) - Cart APIs 
* [Marketplaces](#Marketplaces) - Marketplaces 
* [Rewards](#Rewards) - Rewards 
* [Analytics](#Analytics) - Perceptor analytics 
* [Discount](#Discount) - Discount 
* [Partner](#Partner) - Partner configuration apis 
* [Webhook](#Webhook) - Webhook dispatcher with retry and one event to many subscriber vice versa 

----
----

### Classes and Methods


* [Lead](#Lead)
  * Methods
    * [getTickets](#gettickets)
    * [createTicket](#createticket)
    * [getTickets](#gettickets)
    * [getTicket](#getticket)
    * [editTicket](#editticket)
    * [getTicket](#getticket)
    * [editTicket](#editticket)
    * [createHistory](#createhistory)
    * [getTicketHistory](#gettickethistory)
    * [createHistory](#createhistory)
    * [getTicketHistory](#gettickethistory)
    * [getCustomForm](#getcustomform)
    * [editCustomForm](#editcustomform)
    * [getCustomForms](#getcustomforms)
    * [createCustomForm](#createcustomform)
    * [getTokenForVideoRoom](#gettokenforvideoroom)
    * [getTokenForVideoRoom](#gettokenforvideoroom)
    * [getVideoParticipants](#getvideoparticipants)
    * [getVideoParticipants](#getvideoparticipants)
    * [openVideoRoom](#openvideoroom)
    * [closeVideoRoom](#closevideoroom)
    

* [Feedback](#Feedback)
  * Methods
    * [getAttributes](#getattributes)
    * [getCustomerReviews](#getcustomerreviews)
    * [updateApprove](#updateapprove)
    * [getHistory](#gethistory)
    * [getApplicationTemplates](#getapplicationtemplates)
    * [createTemplate](#createtemplate)
    * [getTemplateById](#gettemplatebyid)
    * [updateTemplate](#updatetemplate)
    * [updateTemplateStatus](#updatetemplatestatus)
    

* [Theme](#Theme)
  * Methods
    * [getAllPages](#getallpages)
    * [createPage](#createpage)
    * [updateMultiplePages](#updatemultiplepages)
    * [getPage](#getpage)
    * [updatePage](#updatepage)
    * [deletePage](#deletepage)
    * [getThemeLibrary](#getthemelibrary)
    * [addToThemeLibrary](#addtothemelibrary)
    * [applyTheme](#applytheme)
    * [isUpgradable](#isupgradable)
    * [upgradeTheme](#upgradetheme)
    * [getPublicThemes](#getpublicthemes)
    * [createTheme](#createtheme)
    * [getAppliedTheme](#getappliedtheme)
    * [getFonts](#getfonts)
    * [getThemeById](#getthemebyid)
    * [updateTheme](#updatetheme)
    * [deleteTheme](#deletetheme)
    * [getThemeForPreview](#getthemeforpreview)
    * [publishTheme](#publishtheme)
    * [unpublishTheme](#unpublishtheme)
    * [archiveTheme](#archivetheme)
    * [unarchiveTheme](#unarchivetheme)
    

* [User](#User)
  * Methods
    * [getCustomers](#getcustomers)
    * [searchUsers](#searchusers)
    * [getPlatformConfig](#getplatformconfig)
    * [updatePlatformConfig](#updateplatformconfig)
    

* [Content](#Content)
  * Methods
    * [getAnnouncementsList](#getannouncementslist)
    * [createAnnouncement](#createannouncement)
    * [getAnnouncementById](#getannouncementbyid)
    * [updateAnnouncement](#updateannouncement)
    * [updateAnnouncementSchedule](#updateannouncementschedule)
    * [deleteAnnouncement](#deleteannouncement)
    * [createBlog](#createblog)
    * [getBlogs](#getblogs)
    * [updateBlog](#updateblog)
    * [deleteBlog](#deleteblog)
    * [getComponentById](#getcomponentbyid)
    * [getFaqCategories](#getfaqcategories)
    * [getFaqCategoryBySlugOrId](#getfaqcategorybyslugorid)
    * [createFaqCategory](#createfaqcategory)
    * [updateFaqCategory](#updatefaqcategory)
    * [deleteFaqCategory](#deletefaqcategory)
    * [getFaqsByCategoryIdOrSlug](#getfaqsbycategoryidorslug)
    * [addFaq](#addfaq)
    * [updateFaq](#updatefaq)
    * [deleteFaq](#deletefaq)
    * [getFaqByIdOrSlug](#getfaqbyidorslug)
    * [getLandingPages](#getlandingpages)
    * [createLandingPage](#createlandingpage)
    * [updateLandingPage](#updatelandingpage)
    * [deleteLandingPage](#deletelandingpage)
    * [getLegalInformation](#getlegalinformation)
    * [updateLegalInformation](#updatelegalinformation)
    * [getNavigations](#getnavigations)
    * [createNavigation](#createnavigation)
    * [getDefaultNavigations](#getdefaultnavigations)
    * [getNavigationBySlug](#getnavigationbyslug)
    * [updateNavigation](#updatenavigation)
    * [deleteNavigation](#deletenavigation)
    * [getPageMeta](#getpagemeta)
    * [getPageSpec](#getpagespec)
    * [createPage](#createpage)
    * [getPages](#getpages)
    * [createPagePreview](#createpagepreview)
    * [updatePagePreview](#updatepagepreview)
    * [updatePage](#updatepage)
    * [deletePage](#deletepage)
    * [getPageBySlug](#getpagebyslug)
    * [getSEOConfiguration](#getseoconfiguration)
    * [updateSEOConfiguration](#updateseoconfiguration)
    * [getSlideshows](#getslideshows)
    * [createSlideshow](#createslideshow)
    * [getSlideshowBySlug](#getslideshowbyslug)
    * [updateSlideshow](#updateslideshow)
    * [deleteSlideshow](#deleteslideshow)
    * [getSupportInformation](#getsupportinformation)
    * [updateSupportInformation](#updatesupportinformation)
    * [updateInjectableTag](#updateinjectabletag)
    * [deleteAllInjectableTags](#deleteallinjectabletags)
    * [getInjectableTags](#getinjectabletags)
    * [addInjectableTag](#addinjectabletag)
    * [removeInjectableTag](#removeinjectabletag)
    * [editInjectableTag](#editinjectabletag)
    

* [Assignment](#Assignment)
  * Methods
    * [createPickupLocation](#createpickuplocation)
    * [getPickupLocation](#getpickuplocation)
    * [updatePickupLocation](#updatepickuplocation)
    * [getPickupLocationById](#getpickuplocationbyid)
    * [createPickupConfiguration](#createpickupconfiguration)
    * [getPickupConfiguration](#getpickupconfiguration)
    * [getAllocationConfiguration](#getallocationconfiguration)
    * [createAllocationConfiguration](#createallocationconfiguration)
    * [updateAllocationConfiguration](#updateallocationconfiguration)
    * [getAllocationLocations](#getallocationlocations)
    * [getAllocationLocationById](#getallocationlocationbyid)
    * [updateAllocationLocation](#updateallocationlocation)
    * [createAllocationLocation](#createallocationlocation)
    * [getDestinationZones](#getdestinationzones)
    * [postDestinationZone](#postdestinationzone)
    * [getDestinationZoneById](#getdestinationzonebyid)
    * [updateDestinationZone](#updatedestinationzone)
    

* [Billing](#Billing)
  * Methods
    * [createSubscriptionCharge](#createsubscriptioncharge)
    * [getSubscriptionCharge](#getsubscriptioncharge)
    * [cancelSubscriptionCharge](#cancelsubscriptioncharge)
    * [getInvoices](#getinvoices)
    * [getInvoiceById](#getinvoicebyid)
    * [getCustomerDetail](#getcustomerdetail)
    * [upsertCustomerDetail](#upsertcustomerdetail)
    * [getSubscription](#getsubscription)
    * [getFeatureLimitConfig](#getfeaturelimitconfig)
    * [activateSubscriptionPlan](#activatesubscriptionplan)
    * [cancelSubscriptionPlan](#cancelsubscriptionplan)
    

* [Communication](#Communication)
  * Methods
    * [getCampaigns](#getcampaigns)
    * [createCampaign](#createcampaign)
    * [getCampaignById](#getcampaignbyid)
    * [updateCampaignById](#updatecampaignbyid)
    * [getStatsOfCampaignById](#getstatsofcampaignbyid)
    * [getAudiences](#getaudiences)
    * [createAudience](#createaudience)
    * [getBigqueryHeaders](#getbigqueryheaders)
    * [getAudienceById](#getaudiencebyid)
    * [updateAudienceById](#updateaudiencebyid)
    * [getNSampleRecordsFromCsv](#getnsamplerecordsfromcsv)
    * [getEmailProviders](#getemailproviders)
    * [createEmailProvider](#createemailprovider)
    * [getEmailProviderById](#getemailproviderbyid)
    * [updateEmailProviderById](#updateemailproviderbyid)
    * [getEmailTemplates](#getemailtemplates)
    * [createEmailTemplate](#createemailtemplate)
    * [getSystemEmailTemplates](#getsystememailtemplates)
    * [getEmailTemplateById](#getemailtemplatebyid)
    * [updateEmailTemplateById](#updateemailtemplatebyid)
    * [deleteEmailTemplateById](#deleteemailtemplatebyid)
    * [getEventSubscriptions](#geteventsubscriptions)
    * [getJobs](#getjobs)
    * [triggerCampaignJob](#triggercampaignjob)
    * [getJobLogs](#getjoblogs)
    * [getCommunicationLogs](#getcommunicationlogs)
    * [getSystemNotifications](#getsystemnotifications)
    * [getSmsProviders](#getsmsproviders)
    * [createSmsProvider](#createsmsprovider)
    * [getSmsProviderById](#getsmsproviderbyid)
    * [updateSmsProviderById](#updatesmsproviderbyid)
    * [getSmsTemplates](#getsmstemplates)
    * [createSmsTemplate](#createsmstemplate)
    * [getSmsTemplateById](#getsmstemplatebyid)
    * [updateSmsTemplateById](#updatesmstemplatebyid)
    * [deleteSmsTemplateById](#deletesmstemplatebyid)
    * [getSystemSystemTemplates](#getsystemsystemtemplates)
    

* [Payment](#Payment)
  * Methods
    * [getBrandPaymentGatewayConfig](#getbrandpaymentgatewayconfig)
    * [saveBrandPaymentGatewayConfig](#savebrandpaymentgatewayconfig)
    * [updateBrandPaymentGatewayConfig](#updatebrandpaymentgatewayconfig)
    * [getPaymentModeRoutes](#getpaymentmoderoutes)
    * [getAllPayouts](#getallpayouts)
    * [savePayout](#savepayout)
    * [updatePayout](#updatepayout)
    * [activateAndDectivatePayout](#activateanddectivatepayout)
    * [deletePayout](#deletepayout)
    * [getSubscriptionPaymentMethod](#getsubscriptionpaymentmethod)
    * [deleteSubscriptionPaymentMethod](#deletesubscriptionpaymentmethod)
    * [getSubscriptionConfig](#getsubscriptionconfig)
    * [saveSubscriptionSetupIntent](#savesubscriptionsetupintent)
    * [addBeneficiaryDetails](#addbeneficiarydetails)
    * [verifyIfscCode](#verifyifsccode)
    * [getUserOrderBeneficiaries](#getuserorderbeneficiaries)
    * [getUserBeneficiaries](#getuserbeneficiaries)
    

* [Catalog](#Catalog)
  * Methods
    * [updateSearchKeywords](#updatesearchkeywords)
    * [deleteSearchKeywords](#deletesearchkeywords)
    * [getSearchKeywords](#getsearchkeywords)
    * [getAllSearchKeyword](#getallsearchkeyword)
    * [createCustomKeyword](#createcustomkeyword)
    * [updateAutocompleteKeyword](#updateautocompletekeyword)
    * [deleteAutocompleteKeyword](#deleteautocompletekeyword)
    * [getAutocompleteKeywordDetail](#getautocompletekeyworddetail)
    * [getAutocompleteConfig](#getautocompleteconfig)
    * [createCustomAutocompleteRule](#createcustomautocompleterule)
    * [getProductBundle](#getproductbundle)
    * [createProductBundle](#createproductbundle)
    * [updateProductBundle](#updateproductbundle)
    * [getProductBundleDetail](#getproductbundledetail)
    * [getSizeGuides](#getsizeguides)
    * [createSizeGuide](#createsizeguide)
    * [updateSizeGuide](#updatesizeguide)
    * [getSizeGuide](#getsizeguide)
    * [getCatalogConfiguration](#getcatalogconfiguration)
    * [getConfigurations](#getconfigurations)
    * [createConfigurationProductListing](#createconfigurationproductlisting)
    * [getConfigurationByType](#getconfigurationbytype)
    * [createConfigurationByType](#createconfigurationbytype)
    * [getQueryFilters](#getqueryfilters)
    * [getAllCollections](#getallcollections)
    * [createCollection](#createcollection)
    * [getCollectionDetail](#getcollectiondetail)
    * [updateCollection](#updatecollection)
    * [deleteCollection](#deletecollection)
    * [getCollectionItems](#getcollectionitems)
    * [addCollectionItems](#addcollectionitems)
    * [getCatalogInsights](#getcataloginsights)
    * [getSellerInsights](#getsellerinsights)
    * [createMarketplaceOptin](#createmarketplaceoptin)
    * [getMarketplaceOptinDetail](#getmarketplaceoptindetail)
    * [getCompanyDetail](#getcompanydetail)
    * [getCompanyBrandDetail](#getcompanybranddetail)
    * [getCompanyMetrics](#getcompanymetrics)
    * [getStoreDetail](#getstoredetail)
    * [getGenderAttribute](#getgenderattribute)
    * [listProductTemplateCategories](#listproducttemplatecategories)
    * [listDepartmentsData](#listdepartmentsdata)
    * [getDepartmentData](#getdepartmentdata)
    * [listProductTemplate](#listproducttemplate)
    * [validateProductTemplate](#validateproducttemplate)
    * [downloadProductTemplateViews](#downloadproducttemplateviews)
    * [downloadProductTemplateView](#downloadproducttemplateview)
    * [validateProductTemplateSchema](#validateproducttemplateschema)
    * [listHSNCodes](#listhsncodes)
    * [listProductTemplateExportDetails](#listproducttemplateexportdetails)
    * [listTemplateBrandTypeValues](#listtemplatebrandtypevalues)
    * [listCategories](#listcategories)
    * [createCategories](#createcategories)
    * [updateCategory](#updatecategory)
    * [getCategoryData](#getcategorydata)
    * [getProducts](#getproducts)
    * [createProduct](#createproduct)
    * [editProduct](#editproduct)
    * [deleteProduct](#deleteproduct)
    * [getProduct](#getproduct)
    * [getProductValidation](#getproductvalidation)
    * [getProductSize](#getproductsize)
    * [getProductBulkUploadHistory](#getproductbulkuploadhistory)
    * [updateProductAssetsInBulk](#updateproductassetsinbulk)
    * [createProductsInBulk](#createproductsinbulk)
    * [deleteProductBulkJob](#deleteproductbulkjob)
    * [getCompanyTags](#getcompanytags)
    * [getProductAssetsInBulk](#getproductassetsinbulk)
    * [createProductAssetsInBulk](#createproductassetsinbulk)
    * [deleteSize](#deletesize)
    * [getInventory](#getinventory)
    * [addInventory](#addinventory)
    * [deleteInventory](#deleteinventory)
    * [getInventoryBulkUploadHistory](#getinventorybulkuploadhistory)
    * [createBulkInventoryJob](#createbulkinventoryjob)
    * [createBulkInventory](#createbulkinventory)
    * [deleteBulkInventoryJob](#deletebulkinventoryjob)
    * [getInventoryExport](#getinventoryexport)
    * [createInventoryExportJob](#createinventoryexportjob)
    * [exportInventoryConfig](#exportinventoryconfig)
    * [getAllHsnCodes](#getallhsncodes)
    * [createHsnCode](#createhsncode)
    * [updateHsnCode](#updatehsncode)
    * [getHsnCode](#gethsncode)
    * [bulkHsnCode](#bulkhsncode)
    * [getApplicationBrands](#getapplicationbrands)
    * [getDepartments](#getdepartments)
    * [getCategories](#getcategories)
    * [getAppicationProducts](#getappicationproducts)
    * [getProductDetailBySlug](#getproductdetailbyslug)
    

* [CompanyProfile](#CompanyProfile)
  * Methods
    * [updateCompany](#updatecompany)
    * [cbsOnboardGet](#cbsonboardget)
    * [getCompanyMetrics](#getcompanymetrics)
    * [editBrand](#editbrand)
    * [getBrand](#getbrand)
    * [createBrand](#createbrand)
    * [createCompanyBrandMapping](#createcompanybrandmapping)
    * [getBrands](#getbrands)
    * [createLocation](#createlocation)
    * [getLocations](#getlocations)
    * [updateLocation](#updatelocation)
    * [getLocationDetail](#getlocationdetail)
    * [createLocationBulk](#createlocationbulk)
    

* [FileStorage](#FileStorage)
  * Methods
    * [startUpload](#startupload)
    * [completeUpload](#completeupload)
    * [appStartUpload](#appstartupload)
    * [appCompleteUpload](#appcompleteupload)
    * [getSignUrls](#getsignurls)
    * [copyFiles](#copyfiles)
    * [appCopyFiles](#appcopyfiles)
    * [browse](#browse)
    * [browse](#browse)
    * [proxy](#proxy)
    

* [Share](#Share)
  * Methods
    * [createShortLink](#createshortlink)
    * [getShortLinks](#getshortlinks)
    * [getShortLinkByHash](#getshortlinkbyhash)
    * [updateShortLinkById](#updateshortlinkbyid)
    

* [Inventory](#Inventory)
  * Methods
    * [getJobsByCompany](#getjobsbycompany)
    * [updateJob](#updatejob)
    * [createJob](#createjob)
    * [getJobByCompanyAndIntegration](#getjobbycompanyandintegration)
    * [getJobConfigDefaults](#getjobconfigdefaults)
    * [getJobByCode](#getjobbycode)
    * [getJobCodesByCompanyAndIntegration](#getjobcodesbycompanyandintegration)
    

* [Configuration](#Configuration)
  * Methods
    * [getBuildConfig](#getbuildconfig)
    * [updateBuildConfig](#updatebuildconfig)
    * [getPreviousVersions](#getpreviousversions)
    * [getAppFeatures](#getappfeatures)
    * [updateAppFeatures](#updateappfeatures)
    * [getAppBasicDetails](#getappbasicdetails)
    * [updateAppBasicDetails](#updateappbasicdetails)
    * [getAppContactInfo](#getappcontactinfo)
    * [updateAppContactInfo](#updateappcontactinfo)
    * [getAppApiTokens](#getappapitokens)
    * [updateAppApiTokens](#updateappapitokens)
    * [getAppCompanies](#getappcompanies)
    * [getAppStores](#getappstores)
    * [getInventoryConfig](#getinventoryconfig)
    * [updateInventoryConfig](#updateinventoryconfig)
    * [partiallyUpdateInventoryConfig](#partiallyupdateinventoryconfig)
    * [getAppCurrencyConfig](#getappcurrencyconfig)
    * [updateAppCurrencyConfig](#updateappcurrencyconfig)
    * [getOrderingStoresByFilter](#getorderingstoresbyfilter)
    * [updateOrderingStoreConfig](#updateorderingstoreconfig)
    * [getDomains](#getdomains)
    * [addDomain](#adddomain)
    * [removeDomainById](#removedomainbyid)
    * [changeDomainType](#changedomaintype)
    * [getDomainStatus](#getdomainstatus)
    * [createApplication](#createapplication)
    * [getApplications](#getapplications)
    * [getApplicationById](#getapplicationbyid)
    * [getCurrencies](#getcurrencies)
    * [getDomainAvailibility](#getdomainavailibility)
    * [getIntegrationById](#getintegrationbyid)
    * [getAvailableOptIns](#getavailableoptins)
    * [getSelectedOptIns](#getselectedoptins)
    * [getIntegrationLevelConfig](#getintegrationlevelconfig)
    * [getIntegrationByLevelId](#getintegrationbylevelid)
    * [getLevelActiveIntegrations](#getlevelactiveintegrations)
    * [getBrandsByCompany](#getbrandsbycompany)
    * [getCompanyByBrands](#getcompanybybrands)
    * [getStoreByBrands](#getstorebybrands)
    * [getOtherSellerApplications](#getothersellerapplications)
    * [getOtherSellerApplicationById](#getothersellerapplicationbyid)
    * [optOutFromApplication](#optoutfromapplication)
    

* [Cart](#Cart)
  * Methods
    * [getCoupons](#getcoupons)
    * [createCoupon](#createcoupon)
    * [getCouponById](#getcouponbyid)
    * [updateCoupon](#updatecoupon)
    * [updateCouponPartially](#updatecouponpartially)
    * [fetchCartItems](#fetchcartitems)
    * [fetchAndvalidateCartItems](#fetchandvalidatecartitems)
    * [checkCartServiceability](#checkcartserviceability)
    * [checkoutCartItems](#checkoutcartitems)
    * [updateCheckoutPaymentStatus](#updatecheckoutpaymentstatus)
    

* [Marketplaces](#Marketplaces)
  * Methods
    * [getAvailableChannels](#getavailablechannels)
    * [getChannels](#getchannels)
    * [getChannel](#getchannel)
    * [registerMyntraChannel](#registermyntrachannel)
    * [updateMyntraChannelCredentials](#updatemyntrachannelcredentials)
    * [registerAmazonChannel](#registeramazonchannel)
    * [updateAmazonChannelCredentials](#updateamazonchannelcredentials)
    * [registerFlipkartChannel](#registerflipkartchannel)
    * [updateFlipkartChannelCredentials](#updateflipkartchannelcredentials)
    * [registerTatacliqChannel](#registertatacliqchannel)
    * [updateTatacliqChannelCredentials](#updatetatacliqchannelcredentials)
    * [registerAjioChannel](#registerajiochannel)
    * [updateAjioChannelCredentials](#updateajiochannelcredentials)
    * [updateChannelInventorySyncConfig](#updatechannelinventorysyncconfig)
    * [getChannelLocationConfig](#getchannellocationconfig)
    * [updateChannelLocationConfig](#updatechannellocationconfig)
    * [getChannelStatus](#getchannelstatus)
    * [updateChannelStatus](#updatechannelstatus)
    * [triggerChannelInventoryUpdates](#triggerchannelinventoryupdates)
    

* [Rewards](#Rewards)
  * Methods
    * [getGiveaways](#getgiveaways)
    * [createGiveaway](#creategiveaway)
    * [getGiveawayByID](#getgiveawaybyid)
    * [updateGiveaway](#updategiveaway)
    * [getOffers](#getoffers)
    * [getOfferByName](#getofferbyname)
    * [updateOfferByName](#updateofferbyname)
    * [getUserAvailablePoints](#getuseravailablepoints)
    * [updateUserStatus](#updateuserstatus)
    * [getUserPointsHistory](#getuserpointshistory)
    

* [Analytics](#Analytics)
  * Methods
    * [getStatiscticsGroups](#getstatiscticsgroups)
    * [getStatiscticsGroupComponents](#getstatiscticsgroupcomponents)
    * [getComponentStatsCSV](#getcomponentstatscsv)
    * [getComponentStatsPDF](#getcomponentstatspdf)
    * [getComponentStats](#getcomponentstats)
    * [getAbandonCartList](#getabandoncartlist)
    * [getAbandonCartsCSV](#getabandoncartscsv)
    * [getAbandonCartDetail](#getabandoncartdetail)
    * [createExportJob](#createexportjob)
    * [getExportJobStatus](#getexportjobstatus)
    * [getLogsList](#getlogslist)
    * [searchLogs](#searchlogs)
    

* [Discount](#Discount)
  * Methods
    * [getDiscounts](#getdiscounts)
    * [createDiscount](#creatediscount)
    * [getDiscount](#getdiscount)
    * [updateDiscount](#updatediscount)
    * [validateDiscountFile](#validatediscountfile)
    * [downloadDiscountFile](#downloaddiscountfile)
    * [getValidationJob](#getvalidationjob)
    * [cancelValidationJob](#cancelvalidationjob)
    * [getDownloadJob](#getdownloadjob)
    * [cancelDownloadJob](#canceldownloadjob)
    

* [Partner](#Partner)
  * Methods
    * [addProxyPath](#addproxypath)
    * [removeProxyPath](#removeproxypath)
    

* [Webhook](#Webhook)
  * Methods
    * [getSubscribersByCompanyAndEventId](#getsubscribersbycompanyandeventid)
    * [registerSubscriberToEvent](#registersubscribertoevent)
    * [updateSubscriberConfig](#updatesubscriberconfig)
    


---
---



## Lead


#### getTickets
Gets the list of company level tickets and/or ticket filters depending on query params

```javascript
// Promise
const promise = lead.getTickets(companyId,items,filters,q,status,priority,category,pageNo,pageSize);

// Async/Await
const data = await lead.getTickets(companyId,items,filters,q,status,priority,category,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for which the data will be returned | 
| items | boolean | Decides that the reponse will contain the list of tickets | 
| filters | boolean | Decides that the reponse will contain the ticket filters | 
| q | string | Search through ticket titles and description | 
| status | string | Filter tickets on status | 
| priority | string | Filter tickets on priority | 
| category | string | Filter tickets on category | 
| pageNo | integer | The page number to navigate through the given set of results. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

Gets the list of company level tickets and/or ticket filters

*Success Response:*



Success


Schema: `TicketList`


*Examples:*


Without items
```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```

With items
```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```









---


#### createTicket
Creates a company level ticket

```javascript
// Promise
const promise = lead.createTicket(companyId,body);

// Async/Await
const data = await lead.createTicket(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for which the data will be returned | 

Creates a company level ticket

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### getTickets
Gets the list of Application level Tickets and/or ticket filters depending on query params

```javascript
// Promise
const promise = lead.getTickets(companyId,applicationId,items,filters,q,status,priority,category);

// Async/Await
const data = await lead.getTickets(companyId,applicationId,items,filters,q,status,priority,category);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for which the data will be returned | 
| items | boolean | Decides that the reponse will contain the list of tickets | 
| filters | boolean | Decides that the reponse will contain the ticket filters | 
| q | string | Search through ticket titles and description | 
| status | string | Filter tickets on status | 
| priority | string | Filter tickets on priority | 
| category | string | Filter tickets on category | 

Gets the list of Application level Tickets and/or ticket filters

*Success Response:*



Success


Schema: `TicketList`


*Examples:*


Without items
```json
{
  "value": {
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```

With items
```json
{
  "value": {
    "docs": [
      {
        "_id": "602d2652ce284d0b008d5c97",
        "status": {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        "priority": {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        "assigned_to": {
          "agent_id": "5e79e721768c6bf54b783146",
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "tags": [
          "asdf444"
        ],
        "context": {
          "application_id": "000000000000000000000001",
          "company_id": "1"
        },
        "created_on": {
          "user_agent": "Fynd Platform/0.0.1 (com.fynd.platform; build:3; iOS 14.2.0) Alamofire/5.0.2",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Fynd Platform",
              "version": "0.0.1"
            }
          }
        },
        "source": "sales_channel",
        "content": {
          "title": "asdf444 Response",
          "description": "",
          "attachments": []
        },
        "response_id": "602d2652ce284dee3c8d5c96",
        "category": {
          "form": {
            "login_required": false,
            "should_notify": true,
            "inputs": [
              {
                "type": "text",
                "showRegexInput": false,
                "enum": [],
                "display": "asdf",
                "key": "asdf"
              },
              {
                "type": "mobile",
                "showRegexInput": false,
                "enum": [],
                "display": "mob num",
                "regex": "[0-9]{10}$",
                "key": "mob-num"
              }
            ],
            "available_assignees": [
              "5e79e721768c6bf54b783146"
            ],
            "_id": "60124e4a4d2bc363625e1bf4",
            "title": "asdf444",
            "description": "adf",
            "slug": "asdf444",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.96"
                },
                "os": {
                  "name": "macOS",
                  "version": "10.15.7",
                  "versionName": "Catalina"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5e79e721768c6bf54b783146",
            "createdAt": "2021-01-28T05:40:26.271Z",
            "updatedAt": "2021-02-18T16:02:32.086Z",
            "__v": 0,
            "poll_for_assignment": {
              "duration": 20,
              "message": "We are looking for executive to connect you",
              "success_message": "Executive found",
              "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
            }
          },
          "key": "asdf444",
          "display": "asdf444"
        },
        "ticket_id": "472",
        "createdAt": "2021-02-17T14:21:06.774Z",
        "updatedAt": "2021-02-17T14:21:06.774Z",
        "__v": 0,
        "id": "602d2652ce284d0b008d5c97"
      }
    ],
    "total": 472,
    "limit": 10,
    "page": 1,
    "pages": 48,
    "filters": {
      "statuses": [
        {
          "display": "Pending",
          "color": "#eae22b",
          "key": "pending"
        },
        {
          "display": "In Progress",
          "color": "#ffa951",
          "key": "in_progress"
        },
        {
          "display": "Resolved",
          "color": "#20c3a6",
          "key": "resolved"
        },
        {
          "display": "Closed",
          "color": "#41434c",
          "key": "closed"
        }
      ],
      "priorities": [
        {
          "display": "Low",
          "color": "#fed766",
          "key": "low"
        },
        {
          "display": "Medium",
          "color": "#f37736",
          "key": "medium"
        },
        {
          "display": "High",
          "color": "#fe4a49",
          "key": "high"
        }
      ],
      "assignees": [],
      "categories": [
        {
          "form": {
            "login_required": false,
            "should_notify": false,
            "inputs": [
              {
                "type": "email",
                "showRegexInput": false,
                "enum": [],
                "regex": "\\S+@\\S+\\.\\S+",
                "display": "email",
                "required": true,
                "key": "email"
              }
            ],
            "available_assignees": [],
            "_id": "602e900a2042255c03cadaf0",
            "title": "service-test-satyen",
            "description": "testing form from service",
            "slug": "service-test-satyen",
            "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
            "application_id": "000000000000000000000001",
            "created_on": {
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
              "platform": "web",
              "meta": {
                "browser": {
                  "name": "Chrome",
                  "version": "88.0.4324.150"
                },
                "os": {
                  "name": "macOS",
                  "version": "11.2.0"
                },
                "platform": {
                  "type": "desktop",
                  "vendor": "Apple"
                },
                "engine": {
                  "name": "Blink"
                }
              }
            },
            "created_by": "5f8147abbd1a0a870f61f1a6",
            "createdAt": "2021-02-18T16:04:26.495Z",
            "updatedAt": "2021-02-18T16:04:26.495Z",
            "__v": 0
          },
          "key": "service-test-satyen",
          "display": "service-test-satyen"
        }
      ]
    }
  }
}
```









---


#### getTicket
Retreives ticket details of a company level ticket with ticket ID

```javascript
// Promise
const promise = lead.getTicket(companyId,id);

// Async/Await
const data = await lead.getTicket(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for which the data will be returned | 
| id | string | Tiket ID of the ticket to be fetched | 

Retreives ticket details of a company level ticket

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### editTicket
Edits ticket details of a company level ticket

```javascript
// Promise
const promise = lead.editTicket(companyId,id,body);

// Async/Await
const data = await lead.editTicket(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for ticket | 
| id | string | Ticket ID of ticket to be edited | 

Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "company_id": "1"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### getTicket
Retreives ticket details of a application level ticket

```javascript
// Promise
const promise = lead.getTicket(companyId,applicationId,id);

// Async/Await
const data = await lead.getTicket(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for which the data will be returned | 
| id | string | Tiket ID of the ticket to be fetched | 

Retreives ticket details of a application level ticket with ticket ID

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### editTicket
Edits ticket details of a application level ticket

```javascript
// Promise
const promise = lead.editTicket(companyId,applicationId,id,body);

// Async/Await
const data = await lead.editTicket(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for ticket | 
| id | string | Ticket ID of ticket to be edited | 

Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes

*Success Response:*



Success


Schema: `Ticket`


*Examples:*


Default
```json
{
  "value": {
    "context": {
      "application_id": "000000000000000000000003",
      "company_id": "884"
    },
    "content": {
      "title": "SOme title Response",
      "description": "<b>Single lineeee</b>: asdf<br><b>Email</b>: asdf@asdf.com<br><b>dfsdf</b>: asdf<br>",
      "attachments": []
    },
    "status": {
      "display": "In Progress",
      "color": "#ffa951",
      "key": "in_progress"
    },
    "priority": {
      "display": "Medium",
      "color": "#f37736",
      "key": "medium"
    },
    "assigned_to": {
      "agent_id": "5d1363adf599d850df93175e",
      "gender": "male",
      "accountType": "user",
      "active": true,
      "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
      "hasOldPasswordHash": false,
      "_id": "5d1363adf599d850df93175e",
      "phoneNumbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "countryCode": 91,
          "phone": "9890425946"
        }
      ],
      "firstName": "Nikhil",
      "lastName": "Manapure",
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "nikhilmshchs@gmail.com"
        }
      ],
      "username": "nikhilmshchs_gmail_com_38425_20500281",
      "createdAt": "2019-01-01T17:22:38.528Z",
      "updatedAt": "2021-01-22T10:02:42.258Z",
      "uid": "20500281",
      "__v": 56
    },
    "tags": [
      "some-title"
    ],
    "_id": "6012f38557751ee8fc162cf7",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "source": "sales_channel",
    "created_by": {
      "id": "5d1363adf599d850df93175e",
      "user": {
        "gender": "male",
        "accountType": "user",
        "active": true,
        "profilePicUrl": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2136700473091190&height=400&width=400&ext=1554542761&hash=AeS6cuWIdjDdJJ-b",
        "hasOldPasswordHash": false,
        "_id": "5d1363adf599d850df93175e",
        "phoneNumbers": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "countryCode": 91,
            "phone": "9890425946"
          }
        ],
        "firstName": "Nikhil",
        "lastName": "Manapure",
        "emails": [
          {
            "active": true,
            "primary": true,
            "verified": true,
            "email": "nikhilmshchs@gmail.com"
          }
        ],
        "username": "nikhilmshchs_gmail_com_38425_20500281",
        "createdAt": "2019-01-01T17:22:38.528Z",
        "updatedAt": "2021-01-22T10:02:42.258Z",
        "uid": "20500281",
        "__v": 56
      }
    },
    "response_id": "6012f38457751e0fb8162cf6",
    "category": {
      "form": {
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "Single lineeee",
            "key": "single-lineeee",
            "showRegexInput": false
          },
          {
            "required": false,
            "type": "email",
            "enum": [],
            "display": "Email",
            "regex": "\\S+@\\S+\\.\\S+",
            "key": "email",
            "showRegexInput": true
          },
          {
            "required": false,
            "type": "text",
            "enum": [],
            "display": "dfsdf",
            "key": "dfsdf",
            "showRegexInput": false
          }
        ],
        "available_assignees": [
          "5b9b98150df588546aaea6d2",
          "5c45d78395d7504f76c2cb37"
        ],
        "_id": "5fd72db3dc250f8decfc61b2",
        "title": "SOme title",
        "description": "SOme big description",
        "slug": "some-title",
        "application_id": "000000000000000000000003",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "87.0.4280.88"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.6",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5d1363adf599d850df93175e",
        "createdAt": "2020-12-14T09:17:39.953Z",
        "updatedAt": "2021-01-28T18:48:07.717Z",
        "__v": 0
      },
      "key": "some-title",
      "display": "SOme title"
    },
    "ticket_id": "43",
    "createdAt": "2021-01-28T17:25:25.013Z",
    "updatedAt": "2021-01-28T17:25:33.396Z",
    "__v": 0,
    "video_room_id": "6012f38557751ee8fc162cf7"
  }
}
```









---


#### createHistory
Create history for specific company level ticket

```javascript
// Promise
const promise = lead.createHistory(companyId,id,body);

// Async/Await
const data = await lead.createHistory(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for ticket | 
| id | string | Ticket ID for which history is created | 

Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Success Response:*



Success


Schema: `TicketHistory`


*Examples:*


Default
```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "43",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```









---


#### getTicketHistory
Gets history list for specific company level ticket

```javascript
// Promise
const promise = lead.getTicketHistory(companyId,id);

// Async/Await
const data = await lead.getTicketHistory(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID for ticket | 
| id | string | Ticket ID for which history is to be fetched | 

Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Success Response:*



Success


Schema: `TicketHistoryList`


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "8412805281",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "satyenmaurya95@gmail.com"
            }
          ],
          "username": "satyenmaurya95_gmail_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": 1,
    "pages": 1
  }
}
```









---


#### createHistory
Create history for specific application level ticket

```javascript
// Promise
const promise = lead.createHistory(companyId,applicationId,id,body);

// Async/Await
const data = await lead.createHistory(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for ticket | 
| id | string | Ticket ID for which history is created | 

Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Success Response:*



Success


Schema: `TicketHistory`


*Examples:*


Default
```json
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "41",
    "type": "comment",
    "value": {
      "text": "d",
      "media": []
    },
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.96"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.7",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2021-02-03T12:55:46.808Z",
    "updatedAt": "2021-02-03T12:55:46.808Z",
    "__v": 0
  }
}
```









---


#### getTicketHistory
Gets history list for specific application level ticket

```javascript
// Promise
const promise = lead.getTicketHistory(companyId,applicationId,id);

// Async/Await
const data = await lead.getTicketHistory(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of application | 
| applicationId | string | Application ID for ticket | 
| id | string | Ticket ID for which history is to be fetched | 

Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.

*Success Response:*



Success


Schema: `TicketHistoryList`


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e5384204225eed5cadae7",
        "ticket_id": "41",
        "type": "comment",
        "value": {
          "text": "hello service",
          "media": []
        },
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/theme/pictures/free/original/default-profile_nxhzui.png",
          "hasOldPasswordHash": false,
          "_id": "5f8147abbd1a0a870f61f1a6",
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "phone": "8412805281",
              "countryCode": 91
            }
          ],
          "firstName": "Satyen",
          "lastName": "Maurya",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "satyenmaurya95@gmail.com"
            }
          ],
          "username": "satyenmaurya95_gmail_com_11118",
          "createdAt": "2020-10-10T05:33:31.119Z",
          "updatedAt": "2020-10-10T05:33:31.119Z",
          "uid": "5678",
          "__v": 0
        },
        "createdAt": "2021-02-18T11:46:12.522Z",
        "updatedAt": "2021-02-18T11:46:12.522Z",
        "__v": 0,
        "id": "602e5384204225eed5cadae7"
      },
      {
        "_id": "60372aa78a046d4d79c46e15",
        "ticket_id": "41",
        "type": "diff",
        "value": {
          "status": [
            "pending",
            "in_progress"
          ]
        },
        "created_by": {
          "gender": "male",
          "accountType": "user",
          "active": true,
          "profilePicUrl": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
          "hasOldPasswordHash": false,
          "_id": "5e79e721768c6bf54b783146",
          "emails": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "email": "nikhilmshchs@gmail.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@gofynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@fynd.com"
            },
            {
              "active": true,
              "primary": false,
              "verified": true,
              "email": "nikhilmanapure@uniket.store"
            }
          ],
          "phoneNumbers": [
            {
              "active": true,
              "primary": true,
              "verified": true,
              "countryCode": 91,
              "phone": "9890425946"
            }
          ],
          "firstName": "Nikhil",
          "lastName": "Manapure",
          "username": "nikhilmanapure_gofynd_com_29298",
          "createdAt": "2020-03-24T10:55:29.298Z",
          "updatedAt": "2020-05-12T07:46:41.816Z",
          "uid": "5567",
          "__v": 2
        },
        "createdAt": "2021-02-25T04:42:15.225Z",
        "updatedAt": "2021-02-25T04:42:15.225Z",
        "__v": 0,
        "id": "60372aa78a046d4d79c46e15"
      }
    ],
    "total": 2,
    "limit": 100,
    "page": 1,
    "pages": 1
  }
}
```









---


#### getCustomForm
Get specific custom form using it's slug

```javascript
// Promise
const promise = lead.getCustomForm(companyId,applicationId,slug);

// Async/Await
const data = await lead.getCustomForm(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for the form | 
| slug | string | Slug of form whose response is getting submitted | 

Get specific custom form using it's slug, this is used to view the form.

*Success Response:*



Success


Schema: `CustomForm`


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "required": false,
        "type": "text",
        "display": "Name",
        "placeholder": "Please enter your name",
        "key": "name"
      }
    ],
    "available_assignees": [],
    "_id": "5fd258a9088f957f34c288fc",
    "title": "trail form",
    "description": "Trail form description",
    "slug": "trail-form",
    "application_id": "000000000000000000000003",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "87.0.4280.88"
        },
        "os": {
          "name": "macOS",
          "version": "10.15.6",
          "versionName": "Catalina"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5d1363adf599d850df93175e",
    "createdAt": "2020-12-10T17:19:37.515Z",
    "updatedAt": "2020-12-10T17:19:43.214Z",
    "__v": 0
  }
}
```









---


#### editCustomForm
Edit the given custom form

```javascript
// Promise
const promise = lead.editCustomForm(companyId,applicationId,slug,body);

// Async/Await
const data = await lead.editCustomForm(companyId,applicationId,slug,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for the form | 
| slug | string | Slug of form whose response is getting submitted | 

Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.

*Success Response:*



Success


Schema: `CustomForm`


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "type": "email",
        "showRegexInput": true,
        "enum": [],
        "regex": "\\S+@\\S+\\.\\S+",
        "display": "email",
        "required": true,
        "key": "email"
      },
      {
        "type": "number",
        "showRegexInput": false,
        "enum": [],
        "display": "Enter your fav number",
        "placeholder": "123",
        "key": "enter-your-fav-number"
      }
    ],
    "available_assignees": [],
    "_id": "602e900a2042255c03cadaf0",
    "title": "service-test-satyen",
    "description": "testing form from service",
    "slug": "service-test-satyen",
    "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
    "application_id": "000000000000000000000001",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.150"
        },
        "os": {
          "name": "macOS",
          "version": "11.2.0"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5f8147abbd1a0a870f61f1a6",
    "createdAt": "2021-02-18T16:04:26.495Z",
    "updatedAt": "2021-02-26T10:16:49.272Z",
    "__v": 0
  }
}
```









---


#### getCustomForms
Get list of custom form

```javascript
// Promise
const promise = lead.getCustomForms(companyId,applicationId);

// Async/Await
const data = await lead.getCustomForms(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for the form | 

Get list of custom form for given application

*Success Response:*



Success


Schema: `CustomFormList`


*Examples:*


Default
```json
{
  "value": {
    "docs": [
      {
        "_id": "602e900a2042255c03cadaf0",
        "login_required": false,
        "should_notify": false,
        "inputs": [
          {
            "type": "email",
            "showRegexInput": true,
            "enum": [],
            "regex": "\\S+@\\S+\\.\\S+",
            "display": "email",
            "required": true,
            "key": "email"
          },
          {
            "type": "number",
            "showRegexInput": false,
            "enum": [],
            "display": "Enter your fav number",
            "placeholder": "123",
            "key": "enter-your-fav-number"
          },
          {
            "type": "textarea",
            "showRegexInput": false,
            "enum": [],
            "display": "kjhgjhvjb",
            "required": true,
            "key": "kjhgjhvjb"
          }
        ],
        "available_assignees": [],
        "title": "service-test-satyen",
        "description": "testing form from service",
        "slug": "service-test-satyen",
        "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.150"
            },
            "os": {
              "name": "macOS",
              "version": "11.2.0"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5f8147abbd1a0a870f61f1a6",
        "createdAt": "2021-02-18T16:04:26.495Z",
        "updatedAt": "2021-02-24T15:49:56.256Z",
        "__v": 0,
        "id": "602e900a2042255c03cadaf0"
      },
      {
        "_id": "60124e4a4d2bc363625e1bf4",
        "login_required": false,
        "should_notify": true,
        "inputs": [
          {
            "type": "text",
            "showRegexInput": false,
            "enum": [],
            "display": "asdf",
            "key": "asdf"
          },
          {
            "type": "mobile",
            "showRegexInput": false,
            "enum": [],
            "display": "mob num",
            "regex": "[0-9]{10}$",
            "key": "mob-num"
          }
        ],
        "available_assignees": [
          "5e79e721768c6bf54b783146"
        ],
        "title": "asdf444",
        "description": "adf",
        "slug": "asdf444",
        "application_id": "000000000000000000000001",
        "created_on": {
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36",
          "platform": "web",
          "meta": {
            "browser": {
              "name": "Chrome",
              "version": "88.0.4324.96"
            },
            "os": {
              "name": "macOS",
              "version": "10.15.7",
              "versionName": "Catalina"
            },
            "platform": {
              "type": "desktop",
              "vendor": "Apple"
            },
            "engine": {
              "name": "Blink"
            }
          }
        },
        "created_by": "5e79e721768c6bf54b783146",
        "createdAt": "2021-01-28T05:40:26.271Z",
        "updatedAt": "2021-02-18T16:02:32.086Z",
        "__v": 0,
        "poll_for_assignment": {
          "duration": 20,
          "message": "We are looking for executive to connect you",
          "success_message": "Executive found",
          "failure_message": "All our executives are busy at the moment, We have accepted your request and someone will connect with you soon!"
        },
        "id": "60124e4a4d2bc363625e1bf4"
      }
    ],
    "total": 2,
    "limit": 10,
    "page": 1,
    "pages": 1
  }
}
```









---


#### createCustomForm
Creates a new custom form

```javascript
// Promise
const promise = lead.createCustomForm(companyId,applicationId,body);

// Async/Await
const data = await lead.createCustomForm(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for the form | 

Creates a new custom form for given application

*Success Response:*



Success


Schema: `CustomForm`


*Examples:*


Default
```json
{
  "value": {
    "login_required": false,
    "should_notify": false,
    "inputs": [
      {
        "type": "email",
        "showRegexInput": true,
        "enum": [],
        "regex": "\\S+@\\S+\\.\\S+",
        "display": "email",
        "required": true,
        "key": "email"
      },
      {
        "type": "number",
        "showRegexInput": false,
        "enum": [],
        "display": "Enter your fav number",
        "placeholder": "123",
        "key": "enter-your-fav-number"
      }
    ],
    "available_assignees": [],
    "_id": "602e900a2042255c03cadaf0",
    "title": "service-test-satyen",
    "description": "testing form from service",
    "slug": "service-test-satyen",
    "header_image": "https://hdn-1.addsale.com/x0/support-ticket/files/free/original/KZL86aN5l-service-test-satyen.jpeg",
    "application_id": "000000000000000000000001",
    "created_on": {
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      "platform": "web",
      "meta": {
        "browser": {
          "name": "Chrome",
          "version": "88.0.4324.150"
        },
        "os": {
          "name": "macOS",
          "version": "11.2.0"
        },
        "platform": {
          "type": "desktop",
          "vendor": "Apple"
        },
        "engine": {
          "name": "Blink"
        }
      }
    },
    "created_by": "5f8147abbd1a0a870f61f1a6",
    "createdAt": "2021-02-18T16:04:26.495Z",
    "updatedAt": "2021-02-26T10:16:49.272Z",
    "__v": 0
  }
}
```









---


#### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(companyId,uniqueName);

// Async/Await
const data = await lead.getTokenForVideoRoom(companyId,uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id for video room | 
| uniqueName | string | Unique name of video room | 

Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Success Response:*



Success


Schema: `GetTokenForVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```









---


#### getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(companyId,applicationId,uniqueName);

// Async/Await
const data = await lead.getTokenForVideoRoom(companyId,applicationId,uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for video room | 
| uniqueName | string | Unique name of video room | 

Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

*Success Response:*



Success


Schema: `GetTokenForVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```









---


#### getVideoParticipants
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getVideoParticipants(companyId,uniqueName);

// Async/Await
const data = await lead.getVideoParticipants(companyId,uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id for video room | 
| uniqueName | string | Unique name of Video Room | 

Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Success Response:*



Success


Schema: `GetParticipantsInsideVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "participants": []
  }
}
```









---


#### getVideoParticipants
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getVideoParticipants(companyId,applicationId,uniqueName);

// Async/Await
const data = await lead.getVideoParticipants(companyId,applicationId,uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for video room | 
| uniqueName | string | Unique name of Video Room | 

Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

*Success Response:*



Success


Schema: `GetParticipantsInsideVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "participants": []
  }
}
```









---


#### openVideoRoom
Open a video room.

```javascript
// Promise
const promise = lead.openVideoRoom(companyId,applicationId,body);

// Async/Await
const data = await lead.openVideoRoom(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for video room | 

Open a video room.

*Success Response:*



Success


Schema: `CreateVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "unique_name": "alphanumeric123"
  }
}
```









---


#### closeVideoRoom
Close the video room and force all participants to leave.

```javascript
// Promise
const promise = lead.closeVideoRoom(companyId,applicationId,uniqueName);

// Async/Await
const data = await lead.closeVideoRoom(companyId,applicationId,uniqueName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 
| applicationId | string | Application ID for video room | 
| uniqueName | string | Unique name of Video Room | 

Close the video room and force all participants to leave.

*Success Response:*



Success


Schema: `CloseVideoRoomResponse`


*Examples:*


Default
```json
{
  "value": {
    "success": true
  }
}
```









---



---


## Feedback


#### getAttributes
Get list of attribute data

```javascript
// Promise
const promise = feedback.getAttributes(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await feedback.getAttributes(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| pageNo | integer | pagination page no | 
| pageSize | integer | pagination page size | 

Provides a list of all attribute data.

*Success Response:*



ok


Schema: `FeedbackAttributes`








Bad request


Schema: `FeedbackError`









---


#### getCustomerReviews
Get list of customer reviews [admin]

```javascript
// Promise
const promise = feedback.getCustomerReviews(companyId,applicationId,id,entityId,entityType,userId,media,rating,attributeRating,facets,sort,next,start,limit,count,pageId,pageSize);

// Async/Await
const data = await feedback.getCustomerReviews(companyId,applicationId,id,entityId,entityType,userId,media,rating,attributeRating,facets,sort,next,start,limit,count,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | review id | 
| entityId | string | entity id | 
| entityType | string | entity type | 
| userId | string | user id | 
| media | string | media type e.g. image | video | video_file | video_link | 
| rating | array | rating filter, 1-5 | 
| attributeRating | array | attribute rating filter with ma,e of attribute | 
| facets | boolean | facets (true|false) | 
| sort | string | sort by : default | top | recent | 
| next | string | pagination next | 
| start | string | pagination start | 
| limit | string | pagination limit | 
| count | string | pagination count | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

The endpoint provides a list of customer reviews based on entity and provided filters

*Success Response:*



Success


Schema: `GetReviewResponse`








Bad Request


Schema: `FeedbackError`









---


#### updateApprove
update approve details

```javascript
// Promise
const promise = feedback.updateApprove(companyId,applicationId,reviewId,body);

// Async/Await
const data = await feedback.updateApprove(companyId,applicationId,reviewId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| reviewId | string | review id | 

The is used to update approve details like status and description text

*Success Response:*



ok


Schema: `UpdateResponse`








Bad request


Schema: `FeedbackError`









---


#### getHistory
get history details

```javascript
// Promise
const promise = feedback.getHistory(companyId,applicationId,reviewId);

// Async/Await
const data = await feedback.getHistory(companyId,applicationId,reviewId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| reviewId | string | review id | 

The is used to get the history details like status and description text

*Success Response:*



ok


Schema: `Array<ActivityDump>`








Bad request


Schema: `FeedbackError`









---


#### getApplicationTemplates
Get list of templates

```javascript
// Promise
const promise = feedback.getApplicationTemplates(companyId,applicationId,pageId,pageSize);

// Async/Await
const data = await feedback.getApplicationTemplates(companyId,applicationId,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

Get all templates of application

*Success Response:*



Success


Schema: `TemplateGetResponse`








Bad Request


Schema: `FeedbackError`









---


#### createTemplate
Create a new template

```javascript
// Promise
const promise = feedback.createTemplate(companyId,applicationId,body);

// Async/Await
const data = await feedback.createTemplate(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 

Create a new template for review with following data:
- Enable media, rating and review
- Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
- Review - header, title, description, image and video meta, enable votes

*Success Response:*



Success


Schema: `InsertResponse`








Bad Request


Schema: `FeedbackError`









---


#### getTemplateById
Get a template by ID

```javascript
// Promise
const promise = feedback.getTemplateById(companyId,applicationId,id);

// Async/Await
const data = await feedback.getTemplateById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | template id | 

Get the template for product or l3 type by ID

*Success Response:*



Success


Schema: `Template`








Bad Request


Schema: `FeedbackError`









---


#### updateTemplate
Update a template's status

```javascript
// Promise
const promise = feedback.updateTemplate(companyId,applicationId,id,body);

// Async/Await
const data = await feedback.updateTemplate(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | template id | 

Update existing template status, active/archive

*Success Response:*



Success


Schema: `UpdateResponse`








Bad Request


Schema: `FeedbackError`









---


#### updateTemplateStatus
Update a template's status

```javascript
// Promise
const promise = feedback.updateTemplateStatus(companyId,applicationId,id,body);

// Async/Await
const data = await feedback.updateTemplateStatus(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | template id | 

Update existing template status, active/archive

*Success Response:*



Success


Schema: `UpdateResponse`








Bad Request


Schema: `FeedbackError`









---



---


## Theme


#### getAllPages
Get all pages of a theme

```javascript
// Promise
const promise = theme.getAllPages(companyId,applicationId,themeId);

// Async/Await
const data = await theme.getAllPages(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme to be retrieved | 

Use this API to retrieve all the available pages of a theme by its ID.

*Success Response:*



Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


Schema: `AllAvailablePageSchema`


*Examples:*


All pages
```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### createPage
Create a page 

```javascript
// Promise
const promise = theme.createPage(companyId,applicationId,themeId,body);

// Async/Await
const data = await theme.createPage(companyId,applicationId,themeId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme | 

Use this API to create a page for a theme by its ID.

*Success Response:*



Success. Returns the page of the theme. Refer `AvailablePageSchema` for more details.


Schema: `AvailablePageSchema`


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### updateMultiplePages
Update multiple pages of a theme

```javascript
// Promise
const promise = theme.updateMultiplePages(companyId,applicationId,themeId,body);

// Async/Await
const data = await theme.updateMultiplePages(companyId,applicationId,themeId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme to be retrieved | 

Use this API to update multiple pages of a theme by its ID.

*Success Response:*



Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.


Schema: `AllAvailablePageSchema`


*Examples:*


All pages
```json
{
  "$ref": "#/components/examples/AllAvailablePagesExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### getPage
Get page of a theme

```javascript
// Promise
const promise = theme.getPage(companyId,applicationId,themeId,pageValue);

// Async/Await
const data = await theme.getPage(companyId,applicationId,themeId,pageValue);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme to be retrieved | 
| pageValue | string | Value of the page to be retrieved | 

Use this API to retrieve a page of a theme.

*Success Response:*



Success. Returns an object of the page.  Refer `AvailablePageSchema` for more details.


Schema: `AvailablePageSchema`


*Examples:*


Home page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### updatePage
Updates a page 

```javascript
// Promise
const promise = theme.updatePage(companyId,applicationId,themeId,pageValue,body);

// Async/Await
const data = await theme.updatePage(companyId,applicationId,themeId,pageValue,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme | 
| pageValue | string | Value of the page to be updated | 

Use this API to update a page for a theme by its ID.

*Success Response:*



Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


Schema: `AvailablePageSchema`


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### deletePage
Deletes a page 

```javascript
// Promise
const promise = theme.deletePage(companyId,applicationId,themeId,pageValue);

// Async/Await
const data = await theme.deletePage(companyId,applicationId,themeId,pageValue);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| themeId | string | ID of the theme | 
| pageValue | string | Value of the page to be updated | 

Use this API to delete a page for a theme by its ID and page_value.

*Success Response:*



Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.


Schema: `AvailablePageSchema`


*Examples:*


page
```json
{
  "$ref": "#/components/examples/AvailablePageExample"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegInternalServerError`









---


#### getThemeLibrary
Get a list of themes from the theme library

```javascript
// Promise
const promise = theme.getThemeLibrary(companyId,applicationId,pageSize,pageNo);

// Async/Await
const data = await theme.getThemeLibrary(companyId,applicationId,pageSize,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| pageSize | integer | The number of items to retrieve in each page. Default value is 10.  | 
| pageNo | integer | The page number to navigate through the given set of results. Default value is 1. | 

Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details. 

*Success Response:*



Success. Refer `ThemesListingResponseSchema` for more details.


Schema: `ThemesListingResponseSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### addToThemeLibrary
Add a theme to the theme library

```javascript
// Promise
const promise = theme.addToThemeLibrary(companyId,applicationId,body);

// Async/Await
const data = await theme.addToThemeLibrary(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### applyTheme
Apply a theme

```javascript
// Promise
const promise = theme.applyTheme(companyId,applicationId,body);

// Async/Await
const data = await theme.applyTheme(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Use this API to apply a theme to the website.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### isUpgradable
Checks if theme is upgradable

```javascript
// Promise
const promise = theme.isUpgradable(companyId,applicationId,themeId);

// Async/Await
const data = await theme.isUpgradable(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | Theme ID | 

There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.

*Success Response:*



Success. If the boolean value of `upgrade` returns **true**, the theme can be upgraded. Refer `UpgradableThemeSchema` for more details.


Schema: `UpgradableThemeSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/UpgradableTheme"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### upgradeTheme
Upgrade a theme

```javascript
// Promise
const promise = theme.upgradeTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.upgradeTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to upgrade the current theme to its latest version.

*Success Response:*



Success. Upgrades the theme and shares the details of the new version in the response. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getPublicThemes
Get all public themes

```javascript
// Promise
const promise = theme.getPublicThemes(companyId,applicationId,pageSize,pageNo);

// Async/Await
const data = await theme.getPublicThemes(companyId,applicationId,pageSize,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| pageSize | integer | The number of items to retrieve in each page. Default value is 10.  | 
| pageNo | integer | The page number to navigate through the given set of results. Default value is 1.  | 

Use this API to get a list of free themes that you can apply to your website.

*Success Response:*



Success. Refer `ThemesListingResponseSchema` for more details.


Schema: `ThemesListingResponseSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/ThemesListingResponse"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### createTheme
Create a new theme

```javascript
// Promise
const promise = theme.createTheme(companyId,applicationId,body);

// Async/Await
const data = await theme.createTheme(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Themes improve the look and appearance of a website. Use this API to create a theme.

*Success Response:*



Theme


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getAppliedTheme
Get the applied theme

```javascript
// Promise
const promise = theme.getAppliedTheme(companyId,applicationId);

// Async/Await
const data = await theme.getAppliedTheme(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Use this API to retrieve the theme that is currently applied to the website along with its details.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getFonts
Get all the supported fonts in a theme

```javascript
// Promise
const promise = theme.getFonts(companyId,applicationId);

// Async/Await
const data = await theme.getFonts(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.

*Success Response:*



Success. Refer `FontsSchema` for more details.


Schema: `FontsSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/FontsResponse"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getThemeById
Gets theme by id

```javascript
// Promise
const promise = theme.getThemeById(companyId,applicationId,themeId);

// Async/Await
const data = await theme.getThemeById(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to retrieve the details of a specific theme by using its ID.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### updateTheme
Update a theme

```javascript
// Promise
const promise = theme.updateTheme(companyId,applicationId,themeId,body);

// Async/Await
const data = await theme.updateTheme(companyId,applicationId,themeId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### deleteTheme
Delete a theme

```javascript
// Promise
const promise = theme.deleteTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.deleteTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to delete a theme from the theme library.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### getThemeForPreview
Get a theme preview

```javascript
// Promise
const promise = theme.getThemeForPreview(companyId,applicationId,themeId);

// Async/Await
const data = await theme.getThemeForPreview(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### publishTheme
Publish a theme

```javascript
// Promise
const promise = theme.publishTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.publishTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to publish a theme that is either newly created or edited.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### unpublishTheme
Unpublish a theme

```javascript
// Promise
const promise = theme.unpublishTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.unpublishTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to remove an existing theme from the list of available themes.

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### archiveTheme
Archive a theme

```javascript
// Promise
const promise = theme.archiveTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.archiveTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to store an existing theme but not delete it so that it can be used in future if required. 

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---


#### unarchiveTheme
Unarchive a theme

```javascript
// Promise
const promise = theme.unarchiveTheme(companyId,applicationId,themeId);

// Async/Await
const data = await theme.unarchiveTheme(companyId,applicationId,themeId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| themeId | string | ID allotted to the theme. | 

Use this API to restore an archived theme and bring it back for editing or publishing. 

*Success Response:*



Success. Refer `ThemesSchema` for more details.


Schema: `ThemesSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Themes"
}
```











Schema: `BlitzkriegApiError`











Schema: `BlitzkriegApiError`









---



---


## User


#### getCustomers
Get a list of customers

```javascript
// Promise
const promise = user.getCustomers(companyId,applicationId,q,pageSize,pageNo);

// Async/Await
const data = await user.getCustomers(companyId,applicationId,q,pageSize,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| q | string | The search query. Mobile number or email ID of a customer. | 
| pageSize | integer | The number of items to retrieve in each page. Default value is 10. | 
| pageNo | integer | The page number to navigate through the given set of results. Default value is 1.  | 

Use this API to retrieve a list of customers who have registered in the application.

*Success Response:*



Success. Refer `CustomerListResponseSchema` for more details.


Schema: `CustomerListResponseSchema`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/CustomersListResponse"
}
```











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### searchUsers
Search an existing user.

```javascript
// Promise
const promise = user.searchUsers(companyId,applicationId,q);

// Async/Await
const data = await user.searchUsers(companyId,applicationId,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 
| q | string | The search query. Mobile number or email ID of a customer. | 

Use this API to retrieve an existing user from a list.

*Success Response:*



Success. Returns first name, last name, emails, phone number and gender of the user. Refer `UserSearchResponseSchema` for more details.


Schema: `UserSearchResponseSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### getPlatformConfig
Get platform configurations

```javascript
// Promise
const promise = user.getPlatformConfig(companyId,applicationId);

// Async/Await
const data = await user.getPlatformConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.

*Success Response:*



Success. Returns a JSON object containing the all the platform configurations. Refer `PlatformSchema` for more details.


Schema: `PlatformSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---


#### updatePlatformConfig
Update platform configurations

```javascript
// Promise
const promise = user.updatePlatformConfig(companyId,applicationId,body);

// Async/Await
const data = await user.updatePlatformConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Numeric ID allotted to a business account on Fynd Platform. | 
| applicationId | string | Alphanumeric ID allotted to an application created within a business account. | 

Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.

*Success Response:*



Success. Returns a JSON object with the updated platform configurations. Refer `PlatformSchema` for more details.


Schema: `PlatformSchema`











Schema: `AuthenticationApiError`











Schema: `AuthenticationApiError`









---



---


## Content


#### getAnnouncementsList
Get annoucements list

```javascript
// Promise
const promise = content.getAnnouncementsList(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await content.getAnnouncementsList(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Get list of announcements

*Success Response:*



Success


Schema: `GetAnnouncementListSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/GetAnnouncementList"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createAnnouncement
Create an annoucement

```javascript
// Promise
const promise = content.createAnnouncement(companyId,applicationId,body);

// Async/Await
const data = await content.createAnnouncement(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Create an announcement

*Success Response:*



Success


Schema: `CreateAnnouncementSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/CreateAnnouncement"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getAnnouncementById
Get annoucement by id

```javascript
// Promise
const promise = content.getAnnouncementById(companyId,applicationId,announcementId);

// Async/Await
const data = await content.getAnnouncementById(companyId,applicationId,announcementId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| announcementId | string | Announcement ID | 

Get announcement by id

*Success Response:*



Success


Schema: `AdminAnnouncementSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/Announcement"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateAnnouncement
Update an annoucement

```javascript
// Promise
const promise = content.updateAnnouncement(companyId,applicationId,announcementId,body);

// Async/Await
const data = await content.updateAnnouncement(companyId,applicationId,announcementId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| announcementId | string | Announcement ID | 

Update an announcement

*Success Response:*



Success


Schema: `CreateAnnouncementSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/UpdateAnnouncement"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateAnnouncementSchedule
Update schedule or published status of an annoucement

```javascript
// Promise
const promise = content.updateAnnouncementSchedule(companyId,applicationId,announcementId,body);

// Async/Await
const data = await content.updateAnnouncementSchedule(companyId,applicationId,announcementId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| announcementId | string | Announcement ID | 

Update schedule or published status of an announcement

*Success Response:*



Success


Schema: `CreateAnnouncementSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/PatchAnnouncement"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteAnnouncement
Delete annoucement by id

```javascript
// Promise
const promise = content.deleteAnnouncement(companyId,applicationId,announcementId);

// Async/Await
const data = await content.deleteAnnouncement(companyId,applicationId,announcementId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| announcementId | string | Announcement ID | 

Delete announcement by id

*Success Response:*



Success


Schema: `CreateAnnouncementSchema`


*Examples:*


success
```json
{
  "$ref": "#/components/examples/DeleteAnnouncement"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createBlog
Create blog

```javascript
// Promise
const promise = content.createBlog(companyId,applicationId,body);

// Async/Await
const data = await content.createBlog(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Use this to create a blog.

*Success Response:*



Success


Schema: `BlogSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "value": {
    "message": "Oops! Something went wrong. Please try later",
    "status": 400,
    "code": "CX-1003",
    "exception": "",
    "info": "",
    "request_id": "",
    "stack_trace": "",
    "meta": {}
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "value": {
    "message": "Oops! Something went wrong. Please try later",
    "status": 500,
    "code": "CX-1004",
    "exception": "",
    "info": "",
    "request_id": "",
    "stack_trace": "",
    "meta": {}
  }
}
```









---


#### getBlogs
Get blogs

```javascript
// Promise
const promise = content.getBlogs(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await content.getBlogs(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get blogs.

*Success Response:*



Success


Schema: `BlogGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateBlog
Update blog

```javascript
// Promise
const promise = content.updateBlog(companyId,applicationId,id,body);

// Async/Await
const data = await content.updateBlog(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| id | string | Blog Id | 

Use this to update blog.

*Success Response:*



Success


Schema: `BlogSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "value": {
    "message": "Oops! Something went wrong. Please try later",
    "status": 400,
    "code": "CX-1003",
    "exception": "",
    "info": "",
    "request_id": "",
    "stack_trace": "",
    "meta": {}
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "value": {
    "message": "Oops! Something went wrong. Please try later",
    "status": 500,
    "code": "CX-1004",
    "exception": "",
    "info": "",
    "request_id": "",
    "stack_trace": "",
    "meta": {}
  }
}
```









---


#### deleteBlog
Delete blogs

```javascript
// Promise
const promise = content.deleteBlog(companyId,applicationId,id);

// Async/Await
const data = await content.deleteBlog(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| id | string | Blog Id | 

Use this to delete blogs.

*Success Response:*



Success


Schema: `BlogSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getComponentById
Get components by component Id

```javascript
// Promise
const promise = content.getComponentById(companyId,applicationId,slug);

// Async/Await
const data = await content.getComponentById(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| slug | string | slug of page to be fetched | 

The endpoint fetches the component by component Id

*Success Response:*



A JSON object with components


Schema: `BlogSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BlogResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqCategories
Get FAQ categories list

```javascript
// Promise
const promise = content.getFaqCategories(companyId,applicationId);

// Async/Await
const data = await content.getFaqCategories(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Get list of FAQ categories

*Success Response:*



Get FAQ Categories


Schema: `GetFaqCategoriesSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqCategoryBySlugOrId
Get FAQ category by slug or id

```javascript
// Promise
const promise = content.getFaqCategoryBySlugOrId(companyId,applicationId,idOrSlug);

// Async/Await
const data = await content.getFaqCategoryBySlugOrId(companyId,applicationId,idOrSlug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| idOrSlug | string | Slug or Id of FAQ Category | 

Get FAQ category by slug or id

*Success Response:*



Get FAQ Categories


Schema: `GetFaqCategoryBySlugSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createFaqCategory
Creates a FAQ category

```javascript
// Promise
const promise = content.createFaqCategory(companyId,applicationId,body);

// Async/Await
const data = await content.createFaqCategory(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Add Faq Category

*Success Response:*



Create a FAQ Category


Schema: `CreateFaqCategorySchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateFaqCategory
Updates a FAQ category

```javascript
// Promise
const promise = content.updateFaqCategory(companyId,applicationId,id,body);

// Async/Await
const data = await content.updateFaqCategory(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Faq category ID | 

Update Faq Category

*Success Response:*



Update a FAQ Category


Schema: `CreateFaqCategorySchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteFaqCategory
Deletes a FAQ category

```javascript
// Promise
const promise = content.deleteFaqCategory(companyId,applicationId,id);

// Async/Await
const data = await content.deleteFaqCategory(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Faq category ID | 

Delete Faq Category

*Success Response:*



Delete a FAQ Category


Schema: `FaqSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqsByCategoryIdOrSlug
Get FAQs of a Faq Category id or slug

```javascript
// Promise
const promise = content.getFaqsByCategoryIdOrSlug(companyId,applicationId,idOrSlug);

// Async/Await
const data = await content.getFaqsByCategoryIdOrSlug(companyId,applicationId,idOrSlug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| idOrSlug | string | Faq category ID or slug | 

Get FAQs of a Faq Category `id` or `slug`

*Success Response:*



Get FAQs by slug/id of FAQ Category


Schema: `GetFaqSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### addFaq
Creates FAQs for category whose `id` is specified

```javascript
// Promise
const promise = content.addFaq(companyId,applicationId,categoryId,body);

// Async/Await
const data = await content.addFaq(companyId,applicationId,categoryId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| categoryId | string | Faq category ID | 

Creates FAQs for category whose `id` is specified

*Success Response:*



Create a FAQ for FAQ Category


Schema: `CreateFaqResponseSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateFaq
Updates FAQ

```javascript
// Promise
const promise = content.updateFaq(companyId,applicationId,categoryId,faqId,body);

// Async/Await
const data = await content.updateFaq(companyId,applicationId,categoryId,faqId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| categoryId | string | Faq category ID | 
| faqId | string | Faq ID | 

Updates FAQ

*Success Response:*



Update FAQ by id


Schema: `CreateFaqResponseSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteFaq
Delete FAQ

```javascript
// Promise
const promise = content.deleteFaq(companyId,applicationId,categoryId,faqId);

// Async/Await
const data = await content.deleteFaq(companyId,applicationId,categoryId,faqId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| categoryId | string | Faq category ID | 
| faqId | string | Faq ID | 

Delete FAQ

*Success Response:*



Delete FAQ by id


Schema: `CreateFaqResponseSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getFaqByIdOrSlug
Get frequently asked question

```javascript
// Promise
const promise = content.getFaqByIdOrSlug(companyId,applicationId,idOrSlug);

// Async/Await
const data = await content.getFaqByIdOrSlug(companyId,applicationId,idOrSlug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| idOrSlug | string | Slug or Id of FAQ | 

Get frequently asked questions list. These will be helpful for users to using website.

*Success Response:*



Success


Schema: `CreateFaqResponseSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getLandingPages
Get landing-pages

```javascript
// Promise
const promise = content.getLandingPages(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await content.getLandingPages(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get landing-pages.

*Success Response:*



Success


Schema: `LandingPageGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createLandingPage
Create landing-page

```javascript
// Promise
const promise = content.createLandingPage(companyId,applicationId,body);

// Async/Await
const data = await content.createLandingPage(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Use this to create landing-page.

*Success Response:*



Success


Schema: `LandingPageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateLandingPage
Update landing-page

```javascript
// Promise
const promise = content.updateLandingPage(companyId,applicationId,id,body);

// Async/Await
const data = await content.updateLandingPage(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Landing page ID | 

Use this to update landing-page.

*Success Response:*



Success


Schema: `LandingPageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/LandingPageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteLandingPage
Delete landing-page

```javascript
// Promise
const promise = content.deleteLandingPage(companyId,applicationId,id);

// Async/Await
const data = await content.deleteLandingPage(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Landing page ID | 

Use this to delete landing-page.

*Success Response:*



Success


Schema: `LandingPageSchema`


*Examples:*


default
```json
{
  "value": {
    "_id": "5eaa451a21a4dd75f0fd96c5",
    "application": "5d3ebd89f540e7506b8b3548",
    "_custom_json": null,
    "slug": "pnc-landing",
    "action": {
      "page": {
        "type": "home"
      },
      "popup": {},
      "type": "page"
    },
    "platform": [
      "web"
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2020-04-30T03:25:14.549Z",
      "modified_on": "2020-04-30T03:25:14.549Z"
    },
    "archived": true
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getLegalInformation
Get legal information

```javascript
// Promise
const promise = content.getLegalInformation(companyId,applicationId);

// Async/Await
const data = await content.getLegalInformation(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.

*Success Response:*



Success


Schema: `ApplicationLegal`


*Examples:*


Success
```json
{
  "$ref": "#/components/examples/Legal"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateLegalInformation
Save legal information

```javascript
// Promise
const promise = content.updateLegalInformation(companyId,applicationId,body);

// Async/Await
const data = await content.updateLegalInformation(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.

*Success Response:*



Success


Schema: `ApplicationLegal`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getNavigations
Get navigations

```javascript
// Promise
const promise = content.getNavigations(companyId,applicationId,devicePlatform,pageNo,pageSize);

// Async/Await
const data = await content.getNavigations(companyId,applicationId,devicePlatform,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| devicePlatform | string | Device platform | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get navigations.

*Success Response:*



Success


Schema: `NavigationGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createNavigation
Create navigation

```javascript
// Promise
const promise = content.createNavigation(companyId,applicationId,body);

// Async/Await
const data = await content.createNavigation(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Use this to create navigation.

*Success Response:*



Success


Schema: `NavigationSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getDefaultNavigations
Get default navigations

```javascript
// Promise
const promise = content.getDefaultNavigations(companyId,applicationId);

// Async/Await
const data = await content.getDefaultNavigations(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Use this to get default navigations.

*Success Response:*



Success


Schema: `DefaultNavigationResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/DefaultNavigationResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getNavigationBySlug
Get navigation by slug

```javascript
// Promise
const promise = content.getNavigationBySlug(companyId,applicationId,slug,devicePlatform);

// Async/Await
const data = await content.getNavigationBySlug(companyId,applicationId,slug,devicePlatform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| slug | string | Slug | 
| devicePlatform | string | Device platform | 

Use this to get navigation by slug.

*Success Response:*



Success


Schema: `NavigationSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateNavigation
Update navigation

```javascript
// Promise
const promise = content.updateNavigation(companyId,applicationId,id,body);

// Async/Await
const data = await content.updateNavigation(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Navigation ID | 

Use this to update navigation.

*Success Response:*



Success


Schema: `NavigationSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/NavigationResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteNavigation
Delete navigation

```javascript
// Promise
const promise = content.deleteNavigation(companyId,applicationId,id);

// Async/Await
const data = await content.deleteNavigation(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Navigation ID | 

Use this to delete navigation.

*Success Response:*



Success


Schema: `NavigationSchema`


*Examples:*


default
```json
{
  "value": {
    "_id": "5ffbd9b90ac98678ae0458d7",
    "application": "000000000000000000000001",
    "_custom_json": null,
    "name": "temp",
    "slug": "temp",
    "platform": "[web]",
    "orientation": {
      "portrait": [
        "left"
      ]
    },
    "navigation": [
      {
        "display": "Home",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/mystore-tab_y0dqzt.png",
        "sort_order": 1,
        "type": "",
        "action": {
          "page": {
            "url": "/",
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Brands",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/brands/",
                "type": "brands"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Collections",
        "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/collections-tab_a0tg9c.png",
        "sort_order": 2,
        "type": "",
        "action": {
          "page": {
            "url": "/collections/",
            "type": "collections"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        },
        "sub_navigation": [
          {
            "display": "Categories",
            "image": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148154/production/system/icons/categories-tab_ss8e0q.png",
            "sort_order": 1,
            "type": "",
            "action": {
              "page": {
                "url": "/categories/",
                "type": "categories"
              },
              "popup": {},
              "type": "page"
            },
            "active": true,
            "tags": null,
            "acl": [
              "all"
            ],
            "_locale_language": {
              "hi": {
                "display": ""
              },
              "ar": {
                "display": ""
              },
              "en_us": {
                "display": ""
              }
            }
          }
        ]
      },
      {
        "display": "Primary Menu",
        "image": "",
        "sort_order": 3,
        "type": "",
        "action": {
          "page": {
            "type": "home"
          },
          "popup": {},
          "type": "page"
        },
        "active": true,
        "tags": null,
        "acl": [
          "all"
        ],
        "_locale_language": {
          "hi": {
            "display": ""
          },
          "ar": {
            "display": ""
          },
          "en_us": {
            "display": ""
          }
        }
      }
    ],
    "created_by": {
      "id": "000000000000000000000000"
    },
    "date_meta": {
      "created_on": "2021-01-11T04:53:13.585Z",
      "modified_on": "2021-01-14T10:24:34.485Z"
    },
    "archived": true
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPageMeta
Get page meta

```javascript
// Promise
const promise = content.getPageMeta(companyId,applicationId);

// Async/Await
const data = await content.getPageMeta(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Use this to get Page Meta.

*Success Response:*



Success


Schema: `PageMetaSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageMeta"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPageSpec
Get page spec

```javascript
// Promise
const promise = content.getPageSpec(companyId,applicationId);

// Async/Await
const data = await content.getPageSpec(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Use this to get page spec.

*Success Response:*



Success


Schema: `PageSpec`


*Examples:*


default
```json
{
  "value": {
    "specifications": [
      {
        "page_type": "home",
        "display_name": "Home",
        "params": [],
        "query": []
      },
      {
        "page_type": "collections",
        "display_name": "Collections",
        "params": [],
        "query": []
      },
      {
        "page_type": "collection",
        "display_name": "Collection",
        "params": [
          {
            "key": "slug",
            "required": true
          }
        ],
        "query": []
      }
    ]
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createPage
Create page

```javascript
// Promise
const promise = content.createPage(companyId,applicationId,body);

// Async/Await
const data = await content.createPage(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Use this to create a page.

*Success Response:*



Success


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPages
Get pages

```javascript
// Promise
const promise = content.getPages(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await content.getPages(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get pages.

*Success Response:*



Success


Schema: `PageGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createPagePreview
Create page preview

```javascript
// Promise
const promise = content.createPagePreview(companyId,applicationId,body);

// Async/Await
const data = await content.createPagePreview(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Use this to create a page preview.

*Success Response:*



Success


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updatePagePreview
Update page

```javascript
// Promise
const promise = content.updatePagePreview(companyId,applicationId,slug,body);

// Async/Await
const data = await content.updatePagePreview(companyId,applicationId,slug,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| slug | string | Page publish slug | 

Use this to update page.

*Success Response:*



Success


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updatePage
Update page

```javascript
// Promise
const promise = content.updatePage(companyId,applicationId,id,body);

// Async/Await
const data = await content.updatePage(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| id | string | Page Id | 

Use this to update page.

*Success Response:*



Success


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deletePage
Delete page

```javascript
// Promise
const promise = content.deletePage(companyId,applicationId,id);

// Async/Await
const data = await content.deletePage(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| id | string | Page Id | 

Use this to delete page.

*Success Response:*



Success


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getPageBySlug
Get pages by component Id

```javascript
// Promise
const promise = content.getPageBySlug(companyId,applicationId,slug);

// Async/Await
const data = await content.getPageBySlug(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| slug | string | Slug of page to be fetched | 

The endpoint fetches the component by component Id

*Success Response:*



A JSON object with page


Schema: `PageSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/PageResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSEOConfiguration
Get seo of application

```javascript
// Promise
const promise = content.getSEOConfiguration(companyId,applicationId);

// Async/Await
const data = await content.getSEOConfiguration(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Get seo of application

*Success Response:*



Success


Schema: `SeoComponent`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Seo"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateSEOConfiguration
Update seo of application

```javascript
// Promise
const promise = content.updateSEOConfiguration(companyId,applicationId,body);

// Async/Await
const data = await content.updateSEOConfiguration(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Update seo of application

*Success Response:*



Success


Schema: `SeoSchema`


*Examples:*


default
```json
{
  "value": {
    "details": {
      "title": "Zyosa Zyosa"
    },
    "robots_txt": "User-agent: * \nAllow: / \nsancisciasn xwsaixjowqnxwsiwjs",
    "sitemap_enabled": false,
    "_id": "6009819ee463ad40de397eb2",
    "app": "000000000000000000000001",
    "created_at": "2021-01-21T13:29:02.543Z",
    "updated_at": "2021-02-05T06:36:16.048Z",
    "__v": 11,
    "custom_meta_tags": [
      {
        "name": "test 0000",
        "content": "<meta name=\"test\" content=\"0000 cn dcje dcj rejre cjrenurenc \">",
        "_id": "6017c301bde3c21dbb13b284"
      },
      {
        "name": "cwdcdc",
        "content": "<meta content=\"wdcewdewc\">",
        "_id": "6017c675bde3c22cfb13b290"
      }
    ]
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSlideshows
Get slideshows

```javascript
// Promise
const promise = content.getSlideshows(companyId,applicationId,devicePlatform,pageNo,pageSize);

// Async/Await
const data = await content.getSlideshows(companyId,applicationId,devicePlatform,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| devicePlatform | string | Device platform | 
| pageNo | integer | Each response will contain **page_no** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. | 

Use this to get slideshows.

*Success Response:*



Success


Schema: `SlideshowGetResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowGetResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### createSlideshow
Create slideshow

```javascript
// Promise
const promise = content.createSlideshow(companyId,applicationId,body);

// Async/Await
const data = await content.createSlideshow(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Use this to create slideshow.

*Success Response:*



Success


Schema: `SlideshowSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSlideshowBySlug
Get slideshow by slug

```javascript
// Promise
const promise = content.getSlideshowBySlug(companyId,applicationId,slug,devicePlatform);

// Async/Await
const data = await content.getSlideshowBySlug(companyId,applicationId,slug,devicePlatform);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| slug | string | Slug | 
| devicePlatform | string | Device platform | 

Use this to get slideshow by slug.

*Success Response:*



Success


Schema: `SlideshowSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateSlideshow
Update slideshow

```javascript
// Promise
const promise = content.updateSlideshow(companyId,applicationId,id,body);

// Async/Await
const data = await content.updateSlideshow(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Slideshow ID | 

Use this to update slideshow.

*Success Response:*



Success


Schema: `SlideshowSchema`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SlideshowResponse"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteSlideshow
Delete slideshow

```javascript
// Promise
const promise = content.deleteSlideshow(companyId,applicationId,id);

// Async/Await
const data = await content.deleteSlideshow(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| id | string | Slideshow ID | 

Use this to delete slideshow.

*Success Response:*



Success


Schema: `SlideshowSchema`


*Examples:*


default
```json
{
  "value": {
    "date_meta": {
      "created_on": "2021-03-14T05:27:12.319Z",
      "modified_on": "2021-03-14T05:27:12.319Z"
    },
    "archived": true,
    "_id": "604d9eb975e9d136bb1b8b83",
    "configuration": {
      "start_on_launch": false,
      "duration": 50,
      "sleep_time": 100,
      "slide_direction": "horizontal"
    },
    "slug": "ss-sfsd-updated",
    "platform": "ios",
    "media": [
      {
        "auto_decide_duration": false,
        "type": "image",
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1567148153/production/system/icons/brands-tab_sfinpk.png",
        "bg_color": "#ffffff",
        "duration": 10,
        "action": {
          "type": ""
        }
      },
      {
        "auto_decide_duration": true,
        "type": "youtube",
        "url": "https://www.youtube.com/embed/9vJRopau0g0",
        "bg_color": "#ffffff",
        "duration": 909,
        "action": {
          "type": ""
        }
      }
    ],
    "application": "5cd3db5e9d692cfe5302a7bb",
    "active": true
  }
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getSupportInformation
Get support information

```javascript
// Promise
const promise = content.getSupportInformation(companyId,applicationId);

// Async/Await
const data = await content.getSupportInformation(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Get contact details for customer support. Including emails and phone numbers

*Success Response:*



Success


Schema: `Support`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Support"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateSupportInformation
Update support data of application

```javascript
// Promise
const promise = content.updateSupportInformation(companyId,applicationId,body);

// Async/Await
const data = await content.updateSupportInformation(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Update support data of application

*Success Response:*



Success


Schema: `Support`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Support"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### updateInjectableTag
Updates a Tag

```javascript
// Promise
const promise = content.updateInjectableTag(companyId,applicationId,body);

// Async/Await
const data = await content.updateInjectableTag(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Update tag

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### deleteAllInjectableTags
Delete tags for application

```javascript
// Promise
const promise = content.deleteAllInjectableTags(companyId,applicationId);

// Async/Await
const data = await content.deleteAllInjectableTags(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Delete tags for application

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### getInjectableTags
Get tags for application

```javascript
// Promise
const promise = content.getInjectableTags(companyId,applicationId);

// Async/Await
const data = await content.getInjectableTags(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Get tags for application

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### addInjectableTag
Adds a Tag

```javascript
// Promise
const promise = content.addInjectableTag(companyId,applicationId,body);

// Async/Await
const data = await content.addInjectableTag(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Add tag

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### removeInjectableTag
Removes a Tag

```javascript
// Promise
const promise = content.removeInjectableTag(companyId,applicationId,body);

// Async/Await
const data = await content.removeInjectableTag(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 

Remove a particular tag

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---


#### editInjectableTag
Edits a Tag by Id

```javascript
// Promise
const promise = content.editInjectableTag(companyId,applicationId,tagId,body);

// Async/Await
const data = await content.editInjectableTag(companyId,applicationId,tagId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID | 
| applicationId | string | Application ID | 
| tagId | string | Tag ID | 

Edits a particular tag

*Success Response:*



Tags Array


Schema: `TagsSchema`








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/4XXAPIError"
}
```








Failed


Schema: `APIError`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/5XXAPIError"
}
```









---



---


## Assignment


#### createPickupLocation


```javascript
// Promise
const promise = assignment.createPickupLocation(companyId,applicationId,body);

// Async/Await
const data = await assignment.createPickupLocation(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Create a new Pickup point for an application.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### getPickupLocation


```javascript
// Promise
const promise = assignment.getPickupLocation(companyId,applicationId,q,pageNo,pageSize);

// Async/Await
const data = await assignment.getPickupLocation(companyId,applicationId,q,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | Search query | 
| pageNo | integer | Request a page number | 
| pageSize | integer | Request a page size | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Update list of pickup points for an application.


*Success Response:*



Success Response


Schema: `PickupPointResponse`








Error


Schema: `ErrorResponseSchema`









---


#### updatePickupLocation


```javascript
// Promise
const promise = assignment.updatePickupLocation(id,companyId,applicationId,body);

// Async/Await
const data = await assignment.updatePickupLocation(id,companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Pickup Point ID | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Update Pickup Point for an application. Pickup Point once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### getPickupLocationById


```javascript
// Promise
const promise = assignment.getPickupLocationById(id,companyId,applicationId);

// Async/Await
const data = await assignment.getPickupLocationById(id,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Pickup Point Id | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

This API returns Pickup point data for an id. Returns not found if no data exists for the
store id passed.


*Success Response:*



Success Response


Schema: `PickupPointSchema`








Error Response


Schema: `ErrorResponseSchema`









---


#### createPickupConfiguration


```javascript
// Promise
const promise = assignment.createPickupConfiguration(companyId,applicationId,body);

// Async/Await
const data = await assignment.createPickupConfiguration(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Create a new pickup configuration for an application id. Only one configuration can be
created per application id.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### getPickupConfiguration


```javascript
// Promise
const promise = assignment.getPickupConfiguration(companyId,applicationId);

// Async/Await
const data = await assignment.getPickupConfiguration(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Let pickup configuration for an application. z-application-id is required in
the header to fetch the data.


*Success Response:*



Success Response


Schema: `PickupResponse`








Error Response


Schema: `ErrorResponseSchema`









---


#### getAllocationConfiguration


```javascript
// Promise
const promise = assignment.getAllocationConfiguration(companyId,applicationId);

// Async/Await
const data = await assignment.getAllocationConfiguration(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Get Shipping configuration for an application. Returns the global shipping configuration
including shipping priority and default strategy, etc. Every application can have one set of
configuration each. The endpoint requires an application id to get the data.


*Success Response:*



Success Response


Schema: `ShippingResponse`








Error Response


Schema: `ErrorResponseSchema`









---


#### createAllocationConfiguration


```javascript
// Promise
const promise = assignment.createAllocationConfiguration(companyId,applicationId,body);

// Async/Await
const data = await assignment.createAllocationConfiguration(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Create a new Shipping configuration for an application The configuration is for
all the stores under an application. There can be only one configuration for an
application i.e, for an application configuration can be created only once.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### updateAllocationConfiguration


```javascript
// Promise
const promise = assignment.updateAllocationConfiguration(companyId,applicationId,body);

// Async/Await
const data = await assignment.updateAllocationConfiguration(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Update Shipping configuration for an application. Application configuration once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### getAllocationLocations


```javascript
// Promise
const promise = assignment.getAllocationLocations(companyId,applicationId,q,pageNo,pageSize,type);

// Async/Await
const data = await assignment.getAllocationLocations(companyId,applicationId,q,pageNo,pageSize,type);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | Search query | 
| pageNo | integer | Request a page number | 
| pageSize | integer | Request a page size | 
| type | string | Type can be 'standard' or 'advanced' | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

List Stores of an application. Two types of stores are listed,
some having allocation types as standard and others, advanced.
API has support for pagination, filter by type and search by name.


*Success Response:*



Success Response


Schema: `StoreListResponse`








Error Response


Schema: `ErrorResponseSchema`









---


#### getAllocationLocationById


```javascript
// Promise
const promise = assignment.getAllocationLocationById(id,companyId,applicationId);

// Async/Await
const data = await assignment.getAllocationLocationById(id,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Store Id | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

This API returns store data for an id. Returns not found if no data exists for the
store id passed. The data is returned from sixspeed database which includes only the
shipping configuration of the stores including store id and app id.


*Success Response:*



Success Response


Schema: `StoreResponse`








Error Response


Schema: `ErrorResponseSchema`









---


#### updateAllocationLocation


```javascript
// Promise
const promise = assignment.updateAllocationLocation(id,companyId,applicationId,body);

// Async/Await
const data = await assignment.updateAllocationLocation(id,companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Store Id | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

A store configuration once created can be updated via this API. Store id in request params
and udpated request body are required to successfully update the store data.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### createAllocationLocation


```javascript
// Promise
const promise = assignment.createAllocationLocation(companyId,applicationId,body);

// Async/Await
const data = await assignment.createAllocationLocation(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Create a new store shipping configuratiion. The configuration is stored into the
sixspeed database. One one store data can be created for one store id. Ther can be one
default configuration and multiple non-default ones. The default is not binded with product
tags while others are required to be.


*Success Response:*



Success Response - Store Updated


Schema: `Success`








Error Response


Schema: `ErrorResponseSchema`









---


#### getDestinationZones


```javascript
// Promise
const promise = assignment.getDestinationZones(companyId,applicationId,q,pageNo,pageSize);

// Async/Await
const data = await assignment.getDestinationZones(companyId,applicationId,q,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | Search query | 
| pageNo | integer | Request a page number | 
| pageSize | integer | Request a page size | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Get a list of zones created, where every zone has a unique name and id. They can be
of three different types, radius, pincode and country.


*Success Response:*



Success Response


Schema: `ZoneListResponse`








Error Response


Schema: `ErrorResponseSchema`









---


#### postDestinationZone


```javascript
// Promise
const promise = assignment.postDestinationZone(companyId,applicationId,body);

// Async/Await
const data = await assignment.postDestinationZone(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

This API lets you create a zone which can be used further be mapped with store
configuration rules to defined a shipping rule. Either of the three details need to
be passed, zone_detail, pincode and region.


*Success Response:*



Success Response - Zone Created


Schema: `Success`








Internal Server Error


Schema: `ErrorResponseSchema`









---


#### getDestinationZoneById


```javascript
// Promise
const promise = assignment.getDestinationZoneById(id,companyId,applicationId);

// Async/Await
const data = await assignment.getDestinationZoneById(id,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Store Id | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Returns zone data for the specified zone id. Id is the required parameter and returns
not found if no data is found for the passed zone id.


*Success Response:*



Success Response


Schema: `ZoneSchema`








Internal Server Error


Schema: `ErrorResponseSchema`









---


#### updateDestinationZone


```javascript
// Promise
const promise = assignment.updateDestinationZone(id,companyId,applicationId,body);

// Async/Await
const data = await assignment.updateDestinationZone(id,companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | number | Store Id | 
| companyId | integer | Company Id | 
| applicationId | string | Application Id | 

Zone once created can be updated using this API. Zone id and request body are the required
data to update a zone.


*Success Response:*



Success Response - Zone Updated


Schema: `Success`








Internal Server Error


Schema: `ErrorResponseSchema`









---



---


## Billing


#### createSubscriptionCharge
Create subscription charge

```javascript
// Promise
const promise = billing.createSubscriptionCharge(companyId,extensionId,body);

// Async/Await
const data = await billing.createSubscriptionCharge(companyId,extensionId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 
| extensionId | string | Extension _id | 

Register subscription charge for a seller of your extension.

*Success Response:*



Success


Schema: `CreateSubscriptionResponse`








Request failed due to invalid data


Schema: `BadRequest`


*Examples:*


Multiple Recurring Charge
```json
{
  "value": {
    "message": "Multiple `recurring charges` not allowed"
  }
}
```

Missing recurring field
```json
{
  "value": {
    "message": "Missing `recurring` field"
  }
}
```









---


#### getSubscriptionCharge
Get subscription charge details

```javascript
// Promise
const promise = billing.getSubscriptionCharge(companyId,extensionId,subscriptionId);

// Async/Await
const data = await billing.getSubscriptionCharge(companyId,extensionId,subscriptionId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 
| extensionId | string | Extension _id | 
| subscriptionId | string | Subscription charge _id | 

Get created subscription charge details

*Success Response:*



Success


Schema: `EntitySubscription`








Not found


Schema: `ResourceNotFound`









---


#### cancelSubscriptionCharge
Cancel subscription charge

```javascript
// Promise
const promise = billing.cancelSubscriptionCharge(companyId,extensionId,subscriptionId);

// Async/Await
const data = await billing.cancelSubscriptionCharge(companyId,extensionId,subscriptionId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 
| extensionId | string | Extension _id | 
| subscriptionId | string | Subscription charge _id | 

Cancel subscription and attached charges.

*Success Response:*



Success


Schema: `EntitySubscription`








Request failed due to invalid data


Schema: `BadRequest`








Resource Not found


Schema: `ResourceNotFound`









---


#### getInvoices
Get invoices

```javascript
// Promise
const promise = billing.getInvoices(companyId);

// Async/Await
const data = await billing.getInvoices(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

Get invoices.

*Success Response:*



Success


Schema: `Invoices`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Invoices"
}
```









---


#### getInvoiceById
Get invoice by id

```javascript
// Promise
const promise = billing.getInvoiceById(companyId,invoiceId);

// Async/Await
const data = await billing.getInvoiceById(companyId,invoiceId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 
| invoiceId | string | Invoice id | 

Get invoice by id.

*Success Response:*



Success


Schema: `Invoice`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Invoice"
}
```









---


#### getCustomerDetail
Get subscription customer detail

```javascript
// Promise
const promise = billing.getCustomerDetail(companyId);

// Async/Await
const data = await billing.getCustomerDetail(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

Get subscription customer detail.

*Success Response:*



Success


Schema: `SubscriptionCustomer`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionCustomerRes"
}
```








Resource not found


Schema: `ResourceNotFound`









---


#### upsertCustomerDetail
Upsert subscription customer detail

```javascript
// Promise
const promise = billing.upsertCustomerDetail(companyId,body);

// Async/Await
const data = await billing.upsertCustomerDetail(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

Upsert subscription customer detail.

*Success Response:*



Success


Schema: `SubscriptionCustomer`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionCustomerRes"
}
```








Resource not found


Schema: `ResourceNotFound`








Internal server error


Schema: `InternalServerError`









---


#### getSubscription
Get current subscription detail

```javascript
// Promise
const promise = billing.getSubscription(companyId);

// Async/Await
const data = await billing.getSubscription(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.


*Success Response:*



Success


Schema: `SubscriptionStatus`


*Examples:*


Active subscription
```json
{
  "$ref": "#/components/examples/SubscriptionActiveRes"
}
```

Inactive subscription
```json
{
  "$ref": "#/components/examples/SubscriptionInavtiveRes"
}
```








Internal server error


Schema: `InternalServerError`









---


#### getFeatureLimitConfig
Get subscription subscription limits

```javascript
// Promise
const promise = billing.getFeatureLimitConfig(companyId);

// Async/Await
const data = await billing.getFeatureLimitConfig(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

Get subscription subscription limits.

*Success Response:*



Success


Schema: `SubscriptionLimit`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CurrentLimitRes"
}
```








Internal server error


Schema: `InternalServerError`









---


#### activateSubscriptionPlan
Activate subscription

```javascript
// Promise
const promise = billing.activateSubscriptionPlan(companyId,body);

// Async/Await
const data = await billing.activateSubscriptionPlan(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

It will activate subscription plan for customer

*Success Response:*



Success


Schema: `SubscriptionActivateRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SubscriptionActivateRes"
}
```








Resource not found


Schema: `ResourceNotFound`








Internal server error


Schema: `InternalServerError`









---


#### cancelSubscriptionPlan
Cancel subscription

```javascript
// Promise
const promise = billing.cancelSubscriptionPlan(companyId,body);

// Async/Await
const data = await billing.cancelSubscriptionPlan(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Customer unique id. In case of company it will be company id. | 

It will cancel current active subscription.

*Success Response:*



Success


Schema: `CancelSubscriptionRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/CancelSubscriptionRes"
}
```








Resource not found


Schema: `ResourceNotFound`








Internal server error


Schema: `InternalServerError`









---



---


## Communication


#### getCampaigns
Get campaigns

```javascript
// Promise
const promise = communication.getCampaigns(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getCampaigns(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get campaigns

*Success Response:*



Success


Schema: `Campaigns`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaigns"
}
```









---


#### createCampaign
Create campaign

```javascript
// Promise
const promise = communication.createCampaign(companyId,applicationId,body);

// Async/Await
const data = await communication.createCampaign(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create campaign

*Success Response:*



Success


Schema: `Campaign`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```









---


#### getCampaignById
Get campaign by id

```javascript
// Promise
const promise = communication.getCampaignById(companyId,applicationId,id);

// Async/Await
const data = await communication.getCampaignById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Campaign id | 

Get campaign by id

*Success Response:*



Success


Schema: `Campaign`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```








Not found


Schema: `NotFound`









---


#### updateCampaignById
Update campaign by id

```javascript
// Promise
const promise = communication.updateCampaignById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateCampaignById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Campaign id | 

Update campaign by id

*Success Response:*



Success


Schema: `Campaign`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Campaign"
}
```








Not found


Schema: `NotFound`









---


#### getStatsOfCampaignById
Get stats of campaign by id

```javascript
// Promise
const promise = communication.getStatsOfCampaignById(companyId,applicationId,id);

// Async/Await
const data = await communication.getStatsOfCampaignById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Campaign id | 

Get stats of campaign by id

*Success Response:*



Success


Schema: `GetStats`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/GetStats"
}
```








Bad request


Schema: `BadRequest`









---


#### getAudiences
Get audiences

```javascript
// Promise
const promise = communication.getAudiences(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getAudiences(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get audiences

*Success Response:*



Success


Schema: `Audiences`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audiences"
}
```









---


#### createAudience
Create audience

```javascript
// Promise
const promise = communication.createAudience(companyId,applicationId,body);

// Async/Await
const data = await communication.createAudience(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create audience

*Success Response:*



Success


Schema: `Audience`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```









---


#### getBigqueryHeaders
Get bigquery headers

```javascript
// Promise
const promise = communication.getBigqueryHeaders(companyId,applicationId,body);

// Async/Await
const data = await communication.getBigqueryHeaders(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Get bigquery headers

*Success Response:*



Success


Schema: `BigqueryHeadersRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/BigqueryHeadersRes"
}
```








Bad request


Schema: `BadRequest`









---


#### getAudienceById
Get audience by id

```javascript
// Promise
const promise = communication.getAudienceById(companyId,applicationId,id);

// Async/Await
const data = await communication.getAudienceById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Audience id | 

Get audience by id

*Success Response:*



Success


Schema: `Audience`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```








Not found


Schema: `NotFound`









---


#### updateAudienceById
Update audience by id

```javascript
// Promise
const promise = communication.updateAudienceById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateAudienceById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Audience id | 

Update audience by id

*Success Response:*



Success


Schema: `Audience`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Audience"
}
```








Not found


Schema: `NotFound`









---


#### getNSampleRecordsFromCsv
Get n sample records from csv

```javascript
// Promise
const promise = communication.getNSampleRecordsFromCsv(companyId,applicationId,body);

// Async/Await
const data = await communication.getNSampleRecordsFromCsv(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Get n sample records from csv

*Success Response:*



Success


Schema: `GetNRecordsCsvRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/GetNRecordsCsvRes"
}
```








Bad request


Schema: `BadRequest`









---


#### getEmailProviders
Get email providers

```javascript
// Promise
const promise = communication.getEmailProviders(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getEmailProviders(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get email providers

*Success Response:*



Success


Schema: `EmailProviders`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProviders"
}
```









---


#### createEmailProvider
Create email provider

```javascript
// Promise
const promise = communication.createEmailProvider(companyId,applicationId,body);

// Async/Await
const data = await communication.createEmailProvider(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create email provider

*Success Response:*



Success


Schema: `EmailProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### getEmailProviderById
Get email provider by id

```javascript
// Promise
const promise = communication.getEmailProviderById(companyId,applicationId,id);

// Async/Await
const data = await communication.getEmailProviderById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Email provider id | 

Get email provider by id

*Success Response:*



Success


Schema: `EmailProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### updateEmailProviderById
Update email provider by id

```javascript
// Promise
const promise = communication.updateEmailProviderById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateEmailProviderById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Email provider id | 

Update email provider by id

*Success Response:*



Success


Schema: `EmailProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailProvider"
}
```









---


#### getEmailTemplates
Get email templates

```javascript
// Promise
const promise = communication.getEmailTemplates(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getEmailTemplates(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get email templates

*Success Response:*



Success


Schema: `EmailTemplates`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplates"
}
```









---


#### createEmailTemplate
Create email template

```javascript
// Promise
const promise = communication.createEmailTemplate(companyId,applicationId,body);

// Async/Await
const data = await communication.createEmailTemplate(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create email template

*Success Response:*



Success


Schema: `EmailTemplateRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```









---


#### getSystemEmailTemplates
Get system email templates

```javascript
// Promise
const promise = communication.getSystemEmailTemplates(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getSystemEmailTemplates(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get system email templates

*Success Response:*



Success


Schema: `SystemEmailTemplates`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemEmailTemplates"
}
```









---


#### getEmailTemplateById
Get email template by id

```javascript
// Promise
const promise = communication.getEmailTemplateById(companyId,applicationId,id);

// Async/Await
const data = await communication.getEmailTemplateById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Email template id | 

Get email template by id

*Success Response:*



Success


Schema: `EmailTemplate`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplate"
}
```









---


#### updateEmailTemplateById
Update email template by id

```javascript
// Promise
const promise = communication.updateEmailTemplateById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateEmailTemplateById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Email template id | 

Update email template by id

*Success Response:*



Success


Schema: `EmailTemplateRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateRes"
}
```









---


#### deleteEmailTemplateById
Delete email template by id

```javascript
// Promise
const promise = communication.deleteEmailTemplateById(companyId,applicationId,id);

// Async/Await
const data = await communication.deleteEmailTemplateById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Email template id | 

Delete email template by id

*Success Response:*



Success


Schema: `EmailTemplateDeleteSuccessRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateDeleteSuccessRes"
}
```








Failure


Schema: `EmailTemplateDeleteFailureRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EmailTemplateDeleteFailureRes"
}
```









---


#### getEventSubscriptions
Get event subscriptions

```javascript
// Promise
const promise = communication.getEventSubscriptions(companyId,applicationId,pageNo,pageSize,populate);

// Async/Await
const data = await communication.getEventSubscriptions(companyId,applicationId,pageNo,pageSize,populate);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| populate | string | populate fields | 

Get event subscriptions

*Success Response:*



Success


Schema: `EventSubscriptions`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/EventSubscriptions"
}
```









---


#### getJobs
Get jobs

```javascript
// Promise
const promise = communication.getJobs(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getJobs(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get jobs

*Success Response:*



Success


Schema: `Jobs`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Jobs"
}
```









---


#### triggerCampaignJob
Trigger campaign job

```javascript
// Promise
const promise = communication.triggerCampaignJob(companyId,applicationId,body);

// Async/Await
const data = await communication.triggerCampaignJob(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Trigger campaign job

*Success Response:*



Success


Schema: `TriggerJobResponse`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/TriggerJobResponse"
}
```









---


#### getJobLogs
Get job logs

```javascript
// Promise
const promise = communication.getJobLogs(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getJobLogs(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get job logs

*Success Response:*



Success


Schema: `JobLogs`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/JobLogs"
}
```









---


#### getCommunicationLogs
Get communication logs

```javascript
// Promise
const promise = communication.getCommunicationLogs(companyId,applicationId,pageId,pageSize,sort,query);

// Async/Await
const data = await communication.getCommunicationLogs(companyId,applicationId,pageId,pageSize,sort,query);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageId | string | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on _id | 
| query | object |  | 

Get communication logs

*Success Response:*



Success


Schema: `Logs`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/Logs"
}
```









---


#### getSystemNotifications
Get system notifications

```javascript
// Promise
const promise = communication.getSystemNotifications(companyId,pageNo,pageSize);

// Async/Await
const data = await communication.getSystemNotifications(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| pageNo | integer |  | 
| pageSize | integer |  | 

Get system notifications

*Success Response:*



Success


Schema: `SystemNotifications`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemNotifications"
}
```









---


#### getSmsProviders
Get sms providers

```javascript
// Promise
const promise = communication.getSmsProviders(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getSmsProviders(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get sms providers

*Success Response:*



Success


Schema: `SmsProviders`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProviders"
}
```









---


#### createSmsProvider
Create sms provider

```javascript
// Promise
const promise = communication.createSmsProvider(companyId,applicationId,body);

// Async/Await
const data = await communication.createSmsProvider(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create sms provider

*Success Response:*



Success


Schema: `SmsProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### getSmsProviderById
Get sms provider by id

```javascript
// Promise
const promise = communication.getSmsProviderById(companyId,applicationId,id);

// Async/Await
const data = await communication.getSmsProviderById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Sms provider id | 

Get sms provider by id

*Success Response:*



Success


Schema: `SmsProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### updateSmsProviderById
Update sms provider by id

```javascript
// Promise
const promise = communication.updateSmsProviderById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateSmsProviderById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Sms provider id | 

Update sms provider by id

*Success Response:*



Success


Schema: `SmsProvider`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsProvider"
}
```









---


#### getSmsTemplates
Get sms templates

```javascript
// Promise
const promise = communication.getSmsTemplates(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getSmsTemplates(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get sms templates

*Success Response:*



Success


Schema: `SmsTemplates`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplates"
}
```









---


#### createSmsTemplate
Create sms template

```javascript
// Promise
const promise = communication.createSmsTemplate(companyId,applicationId,body);

// Async/Await
const data = await communication.createSmsTemplate(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 

Create sms template

*Success Response:*



Success


Schema: `SmsTemplateRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```









---


#### getSmsTemplateById
Get sms template by id

```javascript
// Promise
const promise = communication.getSmsTemplateById(companyId,applicationId,id);

// Async/Await
const data = await communication.getSmsTemplateById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Sms template id | 

Get sms template by id

*Success Response:*



Success


Schema: `SmsTemplate`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplate"
}
```








Not found


Schema: `NotFound`









---


#### updateSmsTemplateById
Update sms template by id

```javascript
// Promise
const promise = communication.updateSmsTemplateById(companyId,applicationId,id,body);

// Async/Await
const data = await communication.updateSmsTemplateById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Sms template id | 

Update sms template by id

*Success Response:*



Success


Schema: `SmsTemplateRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateRes"
}
```








Not found


Schema: `NotFound`









---


#### deleteSmsTemplateById
Delete sms template by id

```javascript
// Promise
const promise = communication.deleteSmsTemplateById(companyId,applicationId,id);

// Async/Await
const data = await communication.deleteSmsTemplateById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| id | string | Sms template id | 

Delete sms template by id

*Success Response:*



Success


Schema: `SmsTemplateDeleteSuccessRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateDeleteSuccessRes"
}
```








Failure


Schema: `SmsTemplateDeleteFailureRes`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SmsTemplateDeleteFailureRes"
}
```








Not found


Schema: `NotFound`









---


#### getSystemSystemTemplates
Get system sms templates

```javascript
// Promise
const promise = communication.getSystemSystemTemplates(companyId,applicationId,pageNo,pageSize,sort);

// Async/Await
const data = await communication.getSystemSystemTemplates(companyId,applicationId,pageNo,pageSize,sort);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company id | 
| applicationId | string | Application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 
| sort | object | To sort based on created_at | 

Get system sms templates

*Success Response:*



Success


Schema: `SystemSmsTemplates`


*Examples:*


default
```json
{
  "$ref": "#/components/examples/SystemSmsTemplates"
}
```









---



---


## Payment


#### getBrandPaymentGatewayConfig
Get All Brand Payment Gateway Config Secret

```javascript
// Promise
const promise = payment.getBrandPaymentGatewayConfig(companyId,applicationId);

// Async/Await
const data = await payment.getBrandPaymentGatewayConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Get All Brand Payment Gateway Config Secret

*Success Response:*



Refund Transfer Mode


Schema: `PaymentGatewayConfigResponse`








Internal Server Error


Schema: `ErrorCodeDescription`








Internal Server Error


Schema: `ErrorCodeDescription`









---


#### saveBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway

```javascript
// Promise
const promise = payment.saveBrandPaymentGatewayConfig(companyId,applicationId,body);

// Async/Await
const data = await payment.saveBrandPaymentGatewayConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Save Config Secret For Brand Payment Gateway

*Success Response:*



Save Config Secret For Brand Payment Gateway Success Response.


Schema: `PaymentGatewayToBeReviewed`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### updateBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway

```javascript
// Promise
const promise = payment.updateBrandPaymentGatewayConfig(companyId,applicationId,body);

// Async/Await
const data = await payment.updateBrandPaymentGatewayConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Save Config Secret For Brand Payment Gateway

*Success Response:*



Save Config Secret For Brand Payment Gateway Success Response.


Schema: `PaymentGatewayToBeReviewed`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getPaymentModeRoutes
Get All Valid Payment Options

```javascript
// Promise
const promise = payment.getPaymentModeRoutes(companyId,applicationId,refresh,requestType);

// Async/Await
const data = await payment.getPaymentModeRoutes(companyId,applicationId,refresh,requestType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 
| refresh | boolean |  | 
| requestType | string |  | 

Use this API to get Get All Valid Payment Options for making payment

*Success Response:*



Success


Schema: `PaymentOptionsResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getAllPayouts
Get All Payouts

```javascript
// Promise
const promise = payment.getAllPayouts(companyId,uniqueExternalId);

// Async/Await
const data = await payment.getAllPayouts(companyId,uniqueExternalId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueExternalId | string | Fetch payouts using unique external id | 

Get All Payouts

*Success Response:*



payouts response object


Schema: `PayoutsResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### savePayout
Save Payout

```javascript
// Promise
const promise = payment.savePayout(companyId,body);

// Async/Await
const data = await payment.savePayout(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Save Payout

*Success Response:*



save payout response object


Schema: `PayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### updatePayout
Update Payout

```javascript
// Promise
const promise = payment.updatePayout(companyId,uniqueTransferNo,body);

// Async/Await
const data = await payment.updatePayout(companyId,uniqueTransferNo,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Update Payout

*Success Response:*



save payout response object


Schema: `UpdatePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### activateAndDectivatePayout
Partial Update Payout

```javascript
// Promise
const promise = payment.activateAndDectivatePayout(companyId,uniqueTransferNo,body);

// Async/Await
const data = await payment.activateAndDectivatePayout(companyId,uniqueTransferNo,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Partial Update Payout

*Success Response:*



save payout response object


Schema: `UpdatePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### deletePayout
Delete Payout

```javascript
// Promise
const promise = payment.deletePayout(companyId,uniqueTransferNo);

// Async/Await
const data = await payment.deletePayout(companyId,uniqueTransferNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueTransferNo | string | Unique transfer id | 

Delete Payout

*Success Response:*



delete payout response object


Schema: `DeletePayoutResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getSubscriptionPaymentMethod
List Subscription Payment Method

```javascript
// Promise
const promise = payment.getSubscriptionPaymentMethod(companyId);

// Async/Await
const data = await payment.getSubscriptionPaymentMethod(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Get all  Subscription  Payment Method

*Success Response:*



List Subscription Payment Method Response


Schema: `SubscriptionPaymentMethodResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### deleteSubscriptionPaymentMethod
Delete Subscription Payment Method

```javascript
// Promise
const promise = payment.deleteSubscriptionPaymentMethod(companyId,uniqueExternalId,paymentMethodId);

// Async/Await
const data = await payment.deleteSubscriptionPaymentMethod(companyId,uniqueExternalId,paymentMethodId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| uniqueExternalId | string |  | 
| paymentMethodId | string |  | 

Uses this api to Delete Subscription Payment Method

*Success Response:*



Delete Subscription Payment Method Response.


Schema: `DeleteSubscriptionPaymentMethodResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getSubscriptionConfig
List Subscription Config

```javascript
// Promise
const promise = payment.getSubscriptionConfig(companyId);

// Async/Await
const data = await payment.getSubscriptionConfig(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Get all  Subscription Config details

*Success Response:*



List Subscription Config Response


Schema: `SubscriptionConfigResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### saveSubscriptionSetupIntent
Save Subscription Setup Intent

```javascript
// Promise
const promise = payment.saveSubscriptionSetupIntent(companyId,body);

// Async/Await
const data = await payment.saveSubscriptionSetupIntent(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

Uses this api to Save Subscription Setup Intent

*Success Response:*



Save Subscription Setup Intent Response.


Schema: `SaveSubscriptionSetupIntentResponse`








Bad Request Error


Schema: `HttpErrorCodeAndResponse`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### addBeneficiaryDetails
Save bank details for cancelled/returned order

```javascript
// Promise
const promise = payment.addBeneficiaryDetails(companyId,applicationId,body);

// Async/Await
const data = await payment.addBeneficiaryDetails(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Use this API to save bank details for returned/cancelled order to refund amount in his account.

*Success Response:*



Success


Schema: `RefundAccountResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### verifyIfscCode
Ifsc Code Verification

```javascript
// Promise
const promise = payment.verifyIfscCode(companyId,ifscCode);

// Async/Await
const data = await payment.verifyIfscCode(companyId,ifscCode);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| ifscCode | string |  | 

Get True/False for correct IFSC Code for adding bank details for refund

*Success Response:*



Bank details on correct Ifsc Code


Schema: `IfscCodeResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `ErrorCodeDescription`









---


#### getUserOrderBeneficiaries
List Order Beneficiary

```javascript
// Promise
const promise = payment.getUserOrderBeneficiaries(orderId,companyId,applicationId);

// Async/Await
const data = await payment.getUserOrderBeneficiaries(orderId,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string |  | 
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Get all active  beneficiary details added by the user for refund

*Success Response:*



List Order Beneficiary


Schema: `OrderBeneficiaryResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---


#### getUserBeneficiaries
List User Beneficiary

```javascript
// Promise
const promise = payment.getUserBeneficiaries(orderId,companyId,applicationId);

// Async/Await
const data = await payment.getUserBeneficiaries(orderId,companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| orderId | string |  | 
| companyId | integer | Company Id | 
| applicationId | string | Application id | 

Get all active  beneficiary details added by the user for refund

*Success Response:*



List User Beneficiary


Schema: `OrderBeneficiaryResponse`








Bad Request Error


Schema: `NotFoundResourceError`








Internal Server Error


Schema: `HttpErrorCodeAndResponse`









---



---


## Catalog


#### updateSearchKeywords
Update Search Keyword

```javascript
// Promise
const promise = catalog.updateSearchKeywords(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.updateSearchKeywords(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update Search Keyword by its id. On successful request, returns the updated collection

*Success Response:*



The Collection object. See example below or refer `GetSearchWordsDataSchema` for details.


Schema: `GetSearchWordsData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteSearchKeywords
Delete a Search Keywords

```javascript
// Promise
const promise = catalog.deleteSearchKeywords(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteSearchKeywords(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSearchKeywords
Get a Search Keywords Details

```javascript
// Promise
const promise = catalog.getSearchKeywords(companyId,applicationId,id);

// Async/Await
const data = await catalog.getSearchKeywords(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`

*Success Response:*



The Collection object. See example below or refer `GetSearchWordsDetailResponseSchema` for details


Schema: `GetSearchWordsDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAllSearchKeyword
List all Search Custom Keyword Listing

```javascript
// Promise
const promise = catalog.getAllSearchKeyword(companyId,applicationId);

// Async/Await
const data = await catalog.getAllSearchKeyword(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results

*Success Response:*



List of custom search keywords. See example below or refer `GetSearchWordsResponseSchema` for details


Schema: `GetSearchWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCustomKeyword
Add a Custom Search Keywords

```javascript
// Promise
const promise = catalog.createCustomKeyword(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCustomKeyword(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`

*Success Response:*



Get keyword object with id that is added. See example below or refer `GetSearchWordsDataSchema` for details


Schema: `GetSearchWordsData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateAutocompleteKeyword
Create & Update Autocomplete Keyword

```javascript
// Promise
const promise = catalog.updateAutocompleteKeyword(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.updateAutocompleteKeyword(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update a mapping by it's id. On successful request, returns the updated Keyword mapping

*Success Response:*



The Mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details.


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteAutocompleteKeyword
Delete a Autocomplete Keywords

```javascript
// Promise
const promise = catalog.deleteAutocompleteKeyword(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteAutocompleteKeyword(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAutocompleteKeywordDetail
Get a Autocomplete Keywords Details

```javascript
// Promise
const promise = catalog.getAutocompleteKeywordDetail(companyId,applicationId,id);

// Async/Await
const data = await catalog.getAutocompleteKeywordDetail(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`

*Success Response:*



The mapping object. See example below or refer `GetAutocompleteWordsResponseSchema` for details


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAutocompleteConfig
List all Autocomplete Keyword Listing

```javascript
// Promise
const promise = catalog.getAutocompleteConfig(companyId,applicationId);

// Async/Await
const data = await catalog.getAutocompleteConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results

*Success Response:*



List of custom autocomplete keywords. See example below or refer `GetAutocompleteWordsResponseSchema` for details


Schema: `GetAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCustomAutocompleteRule
Add a Custom Autocomplete Keywords

```javascript
// Promise
const promise = catalog.createCustomAutocompleteRule(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCustomAutocompleteRule(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`

*Success Response:*



List of all the collections including the one you added. See example below or refer `CreateAutocompleteWordsResponseSchema` for details


Schema: `CreateAutocompleteWordsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBundle
List all Product Bundles

```javascript
// Promise
const promise = catalog.getProductBundle(companyId,q);

// Async/Await
const data = await catalog.getProductBundle(companyId,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| q | string | A search string that is searched with product bundle name. | 

Get all product bundles for a particular company

*Success Response:*



List of bundle configured for a company. See example below or refer `GetProductBundleListingResponse` for details


Schema: `GetProductBundleListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductBundle
Create Product Bundle

```javascript
// Promise
const promise = catalog.createProductBundle(companyId,body);

// Async/Await
const data = await catalog.createProductBundle(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id

*Success Response:*



Get bundle with id that is added. See example below or refer `GetProductBundleCreateResponse` for details


Schema: `GetProductBundleCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateProductBundle
Update a Product Bundle

```javascript
// Promise
const promise = catalog.updateProductBundle(companyId,id,body);

// Async/Await
const data = await catalog.updateProductBundle(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete. | 

Update a Product Bundle by its id. On successful request, returns the updated product bundle

*Success Response:*



The Collection object. See example below or refer `GetProductBundleCreateResponse` for details.


Schema: `GetProductBundleCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBundleDetail
Get a particular Product Bundle details

```javascript
// Promise
const promise = catalog.getProductBundleDetail(companyId,id);

// Async/Await
const data = await catalog.getProductBundleDetail(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| id | string | A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve. | 

Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`

*Success Response:*



The Collection object. See example below or refer `GetProductBundleResponse` for details


Schema: `GetProductBundleResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSizeGuides
Get list of size guides

```javascript
// Promise
const promise = catalog.getSizeGuides(companyId,active,q,tag,pageNo,pageSize);

// Async/Await
const data = await catalog.getSizeGuides(companyId,active,q,tag,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company for which the size guides are to be fetched. | 
| active | boolean | filter size guide on basis of active, in-active | 
| q | string | Query that is to be searched. | 
| tag | string | to filter size guide on basis of tag. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API allows to view all the size guides associated to the seller.

*Success Response:*



Size guide object. See example below or refer `ListSizeGuide` for details


Schema: `ListSizeGuide`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createSizeGuide
Create a size guide.

```javascript
// Promise
const promise = catalog.createSizeGuide(companyId,body);

// Async/Await
const data = await catalog.createSizeGuide(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the size guide is to be created. | 

This API allows to create a size guide associated to a brand.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateSizeGuide
Edit a size guide.

```javascript
// Promise
const promise = catalog.updateSizeGuide(companyId,id,body);

// Async/Await
const data = await catalog.updateSizeGuide(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 
| id | string | Mongo id of the size guide to be edited | 

This API allows to edit a size guide.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSizeGuide
Get a single size guide.

```javascript
// Promise
const promise = catalog.getSizeGuide(companyId,id);

// Async/Await
const data = await catalog.getSizeGuide(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to size guide. | 
| id | string | Id of the size guide to be viewed. | 

This API helps to get data associated to a size guide.

*Success Response:*



Brand object. See example below or refer `SizeGuideResponseSchema` for details


Schema: `SizeGuideResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCatalogConfiguration
Get configuration meta  details for catalog for admin panel

```javascript
// Promise
const promise = catalog.getCatalogConfiguration(companyId,applicationId);

// Async/Await
const data = await catalog.getCatalogConfiguration(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

configuration meta  details for catalog.

*Success Response:*



configuration details for catalog. See example below or refer `GetCatalogConfigurationMetaDataSchema` for details


Schema: `GetCatalogConfigurationMetaData`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getConfigurations
Get configured details for catalog

```javascript
// Promise
const promise = catalog.getConfigurations(companyId,applicationId);

// Async/Await
const data = await catalog.getConfigurations(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

configured details for catalog.

*Success Response:*



Get application level configured catalog details. See example below or refer `GetAppCatalogConfigurationSchema` for details


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createConfigurationProductListing
Add configuration for products & listings

```javascript
// Promise
const promise = catalog.createConfigurationProductListing(companyId,applicationId,body);

// Async/Await
const data = await catalog.createConfigurationProductListing(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Add configuration for products & listing.

*Success Response:*



success flag will tell whether the operation was successful.


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getConfigurationByType
Get configured details for catalog

```javascript
// Promise
const promise = catalog.getConfigurationByType(companyId,applicationId,type);

// Async/Await
const data = await catalog.getConfigurationByType(companyId,applicationId,type);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| type | string | type can be brands, categories etc. | 

configured details for catalog.

*Success Response:*



Get application level configured catalog details. See example below or refer `GetAppCatalogEntityConfigurationSchema` for details


Schema: `GetAppCatalogEntityConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createConfigurationByType
Add configuration for categories and brands

```javascript
// Promise
const promise = catalog.createConfigurationByType(companyId,applicationId,type,body);

// Async/Await
const data = await catalog.createConfigurationByType(companyId,applicationId,type,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| type | string | type can be brands, categories etc. | 

Add configuration for categories & brands.

*Success Response:*



success flag will tell whether the operation was successful.


Schema: `GetAppCatalogConfiguration`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getQueryFilters
Get query filters to configure a collection

```javascript
// Promise
const promise = catalog.getQueryFilters(companyId,applicationId);

// Async/Await
const data = await catalog.getQueryFilters(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Get query filters to configure a collection

*Success Response:*



The attached items of an collection. See example below or refer `GetCollectionQueryOptionResponse` for details


Schema: `GetCollectionQueryOptionResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAllCollections
List all the collections

```javascript
// Promise
const promise = catalog.getAllCollections(companyId,applicationId);

// Async/Await
const data = await catalog.getAllCollections(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`

*Success Response:*



List of collections. See example below or refer `GetCollectionListingResponse` for details


Schema: `GetCollectionListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCollection
Add a Collection

```javascript
// Promise
const promise = catalog.createCollection(companyId,applicationId,body);

// Async/Await
const data = await catalog.createCollection(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`

*Success Response:*



List of all the collections including the one you added. See example below or refer `CollectionCreateResponse` for details


Schema: `CollectionCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionDetail
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetail(companyId,applicationId,slug);

// Async/Await
const data = await catalog.getCollectionDetail(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

*Success Response:*



The Collection object. See example below or refer `CollectionDetailResponse` for details


Schema: `CollectionDetailResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateCollection
Update a collection

```javascript
// Promise
const promise = catalog.updateCollection(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.updateCollection(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Update a collection by it's id. On successful request, returns the updated collection

*Success Response:*



The Collection object. See example below or refer `UpdateCollectionSchema` for details.


Schema: `UpdateCollection`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteCollection
Delete a Collection

```javascript
// Promise
const promise = catalog.deleteCollection(companyId,applicationId,id);

// Async/Await
const data = await catalog.deleteCollection(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully

*Success Response:*



Status object. Tells whether the operation was successful. See example below or refer `DeleteResponse`


Schema: `DeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCollectionItems
Get the items for a collection

```javascript
// Promise
const promise = catalog.getCollectionItems(companyId,applicationId,id,sortOn,pageId,pageSize);

// Async/Await
const data = await catalog.getCollectionItems(companyId,applicationId,id,sortOn,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 
| sortOn | string | Each response will contain sort_on param, which should be sent back to make pagination work. | 
| pageId | string | Each response will contain next_id param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

Get items from a collection specified by its `id`.

*Success Response:*



The attached items of an collection. See example below or refer `GetCollectionItemsResponseSchema` for details


Schema: `GetCollectionItemsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### addCollectionItems
Add items to a collection

```javascript
// Promise
const promise = catalog.addCollectionItems(companyId,applicationId,id,body);

// Async/Await
const data = await catalog.addCollectionItems(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| id | string | A `id` is a unique identifier of a collection. | 

Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.

*Success Response:*



Status object. Tells whether the operation was successful.


Schema: `UpdatedResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCatalogInsights
Analytics data of catalog and inventory.

```javascript
// Promise
const promise = catalog.getCatalogInsights(companyId,applicationId,brand);

// Async/Await
const data = await catalog.getCatalogInsights(companyId,applicationId,brand);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| brand | string | Brand slug | 

Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.

*Success Response:*



Response Data


Schema: `CatalogInsightResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getSellerInsights
Analytics data of catalog and inventory that are being cross-selled.

```javascript
// Promise
const promise = catalog.getSellerInsights(companyId,sellerAppId);

// Async/Await
const data = await catalog.getSellerInsights(companyId,sellerAppId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| sellerAppId | string | Id of the seller application which is serving the invetory/catalog of the company | 

Analytics data of catalog and inventory that are being cross-selled.

*Success Response:*



Response Data


Schema: `CrossSellingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createMarketplaceOptin
Create/Update opt-in infomation.

```javascript
// Promise
const promise = catalog.createMarketplaceOptin(companyId,marketplace,body);

// Async/Await
const data = await catalog.createMarketplaceOptin(companyId,marketplace,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| marketplace | string | The marketplace for which the detail needs to be retrieved. | 

Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`

*Success Response:*



See example below or refer `UpdatedResponse` for details.


Schema: `UpdatedResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getMarketplaceOptinDetail
Get opt-in infomation.

```javascript
// Promise
const promise = catalog.getMarketplaceOptinDetail(companyId);

// Async/Await
const data = await catalog.getMarketplaceOptinDetail(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer |  | 

Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`

*Success Response:*



See example below or refer `GetOptInPlatformSchema` for details.


Schema: `GetOptInPlatform`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyDetail
Get the Company details.

```javascript
// Promise
const promise = catalog.getCompanyDetail(companyId);

// Async/Await
const data = await catalog.getCompanyDetail(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 

Get the details of the company associated with the given company_id passed.

*Success Response:*



See example below or refer `OptinCompanyDetailSchema` for details


Schema: `OptinCompanyDetail`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyBrandDetail
Get the Company Brand details of Optin.

```javascript
// Promise
const promise = catalog.getCompanyBrandDetail(companyId,isActive,q,pageNo,pageSize,marketplace);

// Async/Await
const data = await catalog.getCompanyBrandDetail(companyId,isActive,q,pageNo,pageSize,marketplace);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| isActive | boolean | The is_active status for the optin id. | 
| q | boolean | The search value to filter the list. | 
| pageNo | integer | The number of page for the company id. | 
| pageSize | integer | Number of records that can be seen on the page for the company id. | 
| marketplace | string | The marketplace platform associated with the company id. | 

Get the details of the Brands associated with the given company_id passed.

*Success Response:*



See example below or refer `OptinCompanyBrandDetailsView` for details


Schema: `OptinCompanyBrandDetailsView`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyMetrics
Get the Company metrics

```javascript
// Promise
const promise = catalog.getCompanyMetrics(companyId);

// Async/Await
const data = await catalog.getCompanyMetrics(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 

Get the Company metrics associated with the company ID passed.

*Success Response:*



See example below or refer `OptinCompanyMetrics` for details


Schema: `OptinCompanyMetrics`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getStoreDetail
Get the Store details.

```javascript
// Promise
const promise = catalog.getStoreDetail(companyId,q,pageNo,pageSize);

// Async/Await
const data = await catalog.getStoreDetail(companyId,q,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | The company id for which the detail needs to be retrieved. | 
| q | string | The search related the store for the company id. | 
| pageNo | integer | The number of page for the company id. | 
| pageSize | integer | Number of records that can be seen on the page for the company id. | 

Get the details of the store associated with the company ID passed.

*Success Response:*



See example below or refer `OptinStoreDetailsSchema` for details


Schema: `OptinStoreDetails`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getGenderAttribute
Get gender attribute details

```javascript
// Promise
const promise = catalog.getGenderAttribute(companyId,attributeSlug);

// Async/Await
const data = await catalog.getGenderAttribute(companyId,attributeSlug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company for which you want to view the genders | 
| attributeSlug | string | slug of the attribute for which you want to view the genders | 

This API allows to view the gender attribute details.

*Success Response:*



Size guide object. See example below or refer `GenderDetailSchema` for details


Schema: `GenderDetail`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### listProductTemplateCategories
List Department specifiec product categories

```javascript
// Promise
const promise = catalog.listProductTemplateCategories(companyId,departments,itemType);

// Async/Await
const data = await catalog.listProductTemplateCategories(companyId,departments,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| departments | string | A `department` is name of a departments whose category needs to be listed. Can specify multiple departments. | 
| itemType | string | An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc. | 

Allows you to list all product categories values for the departments specified

*Success Response:*



List of all categories attached to departments specified. See example below or refer `ProdcutTemplateCategoriesResponse` for details


Schema: `ProdcutTemplateCategoriesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listDepartmentsData
List all Departments

```javascript
// Promise
const promise = catalog.listDepartmentsData(companyId,pageNo,pageSize,name,search,isActive);

// Async/Await
const data = await catalog.listDepartmentsData(companyId,pageNo,pageSize,name,search,isActive);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 
| name | string | Can search departments by passing name. | 
| search | string | Can search departments by passing name of the department in search parameter. | 
| isActive | boolean | Can query for departments based on whether they are active or inactive. | 

Allows you to list all departments, also can search using name and filter active and incative departments, and item type

*Success Response:*



List of departments data. See example below or refer `DepartmentsResponse` for details


Schema: `DepartmentsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `DepartmentErrorResponse`









---


#### getDepartmentData
Get specific departments details by passing in unique id of the department

```javascript
// Promise
const promise = catalog.getDepartmentData(companyId,uid);

// Async/Await
const data = await catalog.getDepartmentData(companyId,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | A `uid` is a unique identifier of a department. | 

Allows you to get department data, by uid

*Success Response:*



Departments Data. See example below or refer `DepartmentsResponse` for details


Schema: `DepartmentsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `DepartmentErrorResponse`









---


#### listProductTemplate
List all Templates

```javascript
// Promise
const promise = catalog.listProductTemplate(companyId,departments);

// Async/Await
const data = await catalog.listProductTemplate(companyId,departments);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| departments | string | A `departments` is the name of a particular department. | 

Allows you to list all product templates, also can filter by department

*Success Response:*



List of product templates. See example below or refer `TemplatesResponse` for details


Schema: `TemplatesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### validateProductTemplate
Validate Product Template Schema

```javascript
// Promise
const promise = catalog.validateProductTemplate(companyId,slug);

// Async/Await
const data = await catalog.validateProductTemplate(companyId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| slug | string | A `slug` is a unique identifier for a particular template. | 

Allows you to list all product templates validation values for all the fields present in the database

*Success Response:*



List of fields and validation values fro each. See example below or refer `TemplatesValidationResponse` for details


Schema: `TemplatesValidationResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### downloadProductTemplateViews
Download Product Template View

```javascript
// Promise
const promise = catalog.downloadProductTemplateViews(companyId,slug);

// Async/Await
const data = await catalog.downloadProductTemplateViews(companyId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| slug | string | A `slug` is a unique identifier for a particular template. | 

Allows you to download product template data

*Success Response:*



CSV File of product template data. See example below or refer `TemplatesResponse` for details


Schema: `string`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### downloadProductTemplateView
Download Product Template View

```javascript
// Promise
const promise = catalog.downloadProductTemplateView(companyId,itemType);

// Async/Await
const data = await catalog.downloadProductTemplateView(companyId,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| itemType | string | An `item_type` defines the type of item. | 

Allows you to download product template data

*Success Response:*



CSV File of product template data.


Schema: `string`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### validateProductTemplateSchema
Validate Product Template Schema

```javascript
// Promise
const promise = catalog.validateProductTemplateSchema(companyId,itemType);

// Async/Await
const data = await catalog.validateProductTemplateSchema(companyId,itemType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| itemType | string | An `item_type` defines the type of item. The default value is standard. | 

Allows you to list all product templates validation values for all the fields present in the database

*Success Response:*



List of fields and validation values fro each. See example below or refer `InventoryValidationResponse` for details


Schema: `InventoryValidationResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listHSNCodes
List HSN Codes

```javascript
// Promise
const promise = catalog.listHSNCodes(companyId);

// Async/Await
const data = await catalog.listHSNCodes(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Allows you to list all hsn Codes

*Success Response:*



List of all HSN Codes. See example below or refer `HSNCodesResponse` for details


Schema: `HSNCodesResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listProductTemplateExportDetails
Allows you to list all product templates export list details

```javascript
// Promise
const promise = catalog.listProductTemplateExportDetails(companyId);

// Async/Await
const data = await catalog.listProductTemplateExportDetails(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

Can view details including trigger data, task id , etc.

*Success Response:*



List of Product Downloads Data. See example below or refer `ProductDownloadsResponse` for details


Schema: `ProductDownloadsResponse`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listTemplateBrandTypeValues
Allows you to list all values for Templates, Brands or Type

```javascript
// Promise
const promise = catalog.listTemplateBrandTypeValues(companyId,filter);

// Async/Await
const data = await catalog.listTemplateBrandTypeValues(companyId,filter);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| filter | string | A `filter` is the unique identifier of the type of value required. | 

The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same

*Success Response:*



See example below or refer `ProductConfigurationDownloadsSchema` for details


Schema: `ProductConfigurationDownloads`








Bad request. See the error object in the response body for specific reason


Schema: `PTErrorResponse`









---


#### listCategories
Get product categories list

```javascript
// Promise
const promise = catalog.listCategories(companyId,level,departments,q,pageNo,pageSize);

// Async/Await
const data = await catalog.listCategories(companyId,level,departments,q,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| level | string | Get category for multiple levels | 
| departments | string | Get category for multiple departments filtered | 
| q | string | Get multiple categories filtered by search string | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API gets meta associated to product categories.

*Success Response:*



Category Meta. See example below or refer `CategoryResponse` for details


Schema: `CategoryResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCategories
Create product categories

```javascript
// Promise
const promise = catalog.createCategories(companyId,body);

// Async/Await
const data = await catalog.createCategories(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API lets user create product categories

*Success Response:*



Category Meta. See example below or refer `CategoryCreateResponse` for details


Schema: `CategoryCreateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateCategory
Update product categories

```javascript
// Promise
const promise = catalog.updateCategory(companyId,uid,body);

// Async/Await
const data = await catalog.updateCategory(companyId,uid,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | Category unique id | 

Update a product category using this apu

*Success Response:*



Category Meta. See example below or refer `CategoryUpdateResponse` for details


Schema: `CategoryUpdateResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCategoryData
Get product category by uid

```javascript
// Promise
const promise = catalog.getCategoryData(companyId,uid);

// Async/Await
const data = await catalog.getCategoryData(companyId,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| uid | string | Category unique id | 

This API gets meta associated to product categories.

*Success Response:*



Get Data for one category. See example below or refer `CategoryResponse` for details


Schema: `SingleCategoryResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProducts
Get product list

```javascript
// Promise
const promise = catalog.getProducts(companyId,brandIds,categoryIds,search,pageNo,pageSize);

// Async/Await
const data = await catalog.getProducts(companyId,brandIds,categoryIds,search,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | number | Get list of products filtered by company Id | 
| brandIds | number | Get multiple products filtered by brand Ids | 
| categoryIds | number | Get multiple products filtered by category Ids | 
| search | string | Get multiple products filtered by search string | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API gets meta associated to products.

*Success Response:*



Product Meta. See example below for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProduct
Create a product.

```javascript
// Promise
const promise = catalog.createProduct(companyId,body);

// Async/Await
const data = await catalog.createProduct(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 

This API allows to create product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### editProduct
Edit a product.

```javascript
// Promise
const promise = catalog.editProduct(companyId,itemId,body);

// Async/Await
const data = await catalog.editProduct(companyId,itemId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | integer | Id of the product to be updated. | 

This API allows to edit product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteProduct
Delete a product.

```javascript
// Promise
const promise = catalog.deleteProduct(companyId,itemId);

// Async/Await
const data = await catalog.deleteProduct(companyId,itemId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to product that is to be deleted. | 
| itemId | integer | Id of the product to be updated. | 

This API allows to delete product.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProduct
Get a single product.

```javascript
// Promise
const promise = catalog.getProduct(companyId,itemId,itemCode,brandUid,uid);

// Async/Await
const data = await catalog.getProduct(companyId,itemId,itemCode,brandUid,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemCode | string | Item code of the product. | 
| companyId | integer | Company Id of the product. | 
| itemId | integer | Item Id of the product. | 
| brandUid | integer | Brand Id of the product. | 
| uid | integer | Id of the product. | 

This API helps to get data associated to a particular product.

*Success Response:*



Product object. See example below or refer `product.utils.format_product_response` for details


Schema: `Product`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductValidation
Validate product/size data

```javascript
// Promise
const promise = catalog.getProductValidation(companyId);

// Async/Await
const data = await catalog.getProductValidation(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | number | Validates data against given company | 

This API validates product data.

*Success Response:*



Validate Meta. See example below for details


Schema: `ValidateProduct`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductSize
Get a single product size.

```javascript
// Promise
const promise = catalog.getProductSize(companyId,itemId,itemCode,brandUid,uid);

// Async/Await
const data = await catalog.getProductSize(companyId,itemId,itemCode,brandUid,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| itemCode | string | Item code of the product size. | 
| companyId | integer | Company Id of the product size. | 
| itemId | integer | Item Id of the product size. | 
| brandUid | integer | Brand Id of the product size. | 
| uid | integer | Id of the product size. | 

This API helps to get data associated to a particular product size.

*Success Response:*



Product object. See example below for details


Schema: `ProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductBulkUploadHistory
Get a list of all bulk product upload jobs.

```javascript
// Promise
const promise = catalog.getProductBulkUploadHistory(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getProductBulkUploadHistory(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of of which Product Bulk Upload History to be obtained. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk product upload jobs data.

*Success Response:*



List of bulk product upload jobs. See `BulkRequestGetSchema` for details


Schema: `ProductBulkRequestList`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateProductAssetsInBulk
Create a Bulk asset upload Job.

```javascript
// Promise
const promise = catalog.updateProductAssetsInBulk(companyId,body);

// Async/Await
const data = await catalog.updateProductAssetsInBulk(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a bulk asset upload job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductsInBulk
Create products in bulk associated with given batch Id.

```javascript
// Promise
const promise = catalog.createProductsInBulk(companyId,batchId,body);

// Async/Await
const data = await catalog.createProductsInBulk(companyId,batchId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 
| batchId | string | Batch Id in which assets to be uploaded. | 

This API helps to create products in bulk push to kafka for approval/creation.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteProductBulkJob
Delete Bulk product job.

```javascript
// Promise
const promise = catalog.deleteProductBulkJob(companyId,batchId);

// Async/Await
const data = await catalog.deleteProductBulkJob(companyId,batchId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to size that is to be deleted. | 
| batchId | integer | Batch Id of the bulk product job to be deleted. | 

This API allows to delete bulk product job associated with company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyTags
Get a list of all tags associated with company.

```javascript
// Promise
const promise = catalog.getCompanyTags(companyId);

// Async/Await
const data = await catalog.getCompanyTags(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of the product size. | 

This API helps to get tags data associated to a particular copmpany.

*Success Response:*



Tag List. See example below for details


Schema: `ProductTagsViewResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductAssetsInBulk
Get a list of all bulk asset jobs.

```javascript
// Promise
const promise = catalog.getProductAssetsInBulk(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getProductAssetsInBulk(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of the product size. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk asset jobs data associated to a particular company.

*Success Response:*



List of bulk asset jobs List. See `BulkUtil.modify_batch_response` for details


Schema: `BulkAssetResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createProductAssetsInBulk
Create a Bulk asset upload Job.

```javascript
// Promise
const promise = catalog.createProductAssetsInBulk(companyId,body);

// Async/Await
const data = await catalog.createProductAssetsInBulk(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a bulk asset upload job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteSize
Delete a Size associated with product.

```javascript
// Promise
const promise = catalog.deleteSize(companyId,itemId,size);

// Async/Await
const data = await catalog.deleteSize(companyId,itemId,size);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated to size that is to be deleted. | 
| itemId | integer | Item Id of the product associated with size to be deleted. | 
| size | integer | size to be deleted. | 

This API allows to delete size associated with product.

*Success Response:*



Returns a success response


Schema: `ProductSizeDeleteResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventory
Get Inventory for company

```javascript
// Promise
const promise = catalog.getInventory(companyId,itemId,size,pageNo,pageSize);

// Async/Await
const data = await catalog.getInventory(companyId,itemId,size,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | string | Item code of the product of which size is to be get. | 
| size | string | Size of which inventory is to get. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API allows get Inventory data for particular company grouped by size and store.

*Success Response:*



returns a list of all inventory grouped by size and store


Schema: `InventoryResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### addInventory
Add Inventory for particular size and store.

```javascript
// Promise
const promise = catalog.addInventory(companyId,itemId,size,body);

// Async/Await
const data = await catalog.addInventory(companyId,itemId,size,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| itemId | number | Item code of the product of which size is to be get. | 
| size | string | Size in which inventory is to be added. | 

This API allows add Inventory for particular size and store.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteInventory
Delete a Inventory.

```javascript
// Promise
const promise = catalog.deleteInventory(companyId,itemId,locationId);

// Async/Await
const data = await catalog.deleteInventory(companyId,itemId,locationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company associated with Inventory that is to be deleted. | 
| itemId | integer | Id of the product associated with Inventory to be deleted. | 
| locationId | number | Location ID of store of which inventory is to be deleted. | 

This API allows to delete inventory of a particular product for particular company.

*Success Response:*



Returns a success response


Schema: `InventoryDelete`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventoryBulkUploadHistory
Get a list of all bulk Inventory upload jobs.

```javascript
// Promise
const promise = catalog.getInventoryBulkUploadHistory(companyId,pageNo,pageSize);

// Async/Await
const data = await catalog.getInventoryBulkUploadHistory(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id of of which Inventory Bulk Upload History to be obtained. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

This API helps to get bulk Inventory upload jobs data.

*Success Response:*



List of bulk Inventory upload jobs. See `BulkInventoryGetSchema` for details


Schema: `BulkInventoryGet`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBulkInventoryJob
Create a Bulk Inventory upload Job.

```javascript
// Promise
const promise = catalog.createBulkInventoryJob(companyId,body);

// Async/Await
const data = await catalog.createBulkInventoryJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which Inventory to be uploaded. | 

This API helps to create a bulk Inventory upload job.

*Success Response:*



Returns a success response


Schema: `CommonResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBulkInventory
Create products in bulk associated with given batch Id.

```javascript
// Promise
const promise = catalog.createBulkInventory(companyId,body);

// Async/Await
const data = await catalog.createBulkInventory(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which Inventory is to be uploaded. | 

This API helps to create products in bulk push to kafka for approval/creation.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### deleteBulkInventoryJob
Delete Bulk Inventory job.

```javascript
// Promise
const promise = catalog.deleteBulkInventoryJob(companyId);

// Async/Await
const data = await catalog.deleteBulkInventoryJob(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the company of which bulk Inventory job is to be deleted. | 

This API allows to delete bulk Inventory job associated with company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getInventoryExport
Get Inventory export history.

```javascript
// Promise
const promise = catalog.getInventoryExport(companyId);

// Async/Await
const data = await catalog.getInventoryExport(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to get Inventory export history.

*Success Response:*



Returns a list of inventory export jobs


Schema: `InventoryExportJob`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createInventoryExportJob
Create a Inventory export Job.

```javascript
// Promise
const promise = catalog.createInventoryExportJob(companyId,body);

// Async/Await
const data = await catalog.createInventoryExportJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id in which assets to be uploaded. | 

This API helps to create a Inventory export job.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### exportInventoryConfig
Get List of different filters for inventory export

```javascript
// Promise
const promise = catalog.exportInventoryConfig(companyId,filterType);

// Async/Await
const data = await catalog.exportInventoryConfig(companyId,filterType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to product that is to be viewed. | 
| filterType | string | filter type from any one of ['brand', 'store', 'type'] | 

This API allows get List of different filters like brand, store, and type for inventory export.

*Success Response:*



returns filters configuration for inventory export


Schema: `InventoryConfig`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAllHsnCodes
Hsn Code List.

```javascript
// Promise
const promise = catalog.getAllHsnCodes(companyId,pageNo,pageSize,q);

// Async/Await
const data = await catalog.getAllHsnCodes(companyId,pageNo,pageSize,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| pageNo | integer | page no | 
| pageSize | integer | page size | 
| q | string | search using hsn code. | 

Hsn Code List.

*Success Response:*



List of all HSN Codes. See example below or refer `HsnCodesListingResponseSchema` for details


Schema: `HsnCodesListingResponse`








Bad request.


Schema: `ErrorResponse`









---


#### createHsnCode
Create Hsn Code.

```javascript
// Promise
const promise = catalog.createHsnCode(companyId,body);

// Async/Await
const data = await catalog.createHsnCode(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 

Create Hsn Code.

*Success Response:*



See example below for details


Schema: `HsnCode`








Bad request.


Schema: `ErrorResponse`









---


#### updateHsnCode
Update Hsn Code.

```javascript
// Promise
const promise = catalog.updateHsnCode(companyId,id,body);

// Async/Await
const data = await catalog.updateHsnCode(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| id | string | Unique id | 

Update Hsn Code.

*Success Response:*



See example below for details


Schema: `HsnCode`








Bad request.


Schema: `ErrorResponse`









---


#### getHsnCode
Fetch Hsn Code.

```javascript
// Promise
const promise = catalog.getHsnCode(companyId,id);

// Async/Await
const data = await catalog.getHsnCode(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| id | string | Unique id | 

Fetch Hsn Code.

*Success Response:*



See example below details


Schema: `HsnCode`








Bad request.


Schema: `ErrorResponse`









---


#### bulkHsnCode
Bulk Create or Update Hsn Code.

```javascript
// Promise
const promise = catalog.bulkHsnCode(companyId,body);

// Async/Await
const data = await catalog.bulkHsnCode(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 

Bulk Create or Update Hsn Code.

*Success Response:*



See example below for details


Schema: `BulkHsnResponse`








Bad request.


Schema: `ErrorResponse`









---


#### getApplicationBrands
List all the brands

```javascript
// Promise
const promise = catalog.getApplicationBrands(companyId,applicationId,department,pageNo,pageSize);

// Async/Await
const data = await catalog.getApplicationBrands(companyId,applicationId,department,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

*Success Response:*



List of Brands. See example below or refer `BrandListingResponse` for details


Schema: `BrandListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getDepartments
List all the departments

```javascript
// Promise
const promise = catalog.getDepartments(companyId,applicationId);

// Async/Await
const data = await catalog.getDepartments(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 

Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

*Success Response:*



List of Departments. See example below or refer `DepartmentResponse` for details.


Schema: `DepartmentResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCategories
List all the categories

```javascript
// Promise
const promise = catalog.getCategories(companyId,applicationId,department);

// Async/Await
const data = await catalog.getCategories(companyId,applicationId,department);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

*Success Response:*



List of Categories. See example below or refer `CategoryListingResponse` for details.


Schema: `CategoryListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getAppicationProducts
List the products

```javascript
// Promise
const promise = catalog.getAppicationProducts(companyId,applicationId,q,f,filters,sortOn,pageId,pageSize,pageNo,pageType);

// Async/Await
const data = await catalog.getAppicationProducts(companyId,applicationId,q,f,filters,sortOn,pageId,pageSize,pageNo,pageType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts** | 
| filters | boolean | Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters | 
| sortOn | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| pageId | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| pageSize | integer | Number of items to retrieve in each page. Default is 12. | 
| pageNo | integer | If page_type is number then pass it to fetch page items. Default is 1. | 
| pageType | string | For pagination type should be cursor or number. Default is cursor. | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`

*Success Response:*



List of Products. See example below or refer `ApplicationProductListingResponse` for details


Schema: `ApplicationProductListingResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getProductDetailBySlug
Get a product

```javascript
// Promise
const promise = catalog.getProductDetailBySlug(companyId,applicationId,slug);

// Async/Await
const data = await catalog.getProductDetailBySlug(companyId,applicationId,slug);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 
| applicationId | string | A `application_id` is a unique identifier for a particular sale channel. | 
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/** | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

*Success Response:*



The Product object. See example below or refer `ProductDetail` for details.


Schema: `ProductDetail`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---



---


## CompanyProfile


#### updateCompany
Edit company profile

```javascript
// Promise
const promise = companyprofile.updateCompany(companyId,body);

// Async/Await
const data = await companyprofile.updateCompany(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to edit the company profile of the seller account.

*Success Response:*



Returns a success message


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### cbsOnboardGet
Get company profile

```javascript
// Promise
const promise = companyprofile.cbsOnboardGet(companyId);

// Async/Await
const data = await companyprofile.cbsOnboardGet(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to view the company profile of the seller account.

*Success Response:*



Company profile object. See example below or refer `GetCompanyProfileSerializerResponse` for details


Schema: `GetCompanyProfileSerializerResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getCompanyMetrics
Get company metrics

```javascript
// Promise
const promise = companyprofile.getCompanyMetrics(companyId);

// Async/Await
const data = await companyprofile.getCompanyMetrics(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | A `company_id` is a unique identifier for a particular seller account. | 

This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.

*Success Response:*



Metrics response object. See example below or refer `MetricsSerializer` for details


Schema: `MetricsSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### editBrand
Edit a brand.

```javascript
// Promise
const promise = companyprofile.editBrand(companyId,brandId,body);

// Async/Await
const data = await companyprofile.editBrand(companyId,brandId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to brand that is to be viewed. | 
| brandId | string | Id of the brand to be viewed. | 

This API allows to edit meta of a brand.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrand
Get a single brand.

```javascript
// Promise
const promise = companyprofile.getBrand(companyId,brandId);

// Async/Await
const data = await companyprofile.getBrand(companyId,brandId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company associated to brand that is to be viewed. | 
| brandId | string | Id of the brand to be viewed. | 

This API helps to get data associated to a particular brand.

*Success Response:*



Brand object. See example below or refer `GetBrandResponseSerializer` for details


Schema: `GetBrandResponseSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createBrand
Create a Brand.

```javascript
// Promise
const promise = companyprofile.createBrand(companyId,body);

// Async/Await
const data = await companyprofile.createBrand(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 

This API allows to create a brand associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createCompanyBrandMapping
Create a company brand mapping.

```javascript
// Promise
const promise = companyprofile.createCompanyBrandMapping(companyId,body);

// Async/Await
const data = await companyprofile.createCompanyBrandMapping(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the brand is to be mapped. | 

This API allows to create a company brand mapping, for a already existing brand in the system.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getBrands
Get brands associated to a company

```javascript
// Promise
const promise = companyprofile.getBrands(companyId,pageNo,pageSize);

// Async/Await
const data = await companyprofile.getBrands(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API helps to get view brands associated to a particular company.

*Success Response:*



Brand object. See example below or refer `CompanyBrandListSerializer` for details


Schema: `CompanyBrandListSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createLocation
Create a location asscoiated to a company.

```javascript
// Promise
const promise = companyprofile.createLocation(companyId,body);

// Async/Await
const data = await companyprofile.createLocation(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location is to be created. | 

This API allows to create a location associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getLocations
Get list of locations

```javascript
// Promise
const promise = companyprofile.getLocations(companyId,storeType,q,stage,pageNo,pageSize);

// Async/Await
const data = await companyprofile.getLocations(companyId,storeType,q,stage,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company whose locations are to fetched | 
| storeType | string | Helps to sort the location list on the basis of location type. | 
| q | string | Query that is to be searched. | 
| stage | string | to filter companies on basis of verified or unverified companies. | 
| pageNo | integer | The page number to navigate through the given set of results | 
| pageSize | integer | Number of items to retrieve in each page. Default is 10. | 

This API allows to view all the locations asscoiated to a company.

*Success Response:*



Company profile object. See example below or refer `LocationListSerializer` for details


Schema: `LocationListSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### updateLocation
Edit a location asscoiated to a company.

```javascript
// Promise
const promise = companyprofile.updateLocation(companyId,locationId,body);

// Async/Await
const data = await companyprofile.updateLocation(companyId,locationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location is to be created. | 
| locationId | string | Id of the location which you want to edit. | 

This API allows to edit a location associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### getLocationDetail
Get details of a specific location.

```javascript
// Promise
const promise = companyprofile.getLocationDetail(companyId,locationId);

// Async/Await
const data = await companyprofile.getLocationDetail(companyId,locationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location lies. | 
| locationId | string | Id of the location which you want to view. | 

This API helps to get data associated to a specific location.

*Success Response:*



Brand object. See example below or refer `GetLocationSerializer` for details


Schema: `GetLocationSerializer`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---


#### createLocationBulk
Create a location asscoiated to a company in bulk.

```javascript
// Promise
const promise = companyprofile.createLocationBulk(companyId,body);

// Async/Await
const data = await companyprofile.createLocationBulk(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Id of the company inside which the location is to be created. | 

This API allows to create a location associated to a company.

*Success Response:*



Returns a success response


Schema: `SuccessResponse`








Bad request. See the error object in the response body for specific reason


Schema: `ErrorResponse`









---



---


## FileStorage


#### startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.

```javascript
// Promise
const promise = filestorage.startUpload(namespace,companyId,body);

// Async/Await
const data = await filestorage.startUpload(namespace,companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Success Response:*



Success


Schema: `StartResponse`








Failed


Schema: `FailedResponse`









---


#### completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.

```javascript
// Promise
const promise = filestorage.completeUpload(namespace,companyId,body);

// Async/Await
const data = await filestorage.completeUpload(namespace,companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.


*Success Response:*



Success


Schema: `CompleteResponse`








Failed


Schema: `FailedResponse`









---


#### appStartUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.

```javascript
// Promise
const promise = filestorage.appStartUpload(namespace,companyId,applicationId,body);

// Async/Await
const data = await filestorage.appStartUpload(namespace,companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 
| applicationId | string | application id | 

Uploads an arbitrarily sized buffer or blob.

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


*Success Response:*



Success


Schema: `StartResponse`








Failed


Schema: `FailedResponse`









---


#### appCompleteUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.

```javascript
// Promise
const promise = filestorage.appCompleteUpload(namespace,companyId,applicationId,body);

// Async/Await
const data = await filestorage.appCompleteUpload(namespace,companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 
| applicationId | string | application id | 

Uploads an arbitrarily sized buffer or blob.

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


*Success Response:*



Success


Schema: `CompleteResponse`








Failed


Schema: `FailedResponse`









---


#### getSignUrls
Explain here

```javascript
// Promise
const promise = filestorage.getSignUrls(companyId,body);

// Async/Await
const data = await filestorage.getSignUrls(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 

Describe here

*Success Response:*



Success


Schema: `SignUrlResponse`








Failed


Schema: `FailedResponse`









---


#### copyFiles
Copy Files

```javascript
// Promise
const promise = filestorage.copyFiles(companyId,body,sync);

// Async/Await
const data = await filestorage.copyFiles(companyId,body,sync);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sync | boolean | sync | 
| companyId | integer | company_id | 

Copy Files

*Success Response:*



Success


Schema: `BulkResponse`








Failed


Schema: `FailedResponse`









---


#### appCopyFiles
Copy Files

```javascript
// Promise
const promise = filestorage.appCopyFiles(companyId,applicationId,body,sync);

// Async/Await
const data = await filestorage.appCopyFiles(companyId,applicationId,body,sync);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sync | boolean | sync | 
| companyId | integer | company_id | 
| applicationId | integer | application_id | 

Copy Files

*Success Response:*



Success


Schema: `BulkResponse`








Failed


Schema: `FailedResponse`









---


#### browse
Browse Files

```javascript
// Promise
const promise = filestorage.browse(namespace,companyId,pageNo);

// Async/Await
const data = await filestorage.browse(namespace,companyId,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 
| pageNo | integer | page no | 

Browse Files

*Success Response:*



Success


Schema: `BrowseResponse`








Failed


Schema: `FailedResponse`









---


#### browse
Browse Files

```javascript
// Promise
const promise = filestorage.browse(namespace,companyId,applicationId,pageNo);

// Async/Await
const data = await filestorage.browse(namespace,companyId,applicationId,pageNo);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 
| companyId | integer | company_id | 
| applicationId | integer | application_id | 
| pageNo | integer | page no | 

Browse Files

*Success Response:*



Success


Schema: `BrowseResponse`








Failed


Schema: `FailedResponse`









---


#### proxy
Proxy

```javascript
// Promise
const promise = filestorage.proxy(companyId,url);

// Async/Await
const data = await filestorage.proxy(companyId,url);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| url | string | url | 

Proxy

*Success Response:*



Success


Schema: `string`









---



---


## Share


#### createShortLink
Create short link

```javascript
// Promise
const promise = share.createShortLink(companyId,applicationId,body);

// Async/Await
const data = await share.createShortLink(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Create short link

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---


#### getShortLinks
Get short links

```javascript
// Promise
const promise = share.getShortLinks(companyId,applicationId,pageNo,pageSize,createdBy,active,q);

// Async/Await
const data = await share.getShortLinks(companyId,applicationId,pageNo,pageSize,createdBy,active,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| pageNo | integer | Current page number | 
| pageSize | integer | Current page size | 
| createdBy | string | Short link creator | 
| active | string | Short link active status | 
| q | string | Search text for original and short url | 

Get short links

*Success Response:*



Success


Schema: `ShortLinkList`








Error


Schema: `ErrorRes`









---


#### getShortLinkByHash
Get short link by hash

```javascript
// Promise
const promise = share.getShortLinkByHash(companyId,applicationId,hash);

// Async/Await
const data = await share.getShortLinkByHash(companyId,applicationId,hash);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| hash | string | Hash of short url | 

Get short link by hash

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---


#### updateShortLinkById
Update short link by id

```javascript
// Promise
const promise = share.updateShortLinkById(companyId,applicationId,id,body);

// Async/Await
const data = await share.updateShortLinkById(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| id | string | Short link document identifier | 

Update short link by id

*Success Response:*



Success


Schema: `ShortLinkRes`








Error


Schema: `ErrorRes`









---



---


## Inventory


#### getJobsByCompany
Get Job Configs For A Company

```javascript
// Promise
const promise = inventory.getJobsByCompany(companyId,pageNo,pageSize);

// Async/Await
const data = await inventory.getJobsByCompany(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| pageNo | integer | Page Number | 
| pageSize | integer | Page Size | 

REST Endpoint that returns all job configs for a company

*Success Response:*



Successful operation


Schema: `ResponseEnvelopeListJobConfigRawDTO`








Bad Request


Schema: `ResponseEnvelopeListJobConfigRawDTO`








Internal Server Error


Schema: `ResponseEnvelopeListJobConfigRawDTO`









---


#### updateJob
Updates An Existing Job Config

```javascript
// Promise
const promise = inventory.updateJob(companyId,body);

// Async/Await
const data = await inventory.updateJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

REST Endpoint that updates a job config

*Success Response:*



Job Config Updated Successfully


Schema: `ResponseEnvelopeString`








Bad Request


Schema: `ResponseEnvelopeString`








Unauthorized


Schema: `ResponseEnvelopeString`








Internal Server Error


Schema: `ResponseEnvelopeString`









---


#### createJob
Creates A New Job Config

```javascript
// Promise
const promise = inventory.createJob(companyId,body);

// Async/Await
const data = await inventory.createJob(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

REST Endpoint that creates a new job config

*Success Response:*



Job Config Created Successfully


Schema: `ResponseEnvelopeString`








Bad Request


Schema: `ResponseEnvelopeString`








Unauthorized


Schema: `ResponseEnvelopeString`








Job Config Already Exists


Schema: `ResponseEnvelopeString`








Internal Server Error


Schema: `ResponseEnvelopeString`









---


#### getJobByCompanyAndIntegration
Get Job Configs By Company And Integration

```javascript
// Promise
const promise = inventory.getJobByCompanyAndIntegration(companyId,integrationId,pageNo,pageSize);

// Async/Await
const data = await inventory.getJobByCompanyAndIntegration(companyId,integrationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| integrationId | string | Integration Id | 
| pageNo | integer | Page Number | 
| pageSize | integer | Page Size | 

REST Endpoint that returns all job configs by company And integration

*Success Response:*



Successful operation


Schema: `ResponseEnvelopeListJobConfigDTO`








Bad Request


Schema: `ResponseEnvelopeListJobConfigDTO`








Internal Server Error


Schema: `ResponseEnvelopeListJobConfigDTO`









---


#### getJobConfigDefaults
Get Job Configs Defaults

```javascript
// Promise
const promise = inventory.getJobConfigDefaults(companyId);

// Async/Await
const data = await inventory.getJobConfigDefaults(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 

REST Endpoint that returns default fields job configs by company And integration

*Success Response:*



Successful operation


Schema: `ResponseEnvelopeJobConfigDTO`








Bad Request


Schema: `ResponseEnvelopeJobConfigDTO`








Internal Server Error


Schema: `ResponseEnvelopeJobConfigDTO`









---


#### getJobByCode
Get Job Config By Code

```javascript
// Promise
const promise = inventory.getJobByCode(companyId,code);

// Async/Await
const data = await inventory.getJobByCode(companyId,code);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| code | string | Job Code | 

REST Endpoint that returns job config by code

*Success Response:*



Successful operation


Schema: `ResponseEnvelopeJobConfigDTO`








Bad Request


Schema: `ResponseEnvelopeJobConfigDTO`








Internal Server Error


Schema: `ResponseEnvelopeJobConfigDTO`









---


#### getJobCodesByCompanyAndIntegration
Get Job Codes By Company And Integration

```javascript
// Promise
const promise = inventory.getJobCodesByCompanyAndIntegration(companyId,integrationId,pageNo,pageSize);

// Async/Await
const data = await inventory.getJobCodesByCompanyAndIntegration(companyId,integrationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | Company Id | 
| integrationId | string | Integration Id | 
| pageNo | integer | Page Number | 
| pageSize | integer | Page Size | 

REST Endpoint that returns all job codes by company And integration

*Success Response:*



Successful operation


Schema: `ResponseEnvelopeListJobConfigListDTO`








Bad Request


Schema: `ResponseEnvelopeListJobConfigListDTO`








Internal Server Error


Schema: `ResponseEnvelopeListJobConfigListDTO`









---



---


## Configuration


#### getBuildConfig
Get latest build config

```javascript
// Promise
const promise = configuration.getBuildConfig(companyId,applicationId,platformType);

// Async/Await
const data = await configuration.getBuildConfig(companyId,applicationId,platformType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| platformType | string | Current platform name | 

Get latest build config

*Success Response:*



Success


Schema: `MobileAppConfiguration`









---


#### updateBuildConfig
Update build config for next build

```javascript
// Promise
const promise = configuration.updateBuildConfig(companyId,applicationId,platformType,body);

// Async/Await
const data = await configuration.updateBuildConfig(companyId,applicationId,platformType,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| platformType | string | Current platform name | 

Update build config for next build

*Success Response:*



Success


Schema: `MobileAppConfiguration`









---


#### getPreviousVersions
Get previous build versions

```javascript
// Promise
const promise = configuration.getPreviousVersions(companyId,applicationId,platformType);

// Async/Await
const data = await configuration.getPreviousVersions(companyId,applicationId,platformType);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| platformType | string | Current platform name | 

Get previous build versions

*Success Response:*



Success


Schema: `BuildVersionHistory`









---


#### getAppFeatures
Get features of application

```javascript
// Promise
const promise = configuration.getAppFeatures(companyId,applicationId);

// Async/Await
const data = await configuration.getAppFeatures(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get features of application

*Success Response:*



Success


Schema: `AppFeatureResponse`








Not found


Schema: `NotFound`









---


#### updateAppFeatures
Update features of application

```javascript
// Promise
const promise = configuration.updateAppFeatures(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateAppFeatures(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Update features of application

*Success Response:*



Success


Schema: `AppFeature`









---


#### getAppBasicDetails
Get basic application details

```javascript
// Promise
const promise = configuration.getAppBasicDetails(companyId,applicationId);

// Async/Await
const data = await configuration.getAppBasicDetails(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get basic application details like name

*Success Response:*



Success


Schema: `ApplicationDetail`









---


#### updateAppBasicDetails
Add or update application's basic details

```javascript
// Promise
const promise = configuration.updateAppBasicDetails(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateAppBasicDetails(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Add or update application's basic details

*Success Response:*



Success


Schema: `ApplicationDetail`









---


#### getAppContactInfo
Get application information

```javascript
// Promise
const promise = configuration.getAppContactInfo(companyId,applicationId);

// Async/Await
const data = await configuration.getAppContactInfo(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.

*Success Response:*



Success


Schema: `ApplicationInformation`









---


#### updateAppContactInfo
Get application information

```javascript
// Promise
const promise = configuration.updateAppContactInfo(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateAppContactInfo(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Save Application Current Information. This includes information about social links, address and contact information of an application.

*Success Response:*



Success


Schema: `ApplicationInformation`









---


#### getAppApiTokens
Get social tokens

```javascript
// Promise
const promise = configuration.getAppApiTokens(companyId,applicationId);

// Async/Await
const data = await configuration.getAppApiTokens(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get social tokens.

*Success Response:*



Success


Schema: `TokenResponse`









---


#### updateAppApiTokens
Add social tokens

```javascript
// Promise
const promise = configuration.updateAppApiTokens(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateAppApiTokens(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Add social tokens.

*Success Response:*



Success


Schema: `TokenResponse`









---


#### getAppCompanies
Application inventory enabled companies

```javascript
// Promise
const promise = configuration.getAppCompanies(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await configuration.getAppCompanies(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Application inventory enabled companies.

*Success Response:*



Success


Schema: `CompaniesResponse`









---


#### getAppStores
Application inventory enabled stores

```javascript
// Promise
const promise = configuration.getAppStores(companyId,applicationId,pageNo,pageSize);

// Async/Await
const data = await configuration.getAppStores(companyId,applicationId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Application inventory enabled stores.

*Success Response:*



Success


Schema: `StoresResponse`









---


#### getInventoryConfig
Get application configuration

```javascript
// Promise
const promise = configuration.getInventoryConfig(companyId,applicationId);

// Async/Await
const data = await configuration.getInventoryConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get application configuration for various features and data

*Success Response:*



Success


Schema: `ApplicationInventory`









---


#### updateInventoryConfig
Update application configuration

```javascript
// Promise
const promise = configuration.updateInventoryConfig(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateInventoryConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Update application configuration for various features and data

*Success Response:*



Success


Schema: `ApplicationInventory`









---


#### partiallyUpdateInventoryConfig
Partially update application configuration

```javascript
// Promise
const promise = configuration.partiallyUpdateInventoryConfig(companyId,applicationId,body);

// Async/Await
const data = await configuration.partiallyUpdateInventoryConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Partially update application configuration for various features and data

*Success Response:*



Success


Schema: `ApplicationInventory`









---


#### getAppCurrencyConfig
Get application enabled currency list

```javascript
// Promise
const promise = configuration.getAppCurrencyConfig(companyId,applicationId);

// Async/Await
const data = await configuration.getAppCurrencyConfig(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get application enabled currency list

*Success Response:*



Success


Schema: `AppSupportedCurrency`









---


#### updateAppCurrencyConfig
Add initial application supported currency

```javascript
// Promise
const promise = configuration.updateAppCurrencyConfig(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateAppCurrencyConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Add initial application supported currency for various features and data. Default INR will be enabled.

*Success Response:*



Success


Schema: `AppSupportedCurrency`









---


#### getOrderingStoresByFilter
Get ordering store by filter

```javascript
// Promise
const promise = configuration.getOrderingStoresByFilter(companyId,applicationId,body,pageNo,pageSize);

// Async/Await
const data = await configuration.getOrderingStoresByFilter(companyId,applicationId,body,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get ordering store by filter

*Success Response:*



Success


Schema: `OrderingStores`









---


#### updateOrderingStoreConfig
Add/Update ordering store config

```javascript
// Promise
const promise = configuration.updateOrderingStoreConfig(companyId,applicationId,body);

// Async/Await
const data = await configuration.updateOrderingStoreConfig(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Add/Update ordering store config.

*Success Response:*



Success


Schema: `DeploymentMeta`








Invalid/Missing params


Schema: `InvalidPayloadRequest`









---


#### getDomains
Get attached domain list

```javascript
// Promise
const promise = configuration.getDomains(companyId,applicationId);

// Async/Await
const data = await configuration.getDomains(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get attached domain list.

*Success Response:*



Success


Schema: `DomainsResponse`









---


#### addDomain
Add new domain to application

```javascript
// Promise
const promise = configuration.addDomain(companyId,applicationId,body);

// Async/Await
const data = await configuration.addDomain(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Add new domain to application.

*Success Response:*



Success


Schema: `Domain`








Invalid/Missing params


Schema: `InvalidPayloadRequest`


*Examples:*


Maximum domain limit reached
```json
{
  "value": {
    "message": "Maximum 4 domains can be added to application. Please remove existing one to add new"
  }
}
```

Failed to verify domain record
```json
{
  "value": {
    "message": "Failed to verify domain records"
  }
}
```

Domain already registered
```json
{
  "value": {
    "message": "Domain already linked to application"
  }
}
```









---


#### removeDomainById
Remove attached domain

```javascript
// Promise
const promise = configuration.removeDomainById(companyId,applicationId,id);

// Async/Await
const data = await configuration.removeDomainById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| id | string | Domain _id | 

Remove attached domain.

*Success Response:*



Success


Schema: `SuccessMessageResponse`








Invalid request or Missing params


Schema: `InvalidPayloadRequest`


*Examples:*


Primary or Shortlink or Default domain deletiion
```json
{
  "value": {
    "message": "Primary domain deletion not allowed"
  }
}
```








Invalid/Missing params


Schema: `NotFound`









---


#### changeDomainType
Change domain type

```javascript
// Promise
const promise = configuration.changeDomainType(companyId,applicationId,body);

// Async/Await
const data = await configuration.changeDomainType(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Change a domain to Primary or Shortlink domain

*Success Response:*



Success


Schema: `DomainsResponse`








Invalid/Missing params


Schema: `NotFound`









---


#### getDomainStatus
Get domain connected status.

```javascript
// Promise
const promise = configuration.getDomainStatus(companyId,applicationId,body);

// Async/Await
const data = await configuration.getDomainStatus(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.

*Success Response:*



Success


Schema: `DomainStatusResponse`









---


#### createApplication
Create application

```javascript
// Promise
const promise = configuration.createApplication(companyId,body);

// Async/Await
const data = await configuration.createApplication(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 

Create new application

*Success Response:*



Success


Schema: `CreateAppResponse`









---


#### getApplications
Get list of application under company

```javascript
// Promise
const promise = configuration.getApplications(companyId,pageNo,pageSize,q);

// Async/Await
const data = await configuration.getApplications(companyId,pageNo,pageSize,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| pageNo | integer |  | 
| pageSize | integer |  | 
| q | string | Url encoded object used as mongodb query | 

Get list of application under company

*Success Response:*



Success


Schema: `ApplicationsResponse`









---


#### getApplicationById
Get application data from id

```javascript
// Promise
const promise = configuration.getApplicationById(companyId,applicationId);

// Async/Await
const data = await configuration.getApplicationById(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 

Get application data from id

*Success Response:*



Success


Schema: `Application`









---


#### getCurrencies
Get all currencies

```javascript
// Promise
const promise = configuration.getCurrencies(companyId);

// Async/Await
const data = await configuration.getCurrencies(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 

Get all currencies

*Success Response:*



Currencies Success response


Schema: `CurrenciesResponse`









---


#### getDomainAvailibility
Check domain availibility before linking to application

```javascript
// Promise
const promise = configuration.getDomainAvailibility(companyId,body);

// Async/Await
const data = await configuration.getDomainAvailibility(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 

Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.

*Success Response:*



Success


Schema: `DomainSuggestionsResponse`


*Examples:*


Suggestions for fynd domains
```json
{
  "value": {
    "domains": [
      {
        "name": "test.hostx1.de",
        "is_available": false
      },
      {
        "name": "testhive.hostx1.de",
        "is_available": true
      }
    ]
  }
}
```

Suggestions for custom domains
```json
{
  "value": {
    "domains": [
      {
        "name": "test25.in",
        "unsupported": false,
        "is_available": false
      },
      {
        "name": "try25.in",
        "unsupported": false,
        "is_available": true,
        "price": 14.99,
        "currency": "USD"
      }
    ]
  }
}
```









---


#### getIntegrationById
Get integration data

```javascript
// Promise
const promise = configuration.getIntegrationById(companyId,id);

// Async/Await
const data = await configuration.getIntegrationById(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | integer | Integration id | 

Get integration data

*Success Response:*



Success


Schema: `Integration`









---


#### getAvailableOptIns
Get all available integration opt-ins

```javascript
// Promise
const promise = configuration.getAvailableOptIns(companyId,pageNo,pageSize);

// Async/Await
const data = await configuration.getAvailableOptIns(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get all available integration opt-ins

*Success Response:*



Success


Schema: `GetIntegrationsOptInsResponse`









---


#### getSelectedOptIns
Get company/store level integration opt-ins

```javascript
// Promise
const promise = configuration.getSelectedOptIns(companyId,level,uid,pageNo,pageSize);

// Async/Await
const data = await configuration.getSelectedOptIns(companyId,level,uid,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| level | string | Integration level | 
| uid | integer | Integration level uid | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get company/store level integration opt-ins

*Success Response:*



Success


Schema: `GetIntegrationsOptInsResponse`









---


#### getIntegrationLevelConfig
Get integration level config

```javascript
// Promise
const promise = configuration.getIntegrationLevelConfig(companyId,id,level,opted,checkPermission);

// Async/Await
const data = await configuration.getIntegrationLevelConfig(companyId,id,level,opted,checkPermission);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | string | Integration id | 
| level | string | Integration level | 
| opted | boolean | Filter on opted stores | 
| checkPermission | boolean | Filter on if permissions are present | 

Get integration level config

*Success Response:*



Success


Schema: `IntegrationConfigResponse`









---


#### getIntegrationByLevelId
Get level data for integration

```javascript
// Promise
const promise = configuration.getIntegrationByLevelId(companyId,id,level,uid);

// Async/Await
const data = await configuration.getIntegrationByLevelId(companyId,id,level,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | string | Integration id | 
| level | string | Integration level | 
| uid | integer | Integration level uid | 

Get level data for integration

*Success Response:*



Success


Schema: `IntegrationLevel`









---


#### getLevelActiveIntegrations
Check store has active integration

```javascript
// Promise
const promise = configuration.getLevelActiveIntegrations(companyId,id,level,uid);

// Async/Await
const data = await configuration.getLevelActiveIntegrations(companyId,id,level,uid);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | string | Integration id | 
| level | string | Integration level | 
| uid | integer | Integration level uid | 

API checks if a store is already opted in any other integrations

*Success Response:*



Success


Schema: `OptedStoreIntegration`









---


#### getBrandsByCompany
Get brands by company

```javascript
// Promise
const promise = configuration.getBrandsByCompany(companyId,q);

// Async/Await
const data = await configuration.getBrandsByCompany(companyId,q);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| q | string | Search text for brand name | 

Get brands by company

*Success Response:*



Success


Schema: `BrandsByCompanyResponse`









---


#### getCompanyByBrands
Get company by brand uids

```javascript
// Promise
const promise = configuration.getCompanyByBrands(companyId,body,pageNo,pageSize);

// Async/Await
const data = await configuration.getCompanyByBrands(companyId,body,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get company by brand uids

*Success Response:*



Success


Schema: `CompanyByBrandsResponse`









---


#### getStoreByBrands
Get stores by brand uids

```javascript
// Promise
const promise = configuration.getStoreByBrands(companyId,body,pageNo,pageSize);

// Async/Await
const data = await configuration.getStoreByBrands(companyId,body,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get stores by brand uids

*Success Response:*



Success


Schema: `StoreByBrandsResponse`









---


#### getOtherSellerApplications
Get other seller applications

```javascript
// Promise
const promise = configuration.getOtherSellerApplications(companyId,pageNo,pageSize);

// Async/Await
const data = await configuration.getOtherSellerApplications(companyId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| pageNo | integer | Current page no | 
| pageSize | integer | Current request items count | 

Get other seller applications who has opted current company as inventory

*Success Response:*



Success


Schema: `OtherSellerApplications`









---


#### getOtherSellerApplicationById
Get other seller applications

```javascript
// Promise
const promise = configuration.getOtherSellerApplicationById(companyId,id);

// Async/Await
const data = await configuration.getOtherSellerApplicationById(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | string | Application Id | 

Get other seller application

*Success Response:*



Success


Schema: `OptedApplicationResponse`








Not found


Schema: `NotFound`









---


#### optOutFromApplication
Opt out company or store from other seller application

```javascript
// Promise
const promise = configuration.optOutFromApplication(companyId,id,body);

// Async/Await
const data = await configuration.optOutFromApplication(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| id | string | Application Id | 

Opt out company or store from other seller application

*Success Response:*



Success


Schema: `SuccessMessageResponse`








Invalid params or Not configured inventory


Schema: `InvalidPayloadRequest`


*Examples:*


Missing parameter
```json
{
  "value": {
    "message": "Invalid opt out request data. Either of `store` and `company` fields are missing"
  }
}
```

Company other than current company sent for opt out
```json
{
  "value": {
    "message": "Invalid company id"
  }
}
```

Store other than current company sent for opt out
```json
{
  "value": {
    "message": "Invalid store ids"
  }
}
```

Inventory not configured for sent application id
```json
{
  "value": {
    "message": "Inventory is not configured"
  }
}
```








Not found


Schema: `NotFound`









---



---


## Cart


#### getCoupons
Get with single coupon details or coupon list

```javascript
// Promise
const promise = cart.getCoupons(companyId,applicationId,pageNo,pageSize,isArchived,title,isPublic,isDisplay,typeSlug,code);

// Async/Await
const data = await cart.getCoupons(companyId,applicationId,pageNo,pageSize,isArchived,title,isPublic,isDisplay,typeSlug,code);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 
| pageNo | integer |  | 
| pageSize | integer |  | 
| isArchived | boolean |  | 
| title | string |  | 
| isPublic | boolean |  | 
| isDisplay | boolean |  | 
| typeSlug | string |  | 
| code | string |  | 

Get coupon list with pagination

*Success Response:*



Coupon List for sent page_size and page_no


Schema: `CouponsResponse`


*Examples:*


Coupon list for sent filter and page size
```json
{
  "value": {
    "items": [
      {
        "_id": "5e1d9bec6d6b7e000146c840",
        "display_meta": {
          "title": "percent50 title"
        },
        "_schedule": {
          "next_schedule": [
            {
              "start": "2020-01-14T10:45:03.600000+00:00",
              "end": "2020-01-16T10:45:03+00:00"
            }
          ],
          "duration": null,
          "start": "2020-01-14T10:45:03.600000+00:00",
          "end": "2020-01-16T10:45:03+00:00",
          "cron": ""
        },
        "state": {
          "is_public": true,
          "is_display": true,
          "is_archived": false
        },
        "ownership": {
          "payable_category": "seller",
          "payable_by": ""
        },
        "code": "percent50",
        "rule_definition": {
          "type": "percentage",
          "scope": [
            "category_id"
          ],
          "applicable_on": "quantity"
        }
      }
    ],
    "page": {
      "has_next": true,
      "size": 10,
      "current": 1,
      "item_total": 30
    }
  }
}
```









---


#### createCoupon
Create new coupon

```javascript
// Promise
const promise = cart.createCoupon(companyId,applicationId,body);

// Async/Await
const data = await cart.createCoupon(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 

Create new coupon

*Success Response:*



Coupon Created successfully


Schema: `SuccessMessage`








Invalid coupon data or existing coupon code


Schema: `OperationErrorResponse`


*Examples:*


Coupon code exists
```json
{
  "value": {
    "success": false,
    "message": "Coupon already code exist"
  }
}
```









---


#### getCouponById
Get with single coupon details or coupon list

```javascript
// Promise
const promise = cart.getCouponById(companyId,applicationId,id);

// Async/Await
const data = await cart.getCouponById(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 
| id | string |  | 

Get single coupon details with `id` in path param

*Success Response:*



Coupon object for sent `id`


Schema: `CouponUpdate`








Coupon not found for passed `id`


Schema: `OperationErrorResponse`









---


#### updateCoupon
Update existing coupon configuration

```javascript
// Promise
const promise = cart.updateCoupon(companyId,applicationId,id,body);

// Async/Await
const data = await cart.updateCoupon(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 
| id | string |  | 

Update coupon with id sent in `id`

*Success Response:*



Coupon updated successfully


Schema: `SuccessMessage`








Coupon not found for `id` from path params


Schema: `OperationErrorResponse`









---


#### updateCouponPartially
Update coupon archive state and schedule

```javascript
// Promise
const promise = cart.updateCouponPartially(companyId,applicationId,id,body);

// Async/Await
const data = await cart.updateCouponPartially(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 
| id | string |  | 

Update archive/unarchive and change schedule for coupon

*Success Response:*



Coupon updated successfully


Schema: `SuccessMessage`


*Examples:*


Archive or Unarchive coupon
```json
{
  "value": {
    "success": true,
    "message": "Coupon Updated"
  }
}
```

Coupon schedule updated successfully
```json
{
  "value": {
    "success": true,
    "message": "Coupon schedule updated"
  }
}
```








Coupon not found for `id` from path params


Schema: `OperationErrorResponse`









---


#### fetchCartItems
Fetch Cart Details

```javascript
// Promise
const promise = cart.fetchCartItems(companyId,applicationId,cartItems);

// Async/Await
const data = await cart.fetchCartItems(companyId,applicationId,cartItems);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 
| cartItems | array |  | 

Get all the details of cart for a list of provided `cart_items`

*Success Response:*



Cart details with breakup


Schema: `CartDetail`








Invalid Cart Items






---


#### fetchAndvalidateCartItems
Fetch Cart Details

```javascript
// Promise
const promise = cart.fetchAndvalidateCartItems(companyId,applicationId,body);

// Async/Await
const data = await cart.fetchAndvalidateCartItems(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 

Get all the details of cart for a list of provided `cart_items`

*Success Response:*



Cart details with breakup


Schema: `OpenapiCartDetailsResponse`








Invalid Cart Items


Schema: `Object`


*Examples:*


Item not found on system
```json
{
  "value": {
    "message": "Item id does not exists",
    "error": {
      "invalid_item_id": [
        "1234",
        "2345"
      ]
    }
  }
}
```









---


#### checkCartServiceability
Check Pincode Serviceability

```javascript
// Promise
const promise = cart.checkCartServiceability(companyId,applicationId,body);

// Async/Await
const data = await cart.checkCartServiceability(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 

Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`

*Success Response:*



Cart details with pincode validity information at item level


Schema: `CartDetailsResponseSerializer`


*Examples:*


Valid pincode
```json
{
  "value": {
    "items": [
      {
        "quantity": 1,
        "message": "",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {
          "type": "article",
          "uid": "25_44_A7050_NEMIEL@GREENBRITISH_S",
          "size": "S",
          "seller": {
            "uid": 25,
            "name": "CELIO FUTURE FASHION PRIVATE LIMITED"
          },
          "store": {
            "uid": 1486,
            "name": "Forum Mall"
          },
          "quantity": 1,
          "price": {
            "base": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 1299,
              "effective": 649.5,
              "currency_code": "INR"
            }
          }
        },
        "key": "803140_S",
        "discount": "50% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 649.5,
            "selling": 649.5,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": false,
          "deliverable": true,
          "is_valid": true,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      },
      {
        "quantity": 1,
        "message": "Out of stock. Please remove item",
        "coupon_message": "",
        "product": {
          "type": "product",
          "uid": 803140,
          "name": "Green Solid T-Shirt",
          "slug": "celio-green-solid-t-shirt-803140-dd9e2c",
          "brand": {
            "uid": 44,
            "name": "celio"
          },
          "categories": [
            {
              "uid": 192,
              "name": "T-Shirts"
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/44_NEMIEL@GREENBRITISH/1_1548161273344.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/celio-green-solid-t-shirt-803140-dd9e2c/",
            "query": {
              "product_slug": [
                "celio-green-solid-t-shirt-803140-dd9e2c"
              ]
            }
          }
        },
        "article": {},
        "key": "803140_S",
        "discount": "",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 1299,
            "effective": 1299,
            "selling": 1299,
            "currency_code": "INR"
          }
        },
        "availability": {
          "sizes": [
            "L",
            "XXL",
            "XL",
            "M",
            "S"
          ],
          "other_store_quantity": 0,
          "out_of_stock": true,
          "deliverable": false,
          "is_valid": false,
          "delivery_promise": {
            "timestamp": {
              "min": 1605306343,
              "max": 1605468343
            },
            "formatted": {
              "min": "Sat, 14 Nov",
              "max": "Mon, 16 Nov"
            }
          },
          "available_sizes": [
            {
              "is_available": true,
              "display": "L",
              "value": "L"
            },
            {
              "is_available": true,
              "display": "XXL",
              "value": "XXL"
            },
            {
              "is_available": true,
              "display": "XL",
              "value": "XL"
            },
            {
              "is_available": true,
              "display": "M",
              "value": "M"
            },
            {
              "is_available": true,
              "display": "S",
              "value": "S"
            },
            {
              "is_available": false,
              "display": "30",
              "value": "30"
            }
          ]
        },
        "bulk_offer": {}
      }
    ],
    "delivery_promise": {
      "timestamp": {
        "min": 1605306343,
        "max": 1605468343
      },
      "formatted": {
        "min": "Sat, 14 Nov",
        "max": "Mon, 16 Nov"
      }
    },
    "is_valid": true
  }
}
```

Invalid pincode
```json
{
  "value": {
    "message": "All of the items in your cart are not deliverable to 800108",
    "is_valid": false,
    "items": [
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "delivery_promise": null,
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      },
      {
        "discount": "15% OFF",
        "price": {
          "base": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          },
          "converted": {
            "add_on": 0,
            "marked": 2195,
            "effective": 1866,
            "selling": 1866,
            "currency_code": "INR"
          }
        },
        "product": {
          "type": "product",
          "uid": 876245,
          "name": "Brown Sandals",
          "slug": "red-chief-brown-sandals-876245-c92507",
          "brand": {
            "uid": 433,
            "name": ""
          },
          "categories": [
            {
              "uid": 176,
              "name": ""
            }
          ],
          "images": [
            {
              "aspect_ratio": "16:25",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg",
              "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/433_RC330004/1_1564147181287.jpg"
            }
          ],
          "action": {
            "type": "product",
            "url": "https://api.addsale.com/platform/content/v1/products/red-chief-brown-sandals-876245-c92507/",
            "query": {
              "product_slug": [
                "red-chief-brown-sandals-876245-c92507"
              ]
            }
          },
          "item_code": "RC330004"
        },
        "bulk_offer": {},
        "key": "876245_6",
        "message": "We are not delivering to 800108",
        "coupon_message": "",
        "availability": {
          "sizes": [
            "7",
            "6",
            "10",
            "8"
          ],
          "other_store_quantity": 21,
          "out_of_stock": false,
          "deliverable": false,
          "is_valid": true,
          "available_sizes": [
            {
              "is_available": false,
              "display": "9",
              "value": "9"
            },
            {
              "is_available": true,
              "display": "10",
              "value": "10"
            },
            {
              "is_available": true,
              "display": "6",
              "value": "6"
            },
            {
              "is_available": true,
              "display": "7",
              "value": "7"
            },
            {
              "is_available": true,
              "display": "8",
              "value": "8"
            }
          ]
        },
        "quantity": 1,
        "article": {
          "type": "article",
          "uid": "304_433_LGPL30402_RC330004_6",
          "size": "6",
          "seller": {
            "uid": 304,
            "name": "LEAYAN GLOBAL PVT. LTD."
          },
          "store": {
            "uid": 9767,
            "name": "Udyog Kunj, Kanpur"
          },
          "quantity": 3,
          "price": {
            "base": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            },
            "converted": {
              "marked": 2195,
              "effective": 1866,
              "currency_code": "INR"
            }
          }
        }
      }
    ]
  }
}
```









---


#### checkoutCartItems
Create Fynd order with cart details

```javascript
// Promise
const promise = cart.checkoutCartItems(companyId,applicationId,body);

// Async/Await
const data = await cart.checkoutCartItems(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 

Generate Fynd order for cart details send with provided `cart_items`

*Success Response:*



Checkout cart and create Fynd order id


Schema: `Object`








Invalid Cart Items or Invalid request hash or Invalid Calculation. Invalid cart calculation will trigger if difference of values is greater than ₹1.


Schema: `Object`


*Examples:*


Invalid request hash
```json
{
  "value": {
    "success": false,
    "message": "Invalid hash, make sure your are using correct secret key"
  }
}
```

Invalid calculation
```json
{
  "value": {
    "success": false,
    "message": "Values at cart and items are mismatched",
    "errors": {
      "cashback_applied": "cashback_applied mismatched by 10.0 in cart",
      "cod_charges": "cod_charges mismatched by 20.0 in cart",
      "coupon_effective_discount": "coupon_effective_discount mismatched by 20.0 in cart",
      "delivery_charges": "delivery_charges mismatched by 20.0 in cart",
      "amount_paid": "amount_paid mismatched by 12582.0 in cart"
    }
  }
}
```









---


#### updateCheckoutPaymentStatus
Confirm payment on Fynd order id

```javascript
// Promise
const promise = cart.updateCheckoutPaymentStatus(companyId,applicationId,body);

// Async/Await
const data = await cart.updateCheckoutPaymentStatus(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current Application _id | 

Confirm paymet successful status for sent `order_id`

*Success Response:*



Confirm payment successful status on Fynd order id


Schema: `Object`


*Examples:*


Successful order creation
```json
{
  "value": {
    "success": true,
    "message": "Order Confirmed",
    "order_id": "FY5E18CE260BF00FB214"
  }
}
```

Order creation failed due to error
```json
{
  "value": {
    "success": false,
    "message": "Some error occured while confirming order payment"
  }
}
```








Invalid request hash


Schema: `Object`


*Examples:*


Invalid Hash
```json
{
  "value": {
    "success": false,
    "message": "Invalid hash, make sure your are using correct secret key"
  }
}
```









---



---


## Marketplaces


#### getAvailableChannels
Get available marketplace channels

```javascript
// Promise
const promise = marketplaces.getAvailableChannels(companyId);

// Async/Await
const data = await marketplaces.getAvailableChannels(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Get available marketplace channels

*Success Response:*



Success


Schema: `Object`








Error


Schema: `ErrorRes`









---


#### getChannels
Get all registered marketplace channels for a seller

```javascript
// Promise
const promise = marketplaces.getChannels(companyId);

// Async/Await
const data = await marketplaces.getChannels(companyId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Get all registered marketplace channels for a seller

*Success Response:*



Success


Schema: `Object`








Error


Schema: `ErrorRes`









---


#### getChannel
Get registered marketplace channel credential configuration for a seller

```javascript
// Promise
const promise = marketplaces.getChannel(companyId,channel);

// Async/Await
const data = await marketplaces.getChannel(companyId,channel);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 

Get registered marketplace channel credentials configuration for a seller

*Success Response:*



Success


Schema: `Object`








Error


Schema: `ErrorRes`









---


#### registerMyntraChannel
Create Myntra marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.registerMyntraChannel(companyId,body);

// Async/Await
const data = await marketplaces.registerMyntraChannel(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Create Myntra marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateMyntraChannelCredentials
Update Myntra marketplace channel credentials for a seller

```javascript
// Promise
const promise = marketplaces.updateMyntraChannelCredentials(companyId,body);

// Async/Await
const data = await marketplaces.updateMyntraChannelCredentials(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Update Myntra marketplace channel credentials for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### registerAmazonChannel
Create Amazon marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.registerAmazonChannel(companyId,body);

// Async/Await
const data = await marketplaces.registerAmazonChannel(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Create Amazon marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateAmazonChannelCredentials
Update Amazon marketplace channel credentials for a seller

```javascript
// Promise
const promise = marketplaces.updateAmazonChannelCredentials(companyId,body);

// Async/Await
const data = await marketplaces.updateAmazonChannelCredentials(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Update Amazon marketplace channel credentials for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### registerFlipkartChannel
Create Flipkart / Flipkart Assured marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.registerFlipkartChannel(companyId,flipkartChannel,body);

// Async/Await
const data = await marketplaces.registerFlipkartChannel(companyId,flipkartChannel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| flipkartChannel | string | Name of marketplace channel | 

Create Flipkart / Flipkart Assured marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateFlipkartChannelCredentials
Update Flipkart / Flipkart Assured marketplace channel credentials for a seller

```javascript
// Promise
const promise = marketplaces.updateFlipkartChannelCredentials(companyId,flipkartChannel,body);

// Async/Await
const data = await marketplaces.updateFlipkartChannelCredentials(companyId,flipkartChannel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| flipkartChannel | string | Name of marketplace channel | 

Update Flipkart / Flipkart Assured marketplace channel credentials for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### registerTatacliqChannel
Create Tatacliq / Tatacliq Luxury marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.registerTatacliqChannel(companyId,tatacliqChannel,body);

// Async/Await
const data = await marketplaces.registerTatacliqChannel(companyId,tatacliqChannel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| tatacliqChannel | string | Name of marketplace channel | 

Create Tatacliq / Tatacliq Luxury marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateTatacliqChannelCredentials
Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller

```javascript
// Promise
const promise = marketplaces.updateTatacliqChannelCredentials(companyId,tatacliqChannel,body);

// Async/Await
const data = await marketplaces.updateTatacliqChannelCredentials(companyId,tatacliqChannel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| tatacliqChannel | string | Name of marketplace channel | 

Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### registerAjioChannel
Create Ajio marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.registerAjioChannel(companyId,body);

// Async/Await
const data = await marketplaces.registerAjioChannel(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Create Ajio marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateAjioChannelCredentials
Update Ajio marketplace channel credentials for a seller

```javascript
// Promise
const promise = marketplaces.updateAjioChannelCredentials(companyId,body);

// Async/Await
const data = await marketplaces.updateAjioChannelCredentials(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 

Update Ajio marketplace channel credentials for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### updateChannelInventorySyncConfig
Update inventory sync configuration of marketplace channel for a seller

```javascript
// Promise
const promise = marketplaces.updateChannelInventorySyncConfig(companyId,channel,body,validateCred);

// Async/Await
const data = await marketplaces.updateChannelInventorySyncConfig(companyId,channel,body,validateCred);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 
| validateCred | string | Validate marketplace cred while saving inventory config | 

Update inventory sync configuration of marketplace channel for a seller

*Success Response:*



Success


Schema: `MkpResp`








Error


Schema: `ErrorRes`









---


#### getChannelLocationConfig
Get marketplace channel location config for a seller

```javascript
// Promise
const promise = marketplaces.getChannelLocationConfig(companyId,channel);

// Async/Await
const data = await marketplaces.getChannelLocationConfig(companyId,channel);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 

Get marketplace channel location config for a seller

*Success Response:*



Success


Schema: `StoreMapping`








Error


Schema: `ErrorRes`









---


#### updateChannelLocationConfig
update marketplace channel location config for a seller

```javascript
// Promise
const promise = marketplaces.updateChannelLocationConfig(companyId,channel,body);

// Async/Await
const data = await marketplaces.updateChannelLocationConfig(companyId,channel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 

update marketplace channel location config for a seller

*Success Response:*



Success


Schema: `StoreMapping`








Error


Schema: `ErrorRes`









---


#### getChannelStatus
Get marketplace channel active status for a seller

```javascript
// Promise
const promise = marketplaces.getChannelStatus(companyId,channel);

// Async/Await
const data = await marketplaces.getChannelStatus(companyId,channel);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 

Get marketplace channel active status for a seller

*Success Response:*



Success


Schema: `StatusPayload`








Error


Schema: `ErrorRes`









---


#### updateChannelStatus
Update marketplace channel active status for a seller

```javascript
// Promise
const promise = marketplaces.updateChannelStatus(companyId,channel,body);

// Async/Await
const data = await marketplaces.updateChannelStatus(companyId,channel,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 

Update marketplace channel active status for a seller

*Success Response:*



Success


Schema: `StatusResp`








Error


Schema: `ErrorRes`









---


#### triggerChannelInventoryUpdates
Trigger marketplace channel inventory updates for a seller

```javascript
// Promise
const promise = marketplaces.triggerChannelInventoryUpdates(companyId,channel,updateType,body);

// Async/Await
const data = await marketplaces.triggerChannelInventoryUpdates(companyId,channel,updateType,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| channel | string | Name of marketplace channel | 
| updateType | string | Inventory update type | 

Trigger marketplace channel inventory updates for a seller

*Success Response:*



Success


Schema: `SyncResp`








Error


Schema: `ErrorRes`









---



---


## Rewards


#### getGiveaways
List of giveaways of the current application.

```javascript
// Promise
const promise = rewards.getGiveaways(companyId,applicationId,pageId,pageSize);

// Async/Await
const data = await rewards.getGiveaways(companyId,applicationId,pageId,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| pageId | string | pagination page id | 
| pageSize | integer | pagination page size | 

List of giveaways of the current application.

*Success Response:*



ok


Schema: `GiveawayResponse`








Bad request


Schema: `E`









---


#### createGiveaway
Adds a new giveaway.

```javascript
// Promise
const promise = rewards.createGiveaway(companyId,applicationId,body);

// Async/Await
const data = await rewards.createGiveaway(companyId,applicationId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 

Adds a new giveaway.

*Success Response:*



ok


Schema: `Giveaway`








Bad request


Schema: `E`









---


#### getGiveawayByID
Get giveaway by ID.

```javascript
// Promise
const promise = rewards.getGiveawayByID(companyId,applicationId,id);

// Async/Await
const data = await rewards.getGiveawayByID(companyId,applicationId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | Giveaway ID | 

Get giveaway by ID.

*Success Response:*



ok


Schema: `Giveaway`








Bad request


Schema: `E`









---


#### updateGiveaway
Updates the giveaway by it's ID.

```javascript
// Promise
const promise = rewards.updateGiveaway(companyId,applicationId,id,body);

// Async/Await
const data = await rewards.updateGiveaway(companyId,applicationId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| id | string | Giveaway ID | 

Updates the giveaway by it's ID.

*Success Response:*



ok


Schema: `Giveaway`








Bad request


Schema: `E`









---


#### getOffers
List of offer of the current application.

```javascript
// Promise
const promise = rewards.getOffers(companyId,applicationId);

// Async/Await
const data = await rewards.getOffers(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 

List of offer of the current application.

*Success Response:*



ok


Schema: `Array<Offer>`








Bad request


Schema: `E`









---


#### getOfferByName
Get offer by name.

```javascript
// Promise
const promise = rewards.getOfferByName(companyId,applicationId,cookie,name);

// Async/Await
const data = await rewards.getOfferByName(companyId,applicationId,cookie,name);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| cookie | string | User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation. | 
| name | string | Offer name | 

Get offer by name.

*Success Response:*



ok


Schema: `Offer`








Bad request


Schema: `E`









---


#### updateOfferByName
Updates the offer by name.

```javascript
// Promise
const promise = rewards.updateOfferByName(companyId,applicationId,name,body);

// Async/Await
const data = await rewards.updateOfferByName(companyId,applicationId,name,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| name | string | Offer name | 

Updates the offer by name.

*Success Response:*



ok


Schema: `Offer`








Bad request


Schema: `E`









---


#### getUserAvailablePoints
User's reward details.

```javascript
// Promise
const promise = rewards.getUserAvailablePoints(companyId,applicationId,userId);

// Async/Await
const data = await rewards.getUserAvailablePoints(companyId,applicationId,userId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| userId | string | user id | 

User's reward details.

*Success Response:*



ok


Schema: `UserRes`








Bad request


Schema: `E`









---


#### updateUserStatus
Update User status

```javascript
// Promise
const promise = rewards.updateUserStatus(companyId,applicationId,userId,body);

// Async/Await
const data = await rewards.updateUserStatus(companyId,applicationId,userId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| userId | string | user id | 

Update user status, active/archive

*Success Response:*



Success


Schema: `AppUser`








Bad Request


Schema: `E`









---


#### getUserPointsHistory
Get list of points transactions.

```javascript
// Promise
const promise = rewards.getUserPointsHistory(companyId,applicationId,userId,pageId,pageLimit,pageSize);

// Async/Await
const data = await rewards.getUserPointsHistory(companyId,applicationId,userId,pageId,pageLimit,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | company id | 
| applicationId | string | application id | 
| userId | string | user id | 
| pageId | string | PageID is the ID of the requested page. For first request it should be kept empty. | 
| pageLimit | integer | PageLimit is the number of requested items in response. | 
| pageSize | integer | PageSize is the number of requested items in response. | 

Get list of points transactions.
The list of points history is paginated.

*Success Response:*



ok


Schema: `HistoryRes`








Bad request


Schema: `E`









---



---


## Analytics


#### getStatiscticsGroups
Get statistics groups

```javascript
// Promise
const promise = analytics.getStatiscticsGroups(companyId,applicationId);

// Async/Await
const data = await analytics.getStatiscticsGroups(companyId,applicationId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 

Get statistics groups

*Success Response:*



Success


Schema: `StatsGroups`








Error


Schema: `ErrorRes`









---


#### getStatiscticsGroupComponents
Get statistics group components

```javascript
// Promise
const promise = analytics.getStatiscticsGroupComponents(companyId,applicationId,groupName);

// Async/Await
const data = await analytics.getStatiscticsGroupComponents(companyId,applicationId,groupName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| groupName | string | Group name | 

Get statistics group components

*Success Response:*



Success


Schema: `StatsGroupComponents`








Error


Schema: `ErrorRes`









---


#### getComponentStatsCSV
Get component statistics csv

```javascript
// Promise
const promise = analytics.getComponentStatsCSV(companyId,applicationId,componentName);

// Async/Await
const data = await analytics.getComponentStatsCSV(companyId,applicationId,componentName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| componentName | string | Component name | 

Get component statistics csv

*Success Response:*



Success


Schema: `string`








Error


Schema: `ErrorRes`









---


#### getComponentStatsPDF
Get component statistics pdf

```javascript
// Promise
const promise = analytics.getComponentStatsPDF(companyId,applicationId,componentName);

// Async/Await
const data = await analytics.getComponentStatsPDF(companyId,applicationId,componentName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| componentName | string | Component name | 

Get component statistics pdf

*Success Response:*



Success


Schema: `string`








Error


Schema: `ErrorRes`









---


#### getComponentStats
Get component statistics

```javascript
// Promise
const promise = analytics.getComponentStats(companyId,applicationId,componentName);

// Async/Await
const data = await analytics.getComponentStats(companyId,applicationId,componentName);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| componentName | string | Component name | 

Get component statistics

*Success Response:*



Success


Schema: `StatsRes`








Error


Schema: `ErrorRes`









---


#### getAbandonCartList
Get abandon carts list

```javascript
// Promise
const promise = analytics.getAbandonCartList(companyId,applicationId,fromDate,toDate,pageNo,pageSize);

// Async/Await
const data = await analytics.getAbandonCartList(companyId,applicationId,fromDate,toDate,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| fromDate | string | From date | 
| toDate | string | To date | 
| pageNo | integer | Current page number | 
| pageSize | integer | Current page size | 

Get abandon carts list

*Success Response:*



Success


Schema: `AbandonCartsList`








Error


Schema: `ErrorRes`









---


#### getAbandonCartsCSV
Get abandon carts csv

```javascript
// Promise
const promise = analytics.getAbandonCartsCSV(companyId,applicationId,fromDate,toDate);

// Async/Await
const data = await analytics.getAbandonCartsCSV(companyId,applicationId,fromDate,toDate);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| fromDate | string | From date | 
| toDate | string | To date | 

Get abandon carts csv

*Success Response:*



Success


Schema: `string`








Error


Schema: `ErrorRes`









---


#### getAbandonCartDetail
Get abandon carts details

```javascript
// Promise
const promise = analytics.getAbandonCartDetail(companyId,applicationId,cartId);

// Async/Await
const data = await analytics.getAbandonCartDetail(companyId,applicationId,cartId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| applicationId | string | Application Id | 
| cartId | string | Cart Id | 

Get abandon cart details

*Success Response:*



Success


Schema: `AbandonCartDetail`









---


#### createExportJob
Create data export job in required format

```javascript
// Promise
const promise = analytics.createExportJob(companyId,exportType,body);

// Async/Await
const data = await analytics.createExportJob(companyId,exportType,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| exportType | string | Export type / format | 

Create data export job in required format

*Success Response:*



Success


Schema: `ExportJobRes`









---


#### getExportJobStatus
Get data export job status

```javascript
// Promise
const promise = analytics.getExportJobStatus(companyId,exportType,jobId);

// Async/Await
const data = await analytics.getExportJobStatus(companyId,exportType,jobId);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| exportType | string | Export type / format | 
| jobId | string | Export job id | 

Get data export job status

*Success Response:*



Success


Schema: `ExportJobStatusRes`









---


#### getLogsList
Get logs list

```javascript
// Promise
const promise = analytics.getLogsList(companyId,logType,body,pageNo,pageSize);

// Async/Await
const data = await analytics.getLogsList(companyId,logType,body,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| logType | string | Log type | 
| pageNo | integer | Current page number | 
| pageSize | integer | Current page size | 

Get logs list

*Success Response:*



Success


Schema: `GetLogsListRes`









---


#### searchLogs
Search logs

```javascript
// Promise
const promise = analytics.searchLogs(companyId,logType,body,pageNo,pageSize);

// Async/Await
const data = await analytics.searchLogs(companyId,logType,body,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id | 
| pageNo | integer | Current page number | 
| pageSize | integer | Current page size | 
| logType | string | Log type | 

Search logs

*Success Response:*



Success


Schema: `SearchLogRes`









---



---


## Discount


#### getDiscounts
Fetch discount list.

```javascript
// Promise
const promise = discount.getDiscounts(companyId,view,q,pageNo,pageSize,archived,month,year,type,appIds);

// Async/Await
const data = await discount.getDiscounts(companyId,view,q,pageNo,pageSize,archived,month,year,type,appIds);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| view | string | listing or calender.  Default is listing. | 
| q | string | The search query. This can be a partial or complete name of a discount. | 
| pageNo | integer | page number. Default is 1. | 
| pageSize | integer | page size. Default is 12. | 
| archived | boolean | archived. Default is false. | 
| month | integer | month. Default is current month. | 
| year | integer | year. Default is current year. | 
| type | string | basic or custom. | 
| appIds | array | application ids. | 

Fetch discount list.

*Success Response:*



Success


Schema: `ListOrCalender`








Failed


Schema: `BadRequestObject`









---


#### createDiscount
Create Discount.

```javascript
// Promise
const promise = discount.createDiscount(companyId,body);

// Async/Await
const data = await discount.createDiscount(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 

Create Discount.

*Success Response:*



Success


Schema: `DiscountJob`








Failed


Schema: `BadRequestObject`









---


#### getDiscount
Fetch discount.

```javascript
// Promise
const promise = discount.getDiscount(companyId,id);

// Async/Await
const data = await discount.getDiscount(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | unique id. | 

Fetch discount.

*Success Response:*



Success


Schema: `DiscountJob`








Failed


Schema: `BadRequestObject`









---


#### updateDiscount
Create Discount.

```javascript
// Promise
const promise = discount.updateDiscount(companyId,id,body);

// Async/Await
const data = await discount.updateDiscount(companyId,id,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | id | 

Create Discount.

*Success Response:*



Success


Schema: `DiscountJob`








Failed


Schema: `BadRequestObject`









---


#### validateDiscountFile
Validate File.

```javascript
// Promise
const promise = discount.validateDiscountFile(companyId,body,discount);

// Async/Await
const data = await discount.validateDiscountFile(companyId,body,discount);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| discount | string | discount | 

Validate File.

*Success Response:*



Success


Schema: `FileJobResponse`








Failed


Schema: `BadRequestObject`









---


#### downloadDiscountFile
Validate File.

```javascript
// Promise
const promise = discount.downloadDiscountFile(companyId,type,body);

// Async/Await
const data = await discount.downloadDiscountFile(companyId,type,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| type | string | type | 

Validate File.

*Success Response:*



Success


Schema: `FileJobResponse`








Failed


Schema: `BadRequestObject`









---


#### getValidationJob
Validate File Job.

```javascript
// Promise
const promise = discount.getValidationJob(companyId,id);

// Async/Await
const data = await discount.getValidationJob(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | id | 

Validate File Job.

*Success Response:*



Success


Schema: `FileJobResponse`








Failed


Schema: `BadRequestObject`









---


#### cancelValidationJob
Cancel Validation Job.

```javascript
// Promise
const promise = discount.cancelValidationJob(companyId,id);

// Async/Await
const data = await discount.cancelValidationJob(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | id | 

Cancel Validation Job.

*Success Response:*



Success


Schema: `CancelJobResponse`








Failed


Schema: `BadRequestObject`









---


#### getDownloadJob
Download File Job.

```javascript
// Promise
const promise = discount.getDownloadJob(companyId,id);

// Async/Await
const data = await discount.getDownloadJob(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | id | 

Download File Job.

*Success Response:*



Success


Schema: `FileJobResponse`








Failed


Schema: `BadRequestObject`









---


#### cancelDownloadJob
Cancel Download Job.

```javascript
// Promise
const promise = discount.cancelDownloadJob(companyId,id);

// Async/Await
const data = await discount.cancelDownloadJob(companyId,id);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | integer | company_id | 
| id | string | id | 

Cancel Download Job.

*Success Response:*



Success


Schema: `CancelJobResponse`








Failed


Schema: `BadRequestObject`









---



---


## Partner


#### addProxyPath
Add proxy path for external url

```javascript
// Promise
const promise = partner.addProxyPath(companyId,applicationId,extensionId,body);

// Async/Await
const data = await partner.addProxyPath(companyId,applicationId,extensionId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| extensionId | string | Extension id | 

Add proxy path for external url

*Success Response:*



Success


Schema: `AddProxyResponse`








Duplicate proxy path


Schema: `ApiError`









---


#### removeProxyPath
Remove proxy path for external url

```javascript
// Promise
const promise = partner.removeProxyPath(companyId,applicationId,extensionId,attachedPath);

// Async/Await
const data = await partner.removeProxyPath(companyId,applicationId,extensionId,attachedPath);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Current company id | 
| applicationId | string | Current application id | 
| extensionId | string | Extension id | 
| attachedPath | string | Attachaed path slug | 

Remove proxy path for external url

*Success Response:*



Success


Schema: `RemoveProxyResponse`








Entry not found attached path


Schema: `ApiError`









---



---


## Webhook


#### getSubscribersByCompanyAndEventId
Get Subscribers By Company And Event

```javascript
// Promise
const promise = webhook.getSubscribersByCompanyAndEventId(companyId,eventId,pageNo,pageSize);

// Async/Await
const data = await webhook.getSubscribersByCompanyAndEventId(companyId,eventId,pageNo,pageSize);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageNo | integer | Page Number | 
| pageSize | integer | Page Size | 
| companyId | string | Company ID of the application | 
| eventId | integer | Event Id of the application | 

Get Subscribers By Company And Event

*Success Response:*



Success


Schema: `SubscriberConfigList`









---


#### registerSubscriberToEvent
Register Subscriber

```javascript
// Promise
const promise = webhook.registerSubscriberToEvent(companyId,body);

// Async/Await
const data = await webhook.registerSubscriberToEvent(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company Id of the application | 

Register Subscriber

*Success Response:*



Success


Schema: `SubscriberConfig`









---


#### updateSubscriberConfig
Update Subscriber

```javascript
// Promise
const promise = webhook.updateSubscriberConfig(companyId,body);

// Async/Await
const data = await webhook.updateSubscriberConfig(companyId,body);
```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| companyId | string | Company ID of the application | 

Update Subscriber

*Success Response:*



Success


Schema: `SubscriberConfig`









---



---


---
---
