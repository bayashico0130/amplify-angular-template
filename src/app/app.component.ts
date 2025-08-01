import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

Amplify.configure(outputs);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TodosComponent, AmplifyAuthenticatorModule],
})
export class AppComponent implements OnInit {
  title = 'amplify-angular-template';
  
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
  ngOnInit(): void {
  }
}
