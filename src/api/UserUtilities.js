import { ENDPOINTS } from './EndPoints';
import { Network } from './Network';

export class User {
	static login(data){
		console.log({data})
		return Network.fetch(
			ENDPOINTS.login.url,
			{
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
				method: ENDPOINTS.login.method,
			},
			false,
		);
	}

	static signUp(data){
		console.log({data})
		return Network.fetch(
			ENDPOINTS.signUP.url,
			{
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					password: data.password,
					age: data.age,
				}),
				method: ENDPOINTS.signUP.method,
			},
			false,
		);
	}

	static logOut(){
		return Network.fetch(
			ENDPOINTS.logOut.url,
			{
				method: ENDPOINTS.logOut.method,
			},
			true,
		);
	}
	
	static tasks() {
		return Network.fetch(
			ENDPOINTS.tasks.url,
			{
				method: ENDPOINTS.tasks.method,
			},
			true,
		);
	}

	static addTask(data){
		console.log({data})
		return Network.fetch(
			ENDPOINTS.addTask.url,
			{
				body: JSON.stringify({
					description: data.description,
				}),
				method: ENDPOINTS.addTask.method,
			},
			true,
		);
	}

	static deleteTask(id) {
		return Network.fetch(
			ENDPOINTS.deleteTask.url+`${id}`,
			{
				method: ENDPOINTS.deleteTask.method,
			},
			true,
		);
	}

	static editTask(id,data) {
		return Network.fetch(
			ENDPOINTS.editTask.url+`${id}`,
			{ 
				body: JSON.stringify({
					description: data.description,
					completed: data.completed
				}),
				method: ENDPOINTS.editTask.method,
			},
			true,
		);
	}

	static userInfo() {
		return Network.fetch(
			ENDPOINTS.userInfo.url,
			{
				method: ENDPOINTS.userInfo.method,
			},
			true,
		);
	}


	


}
