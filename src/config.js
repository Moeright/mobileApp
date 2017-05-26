/*
	配置文件
*/
require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery-1.11.3",
		"bootstrap": "lib/bootstrap",
		"layer": "plug/layer/layer",
		"detail":"detail",
		"detai2":"detai2",
		"cart":"cart",
		"swiper": "lib/swiper.min",
		"zepto": "lib/zepto.min"
	},
	shim: {
		"layer": ['jquery'],
		"bootstrap": {
			deps: ['jquery'],
			exports: "Bootstrap"
		},
		"detail":['jquery'],
		"detai2":['jquery'],
		"cart":['jquery'],
		"swiper":['jquery'],
		"zepto":['jquery']
	}
});
