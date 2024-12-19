import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@daisyui/docs/landing/introduce').then((c) => c.IntroduceComponent),
    pathMatch: 'full',
    data: { hideSidebar: true },
  },
];
