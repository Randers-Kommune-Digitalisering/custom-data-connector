const Node = {
  "id": "50a2ea13c4a64b03",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 550,
  "y": 220,
  "wires": [
    []
  ],
  "_order": 114
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            throw new Error(`Unknown Content-Type`)
          
        
      
    
  
}

module.exports = Node;