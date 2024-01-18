const Node = {
  "id": "f503bc3a55ca8571",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "g": "1e03a3b784249401",
  "name": "set data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 820,
  "y": 240,
  "wires": [
    [
      "cde1e3cd51f5d613"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
        
          let file = msg.req.files.pop();
          if (file.mimetype === 'text/csv') {
            msg.payload = file.buffer.toString('utf8').replace(/\r/g, "").trim();
            msg.uploadedFiles.push(msg.name)
            return msg;
          } else throw Error(`Unknown file type: ${file.mimetype}`)
        
        
      
    
  
}

module.exports = Node;