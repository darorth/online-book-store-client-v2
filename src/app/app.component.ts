import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { sign } from 'crypto';
import { CommonModule } from '@angular/common';

// interface SettingInterface {
//   Id: number;
//   Name: string;
//   Remark: string;
// }

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ CommonModule, RouterOutlet ],
})

export class AppComponent {
  title = 'my-app6';
  // settings = signal<SettingInterface[]>([
  //   { Id: 1, Name: 'k1', Remark: 'k1' },
  //   { Id: 2, Name: 'k2', Remark: 'k2' },
  //   { Id: 3, Name: 'k3', Remark: 'k3' },
  // ]);

  // setting = this.settings()[0];
}
