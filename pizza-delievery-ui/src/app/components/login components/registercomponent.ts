import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    
    public RegForm: any;
    constructor ()
    {
        
    }
    onSubmit() 
    {
        console.log(this.RegForm.value);    
    }
}