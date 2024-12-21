import { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API',
  keyword: 'api',
  scopes: [
    {
      name: '@daisyng/kit/components',
      route: 'components',
      include: 'kit/components/**/*.ts',
    },
    {
      name: '@daisyng/kit/directives',
      route: 'directives',
      include: 'kit/directives/**/*.ts',
    },
  ],
};

export default api;
