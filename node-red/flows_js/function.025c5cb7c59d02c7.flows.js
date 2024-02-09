const Node = {
  "id": "025c5cb7c59d02c7",
  "type": "function",
  "z": "1c2501d645c4f2bb",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 670,
  "y": 40,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              
  msg.payload = { "success": true, "message": `${msg.uploadedFiles.length} file(er) uploaded`, "files": msg.uploadedFiles}
                msg.statusCode = 200;
                return msg;
              
            
          
        
      
    
  
}

module.exports = Node;