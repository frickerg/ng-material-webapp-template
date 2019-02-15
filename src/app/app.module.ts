/* Angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Material */
import {
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatTableModule,
	MatDividerModule,
	MatListModule,
	MatSidenavModule,
} from '@angular/material';

/* Services */
import { DemoService } from './demo.service';

/* Custom components */
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		PageComponent,
		DashboardComponent
	],
	imports: [
		// Routing
		AppRoutingModule,
		// Angular
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		// Material
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatTableModule,
		MatDividerModule,
		MatListModule,
		MatSidenavModule
	],
	providers: [
		DemoService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
