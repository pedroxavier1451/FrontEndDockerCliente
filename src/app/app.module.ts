import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { UpdClienteComponent } from './pages/upd-cliente/upd-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    InicioComponent,
    ListClienteComponent,
    UpdClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
