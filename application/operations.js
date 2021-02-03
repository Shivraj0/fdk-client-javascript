
const APIClient = require("./api_client");
const Configuration = require("./configuration");



const { 
    ProductListingActionPage,
    ProductListingAction,
    Media,
    ProductBrand,
    ProductDetailAttribute,
    ProductDetailGroupedAttribute,
    ProductDetailSchemaV1,
    ProductPage,
    ProductFiltersValue,
    ProductFiltersKey,
    ProductFilters,
    ProductSortOn,
    ProductSearchSchemaV1,
    ErrorSchemaV1,
    Error,
    Price,
    ProductListingPrice,
    ProductSize,
    ProductSizeStores,
    ProductSizesSchemaV1,
    ProductStockPrice,
    ProductSeller,
    ProductSizePriceArticleAssignment,
    ProductSizePriceSchemaV1,
    ProductSizeSellerFilter,
    ProductSizeSellerSchemaV1,
    ProductSimilarItem,
    SimilarProductByTagSchemaV1,
    ProductVariantItemSchemaV1,
    ProductVariantSchemaV1,
    CompanyDetail,
    StoreDetail,
    ProductStockStatusItem,
    ProductStockStatusSchemaV1,
    ProductStockStatusPollSchemaV1,
    ImageUrls,
    BrandItem,
    BrandListingSchemaV1,
    BrandMetaV1,
    CategoryItems,
    DepartmentCategoryTree,
    DepartmentIdentifier,
    CategoryListingSchemaV1,
    CategoryMetaV1,
    Page,
    HomeListingSchemaV1,
    DepartmentSchemaV1,
    AutocompleteItemSchemaV1,
    AutoCompleteSchemaV1,
    GetCollectionNest,
    CollectionListingFilterTag,
    CollectionListingFilterType,
    CollectionListingFilter,
    GetCollectionResponseSchemaV1,
    GetCollectionItemResponseSchemaV1,
    CollectionResponseV1,
    NextPage,
    GetFollowResponse,
    PlatformFollowPostResponseSchemaV1,
    FollowCountResponseV1,
    FollowUidsData,
    FollowUidsResponseV1
} = require("./schema");

    
class Catalog {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductSearchSchemaV1`
    **/
    getProducts(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/",
        );
    }
    
    /**
    *
    * Summary: Get a product
    * Description:  Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **identifier**. If successful, returns a Product resource in the response body specified in `ProductDetailSchemaV1`
    **/
    getProductDetailByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/detail/",
        );
    }
    
    /**
    *
    * Summary: Get the sizes of a product
    * Description:  A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizesSchemaV1`
    **/
    getProductSizesByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/sizes/",
        );
    }
    
    /**
    *
    * Summary: Get price a product
    * Description:  Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size.
    **/
    getProductPriceByIdentifier(
        size, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/sizes/price/",
        );
    }
    
    /**
    *
    * Summary: List sellers of a product
    * Description:  A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    **/
    getProductSellersByIdentifier(
        size, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/sizes/sellers/",
        );
    }
    
    /**
    *
    * Summary: Get similar products
    * Description:  Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on tag as described in `SimilarProductByTagSchemaV1`
    **/
    getProductSimilarByIdentifier(
        tagIdentifier, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/similar/{tag_identifier}/",
        );
    }
    
    /**
    *
    * Summary: Get variant of a particular product
    * Description:  A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantSchemaV1`
    **/
    getProductVariantsByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/variant/",
        );
    }
    
    /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Currently a maximum of 50 distinct product IDs can be given in a single API request
    **/
    getProductStockByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/stock-status/",
        );
    }
    
    /**
    *
    * Summary: Get the stock of a product
    * Description:  Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    **/
    getProductStockForTimeByIdentifier(
        timestamp, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/products/stock-status/poll/",
        );
    }
    
    /**
    *
    * Summary: List all the brands
    * Description:  A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingSchemaV1`
    **/
    getBrands(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/brands/",
        );
    }
    
    /**
    *
    * Summary: Get metadata of a brand
    * Description:  Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandMetaV1`
    **/
    getBrandDetailByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/brands/detail/",
        );
    }
    
    /**
    *
    * Summary: List all the categories
    * Description:  List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingSchemaV1`
    **/
    getCategories(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/categories/",
        );
    }
    
    /**
    *
    * Summary: Get metadata of a category
    * Description:  Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaV1`
    **/
    getCategoryDetailByIdentifier(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/categories/detail/",
        );
    }
    
    /**
    *
    * Summary: List the products
    * Description:  List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingSchemaV1`
    **/
    getHomeProducts(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/home/listing/",
        );
    }
    
    /**
    *
    * Summary: List all the departments
    * Description:  Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the &#39;Women&#39;s Fashion&#39; Department while a handbag can lie in &#39;Women&#39;s Accessories&#39; Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentSchemaV1`
    **/
    (
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/departments/",
        );
    }
    
    /**
    *
    * Summary: Get relevant suggestions for a search query
    * Description:  Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that&#39;s generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    **/
    getSearchResults(
        q, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/auto-complete/",
        );
    }
    
    /**
    *
    * Summary: List all the collections
    * Description:  A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    **/
    getCollections(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/",
        );
    }
    
    /**
    *
    * Summary: Get the items in a collection
    * Description:  Get items in a collection specified by its `slug`.
    **/
    getCollectionItemsBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/{slug}/items/",
        );
    }
    
    /**
    *
    * Summary: Get a particular collection
    * Description:  Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionResponseV1`
    **/
    getCollectionDetailBySlug(
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/collections/{slug}",
        );
    }
    
    /**
    *
    * Summary: Get a list of followed Products
    * Description:  A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    **/
    getFollowProducts(
        fSession, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/products/",
        );
    }
    
    /**
    *
    * Summary: Follow a particular Product
    * Description:  Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    **/
    saveFollowProductById(
        productId, opts
        fSession, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/catalog/v1.0/follow/products/{product_id}",
        );
    }
    
    /**
    *
    * Summary: UnFollow a Product
    * Description:  You can undo a followed Product or Brand by its uid, we refer this action as _unfollow_. Pass the uid of the product in request URL
    **/
    unfollowProductById(
        productId, opts
        fSession, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/catalog/v1.0/follow/products/{product_id}",
        );
    }
    
    /**
    *
    * Summary: Get Follow Count
    * Description:  Get count of followers for given collection type and collection id.
    **/
    getFollowProductCountById(
        collectionType, opts
        collectionId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count",
        );
    }
    
    /**
    *
    * Summary: Get the Uids of followed product, brand and collection.
    * Description:  You can get the uids of all the followed Product, Brand and Collections.
    **/
    getFollowIDsByType(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/catalog/v1.0/follow/all/uids/",
        );
    }
    
}


