import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 7
  @ViewChild('f') singUpForm: NgForm;
  secretDefault = 'pet';
  genders = ['male', 'female'];
  submited = false;

  user ={
    username: '',
    email: '',
    secret: '',
    answer: '',
    genere: ''
  } 

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.singUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'male'
    // })

    this.singUpForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log('form submited', form);
  // }
  onSubmit(){
    this.submited = true;
    console.log('form', this.singUpForm)
    this.user.username = this.singUpForm.value.userData.username;
    this.user.email = this.singUpForm.value.userData.email;
    this.user.secret = this.singUpForm.value.secret;
    this.user.answer = this.singUpForm.value.answer;
    this.user.genere = this.singUpForm.value.gender;

    this.singUpForm.reset();
    console.log('User data', this.user);
  }
}
