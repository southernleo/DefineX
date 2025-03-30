// src/services/auth.js
import { UserManager, WebStorageStateStore } from 'oidc-client';

// Identity Server yapılandırması - 
const config = {
  authority: 'https://localhost:7189/auth', // Identity Server URL'si
  client_id: 'DefineX', // Identity Server'da tanımladığınız client ID
  client_secret: 'secret', // Client secret
  redirect_uri: window.location.origin,
  response_type: 'code', // Authorization Code flow 
  scope: 'DefineX', // 
  post_logout_redirect_uri: window.location.origin,
  silent_redirect_uri: window.location.origin,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage })
};

const userManager = new UserManager(config);

// Silent renew hata olayını dinle
userManager.events.addSilentRenewError(function (error) {
  console.error('Silent renew error:', error);
});

export default {
  userManager: userManager,
  
  // Giriş yap
  login() {
    return userManager.signinRedirect();
  },
  
  // Çıkış yap
  logout() {
    return userManager.signoutRedirect();
  },
  
  // Mevcut kullanıcıyı getir
  getUser() {
    return userManager.getUser();
  },
  
  // Callback işleme
  handleCallback() {
    return userManager.signinRedirectCallback();
  },
  
  // Token yenileme
  renewToken() {
    return userManager.signinSilent();
  },
  
  // Kullanıcının kimlik doğrulamasını kontrol et
  isAuthenticated() {
    return userManager.getUser().then(user => {
      return !!user && !user.expired;
    });
  },
  
  // Token içindeki yetkileri kontrol et
  hasRole(role) {
    return userManager.getUser().then(user => {
      if (!user) return false;
      return user.profile.role && (
        Array.isArray(user.profile.role) 
          ? user.profile.role.includes(role) 
          : user.profile.role === role
      );
    });
  }
};