import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Registers } from '../registers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    
  })

  constructor(public fb: FormBuilder,
    private router: Router,
    public authService:ApiService) { }

  ngOnInit(): void{
  } 
  get email() {
    return this.loginForm.get('email');
  }

  onSubmit()
{
  let login= this.loginForm.value;
  this.login(login);
  
}
login(loginUser:Registers){
this.authService.loginuser(loginUser).subscribe(
  res=>{
    console.log(res);
    var succ=res;
    if(succ)
    {
      localStorage.setItem("UserName",succ); 
      localStorage.setItem("email",succ); 
      alert("Login Sucessfull..!!");
      this.router.navigate(['']);
    }
    else
    {
      alert("wrong username or password")
    }
  }
)
}
}
