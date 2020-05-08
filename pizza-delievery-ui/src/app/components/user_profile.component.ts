import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/project.services';

@Component({
    selector: 'user-profile',
    templateUrl: './user_profile.component.html'
})

export class UserProfleComponent{
    public userProfileForm: FormGroup;
    public user;
    public userUpdate;
    public loginStatus;
    first_name:string;
    last_name:string;
    dob:Date;
    email:string;
    pincode:string;
    city:string;
    state:string;
    street:string;
    location:string;
    mobile:string;
    password:string;
    password2:string;
    gender:string;
    constructor (private formBuilder: FormBuilder, private userService: ProductService){
        this.createForm();
        this.userService.viewProfile(this.loginStatus);
    }
    createForm(){
        this.userProfileForm=this.formBuilder.group({
            first_name: [null,[Validators.required,Validators.minLength]],
            last_name: [null,[Validators.required,Validators.minLength]],
            dob: [null,[Validators.required]],
            email:[null,[Validators.required]],
            pincode:[null,[Validators.required,Validators.minLength]],
            city:[null,[Validators.required]],
            state:[null,[Validators.required]],
            street:[null,[Validators.required]],
            location:[null,[Validators.required]],
            mobile: [null,[Validators.required, Validators.minLength, Validators.maxLength]],
            password: [null,[Validators.required]],
            password2: [null,[Validators.required]],
            gender:[null]          
        });
    }
    onSubmit() {
        console.log(this.userProfileForm.value);
    }
    ngOnInit(){
        this.userService.viewProfile(sessionStorage.getItem("sessionId")).subscribe((user)=>{this.user=user;this.Init()});
    }
    Init(){
        console.log(this.user);
        this.first_name=this.user.firstname;
        this.last_name=this.user.lastname;
        this.dob=this.user.dob;
        this.gender=this.user.gender;
        this.email=this.user.emailId;
        this.location=this.user.location;
        this.street=this.user.street;
        this.state=this.user.state;
        this.mobile=this.user.mobileno;
        this.city=this.user.city;
        this.pincode=this.user.pincode;
    }
}
