import PostService from './../service/PostService.js';
import { PAGESIZE } from '../util/Constant.js';

const postService = new PostService();

export function listen(app) {
	app.get('/post(/*)?', function(req, res) {
		var reqParams = req.params || {};
		var reqQuery = req.query || {};
		var params = {};
		var settings = {
			success: function(data) {
				res.send(isGetOne ? data[0] : data);
			},
			error: function(err, data) {
				res.status(500).send(err);				
			}
		};
		var isGetOne = false;
		if(reqParams[1]) {
			params.name = reqParams[1];
			isGetOne = true;
		}
		if(!isGetOne) {
			reqQuery.page = reqQuery.page || 1;
			reqQuery.page = reqQuery.page < 1 ? 1 : reqQuery.page;
			settings.byPage = true;
			settings.page = {
				skip: (reqQuery.page - 1) * PAGESIZE,
				limit: PAGESIZE
			};
		}
		postService.find(params, settings);
	});
}
