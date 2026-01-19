export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Torbenhjl.githib.io/_app",
	assets: new Set(["robots.txt","smui.css"]),
	mimeTypes: {".txt":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.z3GCjX8b.js",app:"_app/immutable/entry/app.C5sMdesq.js",imports:["_app/immutable/entry/start.z3GCjX8b.js","_app/immutable/chunks/CPXIcILY.js","_app/immutable/chunks/DsvY6Tav.js","_app/immutable/chunks/BL6PeV-P.js","_app/immutable/entry/app.C5sMdesq.js","_app/immutable/chunks/BL6PeV-P.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DsvY6Tav.js","_app/immutable/chunks/DgpH2Bk7.js","_app/immutable/chunks/CaixZkZn.js","_app/immutable/chunks/Bs2bmdnU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Experience",
				pattern: /^\/Experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Projects/HVLFire",
				pattern: /^\/Projects\/HVLFire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Projects/MealPlanner",
				pattern: /^\/Projects\/MealPlanner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Projects/minigolfVR",
				pattern: /^\/Projects\/minigolfVR\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Projects/projectView",
				pattern: /^\/Projects\/projectView\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Projects/raytracer",
				pattern: /^\/Projects\/raytracer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
