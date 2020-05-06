import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/project.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user_profile.component.html'
})

export class UserProfleComponent{
    public userProfileForm: FormGroup;
    public user: Object;
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
    }
    createForm(){
        this.userProfileForm=this.formBuilder.group({
            first_name: ['',[Validators.required],[Validators.minLength]],
            last_name: ['',[Validators.required],[Validators.minLength]],
            dob: ['',[Validators.required]],
            email:['',[Validators.required]],
            pincode:['',[Validators.required],[Validators.minLength]],
            city:['',[Validators.required]],
            state:['',[Validators.required]],
            street:['',[Validators.required]],
            location:['',[Validators.required]],
            mobile: ['',[Validators.required],[Validators.minLength],[Validators.maxLength]],
            password: ['',[Validators.required]],
            password2: ['',[Validators.required]],
            gender:['']          
        });
    }
    onSubmit() {
        console.log(this.userProfileForm.value);
    }
    ngOnInit(){
        this.userService.viewProfile(this.loginStatus).subscribe((user)=>{this.user
            console.log(user)});
    }
}
