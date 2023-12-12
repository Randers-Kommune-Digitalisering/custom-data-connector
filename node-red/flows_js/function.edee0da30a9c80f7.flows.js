const Node = {
  "id": "edee0da30a9c80f7",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "set file name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 490,
  "y": 260,
  "wires": [
    [
      "16bc34e8f52c954d"
    ]
  ],
  "_order": 123
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              if (msg.payload.includes(msg.req.params.file)) {
                  const remotePath = env.get("REMOTE_IN_FAILED_PATH");
                  msg.payload.filename = remotePath + "/" + msg.req.params.file;
                  return msg;
              } else throw Error('No such file');
          
        
      
    
  
}

module.exports = Node;