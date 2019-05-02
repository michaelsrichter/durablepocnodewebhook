const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {

    var input = context.df.getInput();

    const tasks = [];

    for (i in input.functions) {
        tasks.push(context.df.callActivity("WebHookProxy", input.functions[i]));
    }
    const results = yield context.df.Task.all(tasks);


    var save = { uri: input.testEndpoint, method: "POST", body: results };
    var savedResults = yield context.df.callActivity("SaveResults", save);
    return results;
});