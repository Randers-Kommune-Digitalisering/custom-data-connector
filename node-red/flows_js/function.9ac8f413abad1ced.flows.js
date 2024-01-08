const Node = {
  "id": "9ac8f413abad1ced",
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
  "x": 670,
  "y": 300,
  "wires": [
    []
  ],
  "_order": 157
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              
                throw new Error(`Unknown Content-Type`)
              
            
          
        
      
    
  
}

module.exports = Node;