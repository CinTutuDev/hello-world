
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { DiHolaComponent } from './di-hola/di-hola.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, ComponentePadreComponent, ComponenteHijoComponent, DiHolaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
