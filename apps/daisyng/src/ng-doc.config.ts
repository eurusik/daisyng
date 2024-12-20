import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  routePrefix: 'docs',
  docsPath: 'apps/daisyng/src',
  repoConfig: {
    url: 'https://github.com/eurusik/daisyng',
    mainBranch: 'main',
    releaseBranch: 'release',
  },
  tsConfig: 'apps/daisyng/tsconfig.app.json',
};

export default config;
