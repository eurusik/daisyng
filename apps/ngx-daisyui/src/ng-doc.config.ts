import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  routePrefix: 'docs',
  docsPath: 'apps/ngx-daisyui/src',
  repoConfig: {
    url: 'https://github.com/eurusik/ngx-daisyui',
    mainBranch: 'main',
    releaseBranch: 'release',
  },
  tsConfig: 'apps/ngx-daisyui/tsconfig.app.json',
};

export default config;
