import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users-module';
import { ReposModule } from './repos/repos-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersModule, ReposModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('parcial');
}
