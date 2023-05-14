import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: FileComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographersRoutingModule {}
