import { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API',
  keyword: 'api',
  scopes: [
    {
      name: '@components/avatar',
      route: 'components',
      include: 'kit/components/avatar/**/*.component.ts',
    },
    {
      name: '@directives/button',
      route: 'directives',
      include: 'kit/directives/button/**/*.directive.ts',
    },
    {
      name: '@directives/alert',
      route: 'directives',
      include: 'kit/directives/alert/**/*.directive.ts',
    },
    {
      name: '@directives/avatar',
      route: 'directives',
      include: 'kit/directives/avatar/**/*.directive.ts',
    },
  ],
};

export default api;
