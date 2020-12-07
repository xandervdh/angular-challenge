import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Friend } from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages = ['HTML', 'CSS'];
  friendModel = new Friend("", "", "", 0, null)
}
