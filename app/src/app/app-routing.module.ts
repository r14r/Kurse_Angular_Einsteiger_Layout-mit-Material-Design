import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/component';
import { DemoMatTableComponent } from './pages/mat-table/component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'mat-table', component: DemoMatTableComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
