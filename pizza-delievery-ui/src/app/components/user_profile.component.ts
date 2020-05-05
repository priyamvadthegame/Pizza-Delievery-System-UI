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
            password:['',[Validators.required]],
            password2:['',[Validators.required]],
            gender:['']          
        },{
        validators:this.password.bind(this)
        });
    }
    password(formGroup: FormGroup) {
        const { value: password } = formGroup.get('password');
        const { value: password2 } = formGroup.get('password2');
        return password === password2 ? null : { passwordNotMatch: true };
      }
    onSubmit() {
        console.log(this.userProfileForm.value);
    }
}