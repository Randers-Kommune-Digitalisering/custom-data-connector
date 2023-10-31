const Node = {
  "id": "5f3e8906e8898d6e",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "change decimal seperator",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 650,
  "y": 380,
  "wires": [
    [
      "8272b3b4cb2c3081"
    ]
  ],
  "_order": 38
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        msg.data = msg.data.replaceAll('.', ',');
        return msg;
      
    
  
}

module.exports = Node;