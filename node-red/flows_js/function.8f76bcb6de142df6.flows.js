const Node = {
  "id": "8f76bcb6de142df6",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "contains valid group, name and data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 250,
  "y": 260,
  "wires": [
    [
      "7208316b0728a773"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              // Check for illegal characters
              var isValid = (function () {
                  var rg1 = /^[^\\/:\*\?"<>\|]+$/;
                  var rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
                  return function isValid(fname) {
                      return rg1.test(fname) && !rg3.test(fname);
                  }
              })();
              
              // Check if title is there and valid
              if(typeof msg.group == "string") {
                  if (isValid(msg.name) && isValid(msg.group)){
                      if(msg.name) msg.name = msg.group + "_" + msg.name; //msg.group.replace(/ /g, '_') + "_" + msg.name.replace(/ /g, '_');
                      else msg.name = msg.group;//msg.group.replace(/ /g, '_');
                  } else {
                      throw new Error("Validation error: message title contains illegal characters");
                  }
              } else {
                  throw new Error("Validation error: message does not contain a name, must be string");   
              }
              
              // Check for array in data
              if(!Array.isArray(msg.data)) throw new Error("Validation error: message does not contain data");
              
              return msg;
            
          
        
      
    
  
}

module.exports = Node;