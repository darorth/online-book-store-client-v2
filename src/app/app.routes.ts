import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
// import { IndexComponent } from './modules/settings/index/index.component';
import { IndexComponent } from './modules/posts/index/index.component';

export const routes: Routes = [
  // { path: 'posts', redirectTo: 'posts/index', pathMatch: 'full'},
  // { path: 'counter', component: CounterComponent },
  // { path: "setting", component: SettingComponent },
  { path: 'posts', component: IndexComponent }
];
