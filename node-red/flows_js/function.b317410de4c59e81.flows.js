const Node = {
  "id": "b317410de4c59e81",
  "type": "function",
  "z": "7d7aa16e0c80e205",
  "name": "check file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 180,
  "y": 160,
  "wires": [
    [
      "440ef78ed52a351a"
    ]
  ],
  "_order": 127
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    let remotePath = "";
    
    if (msg.req.params.file) {
        // Check if exists
        if (msg.waiting_files.includes(msg.req.params.file)) remotePath = env.get("REMOTE_IN_PATH");
        else if (msg.failed_files.includes(msg.req.params.file)) remotePath = env.get("REMOTE_IN_FAILED_PATH");
        else throw Error('No such file');
        msg.payload = { "filename": "" };
        msg.payload.filename = remotePath + "/" + msg.req.params.file;   
    }
    
    return msg;
  
}

module.exports = Node;