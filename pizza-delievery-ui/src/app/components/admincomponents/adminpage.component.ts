import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router'
@Component({
    selector: 'app-admin',
    templateUrl: './adminpage.component.html',
    styleUrls: ['./adminpage.component.css'],
   
})
export class AdminPageComponent {
    constructor(private rout:Router)
    {

    }
    logoutadmin()
    {
         sessionStorage.removeItem("sessionId");
         this.rout.navigate(['']);
    }   
}
