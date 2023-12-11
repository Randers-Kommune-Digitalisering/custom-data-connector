const Node = {
  "id": "2ce6880fa257b8b9",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
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
      "3a5ac4149d90d854"
    ]
  ],
  "_order": 66
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.name = decodeURI(msg.req.files.at(-1).originalname.split('.')[0]);
    if (msg.name.slice(0, 5) === "Meta_") msg.is_meta = true
    return msg;
    
  
}

module.exports = Node;