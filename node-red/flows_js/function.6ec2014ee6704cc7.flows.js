const Node = {
  "id": "6ec2014ee6704cc7",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
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
      "08817e32ba8194cd"
    ]
  ],
  "_order": 144
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          msg.payload = { "success": true, "message": msg.req.params.file + " deleted" }
          return msg;
        
      
    
  
}

module.exports = Node;