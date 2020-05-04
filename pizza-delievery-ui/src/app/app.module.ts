import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductService} from './services/project.services'
import {TestComponent} from './components/app.test.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
