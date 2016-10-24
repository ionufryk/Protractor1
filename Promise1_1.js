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
            console.log(res.status)
        },
        // onFailure
        function(reason){
            console.log("Error:" + reason.status)
        })

}

// Create POST request which will be in promise. Describe onSuccess(201 response)
sendRequest("Cap","1917-01-01")

// Create POST request which will be in promise. Describe onFailure(422 response) variants
sendRequest()
