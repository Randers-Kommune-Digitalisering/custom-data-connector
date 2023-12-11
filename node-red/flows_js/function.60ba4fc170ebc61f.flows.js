const Node = {
  "id": "60ba4fc170ebc61f",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
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
      "c027625dd2b11063"
    ]
  ],
  "_order": 72
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
            msg.payload.filedata = file.buffer.toString('utf8').replace(/\r/g, "");
            msg.uploadedFiles.push(msg.name)
            return msg;
        } else throw Error(`Unknown file type: ${file.mimetype}`)
        
        return msg;
      
    
  
}

module.exports = Node;