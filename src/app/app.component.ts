import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { TodosComponent } from './todos/todos.component';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TodosComponent, AmplifyAuthenticatorModule],
})
export class AppComponent {
  title = 'amplify-angular-template';
  public authenticator = inject(AuthenticatorService);

  constructor() {
    Amplify.configure(outputs);
  }
}
