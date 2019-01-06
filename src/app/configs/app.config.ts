import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    resume: 'resume',
    error404: '404'
  },
  endpoints: {
    server_url: 'http://localhost:8080',
    path_upload: 'http://localhost:4200/assets/images/upload/'
  }
};
