const Node = {
  "id": "39420e28e1653d71",
  "type": "function",
  "z": "ba6019643c26475d",
  "name": "error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 990,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 85
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        throw Error("Inccorect http method");
      
    
  
}

module.exports = Node;