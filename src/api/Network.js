

import {I18nManager} from 'react-native';
import  AsyncStorage from '@react-native-community/async-storage';
import { showError } from '../components/helper/LocalAlerts'

export class Network {

	constructor() {
		this.jwt = '';
	}
	static async fetch(url, init, addAuth) {
		const data = await AsyncStorage.getItem('@user_token');
		if(data){
			this.jwt= data
		}
		const response = await fetch(url, {
			mode: 'cors',
			...init,
			headers: Network.getHeaders(init.headers, addAuth),
		});
		let promise;
		if (response.status !== 200 && response.status !== 201) {
			promise = Network.handleErrorsBasedOnStatus(response);
		} else {
			promise = response.json();
		}
		return promise;
	}

	static getHeaders(originalHeaders,addAuth) {
		let headers = {
			'content-type': "application/json",
			// accept: 'application/json',
		};
		
		if(addAuth){
			headers["Authorization"] = `Bearer ${this.jwt}`;
		}

		headers = {
			...headers,
			...originalHeaders,
		};

		return headers;
	}

	static handleErrorsBasedOnStatus(response) {
		let promise;
		switch (response.status) {
			case 400:
				promise = response.json().then((data) => {
					console.log('from Network',response.status,JSON.stringify(data))
					showError(data)
				});
				break;
			case 422:
				promise = response.json().then((data) => {
					console.log('from Network',response.status,JSON.stringify(data))
				});
				break;
			case 429:
				console.log('from Network',response.status,JSON.stringify(data))
				break;
			case 401:
				promise = response.json().then((data) => {
					console.log('from Network',response.status,JSON.stringify(data))
				});
				break;
			case 403:
				promise = response.json().then((data) => {
					console.log('from Network',JSON.stringify(data))
				});
				break;
			default:
				promise = response.json().then((data) => {
					// return Promise.reject();
					console.log('from Network',JSON.stringify(data))
				});
		}

		return promise.catch((error) => {
			return Promise.reject(error);
		});
	}
}
