import 'reflect-metadata';
import { Component } from '@angular/core';

//import template from './app.html';

@Component({
	selector: 'app',
	//template
	template: require('./app.component.html').default
	//templateUrl: 'client/app.html'
})
export class AppComponent {
	parties: any[];

	constructor() {
		this.parties = [
			{
				'name': 'Dubstep-Free Zone',
				'description': 'Can we please just for an evening not listen to dubstep.',
				'location': 'Palo Alto'
			},
			{
				'name': 'All dubstep all the time',
				'description': 'Get it on!',
				'location': 'Palo Alto'
			},
			{
				'name': 'Savage lounging',
				'description': 'Leisure suit required. And only fiercest manners.',
				'location': 'San Francisco'
			}
		];
	}
}