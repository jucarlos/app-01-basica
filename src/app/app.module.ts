import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { BorrarCompoenteComponent } from './borrar-compoente/borrar-compoente.component';




@NgModule({
  declarations: [
    AppComponent,
    ColegiosComponent,
    BorrarCompoenteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
