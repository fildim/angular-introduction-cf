import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Fil";
  lastName = "Dim";

  person = {
    givenName: "Fil",
    surName: "Dim",
    age: 25,
    email: 'unknown'
  };
}
