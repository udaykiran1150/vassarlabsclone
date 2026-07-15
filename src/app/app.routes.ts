import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout').then((c) => c.Layout),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'watertech',
        loadComponent: () => import('./pages/watertech/watertech').then((c) => c.Watertech),
      },
      {
        path: 'disaster',
        loadComponent: () => import('./pages/disaster/disaster').then((c) => c.Disaster),
      },
      {
        path: 'agritech',
        loadComponent: () => import('./pages/agritech/agritech').then((c) => c.Agritech),
      },
      {
        path: 'industry',
        loadComponent: () => import('./pages/industry/industry').then((c) => c.Industry),
      },
      {
        path: 'resources',
        loadComponent: () => import('./pages/resources/resources').then((c) => c.Resources),
      },
      {
        path: 'company',
        loadComponent: () => import('./pages/company/company').then((c) => c.Company),
      },
    ],
  },
];
