import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/project.services';
import { NotifierService } from "angular-notifier";


@Component({
    selector: 'user-profile',
    templateUrl: './app.profile.html'
})

export class UserProfleComponent implements OnInit{
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
    constructor (private formBuilder: FormBuilder, private userService: ProductService,private notify:NotifierService){
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
        let obj= (this.userProfileForm.value);
        let obj2={
            firstname:obj.first_name,
        lastname:obj.last_name,
        dob:obj.dob,
        gender:obj.gender,
        emailId:obj.email,
        location:obj.location,
        street:obj.street,
        state:obj.state,
        mobileno:obj.mobile,
        city:obj.city,
        pincode:obj.pincode
        }
        this.userService.updateUserProfile(obj2,sessionStorage.getItem("sessionId")).subscribe((result)=>{console.log(result)});
        this.notify.notify("success","User Profile Updated Succesfully");
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
    onChanges(){
        firstname:this.first_name;
        lastname:this.last_name;
        dob:this.dob;
        gender:this.gender;
        emailId:this.email;
        location:this.location;
        street:this.street;
        state:this.state;
        mobileno:this.mobile;
        city:this.city;
        pincode:this.pincode;
    }
    changePassword(){
        this.userService.changeUserPassword(this.password,this.password2,sessionStorage.getItem("sessionId")).subscribe((result)=>{console.log(result)
        
        if(result!=null)
        {
            this.notify.notify("success","Password changed succesfully");
        }
        else{
            this.notify.notify("error","The specified password is wrong");
        }
        
        });
       
    }

}