
const Url = 'https://api-nodejs-todolist.herokuapp.com/'

export const ENDPOINTS = {
	login: {
		url: `${Url}user/login`,
		method: 'POST',
	},
	signUP: {
		url: `${Url}user/register`,
		method: 'POST',
	},
	logOut: {
		url: `${Url}user/logout`,
		method: 'POST',
	},
	tasks:{
		url: `${Url}task`,
		method: 'GET',
	},
	addTask: {
		url: `${Url}task`,
		method: 'POST',
	},
	deleteTask: {
		url: `${Url}task/`,
		method: 'DELETE',
	},
	editTask: {
		url: `${Url}task/`,
		method: 'PUT',
	},
	userInfo:{
		url: `${Url}user/me`,
		method: 'GET',
	},
};
