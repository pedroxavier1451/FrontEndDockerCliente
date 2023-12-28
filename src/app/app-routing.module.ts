import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Inicio',component:InicioComponent},
  {path: 'paginas/Clientes',component:ClienteComponent},
  {path: 'paginas/ListClientes',component:ListClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
