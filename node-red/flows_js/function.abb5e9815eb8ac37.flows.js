const Node = {
  "id": "abb5e9815eb8ac37",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
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
      "fe605e9c66b1f668"
    ]
  ],
  "_order": 142
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          if (msg.payload.includes(msg.req.params.file)) {
              const remotePath = env.get("REMOTE_IN_FAILED_PATH");
              msg.payload.filename = remotePath + "/" + msg.req.params.file;
              return msg;
          } else throw Error('No such file');
      
    
  
}

module.exports = Node;