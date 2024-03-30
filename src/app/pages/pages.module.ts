import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './Pages-routing.module';
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
  ],
})
export class PagesModule { }
