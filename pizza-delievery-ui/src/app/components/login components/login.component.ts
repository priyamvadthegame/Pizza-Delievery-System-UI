import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ProductService]
})

export class LoginComponent implements OnInit 
{
    public LoginForm: any;
    public res: any;
    constructor (private productService: ProductService)
    {
        
    }
    onSubmit()
    {
        console.log(this.LoginForm.value);

    }
    ngOnInit()
    {

    }

}