const Node = {
  "id": "5f3e8906e8898d6e",
  "type": "function",
  "z": "84314e70c5c07697",
  "name": "change decimal seperator",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 190,
  "y": 580,
  "wires": [
    []
  ],
  "_order": 44
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            msg.data = msg.data.replaceAll('.', ',');
            return msg;
          
        
      
    
  
}

module.exports = Node;