import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/items/list.component';



const routes : Routes = [
 {path: 'item' , component : ListComponent} 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }