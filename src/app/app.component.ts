import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Fil";
  lastName = "Dim";

    person: Person = {
    givenName: "Fil",
    surName: "Dim",
    age: 25,
    email: 'unknown',
    address: 'Athens, Greece'
  };
}
