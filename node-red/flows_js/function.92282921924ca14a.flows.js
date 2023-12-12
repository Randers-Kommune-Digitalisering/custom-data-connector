const Node = {
  "id": "92282921924ca14a",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "g": "1e03a3b784249401",
  "name": "set file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1090,
  "y": 160,
  "wires": [
    [
      "6e244488bcb0e5f7"
    ]
  ],
  "_order": 87
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          if (msg.req.params.file.split("_")[0] != "Meta") throw Error(msg.req.params.file + " is not a meta / group file");
          else if (msg.req.params.file.split(".").pop().toLowerCase() != "csv") throw Error(msg.req.params.file + " does not have the csv file extension");
          
          let file = msg.req.files.pop();
          if (file.mimetype === 'text/csv') {
              const remotePath = env.get("REMOTE_IN_PATH");
              const filename = decodeURI(msg.req.params.file);
              const filedata = msg.payload;
              msg.payload = { "filename": "", "filedata": "" };
              msg.payload.filename = remotePath + "/" + filename;
              msg.payload.filedata = file.buffer//.toString('utf8').replace(/\r/g, "");
              msg.uploadedFiles.push(msg.name)
              return msg;
          } else throw Error(`Unknown file type: ${file.mimetype}`)
          
          return msg;
        
      
    
  
}

module.exports = Node;