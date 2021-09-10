import PostDao from '../../server/dao/PostDao';
var postDao = new PostDao();

postDao.list({}, {
	success: function(data) {
		console.log(data);
	}
});
