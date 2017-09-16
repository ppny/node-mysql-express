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

    var  sql = 'SELECT userName,passWord FROM users WHERE(userName = '+response.username+')';
//查
    var data2 = {}
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        var user = result[0]
        console.log(user)
        if(user.passWord === response.password){
            res.end(JSON.stringify({code:200}));
        }else{
            res.end(JSON.stringify({code:201}));
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
        res.end(JSON.stringify(result));
    });



})
module.exports = router;
