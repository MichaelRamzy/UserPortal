import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './Pages-routing.module';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { UserListComponent } from './Components/user-list/user-list.component';
@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
  ],
})
export class PagesModule { }
