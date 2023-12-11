const Node = {
  "id": "1894d28fcf3dbe61",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 370,
  "y": 100,
  "wires": [
    []
  ],
  "_order": 57
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          throw new Error(`No files`)
        
      
    
  
}

module.exports = Node;