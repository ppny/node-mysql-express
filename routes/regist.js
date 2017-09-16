var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'bdm312622470.my3w.com',
    user     : 'bdm312622470',
    password : 'caiwenduo1993',
    database : 'bdm312622470_db',
    insecureAuth : true
});
connection.connect();
/* GET users listing. */
router.post('/', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var response = {
        "username":req.body.username,
        "password":req.body.password
    };

    var  addSql = 'INSERT INTO users(Id,userName,passWord) VALUES(0,?,?)';
    var  addSqlParams = [response.username,response.password];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });

    console.log(response);
    res.end(JSON.stringify({code:200}));
})
module.exports = router;
