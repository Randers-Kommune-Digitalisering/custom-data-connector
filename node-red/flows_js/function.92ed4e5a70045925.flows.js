const Node = {
  "id": "92ed4e5a70045925",
  "type": "function",
  "z": "0e19bfdb5ac72064",
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
      "7277e6a6d319d616"
    ]
  ],
  "_order": 26
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