import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductService} from './services/project.services'
import {TestComponent} from './components/app.test.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NotifierModule } from "angular-notifier";
import { CommonModule } from "@angular/common";
import {CartComponent} from "./components/app.cart"
import {FormsModule} from '@angular/forms';
import {LoginComponent} from "./components/login components/login.component"
import {RegisterComponent} from "./components/login components/registercomponent"
import {UserProfleComponent} from "./components/profile_components/app.profile"
import { ReactiveFormsModule } from '@angular/forms'
import {orderAndPayment} from './components/order component/orderAndPayment.component'
import {FilterDetails} from './pipes/credicarPipe'
import { AdminAddItemComponent } from './components/admincomponents/adminadditem.component';
import { AdminDeleteItemComponent } from './components/admincomponents/admindeleteitem.component';
import { AdminDeleteStoreComponent } from './components/admincomponents/admindeletestore.component';
import { AdminAddStoreComponent } from './components/admincomponents/adminaddstore.component';
import { AdminPageComponent } from './components/admincomponents/adminpage.component';
import {TableBorderedComponent} from './components/admincomponents/foodview'
import { StoreViewComponent} from './components/admincomponents/Storeview'
import {AdminUpdateItemComponent} from './components/admincomponents/adminupdateitem.component'
@NgModule({
  declarations:[
    AppComponent,TestComponent,
    CartComponent,LoginComponent,
    RegisterComponent,UserProfleComponent,
    orderAndPayment,FilterDetails,LoginComponent,
    AdminAddItemComponent,AdminDeleteItemComponent,
    AdminDeleteStoreComponent,AdminAddStoreComponent,
    AdminPageComponent,TableBorderedComponent,
    StoreViewComponent,AdminUpdateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
    CommonModule,
    
    MDBBootstrapModule.forRoot(),
    NotifierModule.withConfig({
      position: {
 
        horizontal: {
       
          /**
           * Defines the horizontal position on the screen
           * @type {'left' | 'middle' | 'right'}
           */
          position: 'right',
       
          /**
           * Defines the horizontal distance to the screen edge (in px)
           * @type {number} 
           */
          distance: 12
       
        },
       
        vertical: {
       
          /**
           * Defines the vertical position on the screen
           * @type {'top' | 'bottom'}
           */
          position: 'top',
       
          /**
           * Defines the vertical distance to the screen edge (in px)
           * @type {number} 
           */
          distance: 12
       
          /**
           * Defines the vertical gap, existing between multiple notifications (in px)
           * @type {number} 
           */
        
       
        }
       
      }
    })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
