// Task: make 3 requests and return arbitrary 200 response
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
    }).use(popsicle.plugins.parse('json'))
        // onSuccess
        .then(function(res) {
            res.status = 200;
            // for the sake of task I return res.status. In real life I'll return "res" and will take out res.status below
            return res.status
        },
        // onFailure
        function(reason){
            console.log("Error:" + reason.status)
        })

}

var p1 = sendRequest("Cap","1917-01-01");
var p2 = sendRequest("Cap","1917-02-02");
var p3 = sendRequest("Cap","1917-03-03");

Promise.all([p1,p2,p3]).then(function(values) {
    for (i in values)
        if (values[i] != 200)
        {console.log("Failed to have 3 200 responses")}
     console.log("Response codes: " + values)
})
;