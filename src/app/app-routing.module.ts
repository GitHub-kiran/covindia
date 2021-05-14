import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OciuiReportsComponent } from './ociui-reports/ociui-reports.component';
import { OciuiStatsComponent } from './ociui-stats/ociui-stats.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: OciuiReportsComponent },
  { path: 'stats', component: OciuiStatsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
