import { Route } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@ngx-daisyui/docs/landing/introduce').then((c) => c.IntroduceComponent),
    pathMatch: 'full',
    data: { hideSidebar: true },
  },
  {
    path: 'docs',
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      { path: '', loadComponent: () => import('@ngx-daisyui/docs/shell').then((c) => c.ShellComponent), children: NG_DOC_ROUTING },
    ]
  },
  {
    path: '**',
    redirectTo: 'docs/getting-started',
    pathMatch: 'full',
  },
];
