# FDK Javascript

FDK client for Javascript

## Getting Started

Get started with the Javascript Development SDK for Fynd Platform

### Usage

```
npm install fdk-client-javascript --save
```

Using this method, you can `require` fdk-client-javascript like so:

```js
const {
  ApplicationConfig,
  ApplicationClient,
} = require("fdk-client-javascript");
```

### Sample Usage (ApplicationClient):

```javascript
const config = new ApplicationConfig({
  applicationID: "YOUR_APPLICATION_ID",
  applicationToken: "YOUR_APPLICATION_TOKEN",
});

const applicationClient = new ApplicationClient(config);

async function getProductDetails() {
  try {
    const product = await applicationClient.catalog.getProductDetailBySlug(
      "product-slug"
    );
    console.log(product.name);
  } catch (err) {
    console.log(err);
  }
}

getProductDetails();
```

### Sample Usage (PlatformClient):

```javascript
const { PlatformConfig, PlatformClient } = require("fdk-client-javascript");

let platformConfig = new PlatformConfig({
  company: 1,
  baseUrl: "api.fyndx0.de",
});

async function getData() {
  try {
    // TODO: get token using OAuth
    platformConfig.oauthClient.setToken(token.access_token);
    const client = new PlatformClient(platformConfig);

    // API's without application_id
    const tickets = await client.lead.getTickets();
    console.log("tickets", tickets);

    // API's with application_id
    const customers = await client
      .application("5fa24ca5756695531fa1eefb")
      .user.getCustomers();
    console.log("customers", customers);
  } catch (err) {
    console.log(err);
  }
}

getData();
```

### TypeScript

fdk-client-javascript includes Typescript definitions.

```typescript
import { ApplicationConfig, ApplicationClient } from "fdk-client-javascript";
```

### Documentation

- [Application Front](documentation/APPLICATION.md)
- [Platform](documentation/PLATFORM.md)
