const Node = {
  "id": "336a912ecc32d35f",
  "type": "function",
  "z": "ba6019643c26475d",
  "name": "set file name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 630,
  "y": 120,
  "wires": [
    [
      "315f456e1cd717e3"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              
                
                  if (msg.payload.includes(msg.req.params.file)) {
                      const remotePath = env.get("REMOTE_OUT_PATH");
                      msg.payload.filename = remotePath + "/" + msg.req.params.file;
                      return msg;
                  } else throw Error('No such file');
              
            
          
        
      
    
  
}

module.exports = Node;