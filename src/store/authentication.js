export default {
	state: {
		user: {},
		isLoggedIn: false,
	},
	mutations: {
		login() {
			state.isLoggedIn = true;
		},

		// register(credentials, state) {
		// 	state.isLoggedIn = true;
		// },
		// checkLoginStatus(credentials, state) {
		// 	state.isLoggedIn = true;
		// },
		// logout() {},
	},
	actions: {
		processLogin(context) {
			return context.commit("login");
		},
	},
};
