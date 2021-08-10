import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModule } from './pages/items/list.module';


const routes : Routes = [
 {path: 'item' , component : ListModule} 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }