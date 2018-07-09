import { Component, OnInit,  ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  providers: [FlashMessagesService],
})
export class LoginComponent implements OnInit {

login : string;
password :string;
newlog : user;
user =[];


  constructor(private router : Router, private userservice : UserService,private _flashMessagesService : FlashMessagesService,
  
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    

    
   
      }
  ngOnInit() {

  
  }

  loginButton(f : NgForm){
    this.login = f.value.login,
this.password = f.value.password,
console.log(this.password);
    this.userservice.getuser()
    .subscribe(user =>{
      let j =0;
    if (this.user = user){
        for(let i = 0; i< user.length; i++){

    if ((this.login)==this.user[i].login){
      if ((this.password)==this.user[i].password){
    
        this.toastr.success('You are awesome!', this.user[i].login);
        this.router.navigate(['/component']);
      j=j+1;
  } else{
    this.toastr.error('verifier votre password !', 'oooops!');
    j=j+1;
  }
  
  }      
  
  }
  if (j==0){
  this.toastr.error('verifier votre login !', 'oooops!');
}
        }
        });




}

   }
 
  


