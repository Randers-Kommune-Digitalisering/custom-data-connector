const Node = {
  "id": "b11b67c12cba48dc",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 510,
  "y": 840,
  "wires": [
    []
  ],
  "_order": 167
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        throw new Error(`Unknown Content-Type`)
      
    
  
}

module.exports = Node;