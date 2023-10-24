import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-danger-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './danger-prompt.component.html',
  styleUrls: ['./danger-prompt.component.css']
})
export class DangerPromptComponent {

  @Input() header = "Destructive Action!";
  @Input() title = "Are you sure?";
  @Input() body = "Are you sure you want to do this?"

  @Output() confirm = new EventEmitter<boolean>();

  onClick(confirmation: boolean) {
    this.confirm.emit(confirmation);
  };

}
