import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  //makesure :activation of formsmodule

  contactform= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('',[Validators.email]),
    phone :new FormControl('',[Validators.required,Validators.required,Validators.pattern('[0-9]*')]),
    message:new FormControl(''),
  })
  send(){
    if(this.contactform.valid){
      Swal.fire(''+this.contactform.value.name,'well done','success')
      
    }
  }


}
