const Node = {
  "id": "c904ba57e4ae803e",
  "type": "function",
  "z": "2b46aa4477c6e0b0",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 630,
  "y": 100,
  "wires": [
    []
  ],
  "_order": 92
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            throw new Error(`Data, group or name missing`);
          
        
      
    
  
}

module.exports = Node;