exports.Catalog = Catalog;



const { 
    GetCartV1Serializer,
    ProductCart,
    CartV1Serializer,
    PaymentFlow,
    PaymentFlows,
    PaymentOption,
    PaymentOptions,
    CartCurrency,
    ProductPrice,
    ProductPriceInfo,
    ProductAvailability,
    ActionQuery,
    Action,
    CategoryInfo,
    Image,
    BaseInfo,
    Product,
    PlatformCartProductInfoV1,
    DisplayBreakup,
    LoyaltyPoints,
    RawBreakup,
    CouponBreakup,
    BaseCartBreakup,
    PlatformV1Cart,
    UpdateProductCart,
    UpdateCartV1Serializer,
    PageCoupon,
    Coupon,
    GetCouponResponse,
    Loyality,
    RawCoupon,
    GetCoupon,
    SaveCoupon,
    SaveCouponResponse,
    OfferSeller,
    OfferPrice,
    OfferItem,
    BulkPriceOffer,
    BulkPriceResponse,
    Address,
    GetAddressResponse,
    SaveAddressRequest,
    SaveAddressResponse,
    UpdateAddressRequest,
    UpdateAddressResponse,
    DeleteAddressResponse,
    SelectCartAddressRequest,
    UpdateCartPaymentRequest,
    ShipmentResponse,
    ShipmentCart,
    CartCheckoutRequestSerializer,
    DeliverySlot,
    DeliverySlotDate,
    CheckCart,
    OrderData,
    CartCheckoutResponse,
    Meta,
    SharedCartDetails,
    SharedPlatformV1Cart
} = require("./schema");

    
class Cart {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Fetch all Items Added to  Cart
    * Description:  Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in GetCartV1Serializer
    **/
    getCart(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/details",
        );
    }
    
    /**
    *
    * Summary: Fetch Last-Modified timestamp
    * Description:  Fetch Last-Modified timestamp in header metadata
    **/
    getCartLastModified(
    ) {
        return APIClient.execute(
            this._conf,
            "head",
            "/service/application/cart/v1.0/details",
        );
    }
    
    /**
    *
    * Summary: Add Items to Cart
    * Description:  &lt;p&gt;Add Items to cart. See `CartV1Serializer` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items ,coupons available etc.these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;seller_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;store_id&lt;/font&gt;  &quot;/platform/content/v1/products/{slug}/sizes/price&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;/ul&gt;
    **/
    addItemsToCart(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/details",
        );
    }
    
    /**
    *
    * Summary: Update Items already added to Cart
    * Description:  Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api&#39;s&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;font color=&quot;monochrome&quot;&gt;operation&lt;/font&gt; Operation for current api call. &lt;b&gt;update_item&lt;/b&gt; for update items. &lt;b&gt;remove_item&lt;/b&gt; for removing items.&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_id&lt;/font&gt;  &quot;/platform/content/v1/products/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_size&lt;/font&gt;   &quot;/platform/content/v1/products/{slug}/sizes/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;quantity&lt;/font&gt;  item quantity (must be greater than or equal to 1)&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;article_id&lt;/font&gt;   &quot;/content​/v1​/products​/{identifier}​/sizes​/price​/&quot;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;item_index&lt;/font&gt;  item position in the cart (must be greater than or equal to 0)&lt;/li&gt; &lt;/ul&gt;
    **/
    updateCart(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/details",
        );
    }
    
    /**
    *
    * Summary: Cart item count
    * Description:  Get total count of item present in cart
    **/
    getCartItemCount(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/basic",
        );
    }
    
    /**
    *
    * Summary: Fetch Coupon
    * Description:  Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponseSchema
    **/
    getCouponList(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Apply Coupon
    * Description:  &lt;p&gt;Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;coupon_code&lt;/font&gt;&lt;/li&gt;
&lt;/ul&gt;
    **/
    applyCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Remove Coupon Applied
    * Description:  Remove Coupon applied on the cart by passing uid in request body.
    **/
    removeCoupon(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/cart/v1.0/coupon",
        );
    }
    
    /**
    *
    * Summary: Get discount offers based on quantity
    * Description:  List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    **/
    getBulkDiscountOffers(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/bulk-price",
        );
    }
    
    /**
    *
    * Summary: Fetch Address
    * Description:  Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;
    **/
    getAddressList(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Add Address to the account
    * Description:  &lt;p&gt;Add Address to account. See `SaveAddressRequestSchema` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
    **/
    addAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/address",
        );
    }
    
    /**
    *
    * Summary: Fetch Single Address
    * Description:  Get a addresses with the given id. If successful, returns a Address resource in the response body specified in GetAddressResponseSchema.attibutes listed below are optional &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;mobile_no&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;checkout_mode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;tags&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;default&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;
    **/
    getAddressById(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Update Address alreay added to account
    * Description:  Request object containing attributes mentioned in  &lt;font color=&quot;blue&quot;&gt;UpdateAddressRequestSchema &lt;/font&gt; can be updated .these attributes are :&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;is_default_address&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;landmark&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;area&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;pincode&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;email&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_type&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;name&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;
    **/
    updateAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Remove Address Associated to the account
    * Description:  Delete a Address by it&#39;s address_id. Returns an object that tells whether the address was deleted successfully
    **/
    removeAddress(
        id, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/application/cart/v1.0/address/{id}",
        );
    }
    
    /**
    *
    * Summary: Select Address from All Addresses
    * Description:  &lt;p&gt;Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequestSchema` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. &lt;ul&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;billing_address_id&lt;/font&gt;&lt;/li&gt; &lt;li&gt; &lt;font color=&quot;monochrome&quot;&gt;uid&lt;/font&gt;&lt;/li&gt; &lt;/ul&gt;
    **/
    selectCartAddress(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/select-address",
        );
    }
    
    /**
    *
    * Summary: Gte Cart Payment for valid coupon
    * Description:  Validate coupon for selected payment mode
    **/
    getCartPaymentModes(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Update Cart Payment
    * Description:  Update Cart Payment for Your Account
    **/
    selectCartPaymentMode(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/payment",
        );
    }
    
    /**
    *
    * Summary: Get delivery date and options before checkout
    * Description:  Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    **/
    getCartShipments(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/shipment",
        );
    }
    
    /**
    *
    * Summary: Checkout Cart
    * Description:  Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
    **/
    checkoutCart(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/checkout",
        );
    }
    
    /**
    *
    * Summary: Update Cart Meta
    * Description:  Update cart meta like checkout_mode, gstin.
    **/
    updateCartMeta(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/application/cart/v1.0/meta",
        );
    }
    
    /**
    *
    * Summary: Generate Cart sharing link token
    * Description:  Generates shared cart snapshot and returns shortlink token
    **/
    getCartShareLink(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/share-cart",
        );
    }
    
    /**
    *
    * Summary: Get shared cart snapshot and cart response
    * Description:  Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    **/
    getCartSharedItems(
        token, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/application/cart/v1.0/share-cart/{token}",
        );
    }
    
    /**
    *
    * Summary: Merge or Replace existing cart
    * Description:  Merge or Replace cart based on `action` parameter with shared cart of `token`
    **/
    updateCartWithSharedItems(
        token, opts
        action, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/application/cart/v1.0/share-cart/{token}/{action}",
        );
    }
    
}


