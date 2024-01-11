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
  "_order": 29
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(msg.filter) {
      if(!msg.filter.includes("admin")) {
          let waiting, imported, failed 
          waiting = imported = failed = []
          msg.filter.forEach((fe) => {
              waiting = waiting.concat(msg.waiting_files.filter((f) => f.split('_')[1].slice(0, fe.length) === fe))
              imported = imported.concat(msg.imported_files.filter((f) => f.split('_')[1].slice(0, fe.length) === fe))
              failed = failed.concat(msg.failed_files.filter((f) => f.split('_')[1].slice(0, fe.length) === fe))
          })
          msg.waiting_files = waiting
          msg.imported_files = imported
          msg.failed_files = failed
      }
      
  }
  
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