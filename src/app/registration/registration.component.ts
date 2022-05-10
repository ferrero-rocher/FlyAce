import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegisterForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    LastName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.maxLength(15),Validators.pattern('^[A-Za-z\d$@$!%*?&].{8,}')]),
    Phoneno: new FormControl('',[Validators.required, Validators.pattern("[789]{1}[0-9]{9}$")]),
    DOB: new FormControl('',[Validators.required]),
    
   }) 

   get FirstName() {
    return this.RegisterForm.get('FirstName');
  } 
  get LastName() {
    return this.RegisterForm.get('LastName');
  } 
  get email() {
    return this.RegisterForm.get('email');
  } 
  get password() {
    return this.RegisterForm.get('password');
  } 
get Phoneno()
{
  return this.RegisterForm.get('Phoneno');

}
get DOB()
{
  return this.RegisterForm.get('DOB');
}


  constructor(public fb: FormBuilder,
    private router: Router,
    public authService:ApiService ) { }

  ngOnInit(): void {
  } 
  onSubmit(){
    if(this.RegisterForm.valid)
    {
    
    this.authService.register(this.RegisterForm.value).subscribe(res => {
    alert('Registered!')
    console.log(res)
    });
    this.router.navigate(['/Login']);
  }
  else{
    alert('Invalid Entry!')
  }
  }


}
