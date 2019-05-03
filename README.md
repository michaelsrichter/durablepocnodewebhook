This is an example of a Nodejs Durable Function that does fan-out and fan-in. 

The fan-out calls a _proxy_ function activity which in turn calls another function in a different Azure Functions instance. 

This example was built to work with a [Python Function](https://github.com/michaelsrichter/durablepocpython) (Azure Functions Python sdk does not suport durable functions yet).  

Instructions

Make a GET request to the function URL
```text 
https://<yournodewebhookfunctionurl>.azurewebsites.net/api/orchestrators/OrchestratorFunction
```

In the body of the request include a json block that looks similar to this

```json
{
   "functions":[
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Marsha",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Jan",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Cindy",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Greg",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Peter",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Bobby",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Carol",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Mike",
      "https://<yourpythonfunctionurl>.azurewebsites.net/api/HttpTrigger?name=Alice"
   ],
   "testEndpoint":"https://webhook-testing-tool.com"
}
```
Some potential webhook testing tools you can use are.

* https://requestbin.com
* https://postb.in
* https://beeceptor.com
* https://webhook.site

This request will hit the HttpTrigger for this Azure Function instance.

Once you run the Azure Function, check out your webhook testing tool to see the result. The body of the request should look like the following.

```
Hello Marsha!Hello Jan!Hello Cindy!Hello Greg!Hello Peter!Hello Bobby!Hello Carol!Hello Mike!Hello Alice!
```
