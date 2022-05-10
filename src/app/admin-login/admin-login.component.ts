import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Registers } from '../registers';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminloginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    
  })


  constructor(public fb: FormBuilder,
    private router: Router,
    public authService:ApiService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.adminloginForm.get('email');
  } 
  get password() {
    return this.adminloginForm.get('password');
  }

  // onSubmit()
  //  {
  //   //let login= this.loginForm.value;
    
  //   console.log(this.adminloginForm.value);
  //   }
  onSubmit()
   {
     let login= this.adminloginForm.value;
    this.login(login);
  }
   login(loginUser:Registers){
     if(loginUser.email==="admin@admin.com"){
   this.authService.loginuser(loginUser).subscribe(
     res=>{
       var succ=res;
      if(succ)
     {
        localStorage.setItem("UserName",JSON.stringify (res.FirstName));  
        //alert("Login Sucessfull..!!");
        this.router.navigateByUrl('/adminHome');
        localStorage.setItem("showNav", "false");
      }
       else
       {
         alert("wrong username or password")
       }
    }
   )
   }
   else{
     alert("You are not Admin!")
   }
  }

}
