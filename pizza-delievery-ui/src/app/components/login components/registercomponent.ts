import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [ProductService]
})

export class RegisterComponent implements OnInit 
{
    public Gender = ['Male','Female'];
    constructor (private productService: ProductService) {
        
    }
    ngOnInit() {
        
    }
    onSubmit(RegForm:any) 
    {
        console.log(RegForm);
        this.productService.registerUser({
            "firstname": RegForm.Firstname,
            "lastname": RegForm.Lastname,
            "dob": RegForm.Dob,
            "gender": RegForm.gender,
            "street": RegForm.Street,
            "location": RegForm.Location,
            "city": RegForm.City,
            "state": RegForm.State,
            "pincode": RegForm.Pincode,
            "mobileno": RegForm.Mobile,
            "emailId": RegForm.Email
        },RegForm.Username ,RegForm.Password, RegForm.Usertype).subscribe(
            (response)=>{console.log(response);
            alert('Successfully Registered!! Your profile details are: '+ JSON.stringify(response))}
        );    
    }
}