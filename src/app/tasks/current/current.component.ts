import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-current',
  standalone: false,
  
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {
  @Input() currentTasks : any = []
  @Output() update = new EventEmitter<any>()
  move(i:number){
    this.update.emit(i)
  }
}
