
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/Experience" | "/Projects" | "/Projects/HVLFire" | "/Projects/MealPlanner" | "/Projects/ProjectView" | "/Projects/Solarsystem" | "/Projects/minigolfVR" | "/Projects/raytracer" | "/contact";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/Experience": Record<string, never>;
			"/Projects": Record<string, never>;
			"/Projects/HVLFire": Record<string, never>;
			"/Projects/MealPlanner": Record<string, never>;
			"/Projects/ProjectView": Record<string, never>;
			"/Projects/Solarsystem": Record<string, never>;
			"/Projects/minigolfVR": Record<string, never>;
			"/Projects/raytracer": Record<string, never>;
			"/contact": Record<string, never>
		};
		Pathname(): "/" | "/Experience" | "/Experience/" | "/Projects" | "/Projects/" | "/Projects/HVLFire" | "/Projects/HVLFire/" | "/Projects/MealPlanner" | "/Projects/MealPlanner/" | "/Projects/ProjectView" | "/Projects/ProjectView/" | "/Projects/Solarsystem" | "/Projects/Solarsystem/" | "/Projects/minigolfVR" | "/Projects/minigolfVR/" | "/Projects/raytracer" | "/Projects/raytracer/" | "/contact" | "/contact/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | "/smui.css" | string & {};
	}
}