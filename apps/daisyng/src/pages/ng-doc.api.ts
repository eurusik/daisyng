import { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API',
  keyword: 'api',
  scopes: [
    {
      name: 'components',
      route: 'components',
      include: 'kit/components/**/*.ts',
    },
  ],
};

export default api;
