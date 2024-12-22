import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-done',
  standalone: false,
  
  templateUrl: './done.component.html',
  styleUrl: './done.component.css'
})
export class DoneComponent {
  @Input() donetasks : any = []
}
