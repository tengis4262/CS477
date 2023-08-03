// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
	
	if (Math.random() > 0.5) { 	
		return callback("Error",null) 
	} 
	return callback(null, {id:12345}) 
} 

function exec(fn){ 

    function cb(error, data) {
        if(error) {
            return null;
        } else {
            return data;
        }
    }
    const result = fn(cb);

    return {
        done: function(callback){
            if(result) {
                callback(result);
            }      
            return this;
        },
        fail: function(callback){
            if(!result){
                callback('Whooops!');
            }
            
           return this;
        }
    }
}

exec(slow)
    .done(function(data){ console.log(data); })
    .fail(function(err){ console.log("Error: " + err); })
    ; 