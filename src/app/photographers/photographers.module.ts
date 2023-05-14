import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PhotographersRoutingModule } from './photographers-routing.module';

import { PhotographerCardComponent } from './pages/list/components/starship-card/photographer-card.component';
import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';



@NgModule({
  declarations: [
    ListComponent,
    PhotographerCardComponent,
    FileComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PhotographersRoutingModule,
    SharedModule,
  ]
})
export class PhotographersModule { }
