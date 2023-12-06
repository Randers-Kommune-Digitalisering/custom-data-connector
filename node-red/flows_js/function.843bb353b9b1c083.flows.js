const Node = {
  "id": "843bb353b9b1c083",
  "type": "function",
  "z": "9572a151771bc111",
  "name": "check file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 200,
  "y": 220,
  "wires": [
    [
      "26fdf2dddeed7bf7"
    ]
  ],
  "_order": 116
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      let remotePath = "";
      
      if (msg.req.params.file) {
          // Check if exists
          if (msg.waiting_files.includes(msg.req.params.file)) remotePath = env.get("REMOTE_IN_PATH");
          else if (msg.imported_files.includes(msg.req.params.file)) remotePath = env.get("REMOTE_IN_IMPORTED_PATH");
          else if (msg.failed_files.includes(msg.req.params.file)) remotePath = env.get("REMOTE_IN_FAILED_PATH");
          else throw Error('No such file');
          msg.payload = { "filename": "" };
          msg.payload.filename = remotePath + "/" + msg.req.params.file;   
      }
      
      return msg;
    
  
}

module.exports = Node;