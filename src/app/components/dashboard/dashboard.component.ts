import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	/* Example for a Service that can be injected with the constructor */
	constructor(private _demo: DemoService) {
	}

	/* Do something after Component has been constructed */
	ngOnInit() {
		console.log(this._demo.uri);
	}

}
