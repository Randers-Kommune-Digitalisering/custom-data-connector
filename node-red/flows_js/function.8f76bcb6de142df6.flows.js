const Node = {
  "id": "8f76bcb6de142df6",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "contains valid data and title",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 220,
  "y": 260,
  "wires": [
    [
      "7208316b0728a773"
    ]
  ],
  "_order": 41
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
      if(typeof msg.title == "string") {
          if(isValid(msg.title)){
              // Replace whitespaces with underscores
              msg.title = msg.title.replace(/ /g, '_');
          } else {
              throw new Error("Validation error: message title contains illegal characters");
          }
      } else {
          throw new Error("Validation error: message does not contain a title, must be string");   
      }
      
      // Check for data in payload
      if(!Array.isArray(msg.payload)) throw new Error("Validation error: message does not contain data(payload)");
      
      return msg;
    
  
}

module.exports = Node;