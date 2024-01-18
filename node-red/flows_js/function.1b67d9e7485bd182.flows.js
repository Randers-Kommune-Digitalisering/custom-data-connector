const Node = {
  "id": "1b67d9e7485bd182",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 770,
  "y": 260,
  "wires": [
    [
      "40edcc8112ec0e89"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              
                msg.payload = { "success": true, "message": msg.req.params.file + " deleted" }
                return msg;
              
            
          
        
      
    
  
}

module.exports = Node;