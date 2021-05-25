import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CovidReportsComponent } from './covid-reports/covid-reports.component';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: CovidReportsComponent },
  { path: 'stats', component: CovidStatsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
