import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
