import mysql from 'mysql';
import {
  DB_HOST as host,
  DB_USER as user,
  DB_DATABASE as database
} from '../util/Constant.js';

var processResult = function(err, obj, settings) {
	console.log(settings);
	if(err) {
		if(settings.error) {
			settings.error(err, obj);
		}
	} else {
		if(settings.success) {
			settings.success(obj);
		}
	}
}

export default class BaseDao {
  connect(settings) {
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'blog',
      database: 'Post'
    });
    con.connect(function(err) {
      processResult(err, con, settings);
    });
  }
  insert(con, sql, settings) {
    con.query(sql, function (err, result) {
      processResult(err, result, settings);
      con.close();
    });
  }
  find(con, sql, settings) {
    con.query(sql, function (err, result, fields) {
      processResult(err, result, settings);
      con.close();
    });
  }
}
