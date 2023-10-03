const Node = {
  "id": "4ae1a5c1989051b1",
  "type": "function",
  "z": "84314e70c5c07697",
  "name": "set max 4 decimal places",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 430,
  "y": 240,
  "wires": [
    [
      "f80f44fb6233a5b9"
    ]
  ],
  "_order": 23
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.payload = msg.payload.map(item => {
        const updatedItems = { ...item };
    
        for (const key in item) {
                if (!isNaN(item[key])) updatedItems[key] = Math.round(item[key] * 10000) / 10000;
        }
    
        return updatedItems;
    });
    
    return msg;
  
}

module.exports = Node;