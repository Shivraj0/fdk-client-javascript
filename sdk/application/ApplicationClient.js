const axios = require("axios");
const {
  CatalogValidator,
  CartValidator,
  LeadValidator,
  UserValidator,
  CommunicationValidator,
  ShareValidator,
  ConfigurationValidator,
  PaymentValidator,
  PosCartValidator,
  LogisticValidator,
} = require("./ApplicationModels");

const APIClient = require("./ApplicationAPIClient");
const Paginator = require("../common/Paginator");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.lead = new Lead(config);
    this.user = new User(config);
    this.communication = new Communication(config);
    this.share = new Share(config);
    this.configuration = new Configuration(config);
    this.payment = new Payment(config);
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
  }
}

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get a product
    * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sizes of a product
    * @description: A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} [arg.storeId] - The store id of the product whose sizes need to be retrieved
    
    **/
  getProductSizesBySlug({ slug, storeId } = {}) {
    const { error } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/sizes/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get price a product size
    * @description: Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
    * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
    * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
    
    **/
  getProductPriceBySlug({ slug, size, pincode, storeId } = {}) {
    const { error } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, pincode, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/sizes/%s/pincode/%s/price/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List sellers of a product
    * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
    * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/sizes/%s/pincode/%s/sellers/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List sellers of a product
    * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
    * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductSellersBySlugPaginator({ slug, size, pincode, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSellersBySlug({
        slug: slug,
        size: size,
        pincode: pincode,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Compare products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
    * @param {Object} arg - arg object.
    * @param {Array<string>} arg.slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getProductComparisonBySlugs({ slug } = {}) {
    const { error } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between similar products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/similar/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between frequently compared products with the given product
    * @description: Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/similar/compared-frequently/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get similar products
    * @description: Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
    
    **/
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const { error } = CatalogValidator.getProductSimilarByIdentifier().validate(
      { slug, similarType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/similar/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get variant of a particular product
    * @description: A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductVariantsBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/%s/variants/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemId] - Product id to get product stock (Max. 50 allowed)
    * @param {string} [arg.alu] - Product identifier alu to get product stock (Max. 50 allowed)
    * @param {string} [arg.skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
    * @param {string} [arg.ean] - Product identifier ean to get product stock (Max. 50 allowed)
    * @param {string} [arg.upc] - Product identifier upc to get product stock (Max. 50 allowed)
    
    **/
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const { error } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
    * @param {string} [arg.pageId] - will give next page results
    
    **/
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const { error } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
    
    **/
  getProductStockForTimeByIdsPaginator({ timestamp, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProductStockForTimeByIds({
        timestamp: timestamp,
        pageSize: pageSize,
        pageId: pageId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
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
  getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getBrandsPaginator({ department, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        department: department,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get metadata of a brand
    * @description: Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
    
    **/
  getBrandDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the categories
    * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    
    **/
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a category
    * @description: Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
    
    **/
  getCategoryDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getHomeProductsPaginator({ sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getHomeProducts({
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    **/
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get relevant suggestions for a search query
    * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.q - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  getSearchResults({ q } = {}) {
    const { error } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollections({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItemsBySlug({
    slug,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getCollectionItemsBySlug().validate(
      { slug, f, filters, sortOn, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/%s/items/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItemsBySlugPaginator({
    slug,
    f,
    filters,
    sortOn,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCollectionItemsBySlug({
        slug: slug,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getFollowedListing({ collectionType, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getFollowedListingPaginator({ collectionType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getFollowedListing({
        collectionType: collectionType,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Follow a particular Product
    * @description: Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {string} arg.collectionId - the `id` of the collection type you want to follow
    
    **/
  followById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/%s/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: UnFollow a Product
    * @description: You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {string} arg.collectionId - the `id` of the collection type you want to unfollow
    
    **/
  unfollowById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/%s/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Follow Count
    * @description: Get count of followers for given collection type and collection id.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - the `type` of the collection products/brands/collections.
    * @param {string} arg.collectionId - the `id` of the product/brand/collection.
    
    **/
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/%s/%s/count/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Ids of followed product, brand and collection.
    * @description: You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param {Object} arg - arg object.
    * @param {string} [arg.collectionType] - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowIds({ collectionType } = {}) {
    const { error } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List store meta information.
    * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
    * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
    * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
    * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
    
    **/
  getStores({ pageNo, pageSize, q, range, latitude, longitude } = {}) {
    const { error } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, range, latitude, longitude },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List store meta information.
    * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
    * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
    * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
    * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
    
    **/
  getStoresPaginator({ pageSize, q, range, latitude, longitude } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        range: range,
        latitude: latitude,
        longitude: longitude,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = CartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/%d`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/%d`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/%d`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    
    **/
  getShipments({ p, uid, addressId, areaCode } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, uid, addressId, areaCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {CartCheckoutRequest} arg.body
   **/
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/%s`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/%s/%s`,
      query,
      undefined
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get Ticket with the specific id
    * @description: Get Ticket with the specific id, this is used to view the ticket details
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of ticket to be retrieved
    
    **/
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/ticket/%s`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      { ticketId, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/%s/history`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get specific Custom Form using it's slug
    * @description: Get specific Custom Form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/form/%s`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   **/
  submitCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/form/%s/submit`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/%s/participants`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/%s/token`,
      query,
      undefined
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Login/Register with Facebook
   * @description: Used to login or register with Facebook
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithFacebook({ body } = {}) {
    const { error } = UserValidator.loginWithFacebook().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/facebook-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google
   * @description: Used to login or register with Google
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogle({ body } = {}) {
    const { error } = UserValidator.loginWithGoogle().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google for android
   * @description: Used to login or register with Google for android
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleAndroid({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleAndroid().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-android`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with Google for ios
   * @description: Used to login or register with google for ios
   * @param {Object} arg - arg object.
   * @param {OAuthRequestSchema} arg.body
   **/
  loginWithGoogleIOS({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleIOS().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-ios`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with OTP
   * @description: Used to login or register with OTP
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendOtpRequestSchema} arg.body
   **/
  loginWithOTP({ body, platform } = {}) {
    const { error } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/otp`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with password
   * @description: Used to login or register with email & password
   * @param {Object} arg - arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   **/
  loginWithEmailAndPassword({ body } = {}) {
    const { error } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Reset Password
   * @description: Used to reset account password
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   **/
  sendResetPasswordEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset`,
      query,
      body
    );
  }

  /**
   *
   * @summary:
   * @description:
   * @param {Object} arg - arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   **/
  forgotPassword({ body } = {}) {
    const { error } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/forgot`,
      query,
      body
    );
  }

  /**
   *
   * @summary:
   * @description: Send code incase of reset password
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  sendResetToken({ body } = {}) {
    const { error } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Login/Register with token
   * @description: Login/Register with token
   * @param {Object} arg - arg object.
   * @param {TokenRequestBodySchema} arg.body
   **/
  loginWithToken({ body } = {}) {
    const { error } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/token`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Registration Form
   * @description: Register using form
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {FormRegisterRequestSchema} arg.body
   **/
  registerWithForm({ body, platform } = {}) {
    const { error } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/register/form`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify email
   * @description: Used to verify email
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyEmail({ body } = {}) {
    const { error } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/email`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify mobile
   * @description: Verify mobile
   * @param {Object} arg - arg object.
   * @param {CodeRequestBodySchema} arg.body
   **/
  verifyMobile({ body } = {}) {
    const { error } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Check if user has password
    * @description: Checks if user is using password or not
    * @param {Object} arg - arg object.
    
    **/
  hasPassword({} = {}) {
    const { error } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/has-password`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update user password
   * @description: Used to update user password
   * @param {Object} arg - arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   **/
  updatePassword({ body } = {}) {
    const { error } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/password`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Logout user
    * @description: Used to log out user
    * @param {Object} arg - arg object.
    
    **/
  logout({} = {}) {
    const { error } = UserValidator.logout().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/logout`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Send OTP on mobile
   * @description: Used to send otp to mobile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendMobileOtpRequestSchema} arg.body
   **/
  sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on mobile
   * @description: Used to verify otp sent to mobile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {VerifyOtpRequestSchema} arg.body
   **/
  verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/verify`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send OTP on email
   * @description: Used to send otp to email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendEmailOtpRequestSchema} arg.body
   **/
  sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify OTP on email
   * @description: Used to verify otp sent to email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {VerifyOtpRequestSchema} arg.body
   **/
  verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/verify`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get logged in user
    * @description: Used to get logged in user details
    * @param {Object} arg - arg object.
    
    **/
  getLoggedInUser({} = {}) {
    const { error } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/session`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of sessions
    * @description: Lists all active sessions
    * @param {Object} arg - arg object.
    
    **/
  getListOfActiveSessions({} = {}) {
    const { error } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/sessions`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    * @param {string} [arg.name] - Name
    
    **/
  getPlatformConfig({ name } = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/platform/v1.0/config`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Edit Profile Details
   * @description: Used to update profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditProfileRequestSchema} arg.body
   **/
  updateProfile({ body, platform } = {}) {
    const { error } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add mobile number to profile
   * @description: Used to add new mobile number to profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditMobileRequestSchema} arg.body
   **/
  addMobileNumber({ body, platform } = {}) {
    const { error } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete mobile number from profile
    * @description: Used to delete mobile number from profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - Platform
    * @param {boolean} arg.active - Active mobile number
    * @param {boolean} arg.primary - Primary number
    * @param {boolean} arg.verified - Verified Number
    * @param {string} arg.countryCode - Country code of phone number
    * @param {string} arg.phone - Phone number
    
    **/
  deleteMobileNumber({
    active,
    primary,
    verified,
    countryCode,
    phone,
    platform,
  } = {}) {
    const { error } = UserValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["country_code"] = countryCode;
    query["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set mobile as primary
   * @description: Used to set a mobile number as primary
   * @param {Object} arg - arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  setMobileNumberAsPrimary({ body } = {}) {
    const { error } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to mobile
   * @description: Used to send verification link to a mobile number
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   **/
  sendVerificationLinkToMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/link/send`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Add email to profile
   * @description: Used to add new email to profile
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditEmailRequestSchema} arg.body
   **/
  addEmail({ body, platform } = {}) {
    const { error } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/email`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Delete email from profile
    * @description: Used to delete email from profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - Platform
    * @param {boolean} arg.active - Whether email id is active
    * @param {boolean} arg.primary - Whether email id is primary email
    * @param {boolean} arg.verified - Whether email id is verified
    * @param {string} arg.email - Email ID to be deleted
    
    **/
  deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/email`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Set email as primary
   * @description: Used to set an email as primart
   * @param {Object} arg - arg object.
   * @param {EditEmailRequestSchema} arg.body
   **/
  setEmailAsPrimary({ body } = {}) {
    const { error } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/primary`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send verification link to email
   * @description: Used to sent verification to an email
   * @param {Object} arg - arg object.
   * @param {string} [arg.platform] - Platform
   * @param {EditEmailRequestSchema} arg.body
   **/
  sendVerificationLinkToEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/link/send`,
      query,
      body
    );
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get communication consent
    * @description: Get communication consent
    * @param {Object} arg - arg object.
    
    **/
  getCommunicationConsent({} = {}) {
    const { error } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/communication/v1.0/consent`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Upsert communication consent
   * @description: Upsert communication consent
   * @param {Object} arg - arg object.
   * @param {CommunicationConsentReq} arg.body
   **/
  upsertCommunicationConsent({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/consent`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Upsert push token of a user
   * @description: Upsert push token of a user
   * @param {Object} arg - arg object.
   * @param {PushtokenReq} arg.body
   **/
  upsertAppPushtoken({ body } = {}) {
    const { error } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/pn-token`,
      query,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Create application QR Code
    * @description: Create application QR Code
    * @param {Object} arg - arg object.
    
    **/
  getApplicationQRCode({} = {}) {
    const { error } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create product QR Code
    * @description: Create product QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product
    
    **/
  getProductQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/products/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create collection QR Code
    * @description: Create collection QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a collection
    
    **/
  getCollectionQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/collection/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create url QR Code
    * @description: Create url QR Code
    * @param {Object} arg - arg object.
    * @param {string} arg.url - Url
    
    **/
  getUrlQRCode({ url } = {}) {
    const { error } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/url/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create short link
   * @description: Create short link
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/links/short-link/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get short link by hash
    * @description: Get short link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short link
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/%s/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get original link by hash
    * @description: Get original link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short link
    
    **/
  getOriginalShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/%s/original/`,
      query,
      undefined
    );
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get current application details
    * @description: Get current application details.
    * @param {Object} arg - arg object.
    
    **/
  getApplication({} = {}) {
    const { error } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/application`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application, owner and seller information
    * @description: Get application information with owner and seller basic details
    * @param {Object} arg - arg object.
    
    **/
  getOwnerInfo({} = {}) {
    const { error } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/about`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get basic application details
    * @description: Get basic application details like name
    * @param {Object} arg - arg object.
    
    **/
  getBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get integration tokens
    * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
    * @param {Object} arg - arg object.
    
    **/
  getIntegrationTokens({} = {}) {
    const { error } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/token`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get deployment meta stores
    * @description: Get deployment meta stores.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {string} [arg.q] - Search ordering store by name or store code
    
    **/
  getOrderingStores({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/ordering-store/stores`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get deployment meta stores
    * @description: Get deployment meta stores.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Current request items count
    * @param {string} [arg.q] - Search ordering store by name or store code
    
    **/
  getOrderingStoresPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Get features of application
    * @description: Get features of application
    * @param {Object} arg - arg object.
    
    **/
  getFeatures({} = {}) {
    const { error } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/feature`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application information
    * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
    * @param {Object} arg - arg object.
    
    **/
  getContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/information`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get application enabled currencies
    * @description: Get currency list for allowed currencies under current application
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currencies`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get currency by id
    * @description: Get currency object with symbol and name information by id.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Currency object id
    
    **/
  getCurrencyById({ id } = {}) {
    const { error } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currency/%s`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of languages
    * @description: Get list of supported languages under application.
    * @param {Object} arg - arg object.
    
    **/
  getLanguages({} = {}) {
    const { error } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/languages`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
   * @description: Get ordering store signed cookie on selection of ordering store.
   * @param {Object} arg - arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   **/
  getOrderingStoreCookie({ body } = {}) {
    const { error } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
    * @description: Unset ordering store cookie.
    * @param {Object} arg - arg object.
    
    **/
  removeOrderingStoreCookie({} = {}) {
    const {
      error,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Staff List.
    * @description: Get a staff list based on the user's session token passed in the header.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.orderIncent] - This is to check which staff members are applicable for order incentives.
    * @param {number} [arg.orderingStore] - This is to filter staff members from only selected ordering store.
    * @param {string} [arg.user] - Get single staff member details using staff user mongo id
    
    **/
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
    const { error } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_incent"] = orderIncent;
    query["ordering_store"] = orderingStore;
    query["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/staff`,
      query,
      undefined
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get payment gateway keys
    * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
    * @param {Object} arg - arg object.
    * @param {string} arg.xApiToken - api token
    * @param {boolean} [arg.refresh] - refresh cache
    
    **/
  getAggregatorsConfig({ xApiToken, refresh } = {}) {
    const { error } = PaymentValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/config/aggregators/key`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Attach a saved card to customer.
   * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
   * @param {Object} arg - arg object.
   * @param {AttachCardRequest} arg.body
   **/
  attachCardToCustomer({ body } = {}) {
    const { error } = PaymentValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/attach`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch active payment gateway for card
    * @description: Fetch active payment gateway along with customer id for cards payments.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.refresh] - 
    
    **/
  getActiveCardAggregator({ refresh } = {}) {
    const { error } = PaymentValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/card/aggregator`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch the list of saved cards of user.
    * @description: Fetch the list of saved cards of user from active payment gateway.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.forceRefresh] - 
    
    **/
  getActiveUserCards({ forceRefresh } = {}) {
    const { error } = PaymentValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/cards`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Delete an user card.
   * @description: Delete an added user card on payment gateway and remove from cache.
   * @param {Object} arg - arg object.
   * @param {DeletehCardRequest} arg.body
   **/
  deleteUserCard({ body } = {}) {
    const { error } = PaymentValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/remove`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Validate customer for payment.
   * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
   * @param {Object} arg - arg object.
   * @param {ValidateCustomerRequest} arg.body
   **/
  verifyCustomerForPayment({ body } = {}) {
    const { error } = PaymentValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/customer/validation`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Verify and charge payment
   * @description: Verify and charge payment server to server for Simpl & Mswipe.
   * @param {Object} arg - arg object.
   * @param {ChargeCustomerRequest} arg.body
   **/
  verifyAndChargePayment({ body } = {}) {
    const { error } = PaymentValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/charge`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Payment Initialisation server to server for UPI and BharatQR.
   * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
   * @param {Object} arg - arg object.
   * @param {PaymentInitializationRequest} arg.body
   **/
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/request`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Continous polling to check status of payment on server.
   * @description: Continous polling on interval to check status of payment untill timeout.
   * @param {Object} arg - arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   **/
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/polling`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payment amount
    * @param {string} arg.cartId - Cart id
    * @param {string} arg.pincode - Pincode
    * @param {string} arg.checkoutMode - Checkout mode
    * @param {boolean} [arg.refresh] - 
    * @param {string} [arg.assignCardId] - selected card id
    * @param {string} [arg.userDetails] - URIencoded json annonymous user
    
    **/
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        refresh,
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options for POS
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payment amount
    * @param {string} arg.cartId - Cart id
    * @param {string} arg.pincode - Pincode
    * @param {string} arg.checkoutMode - Checkout mode
    * @param {boolean} [arg.refresh] - 
    * @param {string} [arg.assignCardId] - selected card id
    * @param {string} arg.orderType - Order type
    * @param {string} [arg.userDetails] - URIencoded json annonymous user
    
    **/
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["order_type"] = orderType;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options/pos`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List User Beneficiary
    * @description: Get all active  beneficiary details added by the user for refund
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - 
    
    **/
  getUserBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/user/beneficiary`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Ifsc Code Verification
    * @description: Get True/False for correct IFSC Code for adding bank details for refund
    * @param {Object} arg - arg object.
    * @param {string} [arg.ifscCode] - 
    
    **/
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/ifsc-code/verify`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List Order Beneficiary
    * @description: Get all active  beneficiary details added by the user for refund
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - 
    
    **/
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/order/beneficiaries`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Save Beneficiary details on otp validation.
   * @description: Save Beneficiary details on otp validation.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/bank`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   * @param {Object} arg - arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   **/
  addBeneficiaryDetails({ body } = {}) {
    const { error } = PaymentValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/account`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Send Otp on Adding wallet beneficiary
   * @description: Send Otp on Adding wallet beneficiary for user mobile verification
   * @param {Object} arg - arg object.
   * @param {WalletOtpRequest} arg.body
   **/
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/wallet`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Mark Default Beneficiary For Refund
   * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
   * @param {Object} arg - arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   **/
  updateDefaultBeneficiary({ body } = {}) {
    const { error } = PaymentValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/beneficiary/default`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = PosCartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const { error } = PosCartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const { error } = PosCartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const { error } = PosCartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const { error } = PosCartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = PosCartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const { error } = PosCartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = PosCartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const { error } = PosCartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/%d`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const { error } = PosCartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/%d`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const { error } = PosCartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/%d`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const { error } = PosCartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = PosCartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pickAtStoreUid] - 
    * @param {number} [arg.orderingStoreId] - 
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    * @param {string} [arg.orderType] - Order type of shipment
    
    **/
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    uid,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const { error } = PosCartValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        p,
        uid,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] - Get items or not
   * @param {boolean} [arg.p] - Get payment options or not
   * @param {number} [arg.uid] - Cart id
   * @param {number} [arg.addressId] - Address id
   * @param {string} [arg.orderType] - Order is hand over or home delivery
   * @param {UpdateCartShipmentRequest} arg.body
   **/
  updateShipments({ body, i, p, uid, addressId, orderType } = {}) {
    const { error } = PosCartValidator.updateShipments().validate(
      { body, i, p, uid, addressId, orderType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {CartPosCheckoutRequest} arg.body
   **/
  checkoutCart({ body, uid } = {}) {
    const { error } = PosCartValidator.checkoutCart().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const { error } = PosCartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get available delivery modes for cart
    * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
    * @param {Object} arg - arg object.
    * @param {string} arg.areaCode - 
    * @param {number} [arg.uid] - 
    
    **/
  getAvailableDeliveryModes({ areaCode, uid } = {}) {
    const { error } = PosCartValidator.getAvailableDeliveryModes().validate(
      { areaCode, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of stores for give uids
    * @description: Get list of stores by providing pick up available store uids.
    * @param {Object} arg - arg object.
    * @param {number} arg.storeUid - 
    
    **/
  getStoreAddressByUid({ storeUid } = {}) {
    const { error } = PosCartValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const { error } = PosCartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const { error } = PosCartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/%s`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = PosCartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/%s/%s`,
      query,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Get Tat Product
   * @description: Get Tat Product
   * @param {Object} arg - arg object.
   * @param {GetTatProductReqBody} arg.body
   **/
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/logistics/v1.0`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get City from Pincode
    * @description: Get City from Pincode
    * @param {Object} arg - arg object.
    * @param {string} arg.pincode - Pincode
    
    **/
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/logistics/v1.0/pincode/%s`,
      query,
      undefined
    );
  }
}

module.exports = ApplicationClient;
