import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './shared/error/error.component';
import { PhoneListComponent } from './features/phone-list/phone-list.component';
import { PhoneEditComponent } from './features/phone-edit/phone-edit.component';
import { PhoneAddComponent } from './features/phone-add/phone-add.component';



const routes: Routes = [
 

  {path:"", component:PhoneListComponent},
  {path:"add",component:PhoneAddComponent},
  {path:"edit/:id",component:PhoneEditComponent},



  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
