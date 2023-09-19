
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, ComponentePadreComponent, ComponenteHijoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
