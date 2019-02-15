import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'demo', component: DashboardComponent },
	{ path: '', redirectTo: '/demo', pathMatch: 'full' },
	{ path: '1', redirectTo: '/demo' },
	{ path: '2', redirectTo: '/demo' },
	{ path: '3', redirectTo: '/demo' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
