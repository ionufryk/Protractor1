var popsicle = require('popsicle')
const hw_url = "http://lacedeamon.spartaglobal.com/todos";

function sendRequest(title, due) {
    return popsicle.post({
        url: hw_url,
        body: {
            title: title,
            due: due,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        // In onSuccess case we make Rejection. In onReject case rejection is made automatically
    }).then(function(){return Promise.reject()})
        .then(null,function(){console.log("Rejected")})
}

// onSuccess Request
sendRequest("Cap","1917-01-01")
//onReject Request
sendRequest()
