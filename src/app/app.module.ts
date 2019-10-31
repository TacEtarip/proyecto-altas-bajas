import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// importando un segundo modulo que solo contiene angular material
import { AppMaterialModule } from './app-material.module';

import { appRoutes } from './app-routing.module'; // importando un el router
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageShowErrorComponent } from './pop-messages/message-show-error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageShowErrorComponent
  ],
  imports: [
    BrowserModule,
    appRoutes, // importando un el router
    ReactiveFormsModule,
    BrowserAnimationsModule, // importando un segundo modulo que solo contiene angular material
    HttpClientModule,
    AppMaterialModule
  ],
  entryComponents: [MessageShowErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
