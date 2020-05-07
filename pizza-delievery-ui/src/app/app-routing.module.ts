import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/app.test.component'
import {CartComponent} from './components/app.cart'
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login components/login.component"
import {RegisterComponent} from "./components/login components/registercomponent"
import {UserProfleComponent} from "./components/profile_components/app.profile"
import {OrderComponent} from './components/order component/orderAndPayment.component'
const routes: Routes = [{
  path: '',
  redirectTo:"homepage",
  pathMatch: 'full'
},
{
  path:'homepage',
  component:TestComponent
}
,
{
  path:'cart',
  component: CartComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'profile',
  component:UserProfleComponent
},
{
  path:'order',
  component:OrderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
