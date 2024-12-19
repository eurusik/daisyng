import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API References',
  keyword: 'ApiReferences',
  scopes: [
    {
      name: 'Components',
      route: 'components',
      include: 'kit/**/*.ts',
    }
  ],
};

export default Api;
