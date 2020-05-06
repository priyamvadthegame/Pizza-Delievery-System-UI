import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'user-profile',
    templateUrl: './user_profile.component.html'
})

export class UserProfleComponent{
    public userProfileForm: FormGroup;
    constructor (private formBuilder: FormBuilder){
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
            gender:['']          
        });
    }
    onSubmit() {
        console.log(this.userProfileForm.value);
    }
}
