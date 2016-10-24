var popsicle = require('popsicle')
const hw_url = "http://lacedeamon.spartaglobal.com/todos";


function sendRequest(method, title, due) {

    return popsicle.request({
        method: method,
        url: hw_url,
        body: {
            title: title,
            due: due,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).use(popsicle.plugins.parse('json'))
        .then(function (res) {
            return res;
        })
}

var stringOfIds = "";
var numbers_array = [];

sendRequest("get")
    .then(function(res){

        //convert JSON to String leaving only ids
        stringOfIds = JSON.stringify(res.body, ["id"]);

        //convert string to pure ids array
        var myObject = eval('(' + stringOfIds + ')');
        for (i in myObject)
         {
            numbers_array[i] = myObject[i]["id"]
         }
         console.log("Array of ids:" + numbers_array)
    })
    .then(function()
    {
        // // delete one by one
        resp = 1;
        for (i in numbers_array)
        {
            sendRequest("delete",hw_url.concat("/",numbers_array[i]))
                .then(function(res)
                {
                    if (res.status != 204){
                        resp = 0;
                    }})
        }
        if (resp === 1)
        {console.log("Every entity was deleted with 204 status code successfully")}
    })
    .then(function()
    {
        sendRequest("get").
            then(function(res){if (res.status === 204){
                console.log("All clear. Records were totally deleted. Response =" + res.status)
        }})

    })