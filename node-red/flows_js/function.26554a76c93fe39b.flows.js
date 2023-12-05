const Node = {
  "id": "26554a76c93fe39b",
  "type": "function",
  "z": "bd9e443681a102ca",
  "name": "check file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 160,
  "y": 100,
  "wires": [
    [
      "32e3b69c6e84055e"
    ]
  ],
  "_order": 129
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    if (msg.req.params.file) {
        if (msg.payload.includes(msg.req.params.file)) {
            msg.payload = { "filename": "" };
            msg.payload.filename = env.get("REMOTE_IN_IMPORTED_PATH") + "/" + msg.req.params.file; 
        } else throw Error('No such file');  
    }
    
    return msg;
  
}

module.exports = Node;