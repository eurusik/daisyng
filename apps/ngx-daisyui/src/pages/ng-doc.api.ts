import { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API Reference',
  keyword: 'api reference',
  scopes: [
    {
      name: 'components',
      route: 'components',
      include: 'kit/components/**/*.ts',
    },
  ],
};

export default api;
