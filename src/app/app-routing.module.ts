import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { LoginComponent } from './components/login/login.component';
import { SubirfotoComponent } from './components/subirfoto/subirfoto.component';
const routes: Routes = [

  { path:'',component:TareasComponent },
  { path:'login',component:LoginComponent },
  { path:'foto',component: SubirfotoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
