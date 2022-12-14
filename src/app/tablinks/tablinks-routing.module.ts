import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [

      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'configuraciones',
        loadChildren: () => import('../configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/perfil',
        pathMatch: 'full'
      },

    ]
  }, 
  {
    path: '',
    redirectTo: '/tablinks/perfil',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
