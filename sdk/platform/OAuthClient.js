const querystring = require("query-string");
const { fdkAxios } = require("../common/AxiosHelper");
const { sign } = require("../common/RequestSigner");

class FdkTokenIssueError extends Error {
  constructor(message) {
    super(message);
  }
}
class FdkOAuthCodeError extends Error {
  constructor(message) {
    super(message);
  }
}
class OAuthClient {
  constructor(config) {
    this.config = config;
    this.token = null;
    this.refreshToken = null;
    this.retryOAuthTokenTimer = null;
    this.raw_token = null;
    this.token_expires_in = null;
  }

  getAccessToken() {
    return this.token;
  }

  setToken(token) {
    this.raw_token = token;
    this.token_expires_in = token.expires_in;
    this.token = token.access_token;
    this.refreshToken = token.refresh_token ? token.refresh_token : null;
    if (this.refreshToken) {
      this.retryOAuthToken(token.expires_in);
    }
  }

  retryOAuthToken(expires_in) {
    if (this.retryOAuthTokenTimer) {
      clearTimeout(this.retryOAuthTokenTimer);
    }
    if (expires_in > 60) {
      this.retryOAuthTokenTimer = setTimeout(() => {
        this.renewAccessToken();
      }, (expires_in - 60) * 1000);
    } else {
      this.renewAccessToken();
    }
  }

  startAuthorization(options) {
    let query = {
      client_id: this.config.apiKey,
      scope: options.scope.join(","),
      redirect_uri: options.redirectUri,
      state: options.state,
      access_mode: options.access_mode,
      response_type: "code",
    };
    const queryString = querystring.stringify(query);

    let reqPath = `/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/authorize?${queryString}`;
    let signingOptions = {
      method: "GET",
      host: new URL(this.config.domain).host,
      path: reqPath,
      body: null,
      headers: {},
      signQuery: true,
    };
    signingOptions = sign(signingOptions);

    return `${this.config.domain}${signingOptions.path}`;
  }

  async verifyCallback(query) {
    if (query.error) {
      throw new FdkOAuthCodeError(query.error_description, {
        error: query.error,
      });
    }

    try {
      let reqData = {
        grant_type: "authorization_code",
        code: query.code,
      };
      const token = Buffer.from(
        `${this.config.apiKey}:${this.config.apiSecret}`,
        "utf8"
      ).toString("base64");
      let url = `${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/token`;
      const rawRequest = {
        method: "post",
        url: url,
        data: querystring.stringify(reqData),
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      let res = await fdkAxios.request(rawRequest);
      this.setToken(res);
    } catch (error) {
      if (error.isAxiosError) {
        throw new FdkTokenIssueError(error.message);
      }
      throw error;
    }
  }
  async renewAccessToken() {
    try {
      let data = querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      });
      const token = Buffer.from(
        `${this.config.apiKey}:${this.config.apiSecret}`,
        "utf8"
      ).toString("base64");
      let url = `${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/token`;
      const rawRequest = {
        method: "post",
        url: url,
        data: data,
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      let res = await fdkAxios.request(rawRequest);
      this.setToken(res);
    } catch (error) {
      if (error.isAxiosError) {
        throw new FdkTokenIssueError(error.message);
      }
      throw error;
    }
  }
}

module.exports = OAuthClient;
