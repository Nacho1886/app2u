import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PhotographersRoutingModule } from './photographers-routing.module';

import { PhotographerCardComponent } from './pages/list/components/photographer-card/photographer-card.component';
import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';
import { MenuComponent } from './pages/list/components/menu/menu.component';
import { HeaderComponent } from './pages/list/components/header/header.component';



@NgModule({
  declarations: [
    ListComponent,
    PhotographerCardComponent,
    FileComponent,
    MenuComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PhotographersRoutingModule,
    SharedModule,
  ]
})
export class PhotographersModule { }
