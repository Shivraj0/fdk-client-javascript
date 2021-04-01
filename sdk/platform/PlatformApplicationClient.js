const {
  Lead,
  Theme,
  User,
  Payment,
  Catalog,
  Assets,
} = require("./PlatformApplicationModels");

class Application {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.theme = new Theme(config, applicationId);
    this.user = new User(config, applicationId);
    this.payment = new Payment(config, applicationId);
    this.catalog = new Catalog(config, applicationId);
    this.assets = new Assets(config, applicationId);
  }
}

module.exports = Application;
