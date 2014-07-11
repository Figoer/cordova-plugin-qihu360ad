var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "Qihu360Ad", "coolMethod", [arg0]);
};
