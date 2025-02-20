import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
userForm: FormGroup= new FormGroup({
  fname: new FormControl("",[Validators.required]),
  lname: new FormControl("",[Validators.required,Validators.minLength(5)]),
  userName: new FormControl(""),
  city: new FormControl(""),
  state: new FormControl("Gujarat"),
  zip: new FormControl(),
  isAgree: new FormControl(false)
})

onUserSave(){
  const formValue=this.userForm.value;
  debugger;
}

}
