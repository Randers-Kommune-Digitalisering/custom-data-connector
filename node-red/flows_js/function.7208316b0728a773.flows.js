const Node = {
  "id": "7208316b0728a773",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "validate consistency of columns",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 550,
  "y": 260,
  "wires": [
    [
      "93d1596b39ecfd38"
    ]
  ],
  "_order": 42
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        const keyCount = Object.keys(msg.data[0]).length
        if (!msg.data.every(obj => Object.keys(obj).length === keyCount)) throw new Error("Validation error: inconsistent number of keys");
        return msg;
      
    
  
}

module.exports = Node;