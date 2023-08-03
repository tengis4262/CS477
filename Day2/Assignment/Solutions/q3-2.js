// Fix the slow function to be asynchronous/non-blocking
function slow(callback) {

    if (Math.random() > 0.5) {
        callback("My Errors....", null);
    } else {
        callback(null, { id: 12345 });
    }
   
}

function exec(fn) {

    let obj = {};

    function cb (error, data){

        if(error) {

            obj.done = function(callback){
                return this;
            };
            obj.fail = function(callback){
                callback(error);
                return this;
            }

        } else {

            obj.done = function(callback){
                callback(data);
                return this;
            };
            obj.fail = function(callback){
                return this;
            }
        }
    }

    fn(cb);
    return obj;
}

exec(slow)
    .done(function (data) { console.log(data); })
    .fail(function (err) { console.log("Error: " + err); })
    ; 