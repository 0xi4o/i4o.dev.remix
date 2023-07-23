/** @type {import('@remix-run/dev').AppConfig} */
export default {
	devServerBroadcastDelay: 1000,
	ignoredRouteFiles: ['**/.*'],
	server: './server.ts',
	serverBuildPath: 'functions/[[path]].js',
	serverConditions: ['workerd', 'worker', 'browser'],
	serverDependenciesToBundle: 'all',
	serverMainFields: ['browser', 'module', 'main'],
	serverMinify: true,
	serverModuleFormat: 'esm',
	serverPlatform: 'neutral',
	postcss: true,
	tailwind: true,
	future: {
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		// TODO: update to v2_meta
		// v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
}
