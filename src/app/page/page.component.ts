import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

	/* Manage some Router behaviors here if necessary */
	constructor(private _router: Router) {
	}

	/* We don't need the Router in this demo, so we dispose it immediately */
	ngOnInit() {
		this._router.dispose();
	}

}
