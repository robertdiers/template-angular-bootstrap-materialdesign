import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
registerLocaleData(localeDE, 'de');

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent,
    FeatureComponent
  ],
  imports: [    
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
