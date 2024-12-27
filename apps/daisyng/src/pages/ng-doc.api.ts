import { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API',
  keyword: 'api',
  scopes: [
    {
      name: '@directives/button',
      route: 'directives',
      include: 'kit/directives/button/**/*.ts',
    },
    {
      name: '@directives/alert',
      route: 'directives',
      include: 'kit/directives/alert/**/*.ts',
    },
  ],
};

export default api;
