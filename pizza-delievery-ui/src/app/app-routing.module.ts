import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './components/app.test.component'
import {CartComponent} from './components/app.cart'
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login components/login.component"
import {RegisterComponent} from "./components/login components/registercomponent"
import {UserProfleComponent} from "./components/profile_components/app.profile"
import {orderAndPayment} from './components/order component/orderAndPayment.component'
import { AdminAddItemComponent } from './components/admincomponents/adminadditem.component';
import { AdminDeleteItemComponent } from './components/admincomponents/admindeleteitem.component';
import { AdminDeleteStoreComponent } from './components/admincomponents/admindeletestore.component';
import { AdminAddStoreComponent } from './components/admincomponents/adminaddstore.component';
import { AdminPageComponent } from './components/admincomponents/adminpage.component';
import {TableBorderedComponent} from './components/admincomponents/foodview'
import { StoreViewComponent} from './components/admincomponents/Storeview'
import {AdminUpdateItemComponent} from './components/admincomponents/adminupdateitem.component'
const routes: Routes = [{
  path: '',
  component:AppComponent,
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
  path:'cart/order/:price',
  component:orderAndPayment
},
{
  path: '',
  redirectTo:"adminhome",
  pathMatch: 'prefix'
},
{
  path:'adminhome',
  component: AdminPageComponent 
}
,
{
  path:'adminhome/adminaddstore',
  component: AdminAddStoreComponent
},
{
  path:'adminhome/admindelstore',
  component: AdminDeleteStoreComponent
},
{
  path:'adminhome/adminadditem',
  component: AdminAddItemComponent 
},
{
  path:'adminhome/admindelitem',
  component: AdminDeleteItemComponent
},
{
  path:'adminhome/adminviewfood',
  component: TableBorderedComponent
},
{
  path:'adminhome/adminviewstore',
  component: StoreViewComponent
},
{
  path:'adminhome/adminupdatefood',
  component:AdminUpdateItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
