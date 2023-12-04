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
  "libs": [
    {
      "var": "utf8",
      "module": "utf8"
    }
  ],
  "x": 660,
  "y": 180,
  "wires": [
    [
      "7c23aadd02a45047"
    ]
  ],
  "_order": 73
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, utf8) {
  
    let group_name = ''
    
    try {
      group_name = utf8.decode(msg.req.files.at(-1).originalname.split('.')[0]);
    } catch (error) {
      group_name = msg.req.files.at(-1).originalname.split('.')[0];
    }
    
    msg.name = group_name
    
    return msg;
    
  
}

module.exports = Node;