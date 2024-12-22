import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-pending',
  standalone: false,
  
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent {
@Input() PendingTasks : any = []
@Output() update = new EventEmitter<any>()
@Output() edit = new EventEmitter<any>()
move(i:number){
  this.update.emit(i)
}
edittask(i:number){
  this.edit.emit(i)
}
}
