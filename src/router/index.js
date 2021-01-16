import { createRouter, createWebHistory } from "vue-router";

// Landing Page Rotes Import
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// Authentication Routes
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const routes = [
	// Landing Page Routes
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},

	// Authentication Routes
	{
		path: "/auth/login",
		name: "Login",
		beforeEnter: 
		component: Login,
	},
	{
		path: "/auth/register",
		name: "Register",
		beforeEnter: (to, from, next) => {
			if (globalThis.localStorage.LoggedIn) {
				return next({ name: "Home" });
			}
			next();
		},
		component: Register,
	},

	// Dahsboard Routes
	// {
	// 	path: "/dashboard",
	// 	name: "Dashboard",
	// 	component: Dashboard,
	// },

	// 404 Route
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
