import PostDao from "../dao/PostDao.js";

export default class PostService {
	find(params, settings) {
		var postDao = new PostDao();
		postDao.list(params, settings);
	};
};
