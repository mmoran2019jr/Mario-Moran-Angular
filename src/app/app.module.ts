import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PolizaActualizarComponent } from './components/poliza-actualizar/poliza-actualizar.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const appRoutes: Routes = [
  {path: 'listadoPolizas', component:PolizasComponent},
  {path: 'listadoClientes', component:ClientesComponent},
  {path: 'actualizar/:id', component:PolizaActualizarComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    PolizasComponent,
    NavbarComponent,
    PolizaActualizarComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
