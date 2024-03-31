import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { UserListComponent } from './Components/user-list/user-list.component';
const routes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'userList', component: UserListComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UserCardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
