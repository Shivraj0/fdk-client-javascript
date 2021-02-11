# FDK Application Front API Documentaion


* [Catalog](#Catalog) - Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features.  
* [Cart](#Cart) - Cart APIs 
* [Lead](#Lead) - Handles communication between Staff and Users 
* [Theme](#Theme) - Responsible for themes and on the fly script injections 
* [User](#User) -  
* [Content](#Content) - Content 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Share](#Share) - Short link and Qr code 
* [FileStorage](#FileStorage) - File Storage 
* [Configuration](#Configuration) -  
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 
* [Order](#Order) - Handles Platform websites OMS 
* [Rewards](#Rewards) - Earn and redeem Reward Points 
* [Feedback](#Feedback) - User Reviews and Rating System 

----
----

### Classes and Methods


* [Catalog](#Catalog)
  * Methods
    * [Catalog#getProductDetailBySlug](#cataloggetproductdetailbyslug)
    * [Catalog#getProductSizesBySlug](#cataloggetproductsizesbyslug)
    * [Catalog#getProductPriceBySlug](#cataloggetproductpricebyslug)
    * [Catalog#getProductSellersBySlug](#cataloggetproductsellersbyslug)
    * [Catalog#getProductComparisonBySlugs](#cataloggetproductcomparisonbyslugs)
    * [Catalog#getSimilarComparisonProductBySlug](#cataloggetsimilarcomparisonproductbyslug)
    * [Catalog#getComparedFrequentlyProductBySlug](#cataloggetcomparedfrequentlyproductbyslug)
    * [Catalog#getProductSimilarByIdentifier](#cataloggetproductsimilarbyidentifier)
    * [Catalog#getProductVariantsBySlug](#cataloggetproductvariantsbyslug)
    * [Catalog#getProductStockByIds](#cataloggetproductstockbyids)
    * [Catalog#getProductStockForTimeByIds](#cataloggetproductstockfortimebyids)
    * [Catalog#getProducts](#cataloggetproducts)
    * [Catalog#getBrands](#cataloggetbrands)
    * [Catalog#getBrandDetailBySlug](#cataloggetbranddetailbyslug)
    * [Catalog#getCategories](#cataloggetcategories)
    * [Catalog#getCategoryDetailBySlug](#cataloggetcategorydetailbyslug)
    * [Catalog#getHomeProducts](#cataloggethomeproducts)
    * [Catalog#](#catalog)
    * [Catalog#getSearchResults](#cataloggetsearchresults)
    * [Catalog#getCollections](#cataloggetcollections)
    * [Catalog#getCollectionItemsBySlug](#cataloggetcollectionitemsbyslug)
    * [Catalog#getCollectionDetailBySlug](#cataloggetcollectiondetailbyslug)
    * [Catalog#getFollowedListing](#cataloggetfollowedlisting)
    * [Catalog#followById](#catalogfollowbyid)
    * [Catalog#unfollowById](#catalogunfollowbyid)
    * [Catalog#getFollowerCountById](#cataloggetfollowercountbyid)
    * [Catalog#getFollowIds](#cataloggetfollowids)
    
   

* [Cart](#Cart)
  * Methods
    * [Cart#getCart](#cartgetcart)
    * [Cart#getCartLastModified](#cartgetcartlastmodified)
    * [Cart#addItems](#cartadditems)
    * [Cart#updateCart](#cartupdatecart)
    * [Cart#getItemCount](#cartgetitemcount)
    * [Cart#getCoupons](#cartgetcoupons)
    * [Cart#applyCoupon](#cartapplycoupon)
    * [Cart#removeCoupon](#cartremovecoupon)
    * [Cart#getBulkDiscountOffers](#cartgetbulkdiscountoffers)
    * [Cart#getAddresses](#cartgetaddresses)
    * [Cart#addAddress](#cartaddaddress)
    * [Cart#getAddressById](#cartgetaddressbyid)
    * [Cart#updateAddress](#cartupdateaddress)
    * [Cart#removeAddress](#cartremoveaddress)
    * [Cart#selectAddress](#cartselectaddress)
    * [Cart#getPaymentModes](#cartgetpaymentmodes)
    * [Cart#selectPaymentMode](#cartselectpaymentmode)
    * [Cart#getShipments](#cartgetshipments)
    * [Cart#checkoutCart](#cartcheckoutcart)
    * [Cart#updateCartMeta](#cartupdatecartmeta)
    * [Cart#getCartShareLink](#cartgetcartsharelink)
    * [Cart#getCartSharedItems](#cartgetcartshareditems)
    * [Cart#updateCartWithSharedItems](#cartupdatecartwithshareditems)
    
   

* [Lead](#Lead)
  * Methods
    * [Lead#getTicket](#leadgetticket)
    * [Lead#createHistoryForTicket](#leadcreatehistoryforticket)
    * [Lead#createTicket](#leadcreateticket)
    * [Lead#getCustomForm](#leadgetcustomform)
    * [Lead#submitCustomForm](#leadsubmitcustomform)
    * [Lead#getParticipantsInsideVideoRoom](#leadgetparticipantsinsidevideoroom)
    * [Lead#getTokenForVideoRoom](#leadgettokenforvideoroom)
    
   

* [Theme](#Theme)
  * Methods
    * [Theme#getAppliedTheme](#themegetappliedtheme)
    * [Theme#getThemeForPreview](#themegetthemeforpreview)
    
   

* [User](#User)
  * Methods
    * [User#loginWithFacebook](#userloginwithfacebook)
    * [User#loginWithGoogle](#userloginwithgoogle)
    * [User#loginWithGoogleAndroid](#userloginwithgoogleandroid)
    * [User#loginWithGoogleIOS](#userloginwithgoogleios)
    * [User#loginWithOTP](#userloginwithotp)
    * [User#loginWithEmailAndPassword](#userloginwithemailandpassword)
    * [User#sendResetPasswordEmail](#usersendresetpasswordemail)
    * [User#forgotPassword](#userforgotpassword)
    * [User#sendResetToken](#usersendresettoken)
    * [User#loginWithToken](#userloginwithtoken)
    * [User#registerWithForm](#userregisterwithform)
    * [User#verifyEmail](#userverifyemail)
    * [User#verifyMobile](#userverifymobile)
    * [User#hasPassword](#userhaspassword)
    * [User#updatePassword](#userupdatepassword)
    * [User#logout](#userlogout)
    * [User#sendOTPOnMobile](#usersendotponmobile)
    * [User#verifyMobileOTP](#userverifymobileotp)
    * [User#sendOTPOnEmail](#usersendotponemail)
    * [User#verifyEmailOTP](#userverifyemailotp)
    * [User#getLoggedInUser](#usergetloggedinuser)
    * [User#getListOfActiveSessions](#usergetlistofactivesessions)
    * [User#getPlatformConfig](#usergetplatformconfig)
    * [User#updateProfile](#userupdateprofile)
    * [User#addMobileNumber](#useraddmobilenumber)
    * [User#deleteMobileNumber](#userdeletemobilenumber)
    * [User#setMobileNumberAsPrimary](#usersetmobilenumberasprimary)
    * [User#sendVerificationLinkToMobile](#usersendverificationlinktomobile)
    * [User#addEmail](#useraddemail)
    * [User#deleteEmail](#userdeleteemail)
    * [User#setEmailAsPrimary](#usersetemailasprimary)
    * [User#sendVerificationLinkToEmail](#usersendverificationlinktoemail)
    
   

* [Content](#Content)
  * Methods
    * [Content#getAnnouncements](#contentgetannouncements)
    * [Content#getBlog](#contentgetblog)
    * [Content#getFaqs](#contentgetfaqs)
    * [Content#getLandingPage](#contentgetlandingpage)
    * [Content#getLegalInformation](#contentgetlegalinformation)
    * [Content#getNavigations](#contentgetnavigations)
    * [Content#getPage](#contentgetpage)
    * [Content#getSeo](#contentgetseo)
    * [Content#getSlideshow](#contentgetslideshow)
    * [Content#getSupportInformation](#contentgetsupportinformation)
    * [Content#getFPITags](#contentgetfpitags)
    
   

* [Communication](#Communication)
  * Methods
    * [Communication#getCommunicationConsent](#communicationgetcommunicationconsent)
    * [Communication#upsertCommunicationConsent](#communicationupsertcommunicationconsent)
    * [Communication#upsertPushtoken](#communicationupsertpushtoken)
    
   

* [Share](#Share)
  * Methods
    * [Share#getApplicationQRCode](#sharegetapplicationqrcode)
    * [Share#getProductQRCodeBySlug](#sharegetproductqrcodebyslug)
    * [Share#getCollectionQRCodeBySlug](#sharegetcollectionqrcodebyslug)
    * [Share#getUrlQRCode](#sharegeturlqrcode)
    * [Share#createShortUrl](#sharecreateshorturl)
    * [Share#getShortUrlbyHash](#sharegetshorturlbyhash)
    * [Share#getOriginalShortUrlByHash](#sharegetoriginalshorturlbyhash)
    
   

* [FileStorage](#FileStorage)
  * Methods
    * [FileStorage#startUpload](#filestoragestartupload)
    * [FileStorage#completeUpload](#filestoragecompleteupload)
    
   

* [Configuration](#Configuration)
  * Methods
    * [Configuration#getApplication](#configurationgetapplication)
    * [Configuration#getOwnerInfo](#configurationgetownerinfo)
    * [Configuration#getBasicDetails](#configurationgetbasicdetails)
    * [Configuration#getIntegrationTokens](#configurationgetintegrationtokens)
    * [Configuration#](#configuration)
    * [Configuration#getLiveAnnouncements](#configurationgetliveannouncements)
    * [Configuration#getOrderingStores](#configurationgetorderingstores)
    * [Configuration#getFeatures](#configurationgetfeatures)
    * [Configuration#getContactInfo](#configurationgetcontactinfo)
    * [Configuration#getLegalTerms](#configurationgetlegalterms)
    * [Configuration#getSeoInfo](#configurationgetseoinfo)
    * [Configuration#getCustomerSupport](#configurationgetcustomersupport)
    * [Configuration#getFaqs](#configurationgetfaqs)
    * [Configuration#getCurrencies](#configurationgetcurrencies)
    * [Configuration#getCurrenciesById](#configurationgetcurrenciesbyid)
    * [Configuration#getLanguages](#configurationgetlanguages)
    
   

* [Payment](#Payment)
  * Methods
    * [Payment#getAggregatorsConfig](#paymentgetaggregatorsconfig)
    * [Payment#attachCardToCustomer](#paymentattachcardtocustomer)
    * [Payment#getActiveCardAggregator](#paymentgetactivecardaggregator)
    * [Payment#getActiveUserCards](#paymentgetactiveusercards)
    * [Payment#deleteUserCard](#paymentdeleteusercard)
    * [Payment#verifyCustomerForPayment](#paymentverifycustomerforpayment)
    * [Payment#verifyAndChargePayment](#paymentverifyandchargepayment)
    * [Payment#initialisePayment](#paymentinitialisepayment)
    * [Payment#checkAndUpdatePaymentStatus](#paymentcheckandupdatepaymentstatus)
    * [Payment#getUserBeneficiariesDetail](#paymentgetuserbeneficiariesdetail)
    * [Payment#verifyIfscCode](#paymentverifyifsccode)
    * [Payment#getOrderBeneficiariesDetail](#paymentgetorderbeneficiariesdetail)
    * [Payment#verifyOtpAndAddBeneficiaryForBank](#paymentverifyotpandaddbeneficiaryforbank)
    * [Payment#addBeneficiaryDetails](#paymentaddbeneficiarydetails)
    * [Payment#verifyOtpAndAddBeneficiaryForWallet](#paymentverifyotpandaddbeneficiaryforwallet)
    * [Payment#updateDefaultBeneficiary](#paymentupdatedefaultbeneficiary)
    
   

* [Order](#Order)
  * Methods
    * [Order#getOrders](#ordergetorders)
    * [Order#getOrderById](#ordergetorderbyid)
    * [Order#getShipmentById](#ordergetshipmentbyid)
    * [Order#getShipmentReasons](#ordergetshipmentreasons)
    
   

* [Rewards](#Rewards)
  * Methods
    * [Rewards#getPointsOnProduct](#rewardsgetpointsonproduct)
    * [Rewards#getOrderDiscount](#rewardsgetorderdiscount)
    * [Rewards#getUserPoints](#rewardsgetuserpoints)
    * [Rewards#getUserPointsHistory](#rewardsgetuserpointshistory)
    * [Rewards#getUserReferralDetails](#rewardsgetuserreferraldetails)
    * [Rewards#redeemReferralCode](#rewardsredeemreferralcode)
    
   

* [Feedback](#Feedback)
  * Methods
    * [Feedback#createAbuseReport](#feedbackcreateabusereport)
    * [Feedback#updateAbuseReport](#feedbackupdateabusereport)
    * [Feedback#getAbuseReports](#feedbackgetabusereports)
    * [Feedback#getAttributes](#feedbackgetattributes)
    * [Feedback#createAttribute](#feedbackcreateattribute)
    * [Feedback#getAttribute](#feedbackgetattribute)
    * [Feedback#updateAttribute](#feedbackupdateattribute)
    * [Feedback#createComment](#feedbackcreatecomment)
    * [Feedback#updateComment](#feedbackupdatecomment)
    * [Feedback#getComments](#feedbackgetcomments)
    * [Feedback#checkEligibility](#feedbackcheckeligibility)
    * [Feedback#deleteMedia](#feedbackdeletemedia)
    * [Feedback#createMedia](#feedbackcreatemedia)
    * [Feedback#updateMedia](#feedbackupdatemedia)
    * [Feedback#getMedias](#feedbackgetmedias)
    * [Feedback#getReviewSummaries](#feedbackgetreviewsummaries)
    * [Feedback#createReview](#feedbackcreatereview)
    * [Feedback#updateReview](#feedbackupdatereview)
    * [Feedback#getReviews](#feedbackgetreviews)
    * [Feedback#getTemplates](#feedbackgettemplates)
    * [Feedback#createQuestion](#feedbackcreatequestion)
    * [Feedback#updateQuestion](#feedbackupdatequestion)
    * [Feedback#getQuestionAndAnswers](#feedbackgetquestionandanswers)
    * [Feedback#getVotes](#feedbackgetvotes)
    * [Feedback#createVote](#feedbackcreatevote)
    * [Feedback#updateVote](#feedbackupdatevote)
    
   


---
---



## Catalog

```javascript
const { Configuration, Catalog } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const catalog = new Catalog(conf);

```


#### Catalog#getProductDetailBySlug
Get a product

```javascript
// Promise
const promise = catalog.getProductDetailBySlug(slug, );

// Async/Await
const data = await catalog.getProductDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 

Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`

Success Response:



The Product object. See example below or refer `ProductDetail` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductDetail"
}`








Error Response:





---


#### Catalog#getProductSizesBySlug
Get the sizes of a product

```javascript
// Promise
const promise = catalog.getProductSizesBySlug(slug, store_id, );

// Async/Await
const data = await catalog.getProductSizesBySlug(slug, store_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 
| store_id | string | The store id of the product whose sizes need to be retrieved | 

A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`

Success Response:



The ProductSize object. See example below or refer `ProductSizes` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizes"
}`








Error Response:





---


#### Catalog#getProductPriceBySlug
Get price a product size

```javascript
// Promise
const promise = catalog.getProductPriceBySlug(slug, size, pincode, store_id, );

// Async/Await
const data = await catalog.getProductPriceBySlug(slug, size, pincode, store_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **/v1.0/products/{slug}/sizes/** | 
| pincode | integer | The pincode of the product for which the price needs to be retrieved. | 
| store_id | string | The store of the product whose size level price need to be retrieved | 

Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.

Success Response:



The ProductSizePrice object. See example below or refer `ProductSizePriceResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizePriceResponse"
}`








Error Response:





---


#### Catalog#getProductSellersBySlug
List sellers of a product

```javascript
// Promise
const promise = catalog.getProductSellersBySlug(slug, size, pincode, page_no, page_size, );

// Async/Await
const data = await catalog.getProductSellersBySlug(slug, size, pincode, page_no, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 
| size | string | The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **/v1.0.0/products/sizes** | 
| pincode | integer | The pincode of the product for which the price needs to be retrieved. | 
| page_no | integer | The page number to navigate through the given set of results. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size

Success Response:



The ProductSizeSeller object. See example below or refer `ProductSizeSellersResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductSizeSellersResponse"
}`








Error Response:





---


#### Catalog#getProductComparisonBySlugs
Compare products

```javascript
// Promise
const promise = catalog.getProductComparisonBySlugs(slug, );

// Async/Await
const data = await catalog.getProductComparisonBySlugs(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **/v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.

Success Response:



The comparison between the products. See example below or refer `ProductsComparisonResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductsComparisonResponse"
}`








Error Response:





---


#### Catalog#getSimilarComparisonProductBySlug
Get comparison between similar products

```javascript
// Promise
const promise = catalog.getSimilarComparisonProductBySlug(slug, );

// Async/Await
const data = await catalog.getSimilarComparisonProductBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **/v1.0/products/** | 

Compare between the features of the given set of products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductCompareResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductCompareResponse"
}`








Error Response:





---


#### Catalog#getComparedFrequentlyProductBySlug
Get comparison between frequently compared products with the given product

```javascript
// Promise
const promise = catalog.getComparedFrequentlyProductBySlug(slug, );

// Async/Await
const data = await catalog.getComparedFrequentlyProductBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **/v1.0/products/** | 

Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products

Success Response:



The comparison between products similar to given product. See example below or refer `ProductFrequentlyComparedSimilarResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductFrequentlyComparedSimilarResponse"
}`








Error Response:





---


#### Catalog#getProductSimilarByIdentifier
Get similar products

```javascript
// Promise
const promise = catalog.getProductSimilarByIdentifier(slug, similar_type, );

// Async/Await
const data = await catalog.getProductSimilarByIdentifier(slug, similar_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 
| similar_type | string | The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec. | 

Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`

Success Response:



Similar Products based on type passed in the request path. Refer `SimilarProductByTypeResponse` for response structure


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SimilarProductByTypeResponse"
}`








Error Response:





---


#### Catalog#getProductVariantsBySlug
Get variant of a particular product

```javascript
// Promise
const promise = catalog.getProductVariantsBySlug(slug, );

// Async/Await
const data = await catalog.getProductVariantsBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **/v1.0/products/** | 

A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`

Success Response:



See example below or refer `ProductVariantsResponse` for details. For `display_type:image`, `color` key will be present otherwise `value` key will be preset.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductVariantsResponse"
}`








Error Response:





---


#### Catalog#getProductStockByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockByIds(item_id, alu, sku_code, ean, upc, );

// Async/Await
const data = await catalog.getProductStockByIds(item_id, alu, sku_code, ean, upc, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| item_id | string | Product id to get product stock (Max. 50 allowed) | 
| alu | string | Product identifier alu to get product stock (Max. 50 allowed) | 
| sku_code | string | Product identifier sku_code to get product stock (Max. 50 allowed) | 
| ean | string | Product identifier ean to get product stock (Max. 50 allowed) | 
| upc | string | Product identifier upc to get product stock (Max. 50 allowed) | 

Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockStatusResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductStockStatusResponse"
}`








Error Response:





---


#### Catalog#getProductStockForTimeByIds
Get the stock of a product

```javascript
// Promise
const promise = catalog.getProductStockForTimeByIds(timestamp, page_size, page_id, );

// Async/Await
const data = await catalog.getProductStockForTimeByIds(timestamp, page_size, page_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| timestamp | string | timestamp in UTC format (2020-07-23T10:27:50Z) | 
| page_size | integer | Limit of number of items for stock status default 12 | 
| page_id | string | will give next page results | 

Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time

Success Response:



The ProductStockStatus object. See example below or refer `ProductStockPolling` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductStockPolling"
}`








Error Response:





---


#### Catalog#getProducts
List the products

```javascript
// Promise
const promise = catalog.getProducts(q, f, sort_on, page_id, page_size, page_no, page_type, );

// Async/Await
const data = await catalog.getProducts(q, f, sort_on, page_id, page_size, page_no, page_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts** | 
| sort_on | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| page_id | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 
| page_no | integer | If page_type is number then pass it to fetch page items. Default is 1. | 
| page_type | str | For pagination type should be cursor or number. Default is cursor. | 

List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`

Success Response:



List of Products. See example below or refer `ProductListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ProductListingResponse"
}`








Error Response:





---


#### Catalog#getBrands
List all the brands

```javascript
// Promise
const promise = catalog.getBrands(department, page_no, page_size, );

// Async/Await
const data = await catalog.getBrands(department, page_no, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **/v1.0/departments/** API | 
| page_no | integer | The page number to navigate through the given set of results | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`

Success Response:



List of Brands. See example below or refer `BrandListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/BrandListingResponse"
}`








Error Response:





---


#### Catalog#getBrandDetailBySlug
Get metadata of a brand

```javascript
// Promise
const promise = catalog.getBrandDetailBySlug(slug, );

// Async/Await
const data = await catalog.getBrandDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **/v1.0/brands/** | 

Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`

Success Response:



The Metadata object. See example below or refer `BrandDetailResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/BrandDetailResponse"
}`








Error Response:





---


#### Catalog#getCategories
List all the categories

```javascript
// Promise
const promise = catalog.getCategories(department, );

// Async/Await
const data = await catalog.getCategories(department, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| department | string | The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **/v1.0/departments/** API | 

List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`

Success Response:



List of Categories. See example below or refer `CategoryListingResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CategoryListingResponse"
}`








Error Response:





---


#### Catalog#getCategoryDetailBySlug
Get metadata of a category

```javascript
// Promise
const promise = catalog.getCategoryDetailBySlug(slug, );

// Async/Await
const data = await catalog.getCategoryDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **/v1.0/categories/** | 

Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`

Success Response:



The Metadata object. See example below or refer `CategoryMetaResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CategoryMetaResponse"
}`








Error Response:





---


#### Catalog#getHomeProducts
List the products

```javascript
// Promise
const promise = catalog.getHomeProducts(sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getHomeProducts(sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| sort_on | string | Each response will contain **sort_on** param, which should be sent back to make pagination work. | 
| page_id | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`

Success Response:



List of Products. See example below or refer `HomeListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/HomeListingResponse"
}`








Error Response:





---


#### Catalog#
List all the departments

```javascript
// Promise
const promise = catalog.();

// Async/Await
const data = await catalog.();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

Success Response:



List of Departments. See example below or refer `DepartmentResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/DepartmentResponse"
}`








Error Response:





---


#### Catalog#getSearchResults
Get relevant suggestions for a search query

```javascript
// Promise
const promise = catalog.getSearchResults(q, );

// Async/Await
const data = await catalog.getSearchResults(q, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| q | string | The search query. This can be a partial or complete name of a either a product, brand or category | 

Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.

Success Response:



Lists of autocomplete suggestions for the search query `q`. See example response below or refer `AutoCompleteResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AutoCompleteResponse"
}`








Error Response:





---


#### Catalog#getCollections
List all the collections

```javascript
// Promise
const promise = catalog.getCollections(page_id, page_size, );

// Async/Await
const data = await catalog.getCollections(page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| page_id | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`

Success Response:



List of collections. See example below or refer `GetCollectionListingResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCollectionListingResponse"
}`








Error Response:





---


#### Catalog#getCollectionItemsBySlug
Get the items in a collection

```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug(slug, f, sort_on, page_id, page_size, );

// Async/Await
const data = await catalog.getCollectionItemsBySlug(slug, f, sort_on, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items | 
| f | string | The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts** | 
| sort_on | string | The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below. | 
| page_id | string | Each response will contain **page_id** param, which should be sent back to make pagination work. | 
| page_size | integer | Number of items to retrieve in each page. Default is 12. | 

Get items in a collection specified by its `slug`.

Success Response:



The attached items of an collection. See example below or refer `GetCollectionListingItemsResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCollectionListingItemsResponse"
}`








Error Response:





---


#### Catalog#getCollectionDetailBySlug
Get a particular collection

```javascript
// Promise
const promise = catalog.getCollectionDetailBySlug(slug, );

// Async/Await
const data = await catalog.getCollectionDetailBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve. | 

Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`

Success Response:



The Collection object. See example below or refer `CollectionDetailResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CollectionDetailResponse"
}`








Error Response:





---


#### Catalog#getFollowedListing
Get a list of followed Products, Brands, Collections

```javascript
// Promise
const promise = catalog.getFollowedListing(collection_type, );

// Async/Await
const data = await catalog.getFollowedListing(collection_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 

A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`

Success Response:



The Followed resource object. See example below or refer `GetFollowListingResponse` for details.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetFollowListingResponse"
}`








Error Response:





---


#### Catalog#followById
Follow a particular Product

```javascript
// Promise
const promise = catalog.followById(collection_type, collection_id, );

// Async/Await
const data = await catalog.followById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 
| collection_id | integer | the `id` of the collection type you want to follow | 

Follow a particular Product specified by its uid. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowPostResponse"
}`








Error Response:





---


#### Catalog#unfollowById
UnFollow a Product

```javascript
// Promise
const promise = catalog.unfollowById(collection_type, collection_id, );

// Async/Await
const data = await catalog.unfollowById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 
| collection_id | integer | the `id` of the collection type you want to unfollow | 

You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL

Success Response:



The response object. See example below or refer `FollowPostResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowPostResponse"
}`








Error Response:





---


#### Catalog#getFollowerCountById
Get Follow Count

```javascript
// Promise
const promise = catalog.getFollowerCountById(collection_type, collection_id, );

// Async/Await
const data = await catalog.getFollowerCountById(collection_type, collection_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string | the `type` of the collection products/brands/collections. | 
| collection_id | string | the `id` of the product/brand/collection. | 

Get count of followers for given collection type and collection id.

Success Response:



The response object. See example below or refer `FollowerCountResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowerCountResponse"
}`








Error Response:





---


#### Catalog#getFollowIds
Get the Ids of followed product, brand and collection.

```javascript
// Promise
const promise = catalog.getFollowIds(collection_type, );

// Async/Await
const data = await catalog.getFollowIds(collection_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| collection_type | string | Type of collection followed. i. e. products, brands, collections | 

You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids

Success Response:



The response object. See example below or refer `FollowIdsResponse` for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/FollowIdsResponse"
}`








Error Response:





---



---


## Cart

```javascript
const { Configuration, Cart } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const cart = new Cart(conf);

```


#### Cart#getCart
Fetch all Items Added to  Cart

```javascript
// Promise
const promise = cart.getCart(uid, assign_card_id, );

// Async/Await
const data = await cart.getCart(uid, assign_card_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| assign_card_id | integer |  | 

Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartResponse

Success Response:



The Cart object. See example below or refer GetCartResponse for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCartResponse"
}`








Error Response:



---


#### Cart#getCartLastModified
Fetch Last-Modified timestamp

```javascript
// Promise
const promise = cart.getCartLastModified(uid, );

// Async/Await
const data = await cart.getCartLastModified(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Fetch Last-Modified timestamp in header metadata

Success Response:



Fetch Last-Modified Timestamp Response





Error Response:



---


#### Cart#addItems
Add Items to Cart

```javascript
// Promise
const promise = cart.addItems();

// Async/Await
const data = await cart.addItems();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

<p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>

Success Response:



Response of the cart object including all item details included in .the cart,coupons etc.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CartResponse"
}`


Examples: 


Product has been added to your cart
```javascript
{
  "value": {
    "message": "Product has been added to your cart",
    "success": true,
    "cart": {
      "breakup_values": {
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 17486,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -3540,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 13946,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 13946,
            "currency_code": "INR"
          }
        ],
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -3540,
          "fynd_cash": 0,
          "gst_charges": 1529.96,
          "mrp_total": 17486,
          "subtotal": 13946,
          "total": 13946,
          "vog": 12416.04,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        }
      },
      "items": [
        {
          "key": "751083_10",
          "article": {
            "type": "article",
            "uid": "612_9_SE61201_19100302_10",
            "size": "10",
            "seller": {
              "uid": 612,
              "name": "SSR ENTERPRISE"
            },
            "store": {
              "uid": 4431,
              "name": "Motilal Nagar 1, Goregaon"
            },
            "quantity": 4,
            "price": {
              "base": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3999,
                "effective": 2399,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4798,
              "marked": 7998,
              "effective": 4798,
              "selling": 4798,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "10"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 751083,
            "name": "Carson 2",
            "slug": "puma-carson-2-751083-6ad98d",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_19100302/1_1542807042296.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-carson-2-751083-6ad98d/",
              "query": {
                "product_slug": [
                  "puma-carson-2-751083-6ad98d"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 2,
          "message": "",
          "bulk_offer": {},
          "discount": "41% OFF"
        },
        {
          "key": "246228_S",
          "article": {
            "type": "article",
            "uid": "46_235_TM62_M11029ONDSXNS_S",
            "size": "S",
            "seller": {
              "uid": 46,
              "name": "RELIANCE BRANDS LIMITED"
            },
            "store": {
              "uid": 4550,
              "name": "VR Mall"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 4490,
                "effective": 4490,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4490,
              "marked": 4490,
              "effective": 4490,
              "selling": 4490,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "L",
              "M",
              "S",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 0,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 246228,
            "name": "Blue Solid T-Shirt",
            "slug": "superdry-blue-solid-t-shirt-2",
            "brand": {
              "uid": 235,
              "name": "Superdry"
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
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/235_M11029ONDSXNS/1.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/superdry-blue-solid-t-shirt-2/",
              "query": {
                "product_slug": [
                  "superdry-blue-solid-t-shirt-2"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "443175_S",
          "article": {
            "type": "article",
            "uid": "162_207_1271_LJ03LBLUDN88_S",
            "size": "S",
            "seller": {
              "uid": 162,
              "name": "GO FASHION INDIA PRIVATE LIMITED"
            },
            "store": {
              "uid": 5784,
              "name": "Vega City mall"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1599,
                "effective": 1599,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1599,
              "marked": 1599,
              "effective": 1599,
              "selling": 1599,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "XL",
              "M",
              "L",
              "S"
            ],
            "other_store_quantity": 8,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 443175,
            "name": "Light Blue Denim Jeggings",
            "slug": "go-colors-light-blue-denim-jeggings-443175-3c688c",
            "brand": {
              "uid": 207,
              "name": "Go Colors"
            },
            "categories": [
              {
                "uid": 267,
                "name": "Jeggings"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/207_LJ03LBLUDN88/1_1512382513548.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/go-colors-light-blue-denim-jeggings-443175-3c688c/",
              "query": {
                "product_slug": [
                  "go-colors-light-blue-denim-jeggings-443175-3c688c"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": ""
        },
        {
          "key": "778937_OS",
          "article": {
            "type": "article",
            "uid": "686_963_IC68601_PWUPC01977_OS",
            "size": "OS",
            "seller": {
              "uid": 686,
              "name": "INDUS CORPORATION"
            },
            "store": {
              "uid": 5059,
              "name": "Vidyaranyapura Main Road"
            },
            "quantity": 3,
            "price": {
              "base": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 3399,
                "effective": 3059,
                "currency_code": "INR"
              }
            }
          },
          "price": {
            "base": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 3059,
              "marked": 3399,
              "effective": 3059,
              "selling": 3059,
              "currency_code": "INR"
            }
          },
          "availability": {
            "sizes": [
              "OS"
            ],
            "other_store_quantity": 2,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 778937,
            "name": "Colourful Carnival Bouncer",
            "slug": "fisher-price-colourful-carnival-bouncer-778937-fafa1f",
            "brand": {
              "uid": 963,
              "name": "Fisher-Price"
            },
            "categories": [
              {
                "uid": 576,
                "name": "Cradles"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/963_PWUPC01977/1_1545308400588.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/fisher-price-colourful-carnival-bouncer-778937-fafa1f/",
              "query": {
                "product_slug": [
                  "fisher-price-colourful-carnival-bouncer-778937-fafa1f"
                ]
              }
            }
          },
          "coupon_message": "",
          "quantity": 1,
          "message": "",
          "bulk_offer": {},
          "discount": "11% OFF"
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7927,
      "uid": "7927",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Tue, 03 Sep 2019 06:00:43 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {}
  }
}
```

Sorry, item is out of stock
```javascript
{
  "value": {
    "message": "Sorry, item is out of stock",
    "success": false,
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": false,
      "last_modified": "Tue, 03 Sep 2019 09:55:40 GMT"
    },
    "result": {}
  }
}
```








Error Response:



---


#### Cart#updateCart
Update Items already added to Cart

```javascript
// Promise
const promise = cart.updateCart();

// Async/Await
const data = await cart.updateCart();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>

Success Response:



Response of the cart object including all item with their updated details included in .the cart,coupons etc..


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CartResponse"
}`


Examples: 


Nothing updated
```javascript
{
  "value": {
    "cart": {
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": -202000,
          "fynd_cash": 0,
          "gst_charges": 4804.71,
          "mrp_total": 302899,
          "subtotal": 100899,
          "total": 100899,
          "vog": 96094.29,
          "you_saved": 0
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 302899,
            "currency_code": "INR"
          },
          {
            "display": "Discount",
            "key": "discount",
            "value": -202000,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 100899,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 100899,
            "currency_code": "INR"
          }
        ],
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        }
      },
      "items": [
        {
          "bulk_offer": {},
          "discount": "67% OFF",
          "article": {
            "type": "article",
            "uid": "604_902_SSTC60401_636BLUE_1",
            "size": "1",
            "seller": {
              "uid": 604,
              "name": "SHRI SHANTINATH TRADING COMPANY"
            },
            "store": {
              "uid": 4579,
              "name": "Gandhi Nagar"
            },
            "quantity": 108,
            "price": {
              "base": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2999,
                "effective": 999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "key": "707569_1",
          "availability": {
            "sizes": [
              "1",
              "8",
              "7",
              "2",
              "9",
              "5",
              "3",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "product": {
            "type": "product",
            "uid": 707569,
            "name": "Blue and Gold Printed Ethnic Set",
            "slug": "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a",
            "brand": {
              "uid": 902,
              "name": ""
            },
            "categories": [
              {
                "uid": 525,
                "name": ""
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/902_636BLUE/1_1540301094877.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/v1/products/aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a/",
              "query": {
                "product_slug": [
                  "aj-dezines-blue-and-gold-printed-ethnic-set-707569-bff01a"
                ]
              }
            }
          },
          "price": {
            "base": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 100899,
              "marked": 302899,
              "effective": 100899,
              "selling": 100899,
              "currency_code": "INR"
            }
          },
          "message": "",
          "quantity": 101
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 54,
      "uid": "54",
      "gstin": null,
      "checkout_mode": "self",
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Tue, 03 Sep 2019 10:19:20 GMT"
    },
    "result": {
      "707569_90": {
        "success": true,
        "message": "Nothing updated"
      }
    },
    "message": "Nothing updated",
    "success": true
  }
}
```

Item updated in the cart
```javascript
{
  "value": {
    "cart": {
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 838.83,
          "mrp_total": 5499,
          "subtotal": 5499,
          "total": 5499,
          "vog": 4660.17,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 5499,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 5499,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "437414_7",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 5499,
              "marked": 5499,
              "effective": 5499,
              "selling": 5499,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 437414,
            "name": "Suede Classic",
            "slug": "puma-suede-classic-437414-6e6bbf",
            "brand": {
              "uid": 9,
              "name": "Puma"
            },
            "categories": [
              {
                "uid": 165,
                "name": "Outdoor Sports Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/9_35656851/1_1511171811830.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/puma-suede-classic-437414-6e6bbf/",
              "query": {
                "product_slug": [
                  "puma-suede-classic-437414-6e6bbf"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "507_9_96099_35656851_7",
            "size": "7",
            "seller": {
              "uid": 507,
              "name": "PUMA SPORTS INDIA PVT LTD"
            },
            "store": {
              "uid": 3632,
              "name": "Colaba Causway"
            },
            "quantity": 5,
            "price": {
              "base": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 5499,
                "effective": 5499,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "10",
              "11",
              "6",
              "9",
              "7",
              "8"
            ],
            "other_store_quantity": 22,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 12426,
      "uid": "12426",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:51:42 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "result": {
      "437414_7": {
        "success": true,
        "message": "Item updated in the bag"
      }
    },
    "message": "Item updated in the bag",
    "success": true
  }
}
```








Error Response:



---


#### Cart#getItemCount
Cart item count

```javascript
// Promise
const promise = cart.getItemCount(uid, );

// Async/Await
const data = await cart.getItemCount(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Get total count of item present in cart

Success Response:



OK


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user_cart_items_count": {
      "type": "integer",
      "description": "Item count present in cart"
    }
  }
}`








Error Response:



---


#### Cart#getCoupons
Fetch Coupon

```javascript
// Promise
const promise = cart.getCoupons(uid, );

// Async/Await
const data = await cart.getCoupons(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 

Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse

Success Response:



Returns The Couppon object which has list of all available_coupon applicale for the cart. See example below or refer GetCouponResponse for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetCouponResponse"
}`








Error Response:



---


#### Cart#applyCoupon
Apply Coupon

```javascript
// Promise
const promise = cart.applyCoupon(i, b, p, );

// Async/Await
const data = await cart.applyCoupon(i, b, p, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| i | boolean |  | 
| b | boolean |  | 
| p | boolean |  | 

<p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>

Success Response:



Error Response:





---


#### Cart#removeCoupon
Remove Coupon Applied

```javascript
// Promise
const promise = cart.removeCoupon(uid, );

// Async/Await
const data = await cart.removeCoupon(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id | 

Remove Coupon applied on the cart by passing uid in request body.

Success Response:



Response of the Coupon object including all item details included in .the cart,coupons removed etc.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CartResponse"
}`








Error Response:



---


#### Cart#getBulkDiscountOffers
Get discount offers based on quantity

```javascript
// Promise
const promise = cart.getBulkDiscountOffers(item_id, article_id, uid, slug, );

// Async/Await
const data = await cart.getBulkDiscountOffers(item_id, article_id, uid, slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| item_id | integer | Item id | 
| article_id | string | Article mongo id | 
| uid | integer | Item id | 
| slug | string | Item unique url from product page | 

List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*

Success Response:



Offers found or not found with valid input


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/BulkPriceResponse"
}`


Examples: 


Offers found
```javascript
{
  "value": {
    "data": [
      {
        "seller": {
          "uid": 248,
          "name": "MANYAVAR CREATIONS PRIVATE LIMITED"
        },
        "offers": [
          {
            "quantity": 1,
            "auto_applied": true,
            "margin": 10,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3599.1,
              "currency_code": "INR"
            },
            "total": 3599.1
          },
          {
            "quantity": 3,
            "auto_applied": true,
            "margin": 20,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3199.2,
              "currency_code": "INR"
            },
            "total": 9597.6
          },
          {
            "quantity": 9,
            "auto_applied": true,
            "margin": 30,
            "type": "bundle",
            "price": {
              "marked": 3999,
              "effective": 3999,
              "bulk_effective": 3443.4444444444,
              "currency_code": "INR"
            },
            "total": 30991,
            "best": true
          }
        ]
      }
    ]
  }
}
```

Offers not found
```javascript
{
  "value": {
    "data": []
  }
}
```








Error Response:





---


#### Cart#getAddresses
Fetch Address

```javascript
// Promise
const promise = cart.getAddresses(uid, mobile_no, checkout_mode, tags, default, );

// Async/Await
const data = await cart.getAddresses(uid, mobile_no, checkout_mode, tags, default, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer |  | 
| mobile_no | integer |  | 
| checkout_mode | string |  | 
| tags | integer |  | 
| default | integer |  | 

Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

Success Response:



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressResponse for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetAddressResponse"
}`








Error Response:



---


#### Cart#addAddress
Add Address to the account

```javascript
// Promise
const promise = cart.addAddress();

// Async/Await
const data = await cart.addAddress();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

<p>Add Address to account. See `SaveAddressRequest` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.

Success Response:



Return Address Id on successfull completion of the request.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SaveAddressResponse"
}`








Error Response:



---


#### Cart#getAddressById
Fetch Single Address

```javascript
// Promise
const promise = cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, );

// Async/Await
const data = await cart.getAddressById(id, uid, mobile_no, checkout_mode, tags, default, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer |  | 
| uid | integer |  | 
| mobile_no | integer |  | 
| checkout_mode | string |  | 
| tags | integer |  | 
| default | integer |  | 

Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>

Success Response:



Returns The Address object which has list of all address saved for the account. See example below or refer GetAddressResponse for details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/GetAddressResponse"
}`








Error Response:



---


#### Cart#updateAddress
Update Address alreay added to account

```javascript
// Promise
const promise = cart.updateAddress(id, );

// Async/Await
const data = await cart.updateAddress(id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Request object containing attributes mentioned in  <font color="blue">UpdateAddressRequest </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>

Success Response:



Error Response:





---


#### Cart#removeAddress
Remove Address Associated to the account

```javascript
// Promise
const promise = cart.removeAddress(id, );

// Async/Await
const data = await cart.removeAddress(id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | integer | Address id | 

Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully

Success Response:



Error Response:





---


#### Cart#selectAddress
Select Address from All Addresses

```javascript
// Promise
const promise = cart.selectAddress();

// Async/Await
const data = await cart.selectAddress();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

<p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>

Success Response:



Error Response:







---


#### Cart#getPaymentModes
Get Cart Payment for valid coupon

```javascript
// Promise
const promise = cart.getPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, );

// Async/Await
const data = await cart.getPaymentModes(uid, address_id, payment_mode, payment_identifier, aggregator_name, merchant_code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 
| address_id | string |  | 
| payment_mode | string |  | 
| payment_identifier | string |  | 
| aggregator_name | string |  | 
| merchant_code | string |  | 

Validate coupon for selected payment mode

Success Response:



Cart Affiliates.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentOptions"
}`








Error Response:



---


#### Cart#selectPaymentMode
Update Cart Payment

```javascript
// Promise
const promise = cart.selectPaymentMode(uid, );

// Async/Await
const data = await cart.selectPaymentMode(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | string |  | 

Update Cart Payment for Your Account

Success Response:



Cart Affiliates.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentOptions"
}`








Error Response:



---


#### Cart#getShipments
Get delivery date and options before checkout

```javascript
// Promise
const promise = cart.getShipments(p, uid, address_id, );

// Async/Await
const data = await cart.getShipments(p, uid, address_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| p | boolean | Get payment options or not | 
| uid | integer | Cart id | 
| address_id | integer | Address id | 

Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.

Success Response:



OK


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CartShipmentsResponse"
}`


Examples: 


Shipment Generated
```javascript
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [
      {
        "fulfillment_id": 3009,
        "shipment_type": "single_shipment",
        "fulfillment_type": "store",
        "dp_id": "29",
        "dp_options": {
          "4": {
            "f_priority": 4,
            "r_priority": 5,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "7": {
            "f_priority": 3,
            "r_priority": 4,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          },
          "29": {
            "f_priority": 1,
            "r_priority": 2,
            "is_cod": true,
            "is_prepaid": true,
            "is_reverse": true
          }
        },
        "promise": {
          "timestamp": {
            "min": 1566678108,
            "max": 1567023708
          },
          "formatted": {
            "min": "Aug 24",
            "max": "Aug 28"
          }
        },
        "box_type": "Small Courier bag",
        "shipments": 1,
        "items": [
          {
            "quantity": 1,
            "product": {
              "type": "product",
              "uid": 820312,
              "name": "Navy Blue Melange Shorts",
              "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
              "brand": {
                "uid": 610,
                "name": "883 Police"
              },
              "categories": [
                {
                  "uid": 193,
                  "name": "Shorts"
                }
              ],
              "images": [
                {
                  "aspect_ratio": "16:25",
                  "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                  "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
                }
              ],
              "action": {
                "type": "product",
                "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
                "query": {
                  "product_slug": [
                    "883-police-navy-blue-melange-shorts-820312-4943a8"
                  ]
                }
              }
            },
            "discount": "",
            "bulk_offer": {},
            "key": "820312_L",
            "price": {
              "base": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "add_on": 1999,
                "marked": 1999,
                "effective": 1999,
                "selling": 1999,
                "currency_code": "INR"
              }
            },
            "article": {
              "type": "article",
              "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
              "size": "L",
              "seller": {
                "uid": 381,
                "name": "INTERSOURCE GARMENTS PVT LTD"
              },
              "store": {
                "uid": 3009,
                "name": "Kormangala"
              },
              "quantity": 2,
              "price": {
                "base": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                },
                "converted": {
                  "marked": 1999,
                  "effective": 1999,
                  "currency_code": "INR"
                }
              }
            },
            "availability": {
              "sizes": [
                "L",
                "XL",
                "XXL"
              ],
              "other_store_quantity": 1,
              "out_of_stock": false,
              "deliverable": true,
              "is_valid": true
            },
            "coupon_message": "",
            "message": ""
          }
        ]
      }
    ],
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": true
  }
}
```

Shipment Generation Failed
```javascript
{
  "value": {
    "items": [],
    "cart_id": 7501,
    "uid": "7501",
    "success": true,
    "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
    "payment_options": {
      "payment_option": [
        {
          "name": "COD",
          "display_name": "Cash on Delivery",
          "display_priority": 1,
          "payment_mode_id": 11,
          "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
          "logo_url": {
            "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
          },
          "list": []
        },
        {
          "name": "CARD",
          "display_priority": 2,
          "payment_mode_id": 2,
          "display_name": "Card",
          "list": []
        },
        {
          "name": "NB",
          "display_priority": 3,
          "payment_mode_id": 3,
          "display_name": "Net Banking",
          "list": [
            {
              "aggregator_name": "Razorpay",
              "bank_name": "ICICI Bank",
              "bank_code": "ICIC",
              "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
              },
              "merchant_code": "NB_ICICI",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "WL",
          "display_priority": 4,
          "payment_mode_id": 4,
          "display_name": "Wallet",
          "list": [
            {
              "wallet_name": "Paytm",
              "wallet_code": "paytm",
              "wallet_id": 4,
              "merchant_code": "PAYTM",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
              },
              "aggregator_name": "Juspay",
              "display_priority": 1
            }
          ]
        },
        {
          "name": "UPI",
          "display_priority": 9,
          "payment_mode_id": 6,
          "display_name": "UPI",
          "list": [
            {
              "aggregator_name": "UPI_Razorpay",
              "name": "UPI",
              "display_name": "BHIM UPI",
              "code": "UPI",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
              },
              "merchant_code": "UPI",
              "timeout": 240,
              "retry_count": 0,
              "fynd_vpa": "shopsense.rzp@hdfcbank",
              "intent_flow": true,
              "intent_app_error_list": [
                "com.csam.icici.bank.imobile",
                "in.org.npci.upiapp",
                "com.whatsapp"
              ]
            }
          ]
        },
        {
          "name": "PL",
          "display_priority": 11,
          "payment_mode_id": 1,
          "display_name": "Pay Later",
          "list": [
            {
              "aggregator_name": "Simpl",
              "name": "Simpl",
              "code": "simpl",
              "merchant_code": "SIMPL",
              "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
              "logo_url": {
                "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
              }
            }
          ]
        }
      ],
      "payment_flows": {
        "Simpl": {
          "data": {
            "gateway": {
              "route": "simpl",
              "entity": "sdk",
              "is_customer_validation_required": true,
              "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
              "sdk": {
                "config": {
                  "redirect": false,
                  "callback_url": null,
                  "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                },
                "data": {
                  "user_phone": "8452996729",
                  "user_email": "paymentsdummy@gofynd.com"
                }
              },
              "return_url": null
            }
          },
          "api_link": "",
          "payment_flow": "sdk"
        },
        "Juspay": {
          "data": {},
          "api_link": "https://sandbox.juspay.in/txns",
          "payment_flow": "api"
        },
        "Razorpay": {
          "data": {},
          "api_link": "",
          "payment_flow": "sdk"
        },
        "UPI_Razorpay": {
          "data": {},
          "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
          "payment_flow": "api"
        },
        "Fynd": {
          "data": {},
          "api_link": "",
          "payment_flow": "api"
        }
      },
      "default": {}
    },
    "user_type": "Store User",
    "cod_charges": 0,
    "order_id": null,
    "cod_available": true,
    "cod_message": "No additional COD charges applicable",
    "delivery_charges": 0,
    "delivery_charge_order_value": 0,
    "delivery_slots": [
      {
        "date": "Sat, 24 Aug",
        "delivery_slot": [
          {
            "delivery_slot_timing": "By 9:00 PM",
            "default": true,
            "delivery_slot_id": 1
          }
        ]
      }
    ],
    "store_code": "",
    "store_emps": [],
    "breakup_values": {
      "loyalty_points": {
        "total": 0,
        "applicable": 0,
        "is_applied": false,
        "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
      },
      "coupon": {
        "type": "cash",
        "code": "",
        "uid": null,
        "value": 0,
        "is_applied": false,
        "message": "Sorry! Invalid Coupon"
      },
      "raw": {
        "cod_charge": 0,
        "convenience_fee": 0,
        "coupon": 0,
        "delivery_charge": 0,
        "discount": 0,
        "fynd_cash": 0,
        "gst_charges": 214.18,
        "mrp_total": 1999,
        "subtotal": 1999,
        "total": 1999,
        "vog": 1784.82,
        "you_saved": 0
      },
      "display": [
        {
          "display": "MRP Total",
          "key": "mrp_total",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Subtotal",
          "key": "subtotal",
          "value": 1999,
          "currency_code": "INR"
        },
        {
          "display": "Total",
          "key": "total",
          "value": 1999,
          "currency_code": "INR"
        }
      ]
    },
    "shipments": [],
    "message": "Shipments could not be generated. Please Try again after some time.",
    "delivery_charge_info": "",
    "coupon_text": "View all offers",
    "gstin": null,
    "checkout_mode": "self",
    "last_modified": "Thu, 22 Aug 2019 20:21:48 GMT",
    "restrict_checkout": false,
    "is_valid": false
  }
}
```








Error Response:





---


#### Cart#checkoutCart
Checkout Cart

```javascript
// Promise
const promise = cart.checkoutCart();

// Async/Await
const data = await cart.checkoutCart();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway

Success Response:



OK


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CartCheckoutResponse"
}`


Examples: 


Address id not found
```javascript
{
  "value": {
    "success": false,
    "message": "No address found with address id {address_id}"
  }
}
```

Missing address_id
```javascript
{
  "value": {
    "address_id": [
      "Missing data for required field."
    ]
  }
}
```

Successful checkout cod payment
```javascript
{
  "value": {
    "success": true,
    "cart": {
      "success": true,
      "error_message": "Note: Your order delivery will be delayed by 7-10 Days",
      "payment_options": {
        "payment_option": [
          {
            "name": "COD",
            "display_name": "Cash on Delivery",
            "display_priority": 1,
            "payment_mode_id": 11,
            "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
            "logo_url": {
              "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png",
              "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/cod.png"
            },
            "list": []
          },
          {
            "name": "CARD",
            "display_priority": 2,
            "payment_mode_id": 2,
            "display_name": "Card",
            "list": []
          },
          {
            "name": "NB",
            "display_priority": 3,
            "payment_mode_id": 3,
            "display_name": "Net Banking",
            "list": [
              {
                "aggregator_name": "Razorpay",
                "bank_name": "ICICI Bank",
                "bank_code": "ICIC",
                "url": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/NB_ICICI.png"
                },
                "merchant_code": "NB_ICICI",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "WL",
            "display_priority": 4,
            "payment_mode_id": 4,
            "display_name": "Wallet",
            "list": [
              {
                "wallet_name": "Paytm",
                "wallet_code": "paytm",
                "wallet_id": 4,
                "merchant_code": "PAYTM",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_small.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/paytm_logo_large.png"
                },
                "aggregator_name": "Juspay",
                "display_priority": 1
              }
            ]
          },
          {
            "name": "UPI",
            "display_priority": 9,
            "payment_mode_id": 6,
            "display_name": "UPI",
            "list": [
              {
                "aggregator_name": "UPI_Razorpay",
                "name": "UPI",
                "display_name": "BHIM UPI",
                "code": "UPI",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_100x78.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/upi_150x100.png"
                },
                "merchant_code": "UPI",
                "timeout": 240,
                "retry_count": 0,
                "fynd_vpa": "shopsense.rzp@hdfcbank",
                "intent_flow": true,
                "intent_app_error_list": [
                  "com.csam.icici.bank.imobile",
                  "in.org.npci.upiapp",
                  "com.whatsapp"
                ]
              }
            ]
          },
          {
            "name": "PL",
            "display_priority": 11,
            "payment_mode_id": 1,
            "display_name": "Pay Later",
            "list": [
              {
                "aggregator_name": "Simpl",
                "name": "Simpl",
                "code": "simpl",
                "merchant_code": "SIMPL",
                "logo": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                "logo_url": {
                  "small": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png",
                  "large": "https://d2co8r51m5ca2d.cloudfront.net/payments_assets/simpl_logo.png"
                }
              }
            ]
          }
        ],
        "payment_flows": {
          "Simpl": {
            "data": {
              "gateway": {
                "route": "simpl",
                "entity": "sdk",
                "is_customer_validation_required": true,
                "cust_validation_url": "https://api.addsale.com/gringotts/api/v1/validate-customer/",
                "sdk": {
                  "config": {
                    "redirect": false,
                    "callback_url": null,
                    "action_url": "https://api.addsale.com/avis/api/v1/payments/charge-gringotts-transaction/"
                  },
                  "data": {
                    "user_phone": "8452996729",
                    "user_email": "paymentsdummy@gofynd.com"
                  }
                },
                "return_url": null
              }
            },
            "api_link": "",
            "payment_flow": "sdk"
          },
          "Juspay": {
            "data": {},
            "api_link": "https://sandbox.juspay.in/txns",
            "payment_flow": "api"
          },
          "Razorpay": {
            "data": {},
            "api_link": "",
            "payment_flow": "sdk"
          },
          "UPI_Razorpay": {
            "data": {},
            "api_link": "https://api.addsale.com/gringotts/api/v1/external/payment-initialisation/",
            "payment_flow": "api"
          },
          "Fynd": {
            "data": {},
            "api_link": "",
            "payment_flow": "api"
          }
        },
        "default": {}
      },
      "user_type": "Store User",
      "cod_charges": 0,
      "order_id": "FY5D5E215CF287584CE6",
      "cod_available": true,
      "cod_message": "No additional COD charges applicable",
      "delivery_charges": 0,
      "delivery_charge_order_value": 0,
      "delivery_slots": [
        {
          "date": "Sat, 24 Aug",
          "delivery_slot": [
            {
              "delivery_slot_timing": "By 9:00 PM",
              "default": true,
              "delivery_slot_id": 1
            }
          ]
        }
      ],
      "store_code": "",
      "store_emps": [],
      "breakup_values": {
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid Coupon"
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 214.18,
          "mrp_total": 1999,
          "subtotal": 1999,
          "total": 1999,
          "vog": 1784.82,
          "you_saved": 0
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 1999,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 1999,
            "currency_code": "INR"
          }
        ]
      },
      "items": [
        {
          "key": "820312_L",
          "message": "",
          "bulk_offer": {},
          "price": {
            "base": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 1999,
              "marked": 1999,
              "effective": 1999,
              "selling": 1999,
              "currency_code": "INR"
            }
          },
          "quantity": 1,
          "discount": "",
          "product": {
            "type": "product",
            "uid": 820312,
            "name": "Navy Blue Melange Shorts",
            "slug": "883-police-navy-blue-melange-shorts-820312-4943a8",
            "brand": {
              "uid": 610,
              "name": "883 Police"
            },
            "categories": [
              {
                "uid": 193,
                "name": "Shorts"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/610_SPIRAL19ANAVY/1_1549105947281.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/883-police-navy-blue-melange-shorts-820312-4943a8/",
              "query": {
                "product_slug": [
                  "883-police-navy-blue-melange-shorts-820312-4943a8"
                ]
              }
            }
          },
          "article": {
            "type": "article",
            "uid": "381_610_IGPL01_SPIRAL19ANAVY_L",
            "size": "L",
            "seller": {
              "uid": 381,
              "name": "INTERSOURCE GARMENTS PVT LTD"
            },
            "store": {
              "uid": 3009,
              "name": "Kormangala"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 1999,
                "effective": 1999,
                "currency_code": "INR"
              }
            }
          },
          "coupon_message": "",
          "availability": {
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "other_store_quantity": 1,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          }
        }
      ],
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "cart_id": 7483,
      "uid": "7483",
      "gstin": null,
      "checkout_mode": "self",
      "last_modified": "Thu, 22 Aug 2019 04:58:44 GMT",
      "restrict_checkout": false,
      "is_valid": true
    },
    "callback_url": "https://api.addsale.com/gringotts/api/v1/external/payment-callback/",
    "app_intercept_url": "http://uniket-testing.addsale.link/cart/order-status",
    "message": "",
    "data": {
      "order_id": "FY5D5E215CF287584CE6"
    },
    "order_id": "FY5D5E215CF287584CE6"
  }
}
```








Error Response:



---


#### Cart#updateCartMeta
Update Cart Meta

```javascript
// Promise
const promise = cart.updateCartMeta(uid, );

// Async/Await
const data = await cart.updateCartMeta(uid, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| uid | integer | Cart id received in get cart. | 

Update cart meta like checkout_mode, gstin.

Success Response:



Cart meta updated successfully


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}`








Error Response:





---


#### Cart#getCartShareLink
Generate Cart sharing link token

```javascript
// Promise
const promise = cart.getCartShareLink();

// Async/Await
const data = await cart.getCartShareLink();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Generates shared cart snapshot and returns shortlink token

Success Response:



Token Generated successfully


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "share_url": {
      "type": "string"
    }
  }
}`


Examples: 


Token Generated
```javascript
{
  "value": {
    "token": "ZweG1XyX",
    "share_url": "https://uniket-testing.addsale.link/shared-cart/ZweG1XyX"
  }
}
```








Error Response:



---


#### Cart#getCartSharedItems
Get shared cart snapshot and cart response

```javascript
// Promise
const promise = cart.getCartSharedItems(token, );

// Async/Await
const data = await cart.getCartSharedItems(token, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 

Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.

Success Response:



Cart for valid token


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "cart": {
      "$ref": "#/components/schemas/SharedCartResponse"
    },
    "error": {
      "type": "string"
    }
  }
}`








Error Response:





---


#### Cart#updateCartWithSharedItems
Merge or Replace existing cart

```javascript
// Promise
const promise = cart.updateCartWithSharedItems(token, action, );

// Async/Await
const data = await cart.updateCartWithSharedItems(token, action, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| token | string | Shared short link token. | 
| action | string | Operation to perform on existing cart, whether to merge or replace. | 

Merge or Replace cart based on `action` parameter with shared cart of `token`

Success Response:



Success of Merge or Replace of cart with `shared_cart_details`                    containing shared cart details in response


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "cart": {
      "$ref": "#/components/schemas/SharedCartResponse"
    }
  }
}`


Examples: 


Cart Merged/Replaced
```javascript
{
  "value": {
    "cart": {
      "shared_cart_details": {
        "token": "BQ9jySQ9",
        "user": {
          "user_id": "23109086",
          "is_anonymous": false
        },
        "meta": {
          "selected_staff": "",
          "ordering_store": null
        },
        "selected_staff": "",
        "ordering_store": null,
        "source": {},
        "created_on": "2019-12-18T14:00:07.165000"
      },
      "items": [
        {
          "key": "791651_6",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_6",
            "size": "6",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 1,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 1,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 12,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 2095,
              "marked": 2095,
              "effective": 2095,
              "selling": 2095,
              "currency_code": "INR"
            }
          }
        },
        {
          "key": "791651_7",
          "discount": "",
          "bulk_offer": {},
          "coupon_message": "",
          "article": {
            "type": "article",
            "uid": "304_1054_9036_R1005753_7",
            "size": "7",
            "seller": {
              "uid": 304,
              "name": "LEAYAN GLOBAL PVT. LTD."
            },
            "store": {
              "uid": 5322,
              "name": "Vaisali Nagar"
            },
            "quantity": 2,
            "price": {
              "base": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              },
              "converted": {
                "marked": 2095,
                "effective": 2095,
                "currency_code": "INR"
              }
            }
          },
          "product": {
            "type": "product",
            "uid": 791651,
            "name": "Black Running Shoes",
            "slug": "furo-black-running-shoes-791651-f8bcc3",
            "brand": {
              "uid": 1054,
              "name": "Furo"
            },
            "categories": [
              {
                "uid": 160,
                "name": "Running Shoes"
              }
            ],
            "images": [
              {
                "aspect_ratio": "16:25",
                "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg",
                "secure_url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/original/1054_R1005753/1_1546490507364.jpg"
              }
            ],
            "action": {
              "type": "product",
              "url": "https://api.addsale.com/platform/content/v1/products/furo-black-running-shoes-791651-f8bcc3/",
              "query": {
                "product_slug": [
                  "furo-black-running-shoes-791651-f8bcc3"
                ]
              }
            }
          },
          "message": "",
          "quantity": 2,
          "availability": {
            "sizes": [
              "7",
              "8",
              "9",
              "10",
              "6"
            ],
            "other_store_quantity": 7,
            "out_of_stock": false,
            "deliverable": true,
            "is_valid": true
          },
          "price": {
            "base": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            },
            "converted": {
              "add_on": 4190,
              "marked": 4190,
              "effective": 4190,
              "selling": 4190,
              "currency_code": "INR"
            }
          }
        }
      ],
      "cart_id": 13055,
      "uid": "13055",
      "breakup_values": {
        "raw": {
          "cod_charge": 0,
          "convenience_fee": 0,
          "coupon": 0,
          "delivery_charge": 0,
          "discount": 0,
          "fynd_cash": 0,
          "gst_charges": 958.73,
          "mrp_total": 6285,
          "subtotal": 6285,
          "total": 6285,
          "vog": 5326.27,
          "you_saved": 0
        },
        "loyalty_points": {
          "total": 0,
          "applicable": 0,
          "is_applied": false,
          "description": "Your cashback, referrals, and refund amount get credited to Fynd Cash which can be redeemed while placing an order."
        },
        "coupon": {
          "type": "cash",
          "code": "",
          "uid": null,
          "value": 0,
          "is_applied": false,
          "message": "Sorry! Invalid coupon"
        },
        "display": [
          {
            "display": "MRP Total",
            "key": "mrp_total",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Subtotal",
            "key": "subtotal",
            "value": 6285,
            "currency_code": "INR"
          },
          {
            "display": "Total",
            "key": "total",
            "value": 6285,
            "currency_code": "INR"
          }
        ]
      },
      "delivery_charge_info": "",
      "coupon_text": "View all offers",
      "gstin": null,
      "comment": "",
      "checkout_mode": "self",
      "payment_selection_lock": {
        "enabled": false,
        "default_options": "COD",
        "payment_identifier": null
      },
      "restrict_checkout": false,
      "is_valid": true,
      "last_modified": "Mon, 16 Dec 2019 07:02:18 GMT"
    }
  }
}
```








Error Response:



---



---


## Lead

```javascript
const { Configuration, Lead } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const lead = new Lead(conf);

```


#### Lead#getTicket
Get Ticket with the specific id

```javascript
// Promise
const promise = lead.getTicket(id, );

// Async/Await
const data = await lead.getTicket(id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | ID of ticket to be retrieved | 

Get Ticket with the specific id, this is used to view the ticket details

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Ticket"
}`


Examples: 


Default
```javascript
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








Error Response:





---


#### Lead#createHistoryForTicket
Create history for specific Ticket

```javascript
// Promise
const promise = lead.createHistoryForTicket(ticket_id, );

// Async/Await
const data = await lead.createHistoryForTicket(ticket_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ticket_id | string | Ticket ID for which history is created | 

Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/TicketHistory"
}`


Examples: 


Default
```javascript
{
  "value": {
    "_id": "601a9d52c26687d086c499ef",
    "ticket_id": "6012f38557751ee8fc162cf7",
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








Error Response:







---


#### Lead#createTicket
Create Ticket

```javascript
// Promise
const promise = lead.createTicket();

// Async/Await
const data = await lead.createTicket();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to Create Ticket.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Ticket"
}`


Examples: 


Default
```javascript
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








Error Response:





---


#### Lead#getCustomForm
Get specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.getCustomForm(slug, );

// Async/Await
const data = await lead.getCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Get specific Custom Form using it's slug, this is used to view the form.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomForm"
}`


Examples: 


Default
```javascript
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








Error Response:





---


#### Lead#submitCustomForm
Submit Response for a specific Custom Form using it's slug

```javascript
// Promise
const promise = lead.submitCustomForm(slug, );

// Async/Await
const data = await lead.submitCustomForm(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of form whose response is getting submitted | 

Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "properties": {
    "ticket": {
      "$ref": "#/components/schemas/Ticket"
    }
  }
}`


Examples: 


Default
```javascript
{
  "value": {
    "ticket": {
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
}
```








Error Response:







---


#### Lead#getParticipantsInsideVideoRoom
Get participants of a specific Video Room using it's unique name

```javascript
// Promise
const promise = lead.getParticipantsInsideVideoRoom(unique_name, );

// Async/Await
const data = await lead.getParticipantsInsideVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string | Unique name of Video Room | 

Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "properties": {
    "participants": {
      "type": "array"
    }
  }
}`


Examples: 


Default
```javascript
{
  "value": {
    "participants": []
  }
}
```








Error Response:





---


#### Lead#getTokenForVideoRoom
Get Token to join a specific Video Room using it's unqiue name

```javascript
// Promise
const promise = lead.getTokenForVideoRoom(unique_name, );

// Async/Await
const data = await lead.getTokenForVideoRoom(unique_name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| unique_name | string | Unique name of Video Room | 

Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "properties": {
    "access_token": {
      "type": "string"
    }
  }
}`


Examples: 


Default
```javascript
{
  "value": {
    "access_token": "your_token_to_the_room"
  }
}
```








Error Response:





---



---


## Theme

```javascript
const { Configuration, Theme } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const theme = new Theme(conf);

```


#### Theme#getAppliedTheme
Get applied theme for an application

```javascript
// Promise
const promise = theme.getAppliedTheme();

// Async/Await
const data = await theme.getAppliedTheme();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:



A JSON object of theme


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ThemesSchema"
}`


Examples: 


Applied Theme
```javascript
{
  "$ref": "#/components/examples/Themes"
}
```








Error Response:







---


#### Theme#getThemeForPreview
Get theme for preview

```javascript
// Promise
const promise = theme.getThemeForPreview(themeId, );

// Async/Await
const data = await theme.getThemeForPreview(themeId, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| themeId | string | ID of the theme to be retrieved | 



Success Response:



A JSON object of theme


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ThemesSchema"
}`


Examples: 


Preview Theme
```javascript
{
  "$ref": "#/components/examples/Themes"
}
```








Error Response:







---



---


## User

```javascript
const { Configuration, User } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const user = new User(conf);

```


#### User#loginWithFacebook
Login/Register with Facebook

```javascript
// Promise
const promise = user.loginWithFacebook();

// Async/Await
const data = await user.loginWithFacebook();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Facebook

Success Response:









Error Response:







---


#### User#loginWithGoogle
Login/Register with Google

```javascript
// Promise
const promise = user.loginWithGoogle();

// Async/Await
const data = await user.loginWithGoogle();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google

Success Response:









Error Response:







---


#### User#loginWithGoogleAndroid
Login/Register with Google for android

```javascript
// Promise
const promise = user.loginWithGoogleAndroid();

// Async/Await
const data = await user.loginWithGoogleAndroid();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with Google for android

Success Response:









Error Response:







---


#### User#loginWithGoogleIOS
Login/Register with Google for ios

```javascript
// Promise
const promise = user.loginWithGoogleIOS();

// Async/Await
const data = await user.loginWithGoogleIOS();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with google for ios

Success Response:









Error Response:







---


#### User#loginWithOTP
Login/Register with OTP

```javascript
// Promise
const promise = user.loginWithOTP(platform, );

// Async/Await
const data = await user.loginWithOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to login or register with OTP

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "resend_timer": {
      "type": "integer"
    },
    "resendToken": {
      "type": "string"
    },
    "success": {
      "type": "boolean"
    },
    "request_id": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "mobile": {
      "type": "string"
    },
    "country_code": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#loginWithEmailAndPassword
Login/Register with password

```javascript
// Promise
const promise = user.loginWithEmailAndPassword();

// Async/Await
const data = await user.loginWithEmailAndPassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to login or register with email & password

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`








Error Response:







---


#### User#sendResetPasswordEmail
Reset Password

```javascript
// Promise
const promise = user.sendResetPasswordEmail(platform, );

// Async/Await
const data = await user.sendResetPasswordEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to reset account password

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "status": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#forgotPassword


```javascript
// Promise
const promise = user.forgotPassword();

// Async/Await
const data = await user.forgotPassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#sendResetToken


```javascript
// Promise
const promise = user.sendResetToken();

// Async/Await
const data = await user.sendResetToken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send code incase of reset password

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "status": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#loginWithToken
Login/Register with token

```javascript
// Promise
const promise = user.loginWithToken();

// Async/Await
const data = await user.loginWithToken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Login/Register with token

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:









---


#### User#registerWithForm
Registration Form

```javascript
// Promise
const promise = user.registerWithForm(platform, );

// Async/Await
const data = await user.registerWithForm(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Register using form

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "resend_timer": {
      "type": "integer"
    },
    "resendToken": {
      "type": "string"
    },
    "success": {
      "type": "boolean"
    },
    "request_id": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "mobile": {
      "type": "string"
    },
    "country_code": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#verifyEmail
Verify email

```javascript
// Promise
const promise = user.verifyEmail();

// Async/Await
const data = await user.verifyEmail();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to verify email

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#verifyMobile
Verify mobile

```javascript
// Promise
const promise = user.verifyMobile();

// Async/Await
const data = await user.verifyMobile();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify mobile

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#hasPassword
Check if user has password

```javascript
// Promise
const promise = user.hasPassword();

// Async/Await
const data = await user.hasPassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Checks if user is using password or not

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "result": {
      "type": "boolean"
    }
  }
}`








Error Response:







---


#### User#updatePassword
Update user password

```javascript
// Promise
const promise = user.updatePassword();

// Async/Await
const data = await user.updatePassword();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to update user password

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  }
}`








Error Response:







---


#### User#logout
Logout user

```javascript
// Promise
const promise = user.logout();

// Async/Await
const data = await user.logout();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to log out user

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "logout": {
      "type": "boolean"
    }
  }
}`








Error Response:







---


#### User#sendOTPOnMobile
Send OTP on mobile

```javascript
// Promise
const promise = user.sendOTPOnMobile(platform, );

// Async/Await
const data = await user.sendOTPOnMobile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to mobile

Success Response:









Error Response:







---


#### User#verifyMobileOTP
Verify OTP on mobile

```javascript
// Promise
const promise = user.verifyMobileOTP(platform, );

// Async/Await
const data = await user.verifyMobileOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to mobile

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    },
    "userExists": {
      "type": "boolean"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/verifyMobileOTP"
}
```








Error Response:







---


#### User#sendOTPOnEmail
Send OTP on email

```javascript
// Promise
const promise = user.sendOTPOnEmail(platform, );

// Async/Await
const data = await user.sendOTPOnEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send otp to email

Success Response:









Error Response:







---


#### User#verifyEmailOTP
Verify OTP on email

```javascript
// Promise
const promise = user.verifyEmailOTP(platform, );

// Async/Await
const data = await user.verifyEmailOTP(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to verify otp sent to email

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    },
    "userExists": {
      "type": "boolean"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/verifyMobileOTP"
}
```








Error Response:







---


#### User#getLoggedInUser
Get logged in user

```javascript
// Promise
const promise = user.getLoggedInUser();

// Async/Await
const data = await user.getLoggedInUser();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to get logged in user details

Success Response:






Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/UserSchema"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExample"
}
```








Error Response:







---


#### User#getListOfActiveSessions
Get list of sessions

```javascript
// Promise
const promise = user.getListOfActiveSessions();

// Async/Await
const data = await user.getListOfActiveSessions();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Lists all active sessions

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "sessions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}`








Error Response:







---


#### User#getPlatformConfig
Get platform config

```javascript
// Promise
const promise = user.getPlatformConfig(name, );

// Async/Await
const data = await user.getPlatformConfig(name, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| name | string | Name | 

Used to get platform config

Success Response:









Error Response:







---


#### User#updateProfile
Edit Profile Details

```javascript
// Promise
const promise = user.updateProfile(platform, );

// Async/Await
const data = await user.updateProfile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to update profile

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#addMobileNumber
Add mobile number to profile

```javascript
// Promise
const promise = user.addMobileNumber(platform, );

// Async/Await
const data = await user.addMobileNumber(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new mobile number to profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    },
    "verifyMobileLink": {
      "type": "boolean"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/verifyMobileOTP"
}
```








Error Response:







---


#### User#deleteMobileNumber
Delete mobile number from profile

```javascript
// Promise
const promise = user.deleteMobileNumber(platform, active, primary, verified, country_code, phone, );

// Async/Await
const data = await user.deleteMobileNumber(platform, active, primary, verified, country_code, phone, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Active mobile number | 
| primary | boolean | Primary number | 
| verified | boolean | Verified Number | 
| country_code | string | Country code of phone number | 
| phone | string | Phone number | 

Used to delete mobile number from profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#setMobileNumberAsPrimary
Set mobile as primary

```javascript
// Promise
const promise = user.setMobileNumberAsPrimary();

// Async/Await
const data = await user.setMobileNumberAsPrimary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set a mobile number as primary

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#sendVerificationLinkToMobile
Send verification link to mobile

```javascript
// Promise
const promise = user.sendVerificationLinkToMobile(platform, );

// Async/Await
const data = await user.sendVerificationLinkToMobile(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to send verification link to a mobile number

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "verifyMobileLink": {
      "type": "boolean"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/verifyMobileOTP"
}
```








Error Response:







---


#### User#addEmail
Add email to profile

```javascript
// Promise
const promise = user.addEmail(platform, );

// Async/Await
const data = await user.addEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to add new email to profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    },
    "verify_email_link": {
      "type": "boolean"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/verifyEmailOTP"
}
```








Error Response:







---


#### User#deleteEmail
Delete email from profile

```javascript
// Promise
const promise = user.deleteEmail(platform, active, primary, verified, email, );

// Async/Await
const data = await user.deleteEmail(platform, active, primary, verified, email, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 
| active | boolean | Whether email id is active | 
| primary | boolean | Whether email id is primary email | 
| verified | boolean | Whether email id is verified | 
| email | string | Email ID to be deleted | 

Used to delete email from profile

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#setEmailAsPrimary
Set email as primary

```javascript
// Promise
const promise = user.setEmailAsPrimary();

// Async/Await
const data = await user.setEmailAsPrimary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Used to set an email as primart

Success Response:



A JSON object with user details


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/components/schemas/UserSchema"
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/UserExampleObject"
}
```








Error Response:







---


#### User#sendVerificationLinkToEmail
Send verification link to email

```javascript
// Promise
const promise = user.sendVerificationLinkToEmail(platform, );

// Async/Await
const data = await user.sendVerificationLinkToEmail(platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| platform | string | Platform | 

Used to sent verification to an email

Success Response:






Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "verify_email_link": {
      "type": "boolean"
    }
  }
}`








Error Response:







---



---


## Content

```javascript
const { Configuration, Content } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const content = new Content(conf);

```


#### Content#getAnnouncements
Get live announcements

```javascript
// Promise
const promise = content.getAnnouncements();

// Async/Await
const data = await content.getAnnouncements();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get live announcements for each or all pages with page slug of page and end date schedule.

Success Response:









Error Response:







---


#### Content#getBlog
Get Blog by slug

```javascript
// Promise
const promise = content.getBlog(slug, );

// Async/Await
const data = await content.getBlog(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a blog. Use this parameter to retrieve a particular blog | 

Use this API to fetch a blog using `slug`

Success Response:



A JSON object with blog details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomBlog"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CustomBlog"
}
```








Error Response:







---


#### Content#getFaqs
Get frequently asked questions

```javascript
// Promise
const promise = content.getFaqs();

// Async/Await
const data = await content.getFaqs();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get frequently asked questions list. These will be helpful for users to using website.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "type": "object",
  "properties": {
    "faqs": {
      "type": "array",
      "items": {
        "$ref": "#/components/schemas/Faq"
      }
    }
  }
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/AppFaqs"
}
```








Error Response:







---


#### Content#getLandingPage
Get landing page

```javascript
// Promise
const promise = content.getLandingPage(x-device-platform, );

// Async/Await
const data = await content.getLandingPage(x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-device-platform | string | Platform | 

Use this API to fetch a landing page

Success Response:



A JSON object with landing details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LandingPage"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/LandingPage"
}
```








Error Response:







---


#### Content#getLegalInformation
Get legal information

```javascript
// Promise
const promise = content.getLegalInformation();

// Async/Await
const data = await content.getLegalInformation();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationLegal"
}`


Examples: 


Success
```javascript
{
  "$ref": "#/components/examples/Legal"
}
```








Error Response:







---


#### Content#getNavigations
Get navigation

```javascript
// Promise
const promise = content.getNavigations(x-device-platform, );

// Async/Await
const data = await content.getNavigations(x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| x-device-platform | string | Platform | 

Use this API to fetch a navigation

Success Response:



A JSON object with navigation details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Navigation"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Navigation"
}
```








Error Response:







---


#### Content#getPage
Get Page by slug

```javascript
// Promise
const promise = content.getPage(slug, );

// Async/Await
const data = await content.getPage(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a page. Use this parameter to retrieve a particular page | 

Use this API to fetch a custom page using `slug`

Success Response:



A JSON object with page details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CustomPage"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CustomPage"
}
```








Error Response:







---


#### Content#getSeo
Get seo of application

```javascript
// Promise
const promise = content.getSeo();

// Async/Await
const data = await content.getSeo();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get seo of application

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "allOf": [
    {
      "$ref": "#/components/schemas/Seo"
    },
    {
      "type": "object",
      "properties": {
        "robots_txt": {
          "type": "string"
        },
        "sitemap_enabled": {
          "type": "boolean"
        }
      }
    }
  ]
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Seo"
}
```








Error Response:







---


#### Content#getSlideshow
Get slideshow by slug

```javascript
// Promise
const promise = content.getSlideshow(slug, x-device-platform, );

// Async/Await
const data = await content.getSlideshow(slug, x-device-platform, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow | 
| x-device-platform | string | Platform | 

Use this API to fetch a slideshow using `slug`

Success Response:



A JSON object with slideshow details


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Slideshow"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Slideshow"
}
```








Error Response:







---


#### Content#getSupportInformation
Get support information

```javascript
// Promise
const promise = content.getSupportInformation();

// Async/Await
const data = await content.getSupportInformation();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get contact details for customer support. Including emails and phone numbers

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Support"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/Support"
}
```








Error Response:







---


#### Content#getFPITags
Get Tags for application

```javascript
// Promise
const promise = content.getFPITags();

// Async/Await
const data = await content.getFPITags();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |



Success Response:



A JSON object of tags


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/TagsSchema"
}`








Error Response:







---



---


## Communication

```javascript
const { Configuration, Communication } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const communication = new Communication(conf);

```


#### Communication#getCommunicationConsent
Get communication consent

```javascript
// Promise
const promise = communication.getCommunicationConsent();

// Async/Await
const data = await communication.getCommunicationConsent();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get communication consent

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CommunicationConsent"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CommunicationConsent"
}
```








Error Response:



---


#### Communication#upsertCommunicationConsent
Upsert communication consent

```javascript
// Promise
const promise = communication.upsertCommunicationConsent();

// Async/Await
const data = await communication.upsertCommunicationConsent();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert communication consent

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CommunicationConsentRes"
}`


Examples: 


default
```javascript
{
  "$ref": "#/components/examples/CommunicationConsentRes"
}
```








Error Response:





---


#### Communication#upsertPushtoken
Upsert push token of a user

```javascript
// Promise
const promise = communication.upsertPushtoken();

// Async/Await
const data = await communication.upsertPushtoken();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Upsert push token of a user

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PushtokenRes"
}`


Examples: 


create
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseCreate"
}
```

update
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseUpdate"
}
```

reset
```javascript
{
  "$ref": "#/components/examples/PushtokenResponseReset"
}
```








Error Response:





---



---


## Share

```javascript
const { Configuration, Share } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const share = new Share(conf);

```


#### Share#getApplicationQRCode
Create application QR Code

```javascript
// Promise
const promise = share.getApplicationQRCode();

// Async/Await
const data = await share.getApplicationQRCode();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create application QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/qrResp"
}`








Error Response:



---


#### Share#getProductQRCodeBySlug
Create product QR Code

```javascript
// Promise
const promise = share.getProductQRCodeBySlug(slug, );

// Async/Await
const data = await share.getProductQRCodeBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Id or Slug of product | 

Create product QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/qrResp"
}`








Error Response:



---


#### Share#getCollectionQRCodeBySlug
Create collection QR Code

```javascript
// Promise
const promise = share.getCollectionQRCodeBySlug(slug, );

// Async/Await
const data = await share.getCollectionQRCodeBySlug(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Id or Slug of collection | 

Create collection QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/qrResp"
}`








Error Response:



---


#### Share#getUrlQRCode
Create url QR Code

```javascript
// Promise
const promise = share.getUrlQRCode(url, );

// Async/Await
const data = await share.getUrlQRCode(url, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| url | string | Url | 

Create url QR Code

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/qrResp"
}`








Error Response:



---


#### Share#createShortUrl
Create short url

```javascript
// Promise
const promise = share.createShortUrl();

// Async/Await
const data = await share.createShortUrl();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Create short url

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/shortUrlRes"
}`








Error Response:



---


#### Share#getShortUrlbyHash
Get short url by hash

```javascript
// Promise
const promise = share.getShortUrlbyHash(hash, );

// Async/Await
const data = await share.getShortUrlbyHash(hash, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short url | 

Get short url by hash

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/shortUrlRes"
}`








Error Response:



---


#### Share#getOriginalShortUrlByHash
Get original url by hash

```javascript
// Promise
const promise = share.getOriginalShortUrlByHash(hash, );

// Async/Await
const data = await share.getOriginalShortUrlByHash(hash, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| hash | string | Hash of short url | 

Get original url by hash

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/shortUrlRes"
}`








Error Response:



---



---


## FileStorage

```javascript
const { Configuration, FileStorage } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const filestorage = new FileStorage(conf);

```


#### FileStorage#startUpload
This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.

```javascript
// Promise
const promise = filestorage.startUpload(namespace, );

// Async/Await
const data = await filestorage.startUpload(namespace, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.


Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/startResponse"
}`








Error Response:





---


#### FileStorage#completeUpload
This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.

```javascript
// Promise
const promise = filestorage.completeUpload(namespace, );

// Async/Await
const data = await filestorage.completeUpload(namespace, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| namespace | string | bucket name | 

Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.


Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/completeResponse"
}`








Error Response:





---



---


## Configuration

```javascript
const { Configuration, Configuration } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const configuration = new Configuration(conf);

```


#### Configuration#getApplication
Get current application details

```javascript
// Promise
const promise = configuration.getApplication();

// Async/Await
const data = await configuration.getApplication();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get current application details.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Application"
}`








Error Response:





---


#### Configuration#getOwnerInfo
Get basic details of application

```javascript
// Promise
const promise = configuration.getOwnerInfo();

// Async/Await
const data = await configuration.getOwnerInfo();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get application information with owner and seller basic details

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationAboutResponse"
}`








Error Response:



---


#### Configuration#getBasicDetails
Get basic application details

```javascript
// Promise
const promise = configuration.getBasicDetails();

// Async/Await
const data = await configuration.getBasicDetails();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get basic application details like name

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationDetailResponse"
}`








Error Response:



---


#### Configuration#getIntegrationTokens
Get integration tokens

```javascript
// Promise
const promise = configuration.getIntegrationTokens();

// Async/Await
const data = await configuration.getIntegrationTokens();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/TokensResponse"
}`








Error Response:



---


#### Configuration#
Check if a new app version is available

```javascript
// Promise
const promise = configuration.();

// Async/Await
const data = await configuration.();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Before launching the app (android/iOS), check if a new version is available. Response gives 3 update modes viz. FORCE, AVAILABLE, UP_TO_DATE. `FORCE`- Application should be updated necessarily. `AVAILABLE`- A new version available. But its not necessary to update. `UP_TO_DATE`- Application is at the latest version. These 3 modes are computed at the backend based on the lastest version of app available and the oldest version of app supported by the system.

Success Response:









Error Response:





---


#### Configuration#getLiveAnnouncements
Get live announcements

```javascript
// Promise
const promise = configuration.getLiveAnnouncements();

// Async/Await
const data = await configuration.getLiveAnnouncements();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get live announcements for each or all pages with page slug of page and end date schedule.

Success Response:









Error Response:



---


#### Configuration#getOrderingStores
Get deployment meta stores

```javascript
// Promise
const promise = configuration.getOrderingStores();

// Async/Await
const data = await configuration.getOrderingStores();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get deployment meta stores.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderingStores"
}`








Error Response:





---


#### Configuration#getFeatures
Get features of application

```javascript
// Promise
const promise = configuration.getFeatures();

// Async/Await
const data = await configuration.getFeatures();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get features of application

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AppFeatureResponse"
}`








Error Response:





---


#### Configuration#getContactInfo
Get application information

```javascript
// Promise
const promise = configuration.getContactInfo();

// Async/Await
const data = await configuration.getContactInfo();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationInformation"
}`








Error Response:



---


#### Configuration#getLegalTerms
Get legal information

```javascript
// Promise
const promise = configuration.getLegalTerms();

// Async/Await
const data = await configuration.getLegalTerms();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationLegal"
}`








Error Response:



---


#### Configuration#getSeoInfo
Get seo of application

```javascript
// Promise
const promise = configuration.getSeoInfo();

// Async/Await
const data = await configuration.getSeoInfo();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get seo of application

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationSeoResponse"
}`








Error Response:





---


#### Configuration#getCustomerSupport
Get support information

```javascript
// Promise
const promise = configuration.getCustomerSupport();

// Async/Await
const data = await configuration.getCustomerSupport();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get contact details for customer support. Including emails and phone numbers.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationSupport"
}`








Error Response:



---


#### Configuration#getFaqs
Get frequently asked questions

```javascript
// Promise
const promise = configuration.getFaqs();

// Async/Await
const data = await configuration.getFaqs();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get frequently asked questions list. These will be helpful for users to using website.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ApplicationFaqResponse"
}`








Error Response:



---


#### Configuration#getCurrencies
Get application enabled currencies

```javascript
// Promise
const promise = configuration.getCurrencies();

// Async/Await
const data = await configuration.getCurrencies();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get currency list for allowed currencies under current application

Success Response:









Error Response:



---


#### Configuration#getCurrenciesById
Get currency by id

```javascript
// Promise
const promise = configuration.getCurrenciesById(id, );

// Async/Await
const data = await configuration.getCurrenciesById(id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | Currency object id | 

Get currency object with symbol and name information by id.

Success Response:



Success response


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Currency"
}`








Error Response:



---


#### Configuration#getLanguages
Get list of languages

```javascript
// Promise
const promise = configuration.getLanguages();

// Async/Await
const data = await configuration.getLanguages();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get list of supported languages under application.

Success Response:



Success response


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/LanguageResponse"
}`








Error Response:



---



---


## Payment

```javascript
const { Configuration, Payment } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const payment = new Payment(conf);

```


#### Payment#getAggregatorsConfig
Get payment gateway keys

```javascript
// Promise
const promise = payment.getAggregatorsConfig();

// Async/Await
const data = await payment.getAggregatorsConfig();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.

Success Response:



Keys of all payment gateway


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AggregatorsConfigDetailResponse"
}`








Error Response:







---


#### Payment#attachCardToCustomer
Attach a saved card to customer.

```javascript
// Promise
const promise = payment.attachCardToCustomer();

// Async/Await
const data = await payment.attachCardToCustomer();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AttachCardsResponse"
}`








Error Response:







---


#### Payment#getActiveCardAggregator
Fetch active payment gateway for card

```javascript
// Promise
const promise = payment.getActiveCardAggregator(refresh, );

// Async/Await
const data = await payment.getActiveCardAggregator(refresh, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| refresh | boolean |  | 

Fetch active payment gateway along with customer id for cards payments.

Success Response:



Object of payment gateway and customer id


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ActiveCardPaymentGatewayResponse"
}`








Error Response:







---


#### Payment#getActiveUserCards
Fetch the list of saved cards of user.

```javascript
// Promise
const promise = payment.getActiveUserCards(force_refresh, );

// Async/Await
const data = await payment.getActiveUserCards(force_refresh, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| force_refresh | boolean |  | 

Fetch the list of saved cards of user from active payment gateway.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ListCardsResponse"
}`








Error Response:







---


#### Payment#deleteUserCard
Delete an user card.

```javascript
// Promise
const promise = payment.deleteUserCard();

// Async/Await
const data = await payment.deleteUserCard();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Delete an added user card on payment gateway and remove from cache.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/DeleteCardsResponse"
}`








Error Response:







---


#### Payment#verifyCustomerForPayment
Validate customer for payment.

```javascript
// Promise
const promise = payment.verifyCustomerForPayment();

// Async/Await
const data = await payment.verifyCustomerForPayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Validate customer for payment i.e Simpl paylater, Rupifi loan.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ValidateCustomerResponse"
}`








Error Response:







---


#### Payment#verifyAndChargePayment
Verify and charge payment

```javascript
// Promise
const promise = payment.verifyAndChargePayment();

// Async/Await
const data = await payment.verifyAndChargePayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Verify and charge payment server to server for Simpl & Mswipe.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ChargeCustomerResponse"
}`








Error Response:







---


#### Payment#initialisePayment
Payment Initialisation server to server for UPI and BharatQR.

```javascript
// Promise
const promise = payment.initialisePayment();

// Async/Await
const data = await payment.initialisePayment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentInitializationResponse"
}`








Error Response:







---


#### Payment#checkAndUpdatePaymentStatus
Continous polling to check status of payment on server.

```javascript
// Promise
const promise = payment.checkAndUpdatePaymentStatus();

// Async/Await
const data = await payment.checkAndUpdatePaymentStatus();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Continous polling on interval to check status of payment untill timeout.

Success Response:



List of cards objects


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PaymentStatusUpdateResponse"
}`








Error Response:







---


#### Payment#getUserBeneficiariesDetail
List User Beneficiary

```javascript
// Promise
const promise = payment.getUserBeneficiariesDetail(order_id, );

// Async/Await
const data = await payment.getUserBeneficiariesDetail(order_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string |  | 

Get all active  beneficiary details added by the user for refund

Success Response:



List User Beneficiary


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderBeneficiaryResponse"
}`








Error Response:







---


#### Payment#verifyIfscCode
Ifsc Code Verification

```javascript
// Promise
const promise = payment.verifyIfscCode(ifsc_code, );

// Async/Await
const data = await payment.verifyIfscCode(ifsc_code, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| ifsc_code | string |  | 

Get True/False for correct IFSC Code for adding bank details for refund

Success Response:



Bank details on correct Ifsc Code


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/IfscCodeResponse"
}`








Error Response:







---


#### Payment#getOrderBeneficiariesDetail
List Order Beneficiary

```javascript
// Promise
const promise = payment.getOrderBeneficiariesDetail(order_id, );

// Async/Await
const data = await payment.getOrderBeneficiariesDetail(order_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string |  | 

Get all active  beneficiary details added by the user for refund

Success Response:



List Order Beneficiary


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderBeneficiaryResponse"
}`








Error Response:







---


#### Payment#verifyOtpAndAddBeneficiaryForBank
Save Beneficiary details on otp validation.

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForBank();

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForBank();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Save Beneficiary details on otp validation.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/AddBeneficiaryViaOtpVerificationResponse"
}`








Error Response:







---


#### Payment#addBeneficiaryDetails
Save bank details for cancelled/returned order

```javascript
// Promise
const promise = payment.addBeneficiaryDetails();

// Async/Await
const data = await payment.addBeneficiaryDetails();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Use this API to save bank details for returned/cancelled order to refund amount in his account.

Success Response:



Success


Content Type: `application/json`

Schema: ``








Error Response:







---


#### Payment#verifyOtpAndAddBeneficiaryForWallet
Send Otp on Adding wallet beneficiary

```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForWallet();

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForWallet();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Send Otp on Adding wallet beneficiary for user mobile verification

Success Response:



WalletOtp


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/WalletOtpResponse"
}`








Error Response:







---


#### Payment#updateDefaultBeneficiary
Mark Default Beneficiary For Refund

```javascript
// Promise
const promise = payment.updateDefaultBeneficiary();

// Async/Await
const data = await payment.updateDefaultBeneficiary();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Mark Default Beneficiary ot of all Beneficiary Details for Refund

Success Response:



Set Default Beneficiary Response.


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/SetDefaultBeneficiaryResponse"
}`








Error Response:







---



---


## Order

```javascript
const { Configuration, Order } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const order = new Order(conf);

```


#### Order#getOrders
Get Orders for application based on application Id

```javascript
// Promise
const promise = order.getOrders(page_no, page_size, x-application-id, x-application-token, );

// Async/Await
const data = await order.getOrders(page_no, page_size, x-application-id, x-application-token, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| page_no | string | Current page number | 
| page_size | string | Page limit | 
| x-application-id | string | Current Application ID | 
| x-application-token | string | Current Application Token | 

Get Orders

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderList"
}`








Error Response:



---


#### Order#getOrderById
Get Order by order id for application based on application Id

```javascript
// Promise
const promise = order.getOrderById(order_id, x-application-id, x-application-token, );

// Async/Await
const data = await order.getOrderById(order_id, x-application-id, x-application-token, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| order_id | string | Order Id | 
| x-application-id | string | Current Application ID | 
| x-application-token | string | Current Application Token | 

Get Order By Fynd Order Id

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderById"
}`








Error Response:



---


#### Order#getShipmentById
Get Shipment by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentById(shipment_id, x-application-id, x-application-token, );

// Async/Await
const data = await order.getShipmentById(shipment_id, x-application-id, x-application-token, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 
| x-application-id | string | Current Application ID | 
| x-application-token | string | Current Application Token | 

Get Shipment

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentById"
}`








Error Response:



---


#### Order#getShipmentReasons
Get Shipment reasons by shipment id and order id for application based on application Id

```javascript
// Promise
const promise = order.getShipmentReasons(shipment_id, x-application-id, x-application-token, );

// Async/Await
const data = await order.getShipmentReasons(shipment_id, x-application-id, x-application-token, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| shipment_id | string | Shipment Id | 
| x-application-id | string | Current Application ID | 
| x-application-token | string | Current Application Token | 

Get Shipment Reasons

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ShipmentReasons"
}`








Error Response:



---



---


## Rewards

```javascript
const { Configuration, Rewards } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const rewards = new Rewards(conf);

```


#### Rewards#getPointsOnProduct
Get reward points that could be earned on any catalogue product.

```javascript
// Promise
const promise = rewards.getPointsOnProduct();

// Async/Await
const data = await rewards.getPointsOnProduct();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Evaluate the amount of reward points that could be earned on any catalogue product.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CatalogueOrderResponse"
}`








Error Response:





---


#### Rewards#getOrderDiscount
Calculates the discount on order-amount based on amount ranges configured in order_discount reward.

```javascript
// Promise
const promise = rewards.getOrderDiscount();

// Async/Await
const data = await rewards.getOrderDiscount();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Calculates the discount on order-amount based on amount ranges configured in order_discount reward.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/OrderDiscountResponse"
}`








Error Response:





---


#### Rewards#getUserPoints
Total available points of a user for current application

```javascript
// Promise
const promise = rewards.getUserPoints();

// Async/Await
const data = await rewards.getUserPoints();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Total available points of a user for current application

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PointsResponse"
}`








Error Response:





---


#### Rewards#getUserPointsHistory
Get list of points transactions.

```javascript
// Promise
const promise = rewards.getUserPointsHistory(pageID, pageSize, );

// Async/Await
const data = await rewards.getUserPointsHistory(pageID, pageSize, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| pageID | string | PageID is the ID of the requested page. For first request it should be kept empty. | 
| pageSize | integer | PageSize is the number of requested items in response. | 

Get list of points transactions.
The list of points history is paginated.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/PointsHistoryResponse"
}`








Error Response:





---


#### Rewards#getUserReferralDetails
User's referral details.

```javascript
// Promise
const promise = rewards.getUserReferralDetails();

// Async/Await
const data = await rewards.getUserReferralDetails();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

User's referral details.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/ReferralDetailsResponse"
}`








Error Response:





---


#### Rewards#redeemReferralCode
Redeems referral code and credits points to users points account.

```javascript
// Promise
const promise = rewards.redeemReferralCode();

// Async/Await
const data = await rewards.redeemReferralCode();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Redeems referral code and credits points to users points account.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/RedeemReferralCodeResponse"
}`








Error Response:





---



---


## Feedback

```javascript
const { Configuration, Feedback } = require('fdk-client-nodejs/application')
const conf = new Configuration({
    ApplicationID: "507f191e810c19729de860ea",
    ApplicationToken: "hu67dfhddf"
});
const feedback = new Feedback(conf);

```


#### Feedback#createAbuseReport
post a new abuse request

```javascript
// Promise
const promise = feedback.createAbuseReport();

// Async/Await
const data = await feedback.createAbuseReport();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Report a new abuse for specific entity with description text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#updateAbuseReport
Update abuse details

```javascript
// Promise
const promise = feedback.updateAbuseReport();

// Async/Await
const data = await feedback.updateAbuseReport();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the abuse details like status and description text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#getAbuseReports
Get list of abuse data

```javascript
// Promise
const promise = feedback.getAbuseReports(entity_id, entity_type, id, page_id, page_size, );

// Async/Await
const data = await feedback.getAbuseReports(entity_id, entity_type, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_id | string | entity id | 
| entity_type | string | entity type | 
| id | string | abuse id | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get the list of abuse data from entity type and entity ID.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Error Response:





---


#### Feedback#getAttributes
Get list of attribute data

```javascript
// Promise
const promise = feedback.getAttributes();

// Async/Await
const data = await feedback.getAttributes();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Provides a list of all attribute data.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Error Response:





---


#### Feedback#createAttribute
Add a new attribute request

```javascript
// Promise
const promise = feedback.createAttribute();

// Async/Await
const data = await feedback.createAttribute();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add a new attribute with its name, slug and description.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#getAttribute
Get single attribute data

```javascript
// Promise
const promise = feedback.getAttribute(slug, );

// Async/Await
const data = await feedback.getAttribute(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Get a single attribute data from a given slug.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/Attribute"
}`








Error Response:





---


#### Feedback#updateAttribute
Update attribute details

```javascript
// Promise
const promise = feedback.updateAttribute(slug, );

// Async/Await
const data = await feedback.updateAttribute(slug, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| slug | string | Slug of attribute | 

Update the attribute's name and description.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#createComment
post a new comment

```javascript
// Promise
const promise = feedback.createComment();

// Async/Await
const data = await feedback.createComment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to add a new comment for specific entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#updateComment
Update comment status

```javascript
// Promise
const promise = feedback.updateComment();

// Async/Await
const data = await feedback.updateComment();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update the comment status (active/approve) or text.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#getComments
Get list of comments

```javascript
// Promise
const promise = feedback.getComments(entity_type, id, entity_id, user_id, page_id, page_size, );

// Async/Await
const data = await feedback.getComments(entity_type, id, entity_id, user_id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| id | string | comment id | 
| entity_id | string | entity id | 
| user_id | string | user id - flag/filter to get comments for user | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get the list of comments from specific entity type.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#checkEligibility
Checks eligibility and cloud media config

```javascript
// Promise
const promise = feedback.checkEligibility(entity_type, entity_id, );

// Async/Await
const data = await feedback.checkEligibility(entity_type, entity_id, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 

Checks eligibility to rate and review and cloud media configuration

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/CheckEligibilityResponse"
}`








Error Response:





---


#### Feedback#deleteMedia
Delete Media

```javascript
// Promise
const promise = feedback.deleteMedia();

// Async/Await
const data = await feedback.deleteMedia();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Delete Media for the given entity IDs.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#createMedia
Add Media

```javascript
// Promise
const promise = feedback.createMedia();

// Async/Await
const data = await feedback.createMedia();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add Media list for specific entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#updateMedia
Update Media

```javascript
// Promise
const promise = feedback.updateMedia();

// Async/Await
const data = await feedback.updateMedia();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update Media (archive/approve) for the given entity.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#getMedias
Get Media

```javascript
// Promise
const promise = feedback.getMedias(entity_type, entity_id, id, page_id, page_size, );

// Async/Await
const data = await feedback.getMedias(entity_type, entity_id, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | vote id | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Get Media from the given entity type and entity ID.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#getReviewSummaries
Get a review summary

```javascript
// Promise
const promise = feedback.getReviewSummaries(entity_type, entity_id, id, page_id, page_size, );

// Async/Await
const data = await feedback.getReviewSummaries(entity_type, entity_id, id, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | review summary identifier | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.

Success Response:



success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#createReview
Add customer reviews

```javascript
// Promise
const promise = feedback.createReview();

// Async/Await
const data = await feedback.createReview();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#updateReview
Update customer reviews

```javascript
// Promise
const promise = feedback.updateReview();

// Async/Await
const data = await feedback.updateReview();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#getReviews
Get list of customer reviews

```javascript
// Promise
const promise = feedback.getReviews(entity_type, entity_id, id, user_id, media, rating, attribute_rating, facets, sort, page_id, page_size, );

// Async/Await
const data = await feedback.getReviews(entity_type, entity_id, id, user_id, media, rating, attribute_rating, facets, sort, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | review id | 
| user_id | string | user id | 
| media | string | media type e.g. image | video | video_file | video_link | 
| rating | array | rating filter, 1-5 | 
| attribute_rating | array | attribute rating filter | 
| facets | boolean | facets (true|false) | 
| sort | string | sort by : default | top | recent | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

This is used to get the list of customer reviews based on entity and provided filters.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#getTemplates
Get the templates for product or l3 type

```javascript
// Promise
const promise = feedback.getTemplates(template_id, entity_id, entity_type, );

// Async/Await
const data = await feedback.getTemplates(template_id, entity_id, entity_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| template_id | string | template id | 
| entity_id | string | entity id | 
| entity_type | string | entity type e.g. product | l3 | 

This is used to get the templates details.

Success Response:



Success


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#createQuestion
Create a new question

```javascript
// Promise
const promise = feedback.createQuestion();

// Async/Await
const data = await feedback.createQuestion();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#updateQuestion
Update question

```javascript
// Promise
const promise = feedback.updateQuestion();

// Async/Await
const data = await feedback.updateQuestion();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update question's status, tags and choices.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---


#### Feedback#getQuestionAndAnswers
Get a list of QnA

```javascript
// Promise
const promise = feedback.getQuestionAndAnswers(entity_type, entity_id, id, show_answer, page_id, page_size, );

// Async/Await
const data = await feedback.getQuestionAndAnswers(entity_type, entity_id, id, show_answer, page_id, page_size, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| entity_type | string | entity type | 
| entity_id | string | entity id | 
| id | string | qna id | 
| show_answer | boolean | show answer flag | 
| page_id | string | pagination page id | 
| page_size | string | pagination page size | 

This is used to get a list of questions and its answers.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XCursorGetResponse"
}`








Error Response:





---


#### Feedback#getVotes
Get list of votes

```javascript
// Promise
const promise = feedback.getVotes(id, ref_type, );

// Async/Await
const data = await feedback.getVotes(id, ref_type, );

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |
| id | string | vote id | 
| ref_type | string | entity type e.g. review | comment | 

This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XNumberGetResponse"
}`








Error Response:





---


#### Feedback#createVote
Create a new vote

```javascript
// Promise
const promise = feedback.createVote();

// Async/Await
const data = await feedback.createVote();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to create a new vote and the actions can be upvote or downvote.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XInsertResponse"
}`








Error Response:





---


#### Feedback#updateVote
Update vote

```javascript
// Promise
const promise = feedback.updateVote();

// Async/Await
const data = await feedback.updateVote();

```

| Argument  |  Type  | Description |
| --------- | ----  | --- |

This is used to update the vote and the actions can be upvote or downvote.

Success Response:



ok


Content Type: `application/json`

Schema: `{
  "$ref": "#/components/schemas/XUpdateResponse"
}`








Error Response:





---



---


---
---