exports.Cart = Cart;



const { 
    Priority,
    Status,
    Category,
    CustomForm,
    TicketHistory,
    Ticket
} = require("./schema");

    
class Lead {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get Tickets
    * Description:  Get Tickets
    **/
    getTicket(
        id, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/ticket/{id}",
        );
    }
    
    /**
    *
    * Summary: Create history for Ticket
    * Description:  Create history for Ticket
    **/
    createHistoryForTicket(
        ticketId, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Create Ticket
    * Description:  Create Ticket
    **/
    createTicket(
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/ticket/",
        );
    }
    
    /**
    *
    * Summary: Get Custom Form
    * Description:  Get Custom Form
    **/
    getForm(
        slug, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/lead/form/{slug}",
        );
    }
    
    /**
    *
    * Summary: Submit Form Response
    * Description:  Submit Form Response
    **/
    submitForm(
        slug, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/services/application/lead/form/{slug}/submit",
        );
    }
    
    /**
    *
    * Summary: Get participants of Video Room
    * Description:  Get participants of Video Room
    **/
    getParticipantsInsideVideoRoom(
        uniqueName, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/room/{unique_name}/participants",
        );
    }
    
    /**
    *
    * Summary: Get Token to join Video Room
    * Description:  Get Token to join Video Room
    **/
    getTokenForVideRoom(
        uniqueName, opts
        xApplicationId, opts
        xApplicationToken, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/services/application/room/{unique_name}/token",
        );
    }
    
}


exports.Lead = Lead;


