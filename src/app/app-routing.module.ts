import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
 {path: 'item'} 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }