import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then((m) => m.Inicio),
    pathMatch: 'full',
  },
  {
    path: 'colaboradores',
    loadComponent: () =>
      import('./pages/colaboradores/colaboradores').then(
        (m) => m.Colaboradores,
      ),
  },
  {
    path: 'finanzas',
    loadComponent: () =>
      import('./pages/finanzas/finanzas').then((m) => m.Finanzas),
  },
  {
    path: 'horario',
    loadComponent: () =>
      import('./pages/horario/horario').then((m) => m.Horario),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
