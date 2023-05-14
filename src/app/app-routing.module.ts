import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photographers',
    loadChildren: () => import('./photographers/photographers.module').then(m => m.PhotographersModule)
  },
  { path: '**', redirectTo: 'photographers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
