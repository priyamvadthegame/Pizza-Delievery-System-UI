import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pizza-delievery-ui';
  session:string
  flag=true;
  flag1=false;
  constructor(private router:Router)
  {
    if(sessionStorage.length>1)
    {
        this.flag=false
        this.flag1=true
    } 

    
  
  }
  logout()
  {
    sessionStorage.removeItem("sessionId");
  }
ngOnInit()
{ 
  if(sessionStorage.getItem("flag")==="login")
  {
    window.location.reload();
  }
  this.router.navigateByUrl("homepage")
  sessionStorage.setItem("flag","home");
}
}
