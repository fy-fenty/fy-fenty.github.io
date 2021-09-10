import BaseDao from './BaseDao.js';

export default class PostDao extends BaseDao {
	constructor() {
    super();
		this.__tableName = "Post";
	}
	add(post, settings) {
    const { content, createDate, updateDate, tags } = post;
		this.connect({
			success: (db) => {
        const sql = `INSERT INTO Post (content, createDate, updateDate, tags) VALUES (
          ${content}, ${createDate}, ${updateDate}, ${tags}
        )`;
				this.insert(db, sql, settings);
			},
			error: (err, db) => {
				if(settings.error) {
					settings.error(err, db);
				}
			}
		});
	};
	delete(id) {
		return true;
	};
	update(Post) {
		return true;
	};
	list(params, settings) {
		this.connect({
			success: (con) => {
        const sql = "select * from Post";
				this.find(con, sql, params, settings);
			},
			error: (err, db) => {
				if(settings.error) {
					settings.error(err, db);
				}
			}
		});
	};
};
