import { Component, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { current, done, pending } from '../data';

@Component({
  selector: 'app-tasks',
  standalone: false,
  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  pendingtasks : any= pending;
  currenttasks : any= current;
  donetasks :any =done;
  today = new Date();
  taskForm = new FormGroup({
name: new FormControl('', Validators.required),
status: new FormControl('pending'),
date : new FormControl(''),

})
canedit = true;
test = false
add(){
  if(this.taskForm.valid){
  let body = this.taskForm.value
  if(body.status == 'pending'){
    this.pendingtasks.push(body)
    }else if(body.status == 'current'){
      this.currenttasks.push(body)
    }else if(body.status == 'done'){
      this.donetasks.push(body)
    }
    this.taskForm.reset();
    this.canedit= true
  }

}

updatepending(i:number){
  let task = this.pendingtasks.splice(i,1)[0]
  this.currenttasks.unshift(task)
}
updatecurrent(i :number){
   let task = this.currenttasks.splice(i,1)[0]
   this.donetasks.unshift(task)
}
edittask(i:any){
 if(this.canedit==true){
  let task = this.pendingtasks.splice(i,1)[0]
  this.taskForm.patchValue(task)
  this.canedit=false;
 }
}
}

