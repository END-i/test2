import auth0 from "auth0-js";

const AUTH_CONFIG = {
  domain: "klik23-1.auth0.com",
  clientId: "X5Ry54j2hiDOQg4u409kZh0MpBmYicKC",
  callbackUrl: "http://localhost:3000/callback"
};

const defaultPath = "/product/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid"
  });

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    this.accessToken = null;

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiresAt");

    window.location = defaultPath;
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        window.location = defaultPath;
        console.log(
          `Error: ${err.error}. Check the console for further details.`
        );
      }
    });
  };

  setSession = authResult => {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    localStorage.isLoggedIn = true;
    localStorage.accessToken = authResult.accessToken;
    localStorage.expiresAt = expiresAt;

    window.location = defaultPath;
  };

  isAuthenticated = () => {
    let expiresAt = localStorage.expiresAt;
    let bool = new Date().getTime() < expiresAt;

    if (localStorage.isLoggedIn && !bool) this.logout();
    return bool;
  };
}
