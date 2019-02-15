import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DemoService {
	uri = 'http://my_api.com:4001';

	constructor(private http: HttpClient) {
		console.log('service provider loaded');
		console.log(this.http);
	}
}
