const Node = {
  "id": "9dd84c7fde4848de",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "g": "1e03a3b784249401",
  "name": "set name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 180,
  "wires": [
    [
      "14d912eb8b776727"
    ]
  ],
  "_order": 82
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      msg.name = decodeURI(msg.req.files.at(-1).originalname.split('.')[0]);
      if (msg.name.slice(0, 5) === "Meta_") msg.is_meta = true
      return msg;
      
    
  
}

module.exports = Node;